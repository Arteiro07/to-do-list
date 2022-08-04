import React from 'react'
import Task from '../../Task/Task';
import "./List.css"
import { useTasks } from '../../../hooks/TasksContext';


export default function List( {hidden}) {
    const tasks = useTasks();
    
    //Show hidden tasks
    if(hidden){       
        return (
            <>
                { tasks.filter(task => task.checked === !true).map(task => (
                    <div key={task.id}>
                        <Task 
                                task={task} 
                            />
                        <div 
                            className='list-line'
                        >
                        </div>    
                    </div>  
                ))}
            </>
        )
    }
    //show all tasks
    else{
        return (
            <>
                {tasks.map(task => (
                    <div key={task.id}>    
                        <Task 
                            task={task} 
                        /> 
                        <div 
                            className='list-line'
                        >
                        </div>   
                    </div>
                ))}
            </>
        )
    }
}
