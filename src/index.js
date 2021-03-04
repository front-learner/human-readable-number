module.exports = function toReadable (number) {
    let numberArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',];
    let tenNumberArray = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let str = String(number);
    if (number < 20) {
        return numberArray[number];
    }
    if (number > 100 && number < 1000 && (Number(str[1] + str[2]) === 10)) {
        return numberArray[Math.floor(number/100)] + ' ' + 'hundred' + ' ' +  'ten'; 
    }
    if ((number % 10 === 0) && (number < 100) && (number >= 20)) {
        return tenNumberArray[(number/10) - 2];
    }

    if (number > 20 && number < 100) {
      return tenNumberArray[Number(str[0]) - 2] + ' ' + numberArray[Number(str[1])];  
    }

    if (number % 100 === 0) {
        return numberArray[number/100] + ' hundred';
    }

    if (number > 100 && (number % 10 === 0)) {
        return numberArray[Math.floor(number/100)] + ' ' + 'hundred' + ' ' + tenNumberArray[Number(str[1]) - 2];
    }

    if (number > 100 && number < 1000 && (Number(str[1]) >= 2)) {
        return numberArray[Math.floor(number/100)] + ' ' + 'hundred' + ' ' + tenNumberArray[Number(str[1]) - 2] + ' ' + numberArray[Number(str[2])];
    }

    if (number > 100 && number < 1000 && (Number(str[1] + str[2]) < 20)) {
        return numberArray[Math.floor(number/100)] + ' ' + 'hundred' + ' ' +  numberArray[Number(str[1] + str[2])]; 
    }
    
} 

