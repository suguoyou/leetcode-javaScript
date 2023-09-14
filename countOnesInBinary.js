// 数字的二进制1的个数

function countOnesInBinary(number) {
    let count = 0
    while (number > 0) {
        count += number & 1
        number = number >> 1
    }
    return count
}

const count = countOnesInBinary(8)
console.log(count)