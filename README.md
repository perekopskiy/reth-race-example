# Reth nonce race condition example

This script showcases reth issue that results in inconsistent data in JSON RPC API.
After transaction with nonce X is included in the block node may still return nonce X
as a response for `eth_getTransactionCount(address, 'pending')`.

## Steps to reproduce

Run `setup.sh` to install script dependencies and start reth.

Run `npm start` to start script. 
It usually takes under a couple of minutes until transactions fails with `nonce has already been used`.