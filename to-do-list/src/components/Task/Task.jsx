import {React, useState} from 'react'
import {ImCheckboxUnchecked, ImCheckboxChecked} from 'react-icons/im';
import {AiFillDelete, AiFillEdit} from 'react-icons/ai';
import "./Task.css"
import { ACTIONS } from '../TaskList/TaskList';
import { inValidTask } from '../../Regex';


export default function Task({task, dispatch}) {
    
    const[edit, setEdit] = useState(false);
    const[title, setTitle] = useState("");

    function onKeyUp(e) {
        if (e.key === 'Enter' && !inValidTask.test(title)  ) {
            dispatch({type: ACTIONS.EDIT_TASK, payload:{id: task.id, title:title }})
            setEdit(false);
        }
        else if (inValidTask.test(title))setTitle("");
        return;
    }  



    return (
        <div className='task-container'>
            <div 
                className='task-checkBox' 
                onClick={ () => dispatch({type: ACTIONS.CHECK_TASK, payload:{id: task.id}})}>
                    {task.checked ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
            </div>
            {
                edit?
                <input 
                    value={title}
                    placeholder={task.title}
                    onChange={(e)=>setTitle(e.target.value)}
                    onKeyUp={onKeyUp}
                />:
                <div className='task-title'>{task.title}</div>
            }
            <div className='task-tools'>
                <div 
                    className='task-edit'
                    onClick={() => setEdit(!edit)}
                >
                    <AiFillEdit />
                </div>
                <div 
                    className='task-delete' 
                    onClick={ () => dispatch({type: ACTIONS.DELETE_TASK, payload:{id: task.id}})}
                >
                    <AiFillDelete />
                </div>   
            </div>
        </div>
    )
}
