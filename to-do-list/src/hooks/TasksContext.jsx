import React, { useContext,useEffect , useReducer } from 'react'

const TasksContext = React.createContext();
const DispatchContext = React.createContext();

export function useTasks(){
  return useContext(TasksContext)
}
export function useDispatch(){
  return useContext(DispatchContext)
}

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

export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(reducer, [], ()=>{
    const localData = localStorage.getItem('tasks');
    return localData ? JSON.parse(localData) : [];
  }); 

  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(tasks))
  },[tasks]);

  return (
    <TasksContext.Provider value={tasks}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </TasksContext.Provider>
  )
}


