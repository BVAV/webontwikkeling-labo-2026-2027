import express from "express";

const app = express();

interface Joke {
  id: number;
  joke: string;
}

app.get("/joke/:format", async (req, res) => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" },
  });
  const data: Joke = await response.json();
  if (req.params.format === "json") {
    res.send(data);
  } else {
    res.set("text/html");
    res.send(`<h1>${data.joke}</h1>`);
  }
});

app.listen(3000, () => {
  console.log("app listening on http://localhost:3000/");
});
