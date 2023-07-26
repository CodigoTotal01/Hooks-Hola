import {renderHook} from "@testing-library/react";
import {useCounter} from "../../src/hooks/index.js";
import {act} from "react-dom/test-utils";

describe('Pruebas Use Counter', function () {
    test('debe de retornar los valores por defecto', () => {
        const {result} =renderHook(()=> useCounter());
        const {counter, decrement, increment, reset} = result.current;

        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));

    })

    test('dene de generar el counter con el valor de 100', ()=>{
        const {result} =renderHook(()=> useCounter(100));
        const {counter, decrement, increment, reset} = result.current;
       expect(counter) .toBe(100)
    });
    
    test('debe de incrementar el contador', ()=>{
        const {result} =renderHook(()=> useCounter(100));
        const {counter, increment} = result.current;
        // el coutner es oslo on valor, n oes la reffecrencia
        act(()=>{
            increment();
            increment(2);
        })

        //current ees = a actual
        expect(result.current.counter).toBe(103)
    });
    test('debe descrementar el contador', ()=>{
        const {result} =renderHook(()=> useCounter(100));
        const {counter, decrement} = result.current;
        // el coutner es oslo on valor, n oes la reffecrencia
        act(()=>{
            decrement();
            decrement(2);
        })

        //current ees = a actual
        expect(result.current.counter).toBe(97)
    });

    test('debe de resetaear a su valor inicial', ()=>{
        const valueInit = 100;
        const {result} =renderHook(()=> useCounter(valueInit));
        const {counter, reset, decrement} = result.current;
        // el coutner es oslo on valor, n oes la reffecrencia
        act(()=>{
            decrement();
            decrement(2);
            reset();
        })

        expect(result.current.counter).toBe(valueInit)
    });
    
});