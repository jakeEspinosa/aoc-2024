/* 
sort the two lists
compare them, find the differences, and add to res
return res
*/
const fs = require("node:fs");
const readline = require("node:readline");

const PATH = "/home/jake/learning/aoc-2024/day-1/input.txt";

const splitLine = (line) => {
  let firstNum = "";
  let secondNum = "";
  let isInSecondNum = false;

  for (const c of line) {
    if (c === " ")
      isInSecondNum = true;
    else
      if (isInSecondNum === false)
        firstNum += c;
      else
        secondNum += c;
    }

  return [parseInt(firstNum), parseInt(secondNum)];
};

const processInput = async (path) => {
  const fileStream = fs.createReadStream(path);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  const firstNums = [];
  const secondNums = [];

  for await (const line of rl) {
    const [first, second] = splitLine(line);
    firstNums.push(first);
    secondNums.push(second);
  }
  return [firstNums, secondNums];
};

const main = async () => {
  const [firstNums, secondNums] = await processInput(PATH);
  const firstNumsSorted = firstNums.toSorted();
  const secondNumsSorted = secondNums.toSorted();
};

main();
