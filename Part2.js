// Sum Zero
const sumzero = (array) => {
  let value = false;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === 0) {
        value = true;
        return value;
      }
    }
  }
};

// unique Characters

const hasUniqueChars = (word) => {
  let hasUniqueChar = true;
  const array = [];
  for (let i = 0; i < word.length; i++) {
    if (!array.includes(word[i])) {
      array.push(word[i]);
    } else {
      hasUniqueChar = false;
    }
  }
  return hasUniqueChar;
};

// Pangram Sentence

const isPangram = (string) => {
  let alpha = string.toUpperCase().split("");
  for (let beta = 65; beta < 65 + alpha.length; beta++) {
    let gamma = String.fromCharCode(beta);
    if (alpha.includes(gamma)) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

// Longest Word

function longestWord(string) {
  let str = string.split(" ");
  let longest = 0;
  let word = null;
  for (var i = 0; i < str.length; i++) {
    if (longest < str[i].length) {
      longest = str[i].length;
      word = str[i];
    }
  }
  return word;
}
