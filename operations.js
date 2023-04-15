const add = (num1, num2) => {
    return num1 + num2;
};
const subtract = (num1, num2) => {
    return num1 - num2;
};
const multiply = (num1, num2) => {
    return num1 * num2;
};
const divide = (num1, num2) => {
    if (num2 === 0){
        console.log("Diving by zero doesn't make much sense, dummy. Try again.")
    }
    return num1/num2

};

module.exports = {    
    add,
    subtract,
    multiply,
    divide
};