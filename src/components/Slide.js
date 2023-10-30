import React, { useState } from 'react';

let judul1 = "";
let text1 = "";
function Slides() {
const [angka, setAngka] = useState(0)
function clickTambah() {
  return setAngka(angka + 1)
}
function clickKurang() {
  return setAngka(angka - 1)
}
function clickReset(){
  return setAngka(0)
}



if (angka === 0){
judul1 = 'Today Workout Plan';
text1 = 'we re gonna do 3 fundamental exercise'
} else if (angka === 1){
judul1 = 'First, 10 push ups';
text1 = 'do 10 reps. remember about full range of emotion.'
} else if (angka ===2){
  judul1 = 'Next, 20 squats';
  text1 = 'squats are important'
} else if (angka ===3){
   judul1 = 'Finally, 15 sit ups';
  text1 = 'slight bend your knee'
} else if (angka === 4){
   judul1 = 'Great Job!';
  text1 = 'you made it, have a nice day'
}
  
  
return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" onClick={clickReset}>Restart</button>
                <button data-testid="button-prev" className="small" onClick={clickKurang}>Prev</button>
                <button data-testid="button-next" className="small" onClick={clickTambah}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{judul1}</h1>
                <p data-testid="text">{text1}</p>
            </div>
        </div>
    ); 

}

export default Slides;








