

// var isPalindrome = function (str) {
//     for (var i = 0; i < str.length; i++) {
//       if (str[i] !== str[str.length - (i + 1)]) {
//         return false;
//       }
//     }
//     return true;
//   }
  

  var isPalindrome = function (str) {
      console.log(str.split(""));
      console.log(str.split("").reverse());
      console.log(str.split("").reverse().join(""));
    return str.split("").reverse().join("") === str;
  }

  console.log(isPalindrome("noon"));
  console.log(isPalindrome("horse"));
  console.log(isPalindrome("racecar"));