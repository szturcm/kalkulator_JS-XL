const args = require('yargs')
    .command("add [num1] [num2]", "Add two numbers", yargs => {
        yargs.positional('num1', {
            type: 'number'
        }),
        yargs.positional('num2', {
            type: 'number'
        })
    })
    .command("sub [num1] [num2]", "Subtract the second number from the first number", yargs => {
        yargs.positional('num1', {
            type: 'number',
            demandOption: true
        }),
        yargs.positional('num2', {
            type: 'number',
            demandOption: true
        })
    })
    .command("mult [num1] [num2]", "Multiply a number by another", yargs => {
        yargs.positional('num1', {
            type: 'number'
        }),
        yargs.positional('num2', {
            type: 'number'
        })
    })
    .command("div [num1] [num2]", "Divide the first number by the second number", yargs => {
        yargs.positional('num1', {
            type: 'number'
        }),
        yargs.positional('num2', {
            type: 'number'
        })
    })
    .help()
    .argv;

module.exports = args;