import React, {useState} from 'react';
import './App.css';
import ToDoInput from './components/ToDoInput';
import TaskList from './components/TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [taskList, setTaskList] = useState([]);

  const setTask = (task) => {
      setTaskList([...taskList, {content: task, checked: false}]);
  }

  const removeTask = (index) => {
      setTaskList([...taskList.slice(0, index), ...taskList.slice(index+1)]);
  }

  const removeTaskOther = (index) => {
    setTaskList(taskList.filter(task => taskList.indexOf(task) !== index))
  }

  const setCheck = (index) => {
    let newTasks = [...taskList];
    newTasks[index].checked = !newTasks[index].checked;
    setTaskList(newTasks);
  }

  return (
    <div className="App">
      <ToDoInput addTask={setTask}/>
      <TaskList deleteTask={removeTask} checkTask={setCheck} tasks={taskList} />
    </div>
  );
}

export default App;
