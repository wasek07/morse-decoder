const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
}
function decode(expr) {
    let arr = []
    for (let x = 0; x < expr.length; x += 10) {
        arr.push(expr.slice(x, x + 10))
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '0000001011') {
            arr[i] = 'a'
        } else if (arr[i] == '0011101010') {
            arr[i] = 'b'
        } else if (arr[i] == '0011101110') {
            arr[i] = 'c'
        } else if (arr[i] == '0000111010') {
            arr[i] = 'd'
        } else if (arr[i] == '0000000010') {
            arr[i] = 'e'
        } else if (arr[i] == '0010101110') {
            arr[i] = 'f'
        } else if (arr[i] == '0000111110') {
            arr[i] = 'g'
        } else if (arr[i] == '0010101010') {
            arr[i] = 'h'
        } else if (arr[i] == '0000001010') {
            arr[i] = 'i'
        } else if (arr[i] == '0010111111') {
            arr[i] = 'j'
        } else if (arr[i] == '0000111011') {
            arr[i] = 'k'
        } else if (arr[i] == '0010111010') {
            arr[i] = 'l'
        } else if (arr[i] == '0000001111') {
            arr[i] = 'm'
        } else if (arr[i] == '0000001110') {
            arr[i] = 'n'
        } else if (arr[i] == '0000111111') {
            arr[i] = 'o'
        } else if (arr[i] == '0010111110') {
            arr[i] = 'p'
        } else if (arr[i] == '0011111011') {
            arr[i] = 'q'
        } else if (arr[i] == '0000101110') {
            arr[i] = 'r'
        } else if (arr[i] == '0000101010') {
            arr[i] = 's'
        } else if (arr[i] == '0000000011') {
            arr[i] = 't'
        } else if (arr[i] == '0000101011') {
            arr[i] = 'u'
        } else if (arr[i] == '0010101011') {
            arr[i] = 'v'
        } else if (arr[i] == '0000101111') {
            arr[i] = 'w'
        } else if (arr[i] == '0011101011') {
            arr[i] = 'x'
        } else if (arr[i] == '0011101111') {
            arr[i] = 'y'
        } else if (arr[i] == '0011111010') {
            arr[i] = 'z'
        } else if (arr[i] == '1011111111') {
            arr[i] = '1'
        } else if (arr[i] == '1010111111') {
            arr[i] = '2'
        } else if (arr[i] == '1010101111') {
            arr[i] = '3'
        } else if (arr[i] == '1010101011') {
            arr[i] = '4'
        } else if (arr[i] == '1010101010') {
            arr[i] = '5'
        } else if (arr[i] == '1110101010') {
            arr[i] = '6'
        } else if (arr[i] == '1111101010') {
            arr[i] = '7'
        } else if (arr[i] == '1111111010') {
            arr[i] = '8'
        } else if (arr[i] == '1111111110') {
            arr[i] = '9'
        } else if (arr[i] == '1111111111') {
            arr[i] = '0'
        } else if (arr[i] == '**********') {
            arr[i] = ' '
        }
    }
    return arr.join('')
}
module.exports = {
    decode
}