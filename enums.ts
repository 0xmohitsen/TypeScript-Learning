enum Arithmetic {
    Add,
    Mul,
    Div,
    Sub
}

// we can't return enum Arithmetic but we can return Arithmetic.Add, all because enum by default assigns values starts from 0 to these properties.

function calculate(a: number, b: number, type: Arithmetic): number {
    switch(type) {
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

const value = calculate(2,4, Arithmetic.Mul);

console.log(value);