import React, { useState } from 'react';

const NewTodo = (props) => {
    const [todo, setTodo] = useState("");
    const handleInputChange = (e) => {
        setTodo(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onTodo(todo);
    }
    return (
        <div className='text-center mt-4'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="todo" className='font-mono text-sky-400 uppercase underline text-2xl'>Add todo:</label> <br />
                <input value={todo} onChange={handleInputChange} type="text" id='todo' className='border-2 ml-2 mt-5' placeholder='  your task' />
                <button className='border-2 bg-sky-400 rounded-lg ml-2 p-1'>Add task</button>
            </form>
        </div>
    );
};

export default NewTodo;