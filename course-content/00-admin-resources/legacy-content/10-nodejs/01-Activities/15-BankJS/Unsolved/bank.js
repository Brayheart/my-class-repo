
var fs = require("fs");

var methodName = process.argv[2];
var amount = process.argv[3];

// console.log(methodName);
// console.log(amount);

switch (methodName) {
    case "deposit":
        deposit();
        break;
    // case "withdraw":

    //     break;
    case "total":
        total();
        break;


    default:
        break;
}

function deposit() {
    fs.appendFile("bank.txt", ", " + amount, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("amount deposited");
        }
    })
}

function total() {
    fs.readFile("bank.txt", "utf8", function (err, data) {
        if (err) {
            console.log(err);
        } else {
            var arr = data.split(',');
            var total = 0;

            for (let i = 0; i < arr.length; i++) {
                const item = arr[i];
                
                total = total + parseFloat(item);
                //total += parseFloat(item);
            }
            console.log(total);
        }
    })
}