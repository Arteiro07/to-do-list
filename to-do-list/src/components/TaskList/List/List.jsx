import React from 'react'
import Task from '../../Task/Task';

export default function List({tasks, hidden, dispatch}) {
    if(hidden){
        
       
        return (
            <>
                { tasks.filter(task => task.checked === !true).map(task => (
                    <Task 
                            key={task.id}
                            task={task} 
                            dispatch={dispatch}
                        /> 
                ))}
            </>
        )
    }
    else{
        return (
            <>
                {tasks.map(task => (
                    <Task 
                            key={task.id}
                            task={task} 
                            dispatch={dispatch}
                        /> 
                ))}
            </>
        )

    }
}
