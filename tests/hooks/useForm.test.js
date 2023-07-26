import {renderHook} from "@testing-library/react";
import {useForm} from "../../src/hooks/index.js";
import {act} from "react-dom/test-utils";

describe('Pruebas Use FOrm', function () {

    const initialForm = {
        name: 'codigototal',
        email: 'codigototal@gmail.com'
    }
    test('debe de regresar los valores por defecto', ()=>{
        const {result} = renderHook(()=>useForm());
        // expect(result.current).toEqual({
        //     name: initialForm.name,
        //     email: initialForm.email,
        //     formState: expect.any(Object),
        //     onInputChange: expect.any(Function),
        //     onResetForm: expect.any(Function),
        // });
    });


    test('debe cambiar el nombre del formulario', ()=>{


        const newValue = 'Juan'

        //montar el hooks
        const {result} = renderHook(()=>useForm());

        const {onInputChange} = result.current;
        //onInputchange()
        act(()=>{
            onInputChange({target: {
                    name: "name",
                    value: newValue,
                }})
        })
        //expect result.curremt.name juan
        expect(result.current.name).toBe('Juan')
    });


    test('debe resetear el nombre del formulario', ()=>{


        const newValue = 'Juan'

        //montar el hooks
        const {result} = renderHook(()=>useForm(initialForm));

        const {onInputChange, onResetForm} = result.current;
        //onInputchange()
        act(()=>{
            onInputChange({target: {
                    name: "name",
                    value: initialForm.name,
                }})
            onResetForm();

        })
        //expect result.curremt.name juan
        expect(result.current.name).toBe(initialForm.name)
    });
});