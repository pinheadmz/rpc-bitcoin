import { RESTClient } from "../.";

const url = "http://127.0.0.1";
const port = 48332;
const timeout = 10000;
const client = new RESTClient({ url, port, timeout });

suite("RESTClient", () => {
  test(".getBlock()", async () => {
    const hash =
      "000000004deda718e1471a0b5899303e84df0d7a437284b93d29698724f11a0c";
    const format = "hex";
    await client.getBlock({ hash, format });
  });

  test(".getBlockNoTxDetails()", async () => {
    const hash =
      "000000004deda718e1471a0b5899303e84df0d7a437284b93d29698724f11a0c";
    const format = "hex";
    await client.getBlockNoTxDetails({ hash, format });
  });

  test(".getBlockHashByHeight()", async () => {
    const height = 20;
    const format = "hex";
    await client.getBlockHashByHeight({ height, format });
  });

  test(".getChainInfo()", async () => {
    await client.getChainInfo();
  });

  test(".getUtxos()", async () => {
    const checkmempool = true;
    const outpoints = [
      {
        txid: "285abf38807a7ebd0c7578cb84f436265149bd59f358aeb23ae3ee1c91c43fb1",
        n: 0,
      },
      {
        txid: "972e535a37eced8889ba9f397da4c83d45399c27893ff08b180327f315e53ddd",
        n: 1,
      },
    ];
    const format = "hex";
    await client.getUtxos({ checkmempool, outpoints, format });
  });

  test(".getHeaders()", async () => {
    const count = 5;
    const hash =
      "0000000013d69b9a712894260f6819f7618c6d7bd983a7ec1bab22f043ae6fd8";
    const format = "hex";
    await client.getHeaders({ count, hash, format });
  });

  test(".getMemPoolContents()", async () => {
    await client.getMemPoolContents();
  });

  test(".getMemPoolInfo()", async () => {
    await client.getMemPoolInfo();
  });

  test(".getTx()", async () => {
    const txid =
      "9831efc61a04b132559e03a5f658cd72693e612798aa7f97da839bef195d108e";
    const format = "hex";
    await client.getTx({ txid, format });
  });
});
