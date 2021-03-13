module.exports = function toReadable(number) {
    if (!number) { return 'zero'; }
    const numbers = new Map([[1, 'one'],
    [2, 'two'],
    [3, 'three'],
    [4, 'four'],
    [5, 'five'],
    [6, 'six'],
    [7, 'seven'],
    [8, 'eight'],
    [9, 'nine'],
    [10, 'ten'],
    [11, 'eleven'],
    [12, 'twelve'],
    [13, 'thirteen'],
    [14, 'fourteen'],
    [15, 'fifteen'],
    [16, 'sixteen'],
    [17, 'seventeen'],
    [18, 'eighteen'],
    [19, 'nineteen'],
    [20, 'twenty'],
    [30, 'thirty'],
    [40, 'forty'],
    [50, 'fifty'],
    [60, 'sixty'],
    [70, 'seventy'],
    [80, 'eighty'],
    [90, 'ninety'],
    [100, 'hundred']
    ]);

    let result = '';
    const hundred = Math.trunc(number / 100);
    if (hundred > 0) {
        result += numbers.get(hundred) + ' hundred';
        number = number % 100;
        result = number > 0 ? result + ' ' : result;
    }
    if (number > 20) {
        const dozens = Math.trunc(number / 10) * 10;
        result += numbers.get(dozens);
        result = number % 10 > 0 ? result + ' ' + numbers.get(number % 10) : result;
    } else if (number > 0) {
        result += numbers.get(number);
    }

    return result;
}
