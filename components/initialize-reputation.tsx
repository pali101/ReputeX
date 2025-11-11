'use client'

import { useState } from 'react'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { Program, AnchorProvider } from '@coral-xyz/anchor'
import { PublicKey, SystemProgram } from '@solana/web3.js'
import { IDL } from '../lib/idl'

const PROGRAM_ID = new PublicKey('8EavuS1VJ6GXEwqdgm65mofBQSULf1nXY2pmvhbNyS7k')

export function InitializeReputation() {
  const { connection } = useConnection()
  const wallet = useWallet()
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState('')

  const initializeReputation = async () => {
    if (!wallet.publicKey || !wallet.signTransaction) {
      setStatus('Please connect your wallet first')
      return
    }

    setLoading(true)
    setStatus('Initializing reputation account...')

    try {
      const provider = new AnchorProvider(connection, wallet as any, {
        preflightCommitment: 'processed',
      })

      const program = new Program(IDL as any, provider)

      // Derive the PDA for identity account
      const [identityPda] = PublicKey.findProgramAddressSync(
        [Buffer.from('identity'), wallet.publicKey.toBuffer()],
        PROGRAM_ID
      )

      // Derive the PDA for reputation account
      const [reputationPda] = PublicKey.findProgramAddressSync(
        [Buffer.from('reputation'), wallet.publicKey.toBuffer()],
        PROGRAM_ID
      )

      setStatus('Sending transaction...')

      const tx = await program.methods
        .initializeReputation()
        .accounts({
          authority: wallet.publicKey,
          identityAccount: identityPda,
          reputationAccount: reputationPda,
          systemProgram: SystemProgram.programId,
        })
        .rpc()

      setStatus(`Success! Transaction: ${tx}`)
      console.log('Transaction signature:', tx)
    } catch (error: any) {
      console.error('Error:', error)
      setStatus(`Error: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-zinc-800">
      <h2 className="text-2xl font-bold mb-4">Initialize Reputation</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
        Create your reputation account to start tracking your service transactions
      </p>
      <p className="text-yellow-600 dark:text-yellow-500 mb-4 text-xs">
        ⚠️ Note: You must register your identity first before initializing reputation
      </p>
      
      <div className="space-y-4">
        <button
          onClick={initializeReputation}
          disabled={loading || !wallet.connected}
          className="w-full px-6 py-3 bg-neutral-800 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Processing...' : wallet.connected ? 'Initialize Reputation' : 'Connect Wallet First'}
        </button>

        {status && (
          <div className="mt-4 p-3 bg-gray-100 dark:bg-zinc-800 rounded text-sm break-all">
            {status}
          </div>
        )}
      </div>
    </div>
  )
}
