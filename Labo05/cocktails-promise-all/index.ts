const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`;

const ids = ["11000", "11001", "11002"];

interface Drink {
    strDrink: string;
    strDrinkThumb: string;
}

interface Drinks {
    drinks: Drink[];
}

async function main() {
    // Promise.all works with array of promises
    const reqs = await Promise.all(ids.map(id => fetch(url + id)));

    const data: Drinks[] = await Promise.all(reqs.map(r => r.json()));

    const nameStr = data.map(data => data.drinks).map(drink => drink![0].strDrink).join("\n");

    console.log(nameStr);
}

main()