import {useTodo} from "../../src/hooks/useTodo.js";
import {render, screen} from "@testing-library/react";
import {TodoApp} from "../../src/08-useReducer/TodoApp.jsx";

jest.mock("../../src/hooks/useTodo.js");
describe('Pruebas en el <TodoApp />', () => {


    useTodo.mockReturnValue({
        todos: [
            {
                id: 1,
                description: "todo 1",
            },
            {
                id: 2,
                description: "todo 2",
            }
        ],
        todosCount: 2,
        pendingTodos: 2,
        hadleDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn(),
        handleNewTodo: jest.fn()
    });

    test('Debe de mostrar el compoenente correctamente', () => {
        render(<TodoApp/>)
        screen.debug();
    });


});