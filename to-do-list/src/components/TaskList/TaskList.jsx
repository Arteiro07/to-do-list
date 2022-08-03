import {React, useState} from 'react'
import AddTask from '../AddTask/AddTask';
import {ImCheckboxUnchecked, ImCheckboxChecked} from 'react-icons/im';
import List from './List/List';
import "./TaskList.css"
import { ACTIONS, useDispatch, useTasks } from '../../hooks/TasksContext';

export default function TaskList() {

    const [hidden, setHidden] = useState(false);
    const [counter, setCounter] = useState(0);
    const tasks = useTasks();
    const dispatch = useDispatch();

    return (
    <div className='task-list-app-container'>
        <AddTask dispatch={dispatch}/>
        <div 
            className='task-list-sort'
            onClick={() =>{
                dispatch({type: ACTIONS.SORT, payload:{counter:counter} });
                setCounter(counter+1);
                if(counter===2) setCounter(0);
            }}
        >
            Tasks
        </div>
        <div className='task-list-container'>
            <List
                tasks={tasks}
                hidden={hidden}
                dispatch={dispatch}
            />
        </div>
        <div 
            className='task-list-checkBox' 
            onClick={ () => {
                setHidden(!hidden)
            }}>
                {hidden ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />} Hide Completed
        </div>
    </div>
    )
}
