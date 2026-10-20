import express from "express";

const app = express();

interface Joke {
  id: number;
  joke: string;
}

app.get("/", (req, res) => {
  res.send(`<h1>Ga naar <a href="/bitcoin">/bitcoin</a>`);
});

interface Btc {
  time: { updated: string };
  bpi: { USD: { rate: string }; GBP: { rate: string }; EUR: { rate: string } };
}

app.get("/bitcoin", async (req, res) => {
  const response = await fetch(
    "https://sampleapis.assimilate.be/bitcoin/current",
  );
  const data: Btc = await response.json();
  res.send(
    `<h1>Bitcoin current price</h1><h2>${data.time.updated}</h2><li><b>USD</b> ${data.bpi.USD.rate}</li><li><b>GBP</b> ${data.bpi.GBP.rate}</li><li><b>EUR</b> ${data.bpi.EUR.rate}</li>`,
  );
});

app.listen(3500, () => {
  console.log("app listening on http://localhost:3500/");
});
