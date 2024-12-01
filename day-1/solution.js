/* 
parse the input and split into two lists
sort the two lists
compare them, find the differences, and add to res
return res
*/

const fs = require("node:fs");
const readline = require("node:readline");

const readLineByLine = async () => {
  const fileStream = fs.createReadStream("/home/jake/learning/aoc-2024/day-1/input.txt");
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  for await (const line of rl) {
    console.log(line);
  }
};

readLineByLine();
