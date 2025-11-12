# 🟣 ReputeX — On-Chain Credit Score for Agents  
![ReputeX Banner]((https://github.com/anubha-mane/ReputeX.png)

> **“CIBIL for Blockchain.”**  
> ReputeX gives every wallet and AI agent a **trust-based reputation score** built from verified x402 payment history — powered by **Solana**.

---

## 🎯 Problem
Autonomous agents and wallets can pay, earn, and interact through x402 micropayments —  
but there’s **no credit or trust layer**.  

Just like humans rely on **CIBIL scores**, agents in the decentralized economy need  
a **reputation metric** derived from real, on-chain payment activity.

---

## 💡 Solution
ReputeX introduces a **Solana-based reputation system** that:
- Records every successful **x402 payment** as a proof-of-trust event  
- Automatically **updates reputation** after verified payments  
- Reduces score after failed or disputed transactions  

This creates a **verifiable credit layer** for wallets and AI agents across the agentic web.

---

## 🪄 Why x402
- Enables **trustless payments** directly between AI agents or wallets  
- Each 402 payment = verified event for score adjustment  
- Uses **Solana’s scalability** for low-cost, high-frequency updates  
- Future-ready for **machine-to-machine economies**

---

## ⚙️ Core Components (MVP)
| Layer | Description |
|-------|--------------|
| **Smart Contract (Solana)** | Stores agent registry + reputation (`pubkey`, `total_paid`, `score`) |
| **x402 Integration** | Triggers score updates after verified payments |
| **Backend / API** | Simple endpoints for reading & writing scores |
| **Frontend Dashboard** | Displays address, payment history, and score |

---

## 📈 Credit Score Logic (v1)
score = base
+ (number_of_successful_payments * 10)
+ (total_volume_paid * 0.01)
- (failed_transactions * 20)


Each valid payment triggers  
`addReputation(agent_pubkey, amount)`

Scores are **stored publicly** and can be **queried across dApps**.

---

## 🌍 Future Developments
- 🔹 Support **multi-currency** (USDC, CASH, Visa TAP)  
- 🔹 Add **weighted reputation** using time decay  
- 🔹 Allow agents to **query or verify another’s score** via SDK  
- 🔹 Integrate **LLM-powered risk summaries** for human-readable trust scores  

---

## 🚀 Live Demo
👉 [**repute-x.vercel.app**](https://repute-x.vercel.app)

---

### 🏆 Tracks Targeted
- Best **Trustless Agent**
- Best **x402 API Integration**
- Best **x402 Agent Application**

---

**Built with 💜 using Solana, x402, and Next.js**  
*By Aashish & Team — bringing trust to the agentic economy.*

