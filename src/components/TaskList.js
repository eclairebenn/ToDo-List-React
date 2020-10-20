import React, {useState, useEffect} from 'react';
import styles from './TaskListStyle.module.css';

const TaskList = (props) => {


    const [taskArr, setTaskArr] = useState([...props.tasks]);
    useEffect(() => {
        setTaskArr(props.tasks);
    }, [props.tasks])

    const handleCheck = (e, index) => {
        props.checkTask(index);
    }
    const handleDelete = (e, index) => {
        e.preventDefault();
        props.deleteTask(index);
    }
    return(
        <div className='container'>
            <ul>
                {
                    (taskArr).map((item, i) => 
                        <li>
                            <h5 className={(item.checked ? styles.checked : styles.regular)}>{item.content}</h5>
                            <input type='checkbox' checked={item.checked} onChange={(e) => handleCheck(e, i)}></input>
                            <button className='btn btn-primary' onClick={(e) => handleDelete(e, i)}>Delete</button>
                        </li>
                    )
                }
            </ul>
        </div>
    );

}

export default TaskList;