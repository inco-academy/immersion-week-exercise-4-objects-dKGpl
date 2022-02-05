module.exports = function countOccurences(inputText) {
  const textArr = inputText.split(" "),
        result = {}
  for(e of textArr) {
      let duplicateIndex = 0
      for(ref of textArr) {
          if(e === ref) duplicateIndex++
      }
      result[duplicateIndex] ? result[duplicateIndex].includes(e) ? false : result[duplicateIndex].push(e) : result[duplicateIndex] = [e]
  } 
  return result
};
