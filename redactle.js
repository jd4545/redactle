const article = document.querySelector('.article-div')
const input = document.querySelector('.input-div')
const guesses = document.querySelector('.guesses-div')

const sentence = 'This is the first sentence is that you need is to guess?'

const regex = /[^a-z]/gi

let redactedSentence = ''
const guessesArray = []
const justGuessesArray = []

for (let i = 0; i < sentence.length; i++) {
  const matched = sentence[i].match(regex)
  //   console.log(matched);
  if (matched) {
    redactedSentence += matched
  } else {
    redactedSentence += 'X'
  }
}

article.append(redactedSentence)

const freeLibrary = ['is', 'the', 'a', 'an']

const form = `

<form id="frm1">
  Guess <input type="text" name="fname" id="box"><br>
  <input type="button" onclick="guessSubmit()" value="Submit">
</form>
`

let guess = ''

const guessSubmit = () => {
  guess = document.getElementById('box').value

  checkGuess()
}

const checkGuess = () => {
  document.getElementById('frm1').reset()

  if (justGuessesArray.includes(guess)) {
  } else {
    const guessRegex = new RegExp(`\\b(${guess})\\b`, 'gi')
    // UP TO HERE - HAVE CAPTURED INSTANCES OF GUESSED WORD
    // console.log(guessRegex)
    // console.log(sentence)
    console.log(sentence.match(guessRegex))
    const matchArray = [...sentence.matchAll(guessRegex)]
    console.log(matchArray)
    const indices = []
    guessesArray.push([
      `<div class = "guess">${guess}`,
      `${matchArray.length}</div>`,
    ])
    justGuessesArray.push(guess)

    matchArray.forEach((element) => {
      indices.push(element.index)
    })
    console.log(indices)

    const redactedArray = redactedSentence.split('')
    console.log(redactedArray)
    indices.forEach((element) => {
      for (let i = 0; i < guess.length; i++) {
        console.log(guess[i])
        redactedArray.splice(element + i, 1, guess[i])
        redactedSentence = redactedArray.join('')
      }
    })
    console.log(redactedSentence)

    $('.article-div').html(redactedSentence)
    $('.guesses-div').html(`<div class="guesslist">${guessesArray}</div>`)
  }
}

input.insertAdjacentHTML('beforeend', form)

console.log(redactedSentence)

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
