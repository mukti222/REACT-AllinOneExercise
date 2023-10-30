// import React from 'react';
import '../App.css';
import Slides from '../components/Slide';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './store';
import { decrement, increment, customincrement } from './Appreduxtoolkit';

//MENGGUNAKAN REDUX sebagai pengganti CONTEXT
//context dihapus
//menambah file appredux, store.js

  function DisplayApp6(){
    const count = useSelector((state)=> state.counter.count)     
    return(
      <div>
        <p>drilling test</p>
        <p>Count : {count}</p>
      </div>
    )
  }

  function ButtonApp6() {
    const dispatch = useDispatch()
    return ( //increment berasal dari counterSlice
      <div>
        <button onClick={() => dispatch(increment())}>+
         </button>
        <DisplayApp6 />
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(customincrement({value:5}))}>+5</button>
      </div>
    )
  }

  function Example() {
    //counter dari store
    //count dari initialstate
    const count = useSelector((state)=> state.counter.count) 
        return (
            <h1>exmple :{count}</h1>
        )
    }


  function App7() {
    //In your case, CounterContextProvider is the 
    //context provider that provides the count and 
    //changeState values to its child components.
    return(
      <div className='App bg-sky-400'>
        <Provider store={store}>
          <Example/>
          <ButtonApp6/>
        </Provider>
      </div>
    )
  }


  export default App7;


