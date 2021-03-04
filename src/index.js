module.exports = function toReadable (number) {
    let numberArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',];
    let tenNumberArray = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (number < 20) {
        return numberArray[number];
    }
    if (number % 10 && String(number).length < 3) {
        return tenNumberArray[number/10 - 2];
    }
}
