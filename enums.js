var Arithmetic;
(function (Arithmetic) {
    Arithmetic[Arithmetic["Add"] = 0] = "Add";
    Arithmetic[Arithmetic["Mul"] = 1] = "Mul";
    Arithmetic[Arithmetic["Div"] = 2] = "Div";
    Arithmetic[Arithmetic["Sub"] = 3] = "Sub";
})(Arithmetic || (Arithmetic = {}));
function calculate(a, b, type) {
    switch (type) {
        case Arithmetic.Add:
            return a + b;
        case Arithmetic.Sub:
            return a - b;
        case Arithmetic.Mul:
            return a * b;
        case Arithmetic.Div:
            return a / b;
        default: return -1;
    }
}
var value = calculate(2, 4, Arithmetic.Mul);
console.log(value);
