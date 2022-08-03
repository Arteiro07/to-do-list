import React from 'react'
import Task from '../../Task/Task';
import "./List.css"

export default function List({tasks, hidden, dispatch}) {
    if(hidden){
        
       
        return (
            <>
                { tasks.filter(task => task.checked === !true).map(task => (
                    <>
                        <Task 
                                key={task.id}
                                task={task} 
                                dispatch={dispatch}
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
                            dispatch={dispatch}
                        /> 
                        <div className='list-line'></div>   
                    </div>
                ))}
            </>
        )

    }
}
