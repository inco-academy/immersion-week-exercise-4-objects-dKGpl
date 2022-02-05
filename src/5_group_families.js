module.exports = function groupFamilies(inObj) {
  const sKeysObj = {}
  for(obj of inObj) {
      !sKeysObj[obj.surname] ? sKeysObj[obj.surname] = [obj.name] : sKeysObj[obj.surname].push(obj.name)
  }
  return sKeysObj
};
