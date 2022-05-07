import React from 'react';

export const TITLE = <>Frequently Asked <span>Questions</span></>
export const FAQS = [
  {
    question: "How does Keyring work?",
    answer: "As a user, simply scan your credentials into a trusted off-chain KYC provider the first time you use Keyring." + 
    " Our system scans you against global sanctions lists and confirms you are safe to trade - no data saved," +
    "and nothing but your wallet's whitelist status stored on-chain. Once confirmed, your Keyring verification" +
    " is created (using a unique NFT), confirming your access to trade for 24 hours. Ready to trade again after" +
    " this time? Easy, Keyring will prompt you to refresh your verification and within seconds you're good to go again." +
    " For institutions, reach out to learn more about our API options."
  },
  {
    question: "What sets Keyring apart from other DeFi KYC/AML/ID solutions?",
    answer: "Our solution is designed around two key focusing points - simplicity and the future. " + 
    "The immutable, irrevocable nature of blockchain requires great thought to be placed into any service relating to personal identity on-chain. "+
    "Almost all methods of ZK-proof lead to critical future vulnerabilities with Digital Identity (DID) and we feel that DID is not" +
    " compatible wioth blockchains for this reason." +
    "We have designed Keyring with immense simplicity and future proofing at the forefront of our architecture " +
    " and there is not leakage of personal information via hash or otherwise on-chain."
  },
  {
    question: "How can we utilise Keyring for our smart contracts?",
    answer: "Using Keyring couldn't be easier to use. There's about 1-2 lines of code to add to your contract." +
    "Whitelisted pools by definition do require a redeployment of your smart contract. This will be done by your team." + 
    " We will help you with any front end changes or smart contract development that is required."
  },
  {
    question: "How can I learn more about Keyring's solution in-depth?",
    answer: "Talk to us, or read the Keyring whitepaper."
  }
]

export const FAQ_ADDON = "Still have questions?"
export const DOWNLOAD_DOCS = "Read the docs"
export const ASK_DISCORD = "Ask us on Discord"

export const READ_DOCS = ""
export const LINK_DISCORD = ""
