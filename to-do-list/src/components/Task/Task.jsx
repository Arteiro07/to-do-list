import {React, useState} from 'react'
import {ImCheckboxUnchecked, ImCheckboxChecked} from 'react-icons/im';
import {AiFillDelete, AiFillEdit} from 'react-icons/ai';
import "./Task.css"
import { ACTIONS, useDispatch} from '../../hooks/TasksContext';
import { inValidTask } from '../../Regex';


export default function Task({task}) {
    
    const[edit, setEdit] = useState(false);
    const[title, setTitle] = useState("");
    
    const dispatch = useDispatch();
    
    function onKeyUp(e) {
        //press enter to submit new title
        if (e.key === 'Enter' && !inValidTask.test(title)  ) {
            dispatch({type: ACTIONS.EDIT_TASK, payload:{id: task.id, title:title }})
            setEdit(false);
        }
        //press escape to leave edit mode
        else if (e.key ==='Escape'){
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
                edit
                ?<input 
                    value={title}
                    placeholder={task.title}
                    onChange={(e)=>setTitle(e.target.value)}
                    onKeyUp={onKeyUp}
                    autoFocus={true}
                />
                :<div className={'task-title-'+task.checked.toString()}>{task.title}</div>
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
