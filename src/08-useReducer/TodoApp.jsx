import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodo } from "../hooks/useTodos/useTodo.js";

export const TodoApp = () => {

    const {todos,todosCount, pendingTodos, hadleDeleteTodo, handleToggleTodo, handleNewTodo} = useTodo();

  

  return (
    <>
      <h1>TodoApp: {todosCount}, <small>pendientes: {pendingTodos}</small></h1>



      <hr />

      <div className="row">
        <div className="col-7"> 
          <TodoList todos={todos}   onDeleteTodo={hadleDeleteTodo} onToggleTodo={handleToggleTodo}/>
        </div>
        <div className="col-5">

          <h4>Agregar TODO</h4>
          <hr />
          {/* Enviando metodo padre a hijo */}
          <TodoAdd onNewTodo={handleNewTodo}/>
        </div>
      </div>



    </>
  )
};