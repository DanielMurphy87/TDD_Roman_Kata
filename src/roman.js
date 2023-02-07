function numToRoman(num) {
    if (typeof num !== 'number') throw new Error('Input must be a number');
    if (num < 0) throw new Error('Input must be a positive number');

    let result = '';

    while (num > 0) {
        switch (true) {
            case num >= 1000:
                result += 'M';
                num -= 1000;
                break;
            case num >= 900:
                result += 'CM';
                num -= 900;
                break;
            case num >= 500:
                result += 'D';
                num -= 500;
                break;
            case num >= 400:
                result += 'CD';
                num -= 400;
                break;
            case num >= 100:
                result += 'C';
                num -= 100;
                break;
            case num >= 90:
                result += 'XC';
                num -= 90;
                break;
            case num >= 50:
                result += 'L';
                num -= 50;
                break;
            case num >= 40:
                result += 'XL';
                num -= 40;
                break;
            case num >= 10:
                result += 'X';
                num -= 10;
                break;
            case num >= 9:
                result += 'IX';
                num -= 9;
                break;
            case num >= 5:
                result += 'V';
                num -= 5;
                break;
            case num >= 4:
                result += 'IV';
                num -= 4;
                break;
            case num >= 1:
                result += 'I';
                num -= 1;
                break;
        }
    }
    return result;
}

export { numToRoman }