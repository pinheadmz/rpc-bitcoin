import { RESTClient } from "../.";
import * as assert from "assert";

const client = new RESTClient({ 
    host: "127.0.0.1", 
    port: 48332, 
    user: "u", 
    pass: "p", 
    timeout: 60000 
});

describe("RESTClient", () => {
    it("should get blockchain info", async () => {
        const info = await client.getBlockchainInfo();
        assert.strictEqual(info.chain, "test");
    });

    it("should get block hash by height", async () => {
        const hash = await client.getBlockHash(0);
        assert.ok(hash);
    });

    it("should get block", async () => {
        const hash = await client.getBlockHash(0);
        const block = await client.getBlock({ blockhash: hash });
        assert.ok(block);
    });

    it("should get block header", async () => {
        const hash = await client.getBlockHash(0);
        const header = await client.getBlockHeader({ blockhash: hash });
        assert.ok(header);
    });

    it("should get tx out proof", async () => {
        const hash = await client.getBlockHash(1);
        const block = await client.getBlock({ blockhash: hash });
        const txid = block.tx[0];
        const proof = await client.getTxOutProof({ txids: [txid] });
        assert.ok(proof);
    });
});
