import { rainbow } from "rainbow-colors-array-ts";
import chalk from "chalk";

const width = process.stdout.columns;
const height = process.stdout.rows;

const colors = rainbow(height,"hex").map(i=>i.hex);

for (let i = 0; i < height; i++) {
    const row: string = "█".repeat(width);
    const color = chalk.hex(colors[i]);
    console.log(color(row));
}