'use client'

import Link from 'next/link'
import dynamic from 'next/dynamic'
import { RegisterIdentity } from '@/components/register-identity'
import { InitializeReputation } from '@/components/initialize-reputation'

const WalletMultiButton = dynamic(
  async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false }
)

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-5xl flex-col items-center py-16 px-6 bg-white dark:bg-black">
        {/* Wallet Connect Button */}
        <div className="w-full flex justify-end mb-8">
          <WalletMultiButton />
        </div>

        <div className="w-full">
          <h1 className="text-4xl font-bold mb-4">Welcome to x402 Solana Identity</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Create your on-chain identity and reputation system on Solana using the x402 protocol.
          </p>

          {/* Identity & Reputation Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <RegisterIdentity />
            <InitializeReputation />
          </div>

          {/* Content Access Section */}
          <div className="border-t border-gray-200 dark:border-zinc-800 pt-8">
            <h2 className="text-2xl font-bold mb-4">Access Content</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Test the x402 payment protocol with these examples:
            </p>
            <div className="flex gap-4">
              <Link
                href="/content/cheap"
                className="inline-block px-6 py-3 bg-neutral-800 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Access Cheap Content 🪣
              </Link>
              <Link
                href="/content/expensive"
                className="inline-block px-6 py-3 bg-neutral-800 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Access Expensive Content 💰
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
