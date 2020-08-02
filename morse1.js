// In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superseded by voice and digital data communication channels, it still has its use in some applications around the world.
// The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.

// NOTE: Extra spaces before or after the code have no meaning and should be ignored.

// In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.

// Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

// For example:

decodeMorse = function (morseCode) {
  const morseCod = {
    "-.-.-.": ";",
    "-...-": "=",
    "---": "O",
    "----.": "9",
    "-..-.": "/",
    ".-...": "&",
    "...--": "3",
    ".--": "W",
    "--": "M",
    "--..": "Z",
    ".----.": "'",
    "-.-.--": "!",
    "-...": "B",
    "..-": "U",
    ".----": "1",
    "-.--.-": ")",
    ".-": "A",
    "-....-": "-",
    "...-": "V",
    "...---...": "SOS",
    "-.--": "Y",
    "..": "I",
    "--.-": "Q",
    "-.": "N",
    "..---": "2",
    "-....": "6",
    "---...": ",",
    ".-.-.": "+",
    ".--.-.": "@",
    "....-": "4",
    "-----": "0",
    ".-.-.-": ".",
    "-.-.": "C",
    ".": "E",
    "..-.": "F",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    ".-.": "R",
    "...": "S",
    "--.": "G",
    "---..": "8",
    "..--..": "?",
    "-.--.": "(",
    ".--.": "P",
    ".....": "5",
    "..--.-": "_",
    "-..": "D",
    ".-..-.": '"',
    "-": "T",
    "....": "H",
    "--..--": ",",
    "...-..-": "$",
    "--...": "7",
    "-..-": "X",
    space: " ",
  };
  // step 1: at this stage i make hmm something like split but in arrTemp will there a element with three spaces as a separator in the end step2 arrTemp will have output like this
  //['...', '.', '-.--', '   ', '.---', '.']
  let temp = "";
  let arrTemp = [];
  for (let i = 0; i < morseCode.length; i++) {
    if (morseCode[i] !== " ") {
      if (morseCode[i + 1] === " " || i === morseCode.length - 1) {
        temp += morseCode[i];
        arrTemp.push(temp);
        temp = "";
      } else {
        temp += morseCode[i];
      }
    }
    if (morseCode[i] === " ") {
      if (morseCode[i - 1] === " " && morseCode[i + 1] === " ") {
        temp += "space";
        arrTemp.push(temp);
        temp = "";
      }
    }
  }

  //step 2 : at this stage i try to convert arrTemp (which already contains array of element morse code include 3 spaces) into a regular string.
  console.log(arrTemp);

  const noEarlySpacesArr = [];
  for (let i = 0; i < arrTemp.length; i++) {
    if (arrTemp[0] === "space") {
      arrTemp.shift();
    }
  }
  console.log(arrTemp);
  let result = "";
  for (let element of arrTemp) {
    for (const key in morseCod) {
      if (element === key) {
        result += morseCod[key];
      }
    }
  }
  return result;
};

console.log(decodeMorse("      ...---...   ."));
