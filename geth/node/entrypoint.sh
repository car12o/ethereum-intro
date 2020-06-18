#!/bin/sh

geth --datadir /geth/data \
--networkid 8995 --nodekey=/geth/boot.key \
--mine --minerthreads 1 --etherbase=c9c96cee8e5063925cfc384138f7729896cd6c27 \
--rpc --rpcaddr 0.0.0.0 --rpccorsdomain "*" --rpcvhosts "*" --nat "any" --rpcapi eth,web3,personal,net --nousb \
--unlock 0,1,2 --password /geth/password.sec --allow-insecure-unlock
