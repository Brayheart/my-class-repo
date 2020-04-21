


// Using loops  [ 2, 5, 6, 3, 5 ]
//                   j     i
var findDup = function (arr) {
    for (var i = 0; i < arr.length; i++){
      for (var j = 0; j < i; j++){
        if(arr[i] === arr[j]){
          return arr[i];
              }
          }
      }
  }

// Using objects  [ 2, 5, 6, 3, 5 ]
  var firstDup = function(arr){
	var dups = {};
	for (var i = 0; i < arr.length; i++) {
		var val = arr[i]
		if (dups[val]) {
			return val;
		}
		else{
			dups[val] = true;
        }
        console.log(dups)
	}
}

// console.log("arrays")
// console.log(findDup([ 2, 5, 6, 3, 5 ]));
// console.log(findDup([ 1, 3, 4, 1, 3, 4 ]));
// console.log(findDup([ 2, 4, 5 ]));
// console.log("objects")
console.log(firstDup([ 2, 5, 6, 3, 5 ]));
// console.log(firstDup([ 1, 3, 4, 1, 3, 4 ]));
// console.log(firstDup([ 2, 4, 5 ]));