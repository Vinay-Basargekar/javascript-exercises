const sumAll = function(start,end) {
    let sum=0;
    for(let i=start ; i<=end ; i++){
        if(start<end){
            return "ERROR";
        }else{
            sum = sum + i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
