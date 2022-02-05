module.exports = function rmCensored(inObj) {
  const censorChar = "*"
  Object.entries(inObj).forEach(([key, value]) => {
      if(key.includes(censorChar) || value.includes(censorChar)) delete inObj[key]
  });
};
