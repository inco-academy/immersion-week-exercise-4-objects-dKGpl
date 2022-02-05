module.exports = function countOccurences(inputText) {
  const textArr = inputText.split(" ")
  const outArr = {}
  for(el of textArr) {
      let duplicateIndex = 0
      for(compareEl of textArr) {
          if(el === compareEl) duplicateIndex++
      }
      outArr[duplicateIndex] ? outArr[duplicateIndex].includes(el) ? false : outArr[duplicateIndex].push(el) : outArr[duplicateIndex] = [el]
  } 
  return outArr
};
