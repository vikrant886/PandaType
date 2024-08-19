import { words, punctuationSequence, number } from "~/assets/textData";

import React from 'react'

const generateSequence = (word: number, punctuation: number, no: number, totalCount = 100) => {
  const wordCount = Math.floor((word / 100) * totalCount);
  const punctuationCount = Math.floor((punctuation / 100) * totalCount);
  const numberCount = Math.floor((no / 100) * totalCount);

  const selectedWords = Array.from({ length: wordCount }, () => words[Math.floor(Math.random() * words.length)]);
  const selectedPunctuation = Array.from({ length: punctuationCount }, () => punctuationSequence[Math.floor(Math.random() * punctuationSequence.length)]);
  const selectedNumbers = Array.from({ length: numberCount }, () => number[Math.floor(Math.random() * number.length)]);

  const seq = [...selectedWords, ...selectedPunctuation, ...selectedNumbers];
  seq.sort(() => Math.random() - 0.5); // Shuffle the array

  return seq.join(" "); // Convert the array to a string separated by spaces
  // return seq;
}

export default generateSequence;
