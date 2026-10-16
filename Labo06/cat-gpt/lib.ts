export function repeatWords(word: string, times: number, delimiter: string = " ") {
  // 1 times = word without delimiter
  if (times === 1) {
    return word;
  }

  let output = "";

  for(let i=0; i<times; i++) {
    output += word + delimiter;
  }

  return output.slice(0, -1); // remove last delimiter
}