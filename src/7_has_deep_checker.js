module.exports = function hasValueDepth(inObj, inStr) {
  const searchResult = []
  searchOccurrence(inObj, inStr)
  return searchResult.includes(true) ? true : false

  // Search string inside nested objects function
  function searchOccurrence(objToSearch, searchStr) {
      for(const key in objToSearch) {
          if(objToSearch[key] === searchStr) searchResult.push(true)
          if(objToSearch[key] instanceof Object) searchOccurrence(objToSearch[key], searchStr)
      }
  }
}
