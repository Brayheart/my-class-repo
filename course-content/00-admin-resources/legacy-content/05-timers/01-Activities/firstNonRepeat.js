

function firstNonRepeatChar(str) {

    var charCount = {} // { a:10, c:1 }

    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    for(var j in charCount){
        if(charCount[j] == 1){
            return j;
        }
    }

    console.log(charCount);
}

function firstNonRepeatChar(str) {
    for (var i = 0; i < str.length; i++) {
        var c = str.charAt(i);
        if (str.indexOf(c) === i && str.indexOf(c, i + 1) === -1) {
            return c;
        }
    }
}

console.log(firstNonRepeatChar("the quick brown fox jumps over the calm kitten quietly"));