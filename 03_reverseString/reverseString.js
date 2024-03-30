const reverseString = function(word) {
    let Revword = "";
    for(let i = word.length-1 ; i>=0 ; i--){
        Revword += word[i];
    }
    return Revword;
};

// Do not edit below this line
module.exports = reverseString;
