// Create a function that builds a staircase given the height and the type of building block.

function buildStaircase(stairsHeight, symbol) {
  let stairCaseArr = [];
  let builderCount = 0;
  for (let rIdx = 0; rIdx < stairsHeight; rIdx++) {
    stairCaseArr.push([]);
    for (let cIdx = 0; cIdx < stairsHeight; cIdx++) {
      let brick = cIdx <= builderCount ? symbol : "_";
      stairCaseArr[rIdx].push(brick);
    }
    console.log(stairCaseArr[rIdx])
    ++builderCount;
  }
  return stairCaseArr;
}
// buildStaircase(3, "#");
// buildStaircase(4, "#");
buildStaircase(0, "$");
/*
buildStaircase(3, "#"); // [
  ["#", "_", "_"],
  ["#", "#", "_"],
  ["#", "#", "#"]
]

buildStaircase(4, "#"); // [
  ["#", "_", "_", "_"],
  ["#", "#", "_", "_"],
  ["#", "#", "#", "_"],
  ["#", "#", "#", "#"]
]

buildStaircase(3, "A"); // [
  ["A", "_", "_"],
  ["A", "A", "_"],
  ["A", "A", "A"]
]

// height = 3 and building block = "A"

buildStaircase(4, "$"); // [
  ["$", "_", "_", "_"],
  ["$", "$", "_", "_"],
  ["$", "$", "$", "_"],
  ["$", "$", "$", "$"]
]
// height = 4 and building block = "$"

// Notes

// If the height is 0, return an empty array [].
*/