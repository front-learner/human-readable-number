module.exports = function toReadable (number) {
    let numberArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',];
    let tenNumberArray = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (number < 20) {
        return numberArray[number];
    }

    if (number < 100 && number % 10) {
       return tenNumberArray[number/10 - 2];
     }
     
    if (number > 20 && number < 100) {
        let str = String(number);
        return `${tenNumberArray[Number(str[0]) -2]} ${numberArray[Number(str[1])]}`;
    }
}
