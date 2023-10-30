import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    count: 1,
    name: 'John'
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state){
            state.count++
        },
        decrement(state){
            state.count--
        },
        customincrement(state, action){
            state.count += action.payload.value
        }
    }
}) 

export const {
    increment, 
    decrement,
    customincrement 
} = counterSlice.actions

export default counterSlice.reducer
