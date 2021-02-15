/*
* const abc = '#@abc#!$de##'
* Usage: reverse(abc) It will return reverse string.
*/

function reverse(str) {
	const strLen = str.split('')
  let index1 = 0
  let index2 = strLen.length - 1

  while(index1 < index2) {
  	index1 = findIndex1(index1, strLen)
    index2 = findIndex2(index2, strLen)
    const temp = strLen[index1]
    strLen[index1] = strLen[index2]
    strLen[index2] = temp
    index1++
    index2--
  }
  console.log(strLen.join(""))
}

const findIndex1 = (index, str) => {
	if(!isSpecialChar(str[index])){
  	return index
  }
  return findIndex1(index+1, str)
}

const findIndex2 = (index, str) => {
	if(!isSpecialChar(str[index])){
  	return index
  }

  return findIndex2(index-1, str)
}

const isSpecialChar = (ele) => {
	const hasSpecial = ele.match(/[!@#$%^&*()-+]/g)
	if(hasSpecial && hasSpecial.length){
		return true
	}
  return false
}
