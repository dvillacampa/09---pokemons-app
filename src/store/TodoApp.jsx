import { useState } from "react";
import { useGetTodoByIdQuery, useGetAllTodosQuery } from "./apis"


export const TodoApp = () => {
  
    const [ todoId, setTodoState ] = useState( 1 );

    const { data: todo } = useGetTodoByIdQuery( todoId );

    //const { data: todos = [], isLoading } = useGetAllTodosQuery();

    const onNextTodo = () => {
        setTodoState( todoId + 1 );
    }

    const onPreviousTodo = () => {
        if(todoId === 1) return;
        setTodoState( todoId - 1 );
    }
  
    return (
    <>
        <h1>Todo - RKT Query</h1>

        <button onClick={ onPreviousTodo }>
            Previous Todo
        </button>

        <button onClick={ onNextTodo }>
            Next Todo
        </button>

        <hr />

        <pre>{ JSON.stringify( todo )}</pre>
        
        {/*<h3>Todo { todo.id }</h3>
        <h2>{ todo.title }</h2>
        <strong>{ todo.comoleted }</strong>*/}



        {/*<ul>
            {
                todos.map( (mtodo) => 
                    <li key={ mtodo.id }>
                        <strong>{ mtodo.completed ? 'DONE ' : 'Pending ' }</strong>
                        {mtodo.title}
                    </li>
                )
            }
        </ul>*/}


        
    </>
  )
}
