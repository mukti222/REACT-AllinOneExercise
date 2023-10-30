import React, { useEffect, useState, useContext, createContext } from 'react';

// import React from 'react';
import './App.css';

import Slides from './components/Slide';

function App({slides}) {
    return (
        <div>
            <header/>
            <div className="App">
                <Slides slides={slides} />
            </div>
        </div>
    );
}

function App2() { //MEMAKAI USESTATE
    let [number, setNumber] = useState(0)
    return(
      <div>
        <button onClick={() => {
          setNumber(number + 1)
        }}>+</button>
        <h1>{number}</h1>
        <button onClick={() => {
          setNumber(number - 1)
        }}>-</button>
      </div>
    )
  }
    //LANGKAH2
    //buat useState isinya initialCount & param function
    //tambahin h1 utk manipulasi jika 6
    //tambahkan useEffect utk setItem, number akan tetap tersimpan di dalam localStorage
    //ubah useState isinya utk getItem counter dari localstorage
    //setIsvalue hampir sama logikanya


    //LOGIKA
    //button + menambah number+1
    //jiika number nya 6 maka h1 muncul
    //number tersebut disimpan ke localstorage pake useEffect
    //jika reload page, maka masih menampilkan number di localstorage
    //caranya pake useState getItem 
  function App3({initialCount}) { //MEMAKAI USE EFFECT
    const [number, setNumber] = useState(
      parseInt(window.localStorage.getItem("counter")) || initialCount)


    //kode untuk manipulasi jika angka4
    const [isValue4, setisValue4] = useState(false)
    useEffect(()=> {
      if(number === 4){
        setisValue4(true)
        return
      } setisValue4(false)
    }, [number]
    )


    useEffect(() => {
      window.localStorage.setItem("counter", number)
    })

    return(
      <div>
        {/* jika angka 4 */}
        {isValue4 && <h1>nilai number sekarang adalah 4</h1>}
        {/* jika angka 5 */}
        {number===5 && <h1>Nilai number skrg 5</h1>}
        {/* jika angka 6 */}
        <h1 style={{visibility: number !==6 && "hidden"}}>HURUF INI MUNCUL klo angka 6</h1>
        <button onClick={() => {
          setNumber(number + 1)
        }}>+</button>

        <h1>{number}</h1>
        <button onClick={() => {
          setNumber(number - 1)
        }}>-</button>
      </div>
    )
  }




  //LATIHAN LIFTING STATE
  //atau menggunakan data count useState ke parent
  //tujuan :  di parent dan child terdapat number yang sama
  //jika ditambah kurang sama2 berubah kedua itu
  //menggunakan state

  //LATIHAN PROPS DRILLING
  //buat function Display isinya var count
  //lalu di ButtonApp4 span{count} ganti  <Display count={count}/>
  // App4 > ButtonApp4 > Display
  //logikanya :
  //nilai count di App4
  //dipassing ke ButtonApp4 
  //dipassing lagi ke DisplayApp4

  function DisplayApp4({count}){
    return(
      <div>
        <p>drilling test</p>
        <p>Count : {count}</p>
      </div>
    )
  }
  function ButtonApp4({count, changeState}) {
    return (
      <div>
        <button onClick={() =>changeState("increment")}>+
        </button>
        {/* <span> ={count}</span> */}
        <DisplayApp4 count={count}/>
        <button onClick={() =>changeState("decrement")}>-
        </button>
      </div>
    )
  }
  function App4() {
    const [count, setCount] = useState(0)
    function changeState(type) {
      switch (type) {
        case 'increment':
          setCount(count+1)
          break;
        case "decrement":
          setCount(count-1)
          break;
        default:
          break;
      }
    }

    return(
      <div className='App'>
        <p>Count:{count}</p>
        <ButtonApp4 count={count} changeState={changeState}/>
      </div>
    )
  }




//LATIHAN CONTEXT 
//buat context
const UserContext = createContext()
//menggunakan context ke user
function UserApp4() {
  const user = useContext(UserContext)
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  )
}
//passing data
function ProfileApp5() {
  return (
    <div>
      <UserApp4/>
    </div>
  )
}
//menggunakan context utk ambil data dari function lain
function App5(){
  const user = {name: 'John', email: 'john@gmail.com'}

return(
  <UserContext.Provider value={user}>
    <ProfileApp5/>
  </UserContext.Provider>
)
}




//LATIHAN CONTEXT COUNTING APPS
  //logikanya :
  //nilai count di App4 (PAKAI CONTEXT)
  //dipassing ke ButtonApp4 
  //dipassing lagi ke DisplayApp4
const CounterContext = createContext()

  function CounterContextProvider(props) {
    const [count, setCount] = useState(0)
    function changeState(type) {
      switch (type) {
        case 'increment':
          setCount(count+1)
          break;
        case "decrement":
          setCount(count-1)
          break;
        default:
          break;
      }
    }

    return(
      <CounterContext.Provider value={{ count, changeState}}>
        {props.children}
      </CounterContext.Provider>
    )
    
  }

  function DisplayApp6(){
    const {count} = React.useContext(CounterContext)
    return(
      <div>
        <p>drilling test</p>
        <p>Count : {count}</p>
      </div>
    )
  }

  function ButtonApp6() {
    const {changeState} = React.useContext(CounterContext)
    return (
      <div>
        <button onClick={() => changeState("increment")}>+
         </button>
        {/* <span> ={count}</span> */}
        <DisplayApp6 />
        <button onClick={() => changeState("decrement")}>-
        </button>
      </div>
    )
  }

  function App6() {
    //In your case, CounterContextProvider is the 
    //context provider that provides the count and 
    //changeState values to its child components.
    return(
      <div className='App'>
        {/* <p>Count:{count}</p> */}
        {/* <ButtonApp4 count={count} changeState={changeState}/> */}
        <CounterContextProvider>
          <ButtonApp6/>
        </CounterContextProvider>
      </div>
    )
  }



// export default App2;
// export default App3;
// export default App4;
// export default App5;
export default App6;