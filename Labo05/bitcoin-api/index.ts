import rl from "readline-sync";

const answer: string = rl.question("Welke valuta wil je zien? (EUR, USD, GBP): ");

const supported = ["EUR", "USD", "GBP"];

interface ApiRes {
    bpi: Valuta;
}

interface Valuta {
    EUR: Rate;
    USD: Rate;
    GBP: Rate;
}

interface Rate {
    code: string;
    symbol: string;
    rate: string;
    description: string;
    rate_float: number;
}

async function main() {
    const req = await fetch("https://sampleapis.assimilate.be/bitcoin/current");
    const data: ApiRes = await req.json();

    let reply = "De huidige prijs van bitcoin is";

    switch (answer) {
        case "EUR":
            console.log(`${reply} ${data.bpi.EUR.rate} EUR`);
            break;

        case "USD":
            console.log(`${reply} ${data.bpi.USD.rate} USD`);
            break;

        case "GBP":
            console.log(`${reply} ${data.bpi.GBP.rate} GBP`);
            break;
    
        default:
            console.log("Deze valuta wordt niet ondersteund");
            break;
    }
}

main()