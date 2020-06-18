FROM ethereum/client-go:stable
WORKDIR /geth

COPY genesis.json /geth/genesis.json
RUN geth init --datadir /geth/data /geth/genesis.json

COPY node/ /geth/

COPY keystore/ /geth/data/keystore/
COPY password.sec /geth/password.sec

ENTRYPOINT [ "/geth/entrypoint.sh" ]
