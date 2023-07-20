let string = 'hey';

const repeatString = function(string, number) {

    if(number < 0) return "ERROR";
    if(number == 0) return '';
    let i = 0;
    let result = string;
    while(i<number-1){
        result += string ;
        i++;
    }
    return result ;
};

// Do not edit below this line
module.exports = repeatString;
