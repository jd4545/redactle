const article = document.querySelector(".article-div");
const input = document.querySelector(".input-div");

const sentence = "This is the first sentence is that you need is to guess?";

const regex = /[^a-z]/gi;

let redactedSentence = "";

for (let i = 0; i < sentence.length; i++) {
  const matched = sentence[i].match(regex);
  //   console.log(matched);
  if (matched) {
    redactedSentence += matched;
  } else {
    redactedSentence += "X";
  }
}

article.append(redactedSentence);

const freeLibrary = ["is", "the", "a", "an"];

const form = `

<form id="frm1">
  Guess <input type="text" name="fname" id="box"><br>
  <input type="button" onclick="guessSubmit()" value="Submit">
</form>
`;

let guess = "";

const guessSubmit = () => {
  guess = document.getElementById("box").value;

  checkGuess();
};

const checkGuess = () => {
  const guessRegex = new RegExp(`${guess}`, "gi");
  // UP TO HERE - HAVE CAPTURED INSTANCES OF GUESSED WORD
  console.log(guessRegex);
  console.log(sentence);
  console.log(sentence.match(guessRegex));
};

input.insertAdjacentHTML("beforeend", form);

console.log(redactedSentence);

// const array = sentence.split(" ");

// const readactedArray = [];

// for (let i = 0; i < array.length; i++) {
//   //   console.log(array[i].length);
//   let redactedWord = "";
//   const regex = /[^a-z]/gi;
//   for (let j = 0; j < array[i].length; j++) {
//     // console.log(array[i].length);
//     const nonText = array[i][j].match(regex);
//     console.log(nonText);
//     if (nonText)
//     redactedWord +=
//     redactedWord += "X";
//     // console.log(redactedWord);
//     if (j === array[i].length - 1) {
//       readactedArray.push(redactedWord);
//     }
//   }
// }

// let redactedSentence = readactedArray.join(" ");

// console.log(readactedArray);
