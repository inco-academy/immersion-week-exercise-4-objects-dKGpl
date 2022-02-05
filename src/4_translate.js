module.exports = function translate(inObj, inText) {
  const textArr = inText.split(" ")
  let translatedArr = [],
      err = false
  for(word of textArr){
      Object.keys(inObj).includes(word) ? translatedArr.push(inObj[word]) : err = true
  }
  
  return err ? "Error: missing value" : translatedArr.join(" ")
};
