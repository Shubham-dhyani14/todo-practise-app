import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const todoSlice = createSlice({
    name: 'todo' , 
    initialState : {
        todos : [
            {id:11  , isCompleted:false ,detail: 'todo e.g : Create E-commerce Project' , time: Date.now()}
        ]
    },
    reducers : {
        addTodo : (state , action)=>{
            const todo = {id:uuidv4(), isCompleted:false  , detail: action.payload , time: Date.now()}
            state.todos.push(todo) ;
            console.log('added ' , todo);
        } ,

        toggleDone : (state , action)=>{
            // console.log(action.payload);
            state.todos = state.todos.map((todo)=>
                // console.log(todo);
                todo.id == action.payload ? {...todo , isCompleted : !todo.isCompleted} : todo
            )
        } ,

        deleteTodo : (state , action)=>{
            state.todos = state.todos.filter(todo=>todo.id !== action.payload)
        } ,

        updateTodo : (state , action)=>{
            console.log('update' , action.payload)
            state.todos = state.todos.map((todo)=>
            todo.id == action.payload.id ? {...todo , detail : action.payload.detail} : todo
        )
        }
    }
})

export const {addTodo , toggleDone, deleteTodo , updateTodo} = todoSlice.actions ;

export default todoSlice.reducer