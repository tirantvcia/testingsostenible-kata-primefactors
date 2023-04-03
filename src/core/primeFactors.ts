export function primeFactors(numero: number): number[] {



    let divisor = getSmallestPrimeDivisorForNumber(numero);
    var divisores = [divisor];

    const remainder = numero / divisor;
    if (remainder > 1) {
        return divisores.concat(primeFactors(remainder));
    }

    return divisores;
}
function getSmallestPrimeDivisorForNumber(numero: number) {
    let divisor = 2;

    while (notDivisorForNumber(numero, divisor)) {
        ++divisor;
    }
    return divisor;
}
function notDivisorForNumber(numero: number, divisor: number) {
    return numero % divisor != 0;
}
