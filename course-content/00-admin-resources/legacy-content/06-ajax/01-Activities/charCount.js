

function char_count(str, letter) {
    var letter_Count = 0;
    for (var position = 0; position < str.length; position++) {
        if (str[position] == letter)
            letter_Count++;
    }
    return letter_Count;
}


console.log(char_count("hello world", "o"));