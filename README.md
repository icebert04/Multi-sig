# Multi-sig

I've built my own **Multi-signature wallet**.

It is a platform where users need to have their transactions signed by **signer** before it can be executed...

these transactions can either be to and from the main wallet (**see image below**)



![main](/images/main.png)



The only transactions that don't need a signer's approval are:


* sending funds to the main wallet
* withdrawing from stream
* getting funds from the local faucet

These are the transactions that needs a signer's approval:

* adding or removing a signer
* openning or closing a stream


--------------------------------------------------------------------------------------------------------------------

Here is what I learned from building the **Multi-Sig**

## Owners

When starting, there should be at least one signer to accept transactions.  
You can **add** and **remove** signers through the owners tab.


> When adding a new signer, a wallet address is needed



![owners](/images/owner.png)

---------------------------------------------------------------------------------------------------------------------

## Pool

This is where signers need to sign transactions before executing the transaction.


> If there are two signers, then two signers must sign before executing the transaction



![Pool](/images/Pool.png)

---------------------------------------------------------------------------------------------------------------------

## Stream

This is how users can withdraw from the wallet,


> They must set the amount of ETH/USD to be withdrawn after a certain amount of time **E.G**(**5** dollars per **60** seconds)



![Stream](/images/stream.png)

----------------------------------------------------------------------------------------------------------------------

Here is what I used to build the frontend...

* React 
* Graphql
* Web3.js

------------------------------------------

Here is what I used for the backend...

* Solidity
* Hardhat
* eslint
* node

-------

> **Disclaimer**
> This repo is for demonstration purposes only. There can be more features added, and cryptocurrencies besides ETH and fiat. 
> This can be integrated into a DAO too.

> Feel free to contribute by suggesting functions.

In summary, this will be a good beginning for any dev to work with their own Multi-signature wallet.
