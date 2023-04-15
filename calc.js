const args = require('./yargs');
const op = require('./operations');
const fs = require('fs');
let command = process.argv[2];

const loadHistory = () => {
    try{
        let history = JSON.parse(fs.readFileSync('historia.json'));
        return history;
    }
    catch (e) {
        return [];
    }
}

const append = (arg1, arg2, operand, result) => {
    if (result !== null){
        let history = loadHistory();
        let operation = (arg1 + operand + arg2).toString();
        let data = {
            operation,
            result
        }
        history.push(data);
        fs.writeFileSync('historia.json', JSON.stringify(history), (err) => {
        if (err) throw err;
    })
}
};

if (command === 'add'){
    let result = op.add(args.num1, args.num2);
    console.log(result);
    {append(args.num1, args.num2, "+", result)}
}
else if(command === 'sub'){
    let result = op.subtract(args.num1, args.num2);
    console.log(result);
    append(args.num1, args.num2, "-", result);

}
else if(command === 'mult'){
    let result = op.multiply(args.num1, args.num2);
    console.log(result);
    append(args.num1, args.num2, "*", result);

}
else if(command === 'div'){
    let result = op.divide(args.num1, args.num2);
    console.log(result);
    append(args.num1, args.num2, "/", result);
}
else {
    console.log('Unknown command. Try again.');
};