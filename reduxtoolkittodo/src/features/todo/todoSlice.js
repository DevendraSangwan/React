import {createSlice, nanoid } from '@reduxjs/toolkit';
// createSlice method se hm reducer bna skte h or action automatically ek hi place pr honge 
// nanoid se hm unique id generate kr skte h 
const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    // reducer current state leta h or action lega or return kr dega new state 
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
        updateTodo:(state,action)=>{
            const{id,text}=action.payload;
            const todo=state.todos.find((todo)=>todo.id===id);
            if(todo){
                todo.text=text;
            }
        }
    }
})

export const {addTodo, removeTodo,updateTodo} = todoSlice.actions

export default todoSlice.reducer    //isko saare reducer ka access de diyaa