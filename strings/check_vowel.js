const checkVowel = (str) => {
  const vowel = "aeiou";
  for (char of vowel) {
    if (!str.includes(char)) {
      return false;
    }
  }
  return true;
};
console.log(checkVowel("Fariha Promi"));
