import React, { useState } from 'react';
import NewTodo from './NewTodo';
import Todos from './Todos';

//const dummyTodos = ["task1", "task2"]

const Home = () => {
    const [todos, setTodos] = useState([])

    const handleNewTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    }
    return (
        <div>
            <NewTodo handleNewTodo={handleNewTodo} ></NewTodo>
            <Todos todos={todos} ></Todos>
        </div>
    );
};

export default Home;