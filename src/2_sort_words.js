module.exports = function sortWords(inArr) {
  const sortedWords = {
      odd: [],
      even: []
  }
  for(el of inArr) {
      el.length%2 === 0 ? sortedWords.even.push(el) : sortedWords.odd.push(el)
  }
  return sortedWords
};
