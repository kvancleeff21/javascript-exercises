const repeatString = function(message, number) {
    if(number < 0) {
        return "ERROR";
    }
    let answer = "";
    for(let i = 0; i < number; i++) {
        answer += message;
    }
    return answer;
};

// Do not edit below this line
module.exports = repeatString;
