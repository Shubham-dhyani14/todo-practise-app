import React, { useRef, useState } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { addTodo , deleteTodo, toggleDone, updateTodo } from '../store/todoSlice';
export default function Todos() {
    const dispatch = useDispatch() ;
    const task = useRef('') ;
    const [isUpdating, setIsUpdating] = useState(false) ;
    const [updateDetail, setUpdateDetail ] = useState(null) ;
    const todos = useSelector((state)=>state.todoReducers.todos) ;
    console.log('todos' ,todos);
    function handleSubmit(){
        console.log('submit');
        const text = task.current.value ;
        isUpdating? dispatch(updateTodo({id: updateDetail , detail: text})): dispatch(addTodo(text)) ;
        task.current.value = '' ;
        setIsUpdating(false) ;
    }
  return (
    
    <div className='flex w-full  items-center flex-col mt-6'>

            <form onSubmit={(e)=>{
                    e.preventDefault();
                    handleSubmit() ;
                }} action="" className='w-5/6 flex justify-between md:w-4/6 mb-10' >
                <textarea ref={task} type="text" className='w-5/6 px-4 py-2 resize-none focus:h-28 h-12 transition-all duration-500 text-black rounded-lg focus:ring-2 ring-purple-500 outline-none' placeholder='create new todo' />
                <button type='submit' className=' rounded-md bg-purple-600 px-3 py-2 max-h-14'> {isUpdating? 'Update':'Add' }</button>
            </form>
            <div className='px-10'>
            Created to revise & practise CRUD opreation in react with redux
            watch more at my <a className='text-blue-300' href="https://github.com/Shubham-dhyani14/react-web-dev">github [link🔗]</a>
            
        </div>
        <h1 className='text-purple-400 text-5xl font-semibold underline mb-5'>All Todos</h1>
      {
       todos.map(todo=>(<div style={{ textDecoration: todo.isCompleted?'line-through':'none'}}  key={todo.id} className='flex my-2  flex-row justify-between w-5/6 md:w-4/6 bg-slate-200 text-gray-800 p-4 rounded-lg'>
        {todo.detail}

        <div className='flex gap-4'>
            <button onClick={()=>{
                // update
                task.current.value = todo.detail ;
                task.current.focus();
                setIsUpdating(true) ;
                setUpdateDetail(todo.id)
                // dispatch(updateTodo(todo.id));
            }}><ion-icon name="create"></ion-icon></button>

            <input onClick={()=>dispatch(toggleDone(todo.id))} type="checkbox" checked={todo.isCompleted ? true : false} className='h-8 w-4 ' name="" id="" />
            <button onClick={()=>{
                dispatch(deleteTodo(todo.id));
            }}><ion-icon name="trash"></ion-icon></button>
         
        </div>
       </div>))
      }
    </div>
  )
}
