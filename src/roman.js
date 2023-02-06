function numToRoman(num) {
    if (typeof num !== 'number') throw new Error('Input must be a number');
    if (num < 0) throw new Error('Input must be a positive number');

    let result = '';

    while (num > 0) {
        switch (true) {
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