export function randomInt(min, max) {
    return Math.random() * (max - min) + min;
}

export function isNumber(value) {
    if (value == null || isNaN(value)) {
        throw new GameException("Value [" + value + "] is not a Number!", this);
    }
    return value;
}

export function splitToEqualPartsArray(value, parts, offset) {
    isNumber(value);
    isNumber(parts);
    let arr = [];
    for (let i = 0; i < parts; i++) {
        arr.push((value / parts) + (offset ? offset : 0));
    }
    return arr;
}

export function sumArr(arr, index) {
    let safeIndex = index != null ? index : arr.length - 1;
    let sum = 0;
    for (let i = 0; i < safeIndex; i++) {
        sum += arr[i];
    }
    return Number(sum);
}

export function between(num, min, max) {
    if (num > min && num < max) {
        return true;
    }
    return false;
}

export function insideRectangle(x, y, expectX, expectY, expectW, expectH) {
    var w = expectX + expectW;
    var h = expectY + expectH;

    if (between(x, expectX, w) && between(y, expectY, h)) {
        var inside = true;
    } else {
        var inside = false;
    }
    return inside;
}