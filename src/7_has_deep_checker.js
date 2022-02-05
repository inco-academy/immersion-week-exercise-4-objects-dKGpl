module.exports = function hasValueDepth(inObj, inStr) {
  const searchResult = new Set()
  const search = (objToSearch, searchStr) => {
      Object.values(objToSearch).forEach(value => 
          value instanceof Object ? search(value, searchStr) : value === searchStr ? searchResult.add(true) : false)
      }
      
  search(inObj, inStr)

  return searchResult.has(true)
}
