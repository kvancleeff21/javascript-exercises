const sumAll = function(x, y) {
    if(x < 0 || y < 0)
        return "ERROR";
    if(typeof x !== 'number' || typeof y !== 'number')
        return "ERROR";
    let result = 0;
    if(y > x) {
        for(let i = x; i <= y; i++) {
            result += i; 
        }
    }
    if(x > y) {
        for(let i = y; i <= x; i++) {
            result += i;
        }
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
