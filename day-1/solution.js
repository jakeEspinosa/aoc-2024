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

const getDistance = (firstNum, secondNum) => {
  return Math.abs(firstNum - secondNum);
}

const main = async () => {
  const [firstNums, secondNums] = await processInput(PATH);
  const firstNumsSorted = firstNums.toSorted();
  const secondNumsSorted = secondNums.toSorted();
  let ans = 0;

  for (let i = 0; i < firstNums.length; i++) {
    ans += getDistance(firstNumsSorted.at(i), secondNumsSorted.at(i));
  }

  const counter = {};
  for (const num of secondNumsSorted) {
    if (num in counter)
      counter[num] += 1
    else
      counter[num] = 1;
  }

  let similarityScore = 0;
  for (const num of firstNumsSorted) {
    if (num in counter)
      similarityScore += (num * counter[num])
  }

  console.log(`Total distance: ${ans}`);
  console.log(`Similarity score: ${similarityScore}`);
};

main();
