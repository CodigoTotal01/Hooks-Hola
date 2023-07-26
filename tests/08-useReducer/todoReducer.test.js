import {todoReducer} from "../../src/08-useReducer/todoReducer.js";

describe('Pruebas en el todoReducer', function () {

    const initialState = [{
        id: 1,
        description: 'Demo todo',
        done: false,
    }];

    test('debe de regresar el estado inicial', () => {
        const newState = todoReducer(initialState, {});
        //tobe, mismo objeto, misma referencia mismo todo xd
        expect(newState).toBe(initialState)
    });


    test('debe de regresar un todo', () => {
        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Nuevo todo #2',
                done: false
            }
        };
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);


        expect(newState).toContain(action.payload)
    });
    
    
    test('debe elimiar un todo', ()=>{
        const action = {
            type: '[TODO] Remove Todo',
            payload: 1
        };

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(0);
    });
});