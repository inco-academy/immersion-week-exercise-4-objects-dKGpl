module.exports = function countOccurences(inputText) {
  const textArr = inputText.split(" "),
        result = {}
  for(const e of textArr) {
      let dupIdx = 0
      for(ref of textArr) {
          if(e === ref) dupIdx++
      }
      result[dupIdx] ? result[dupIdx].includes(e) ? false : result[dupIdx].push(e) : result[dupIdx] = [e]
  } 
  return result
};
