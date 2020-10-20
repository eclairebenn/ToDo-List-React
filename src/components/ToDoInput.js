import React, {useState} from 'react';

const ToDoInput = (props) => {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTask(task);
        setTask('');
    }
    return (
        <div className='container'>
            <form className='form-inline' onSubmit={handleSubmit}>
                <div className='form-group mx-sm-3 mb-2'>
                    <label>Input Task:   </label>
                    <input className='form-control' type='text' onChange={(e) => setTask(e.target.value)} value={task}/>
                </div>
                <button className='btn btn-primary mb-2' type='submit'>Add</button>
            </form>
        </div>
    )
}

export default ToDoInput;