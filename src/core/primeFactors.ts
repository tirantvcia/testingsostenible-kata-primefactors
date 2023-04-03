export function primeFactors(numero: number): number[] {

    if (numero <= 0) {
        throw new Error("Solo se permiten números positivos.");
    }

    let divisor = getSmallestPrimeDivisorForNumber(numero);
    var divisores = [divisor];

    const remainder = numero / divisor;
    if (remainder > 1) {
        return divisores.concat(primeFactors(remainder));
    }

    return divisores;
}
function getSmallestPrimeDivisorForNumber(numero: number) {



    if (numero === 1) {
        return 1;
    }

    let divisor = 2;

    while (notDivisorForNumber(numero, divisor)) {
        ++divisor;
    }
    return divisor;
}
function notDivisorForNumber(numero: number, divisor: number) {
    return numero % divisor != 0;
}
