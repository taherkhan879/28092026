"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString.trim().split("\n").map((str) => str.trim());
  main();
});

function readLine() {
  return inputString[currentLine++];
}

/* Please do not modify anything above this line */

function main() {
  const n = Number(readLine());
  const readings = readLine().split(" ").map(Number);

  // Write your code here
  let count=0;
  for(let i=0;i<=n;i++){
   if (readings[i]!==0){
       count++
   }
 
  }
 console.log(count-1)
}
