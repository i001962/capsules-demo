import express from "express";

const app = express();
app.use(express.json());

app.post("/grant", (req, res) => {
  const { chainId, txHash, buyerPubKeyJwk } = req.body;
  console.log("grant request", chainId, txHash, buyerPubKeyJwk);
  res.json({ e: "dummy.jwe" });
});

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
