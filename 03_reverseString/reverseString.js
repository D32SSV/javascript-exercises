const reverseString = function(string) {
    let lengthOfString = string.length ;
    let result = "" ;
    for(let i = lengthOfString-1; i>=0; i--){
        result += string.charAt(i) ;
    }

    return result ;
};

// Do not edit below this line
module.exports = reverseString;
