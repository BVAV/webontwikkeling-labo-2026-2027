import express from "express";

const app = express();

const movies: Movie[] = [
  { name: "Kung fu panda", release: "2012" },
  { name: "Toy story", release: "1995" },
  { name: "Shawsank redemption", release: "1980" },
];

app.get("/", (req, res) => {
  return res.send(
    "<h1>helloExpress</h1><p>dit is een applicatie voor het oefenen van express</p>",
  );
});

const thisisme = {
  name: "Ben",
  age: 21,
  profilePic: "https://live.staticflickr.com/6068/6065510171_bb00e7222b_z.jpg",
};

app.get("/whoami", (req, res) => {
  return res.send(
    `<p>My name is ${thisisme.name} and I am ${thisisme.age} years old</p><img src="${thisisme.profilePic}">`,
  );
});

app.get("/whoamijson", (req, res) => {
  return res.json(thisisme);
});

app.get("/pikachujson", async (req, res) => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
  const data = await response.json();

  return res.json(data);
});

interface Pokemon {
  id: number;
  name: string;
  sprites: { front_default: string; back_default: string };
}

app.get("/pikachuhtml", async (req, res) => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
  const data: Pokemon = await response.json();
  res.set("text/html");
  return res.send(
    `<h1>${data.name} (${data.id})</h1><img src="${data.sprites.front_default}"><img src="${data.sprites.back_default}">`,
  );
});

const page = `
<div style="background-color: {{background_color}};">
    <h1>#{{background_color}}</h1>
</div>
`;
function randomcolor() {
  return [...Array(6)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join("");
}

app.get("/randomcolor", (req, res) => {
  res.set("text/html");
  return res.send(page.replaceAll("{{background_color}}", randomcolor()));
});

app.use((req, res) => {
  res.status(404);
  return res.send("<h1>404 not found</h1>");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

export {};
interface Movie {
  name: String;
  release: String;
}
