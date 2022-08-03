import React from 'react'
import Task from '../../Task/Task';
import "./List.css"
import { useTasks } from '../../../hooks/TasksContext';

export default function List( {hidden}) {
    const tasks = useTasks();
    
    if(hidden){
        
       
        return (
            <>
                { tasks.filter(task => task.checked === !true).map(task => (
                    <>
                        <Task 
                                key={task.id}
                                task={task} 
                            />
                        <div className='list-line'></div>    
                    </>  
                ))}
            </>
        )
    }
    else{
        return (
            <>
                {tasks.map(task => (
                    <div className='list-element'>    
                        <Task 
                            key={task.id}
                            task={task} 
                        /> 
                        <div className='list-line'></div>   
                    </div>
                ))}
            </>
        )

    }
}
