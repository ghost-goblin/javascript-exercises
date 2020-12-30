const sumAll = function(min,max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) return 'ERROR';
    if (min < 0 || max < 0) return 'ERROR';
    if (min > max) {
    const newNum = min;
    min = max;
    max = newNum;
    };
    
    
    let n = 0;
    for (let i=min; i<max+1; i++) {
       n += i;
    }
    return n;

};


module.exports = sumAll
