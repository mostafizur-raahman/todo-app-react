import React from 'react';

const Todo = (props) => {

    return (
        <div className='mx-auto mb-2 w-1/2'>
            <p className='bg-sky-300 text-center'>{props.todo}</p>
        </div>
    );
};

export default Todo;