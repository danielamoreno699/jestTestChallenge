

const stringLength = (str) => {
    return str.trim().length
    
}


const stringLengthCondition = (str) => {

    if(str.length >=1 &&  str.length < 10){
        return str.trim().length
    }throw new Error('the str did not meet requirement')
    
    
}

module.exports = {
    stringLength,
    stringLengthCondition
  };
