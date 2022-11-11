/*let x = 121;*/
/*let x = -121;*/
let x = 10;

var isPalindrome = function(x) {
    x = x.toString();
    let y = Array.from(String(x));
    y = y.reverse().join("");
    if (y === x) {
        return true;
    } else {
        return false;
    }
};

console.log(isPalindrome(x));