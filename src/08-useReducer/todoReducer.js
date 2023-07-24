//Metodo Reducer = Basicamente se encarga de gestional de modificiar nuestro estado CRUD -returna un stado
export const todoReducer = (initialState = [], action) => {

    switch (action.type) {
        case 'ABC':
            return new Error('Action.type = AND no esta implementada');

        default:
            return initialState;
    }
}