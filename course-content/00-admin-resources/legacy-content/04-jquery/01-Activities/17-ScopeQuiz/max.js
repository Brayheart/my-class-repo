var findMax = function (numArr) {
    var maxNum = numArr[0];
    for (var i = 1; i < numArr.length; i++) {
        if (numArr[i] > maxNum) {
            maxNum = numArr[i];
        }
    }
    return maxNum;
}

console.log(findMax([1,2,3,4,5,6]))