function mutation(wordArray) {
  let [checkElem, charElem] = wordArray;

  checkElem = checkElem.toLowerCase();
  charElem = charElem.toLowerCase();

  for (let i = 0; i < charElem.length; i++) {
    if (!checkElem.includes(charElem[i])) {
      return false;
    }
  }
  return true;
}
