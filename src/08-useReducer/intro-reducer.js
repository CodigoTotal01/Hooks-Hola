const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del alma',
    done: false,
}]
//Reducer - Funcion pura -retorna otro estado
//accion quien le ijndica al resducer como quiero que cambie el estado
const todoReducer = (state = initialState, action={}) => {

    if(action.type === '[TODO] add todo'){
        return [...state, action.payload]
    }


    //siempre retornar el o una forma del estado
    return state
}

let todos = todoReducer();


const newTodo = {
    id: 1,
    todo: 'Recolectar la piedra del culo',
    done: false,
}
//state + accion
console.log(todos)
//La accion
const addTodoAction = {
    type: '[TODO] add todo' // solo inidca como se llama el todo o accion
    ,
    //Lo que va dentro de la accion - no siempre va
    payload: newTodo
}
todos = todoReducer(todos, addTodoAction);


console.log(todos)
//cuando hacemos mutacion en react es muy mala practica