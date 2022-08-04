import {React, useState} from 'react'
import { ACTIONS, useDispatch } from '../../hooks/TasksContext'
import "./AddTask.css"
import { inValidTask } from '../../Regex';


export default function AddTask() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    
    //press enter to crete new task or click the create button
    function onKeyUp(e) {
        if (e.key === 'Enter' && !inValidTask.test(title) ) {
          onCreate();
        }
        else if (inValidTask.test(title) )setTitle("");
        return;
    }  
    
    function onCreate() {
        if(inValidTask.test(title))
        {
            setTitle("")
            return;
        }
        dispatch({type: ACTIONS.ADD_TASK, payload:{title}});
        setTitle("");
    }

    //markdown possibilities ?
  return (
    <span>
        <div className='AddTask-Container'>
            <input 
                value={title} 
                placeholder='title' 
                onChange={e => setTitle(e.target.value)} 
                type="text"
                onKeyUp={onKeyUp}
            />
            <button 
                className="AddTask-Create" 
                onClick={onCreate}
            > 
                create 
            </button> 
        </div>
    </span>
  )
}
