function numToRoman(num) {
    if (typeof num !== 'number') throw new Error('Input must be a number');
    if (num < 0) throw new Error('Input must be a positive number');

    let numeral = '';

    while (num > 0) {
        switch (true) {
            case num >= 1000:
                numeral += 'M';
                num -= 1000;
                break;
            case num >= 900:
                numeral += 'CM';
                num -= 900;
                break;
            case num >= 500:
                numeral += 'D';
                num -= 500;
                break;
            case num >= 400:
                numeral += 'CD';
                num -= 400;
                break;
            case num >= 100:
                numeral += 'C';
                num -= 100;
                break;
            case num >= 90:
                numeral += 'XC';
                num -= 90;
                break;
            case num >= 50:
                numeral += 'L';
                num -= 50;
                break;
            case num >= 40:
                numeral += 'XL';
                num -= 40;
                break;
            case num >= 10:
                numeral += 'X';
                num -= 10;
                break;
            case num >= 9:
                numeral += 'IX';
                num -= 9;
                break;
            case num >= 5:
                numeral += 'V';
                num -= 5;
                break;
            case num >= 4:
                numeral += 'IV';
                num -= 4;
                break;
            case num >= 1:
                numeral += 'I';
                num -= 1;
                break;
        }
    }
    return numeral;
}

export { numToRoman }