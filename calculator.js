function calculator(first, second, type) {
    if (type === "sum") {
        return first + second;
    }
    if (type === "sub") {
        return first - second;
    }
    if (type === "mul") {
        return first * second;
    }
    if (type === "div") {
        return first / second;
    }
    return -1;
}
var ans = calculator(2, 4, "sum");
console.log(ans);
