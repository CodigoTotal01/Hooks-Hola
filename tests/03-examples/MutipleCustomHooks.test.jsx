import {fireEvent, render, screen} from "@testing-library/react";
import {MultipleCustomHooks} from "../../src/03-examples/MultipleCustomHooks.jsx";
import {useFetch} from "../../src/hooks/useFetch/useFetch.js";
import {useCounter} from "../../src/hooks/useCounter/useCounter.js";
//Sirve para simular lo que retorna un Hook
jest.mock("../../src/hooks/useFetch.js");
jest.mock("../../src/hooks/useCounter.js")

describe('PRueba en Multiple Hook', function () {

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    })
    //Antes de cada prueba
    beforeEach(()=> {
        jest.clearAllMocks();
    })

    test('debe mostra el compoenente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render(<MultipleCustomHooks/>);
        expect(screen.getByText('Loading...'));
        expect(screen.getByText('Multpliple'));
        //name es el string denntro de lbutton
        const nextButton = screen.getByRole('button', {name: 'Next Message'});
        expect(nextButton.disabled).toBeTruthy();

    });

    test('debe de mostrar un Quote', () => {

        useFetch.mockReturnValue({
            data: [{author: 'Fernando', quote: 'Hola mundo'}],
            isLoading: false,
            hasError: null
        });


        //Sujeto de pruebas
        render(<MultipleCustomHooks/>);
        expect(screen.getByText('Hola mundo')).toBeTruthy();


        const nextButton = screen.getByRole('button', {name: 'Next Message'});
        expect(nextButton.disabled).toBeFalsy()
    });


    test('debe llmar la funcion de incrementar', () => {


        useFetch.mockReturnValue({
            data: [{author: 'Fernando', quote: 'Hola mundo'}],
            isLoading: false,
            hasError: null
        });


        render(<MultipleCustomHooks/>);
        const nextButton = screen.getByRole('button', {name: 'Next Message'});

        fireEvent.click(nextButton)

        expect(mockIncrement).toHaveBeenCalled();
    });

});