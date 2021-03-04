module.exports = function toReadable (number) {
    let numberArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',]
    let tenNumberArray = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    if (number < 20) {
        return numberArray[number];
    }

    if (number % 10 && number < 100) {
        number = tenNumberArray[number/10 - 2];
        return number;
     }

    if (number > 20 && number < 100) {
        let str = String(number);
        str[0] = tenNumberArray[str[0] -2];
        str [1] = numberArray[str[1]];
        return `${str[0]} ${str[1]};
    }
}
