import {React, useEffect, useState} from 'react'
import AddTask from '../AddTask/AddTask';
import {ImCheckboxUnchecked, ImCheckboxChecked} from 'react-icons/im';
import List from './List/List';
import "./TaskList.css"
import { ACTIONS, useDispatch, useTasks } from '../../hooks/TasksContext';


export default function TaskList() {

    //hidden defines if the completed tasks are to be shown on not its value is also stored locally
    const [hidden, setHidden] = useState(()=>{
        const localData = localStorage.getItem('hidden');
        return localData ? JSON.parse(localData) : false;
    });
    const [counter, setCounter] = useState(0);//counter keeps track of the sort state 0-sort by time, 1-sort alphabetically descending, 2-sort alphabetically ascending
    const tasks = useTasks();//list of all the tasks from the context hook
    const dispatch = useDispatch();//functions to interact with the tasks

    useEffect(()=>{
        localStorage.setItem('hidden', JSON.stringify(hidden))
    },[hidden])
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
