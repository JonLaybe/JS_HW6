function stringFrom() {
    let result = '';
    for (item of arguments) {
        result += item + ' ';
    }
    console.log(result);
}
function MinAgruments() {
    if (arguments.length > 0) {
        let result = arguments[0];

        for (let i = 1; i < arguments.length; i++) {
            if (arguments[i] < result)
                result = arguments[i];
        }
        return result;
    }
    return null;
}
function numbers() {
    const isNumber = (num) => {
        if (typeof (num) === "string")
            return false;
        if (Number(num) === 0 || !!Number(num))
            return true;
        return false;
    };
    let result = 0;
    for (item of arguments) {
        if (isNumber(item))
            result += +item;
    }

    return result;
}
function mean() {
    const isNumber = (num) => {
        if (typeof (num) === "string")
            return false;
        if (Number(num) === 0 || !!Number(num))
            return true;
        return false;
    };
    let len_args = 0;
    let result = 0;
    for (item of arguments) {
        if (isNumber(item)) {
            len_args++;
            result += +item;
        }
    }

    return result / len_args;
}
stringFrom('Hello world!', 5, true);
console.log(MinAgruments(1, 2, 5, 3));
console.log(numbers('1', 2, 'Hello world!', 3));
console.log(mean(1, 'Forever young', 2));