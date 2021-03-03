exports.min = function min(array) {

    if (!array || !array.length) {
        return 0
    }

    let min = Infinity

    array.forEach(el => {
        min = Math.min(min, el)
    });

    return min

}

exports.max = function max(array) {

    if (!array || !array.length) {
        return 0
    }

    let max = -Infinity

    array.forEach(el => {
        max = Math.max(max, el)
    });

    return max
}

exports.avg = function avg(array) {

    if (!array || !array.length) {
        return 0
    }

    let sum = array.reduce((acc, curr) => acc + curr)

    return sum / array.length
}
