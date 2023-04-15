const args = require('./yargs');
const op = require('./operations');
let command = process.argv[2];

if (command === 'add'){
    let result = op.add(args.num1, args.num2);
    console.log(result);
}
else if(command === 'sub'){
    let result = op.subtract(args.num1, args.num2);
    console.log(result);
}
else if(command === 'mult'){
    let result = op.multiply(args.num1, args.num2);
    console.log(result);
}
else if(command === 'div'){
    let result = op.divide(args.num1, args.num2);
    console.log(result);
}
else {
    console.log('Nieznana komenda');
};