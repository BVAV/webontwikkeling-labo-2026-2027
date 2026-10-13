import rl from "readline-sync";

interface School {
    name: string;
}

const countries = ["France", "Netherlands", "United Kingdom", "Belgium", "Luxembourg", "Ireland", "Spain", "Portugal"];

const prompt = `
[1] France
[2] Netherlands
[3] United Kingdom
[4] Belgium
[5] Luxembourg
[6] Ireland
[7] Spain
[8] Portugal
[0] CANCEL

Which country would you like to list its Colleges with high school education degrees? [1...8 / 0]: `;

function showPrompt() {
    return parseInt( rl.question(prompt));
}

async function main() {
    let option = 0;
    do {
        option = showPrompt();

        if(option < 9 && option > 0) {
            const req = await fetch("http://universities.hipolabs.com/search?country=" + countries[option-1]);
            const data: School[] = await req.json();

            console.log(data.map(s=>s.name));
        }

    } while (option != 0);


}

main();