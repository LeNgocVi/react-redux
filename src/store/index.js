import { createSlice, configureStore } from '@reduxjs/toolkit'
import todosReducer from './reducer/todosSlice'

//Store
const store = configureStore({
    reducer:{
        todosReducer: todosReducer
    }
})


export default store