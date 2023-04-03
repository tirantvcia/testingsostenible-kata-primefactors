/*
    2 ⇒ [2]
    2 * 2 ⇒ [2,2]
    2 * 2 * 2 ⇒ [2,2,2]
    3 ⇒ [3]
    3 * 3 ⇒ [3,3]
    3 * 2 ⇒ [2,3]
    5 * 5 ⇒ [5,5]
    5 * 7 * 11 * 3 ⇒ [3,5,7,11]
    */

import { primeFactors } from "../core/primeFactors";

describe("Descomposición factores primos", () => {

    it("1 es primo y se devuelve el mismo número", () => {
        expect(primeFactors(1)).toMatchObject([1])
    });


    it("Un número primo mayor que 1 devuelve el mismo número", () => {
        var result = primeFactors(2);
        expect(result).toMatchObject([2]);
        expect(primeFactors(3)).toMatchObject([3])
    });
    it("Un número no primo devuelve su descomposicion en primos", () => {
        var result = primeFactors(2 * 2);
        expect(result).toMatchObject([2, 2]);
        expect(primeFactors(2 * 2 * 2)).toMatchObject([2, 2, 2])
        expect(primeFactors(3 * 3)).toMatchObject([3, 3])
        expect(primeFactors(5 * 5)).toMatchObject([5, 5])

    });
    it("Un número no primo devuelve su descomposicion en primos ordenados menor a mayor", () => {
        var result = primeFactors(2 * 2);
        expect(primeFactors(2 * 3)).toMatchObject([2, 3])
        expect(primeFactors(5 * 7 * 11 * 3)).toMatchObject([3, 5, 7, 11])

    });


});


