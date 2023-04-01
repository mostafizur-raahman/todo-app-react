import React from 'react';
import Todo from './Todo';

const Todos = (props) => {
    console.log(props.todos);
    return (
        <div>
            {
                props.todos.map((todo, index) => <Todo todo={todo} key={index}></Todo>)
            }
        </div>
    );
};

export default Todos;