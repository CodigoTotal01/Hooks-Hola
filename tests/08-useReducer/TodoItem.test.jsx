import {fireEvent, render, screen} from "@testing-library/react";
import {TodoItem} from "../../src/08-useReducer/TodoItem.jsx";

describe('Pruebas en <TodoItem>', function () {

    const todo = {
        id: 1,
        description: 'Piedra el alma',
    }
    //aniadidas como proptipe dentro de lfuunctional component
    const onDeleteTodoMock =jest.fn();
    const onToggleTodoMock =jest.fn();

    beforeEach(()=>{jest.clearAllMocks()});

    test('debe de msotrar el todo pendiente a completar ', ()=>{
        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock}/>)
        const  liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between')
        const spanElemento = screen.getByLabelText('span')
        expect(spanElemento.className).toContain('aling-self-center ')
    });
    test('Debe mostrar el todo completado', ()=>{

        todo.done = true;

        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock}/>)

        const spanElement = screen.getByLabelText('span')

        expect(spanElement.className).toContain('text-decoration-line-through')



    });
    test('span debe de llamar el togle toodo cuand ose haga click', ()=>{
        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock}/>)
        const spanElement = screen.getByLabelText('span')
        fireEvent.click(spanElement)

        //Que se halla ejecutado ala cunfiocn con un argumento
        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
    });

    test('span debe de llamar el dlete toodo cuand ose haga click', ()=>{
        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock}/>)
        const buttonElement = screen.getByRole("button");
        fireEvent.click(buttonElement)

        //Que se halla ejecutado ala cunfiocn con un argumento
        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
    });

});