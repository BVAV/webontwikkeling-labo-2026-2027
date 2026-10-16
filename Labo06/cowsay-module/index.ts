import * as cowsay from "cowsay";
import * as rs from 'readline-sync';


let word: string;

let quit = false;

do {
    word = rs.question("What should the cow say? ").toLocaleLowerCase();

    try {
        if(word === "moo") {
            console.log(cowsay.say({ text: "Moo!" }));
            continue;
        } else if(word === "exit") {
            quit = true;
            continue;
        }
        throw "Cows don't ";
    } catch (error: any) {
        console.log(error + word);
    }

} while (quit==false);
