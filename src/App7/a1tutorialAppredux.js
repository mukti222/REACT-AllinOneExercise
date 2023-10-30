import {
    createStore
} from 'redux'

//bikin state -> oobject 
const initialState = {
count : 0
}

//Signature of reducer
//(state, action) => newState

//reducer 
//fungsi yg mengambil curent value(state), mengembalikan value baru(action)
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
        return {
            ...state,
            count: state.count +2
        }
    case 'decrement':
        return {
            ...state,
            count: state.count -1
        }
    default:
        return state
  }
}

//store
const store = createStore(reducer)
store.subscribe(() => {
    console.log('store updated', store.getState());
})
console.log(store.getState()); 


//dispatch
//tombol nambah
store.dispatch({type:"increment"})
store.dispatch({type:"increment"})
store.dispatch({type:"decrement"})
console.log(store.getState());