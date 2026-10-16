import * as rs from "readline-sync";
import {log} from "sloth-log";
import { repeatWords } from "./lib.ts";

let word: string = "";

do {
    word = rs.question("> ");
    // get word string
    if(word !== "exit") {
        const output = repeatWords("Meow", (Math.random()*9+3));
        log(output, {speed: 1050, maxWordsAtOnce: 4});
    }

} while (word !== "exit");