import {configureStore} from '@reduxjs/toolkit';
//configureStore is a method jisse ki hm store bna paayenge ...mtlb Redux store create kr skte h
// store in the sense ek jgah jhan saari values h or phir jb hme value chahiye to hm vhan se direct le le
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
    reducer: todoReducer
})