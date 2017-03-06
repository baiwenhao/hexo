Array.prototype.init = function () {
  var arr = this,
  i,
  obj = {},
  result = [],
  len = arr.length
  for (i = 0; i< arr.length; i++) {
    if (!obj[arr[i]]) {    //如果能查找到，证明数组元素重复了
      obj[arr[i]] = 1
      result.push(arr[i])
    }
  }
  return result
}

var a = [1, 2, 1, 2, 3, 1, 1]

function dedupe(array){
  return Array.from(new Set(array));
}

dedupe([1,1,2,3]) //[1,2,3]

console.log(a.init())
