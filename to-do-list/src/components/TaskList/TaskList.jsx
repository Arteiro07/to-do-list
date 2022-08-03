import {React, useReducer, useState} from 'react'
import AddTask from '../AddTask/AddTask';
import {ImCheckboxUnchecked, ImCheckboxChecked} from 'react-icons/im';
import List from './List/List';
import "./TaskList.css"

export const ACTIONS ={
    ADD_TASK: 'add-task',
    EDIT_TASK: 'edit-task',
    DELETE_TASK: 'delete-task',
    CHECK_TASK: 'check-task',
    SORT: 'sort'
}

function newTask( title){
    return{ id:Date.now(), title:title, checked:false};
}

function reducer (tasks, {type, payload}) {
    switch(type) {
        case ACTIONS.ADD_TASK:
            return[
                ...tasks, newTask(payload.title)
            ]
        case ACTIONS.EDIT_TASK:
            return(
                tasks.map(task =>{
                    if(task.id === payload.id){
                        return{...task, title: payload.title}
                    }
                    return task;
                })
            )
        case ACTIONS.DELETE_TASK:
            return tasks.filter(task => task.id !== payload.id);
        case ACTIONS.CHECK_TASK:
            return(
                tasks.map(task =>{
                    if(task.id === payload.id){
                        return{...task, checked: !task.checked}
                    }
                    return task;
                })
            )
        case ACTIONS.SORT:
            console.log(payload.counter);
            if(payload.counter===0){
                tasks.sort((a,b)=>{
                    let fa = a.title.toLowerCase(),
                        fb = b.title.toLowerCase();
            
                    if (fa < fb) {
                        return -1;
                    }
                    if (fa > fb) {
                        return 1;
                    }
                    return 0;
                })
            }
            else if(payload.counter===1){
                tasks.sort((b,a)=>{
                    let fa = a.title.toLowerCase(),
                        fb = b.title.toLowerCase();
            
                    if (fa < fb) {
                        return -1;
                    }
                    if (fa > fb) {
                        return 1;
                    }
                    return 0;
                })
            }
            else{
                tasks.sort((a, b) => {
                    return a.id - b.id;
                });
            }
            return tasks;
        default:
            return tasks    
    }
}

export default function TaskList() {

    const [hidden, setHidden] = useState(false);
    const [counter, setCounter] = useState(0);
    const [tasks, dispatch] = useReducer(reducer,[]);

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
