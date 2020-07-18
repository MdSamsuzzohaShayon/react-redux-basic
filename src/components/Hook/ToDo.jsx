import React, { useState } from 'react';
import "./Todo.css";

// DISTRUCTURING AS PROPS
function Do({todo, index, completeTodo, deleteTodo}){
    return (
        <div style={{textDecoration: todo.isCompleted? 'line-through' : ''}} className="todo">
            {todo.text}
            <div>
                <button className="btn" onClick={()=>completeTodo(index)}>✅</button>
                <button className="btn" onClick={()=>deleteTodo(index)}>❌</button>
            </div>
        </div>
    );
}




function TodoForm({addTodo}){
    const [value, setValue] = useState('');


    const handleSubmit = e =>{
        e.preventDefault();
        if(value == null)return;
        addTodo(value);
        setValue('');
    }


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="add todo...." onChange={e=>setValue(e.target.value)} value={value} className="input" />
        </form>
    );
}


function ToDo() {
    // GIVE TWO VARIABLE
    // FIRST VALUE OF THE STATE ALTERNATIVE OF THIS.STATE
    // FUNCTION TO UPDATE STATE ALTERNATIVE OF THIS.SETSTATE FUNCTION 

    const [todos, setTodos] = useState([
        {
            text: "Learn about react",
            isCompleted: false
        },
        {
            text: "Meet friend for lunch",
            isCompleted: false
        },
        {
            text: "Build really cool todo app",
            isCompleted: false
        },
    ]);


    const addTodo = text =>{
        const newTodo = [...todos, {text}];
        setTodos(newTodo);
    }
    const completeTodo=(index)=>{
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
    }
    const deleteTodo = index=>{
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    return (
        <div className="app">
            <div className="todo-list">
                {todos.map((todo, index)=>(
                    <Do key={index} index={index} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} />
                ))}
                <TodoForm addTodo={addTodo} />
            </div>
        </div>
    );
}


export default ToDo;