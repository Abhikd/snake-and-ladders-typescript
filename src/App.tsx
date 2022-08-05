import React, { useState } from 'react';
import './App.css';
import Snake from './Snake';
import Square from './Square';

const initialState: string[]  = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
                                 "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
                                 "21", "22", "23", "24", "25", "26", "27", "28", "29", "30",
                                 "31", "32", "33", "34", "35", "36", "37", "38", "39", "40",
                                 "41", "42", "43", "44", "45", "46", "47", "48", "49", "50",
                                 "51", "52", "53", "54", "55", "56", "57", "58", "59", "60",
                                 "61", "62", "63", "64", "65", "66", "67", "68", "69", "70",
                                 "71", "72", "73", "74", "75", "76", "77", "78", "79", "80",
                                 "81", "82", "83", "84", "85", "86", "87", "88", "89", "90",
                                 "91", "92", "93", "94", "95", "96", "97", "98", "99", "100"];


function App() {

    const [gameState, setGameState] = useState(initialState);
    
    const [index, setIndex] = useState(0);

    const [index2, setIndex2] = useState(0);

    const [p1, setP2] = useState(1);

    const onRolled = () => {
      if(p1){
      let roll = Math.floor(Math.random() * 6) + 1;;
      let numbers = Array.from(gameState);
      let tempValue = numbers[index];
      let temp = index;
      if(temp + roll <=99){
      temp = temp + roll;
      if(temp === 99) {
        alert("Player One won!");
       }
      else if(temp === 47  || temp === 76  || temp === 97) {
        if(temp === 47) temp = 1;
        else if(temp === 76) temp = 42;
        else if(temp === 97) temp = 9;
       } 
      if(numbers[temp] === "P2") numbers[temp] = "P1 P2"
      else numbers[temp] = "P1";
      if(numbers[index] === "P1 P2") numbers[index] = "P2";
      else numbers[index] = initialState[index];
      setGameState(numbers);
      setIndex(temp);
      document.getElementById("p")!.innerHTML = roll.toString();
      setP2(0); 
    }
    else document.getElementById("p")!.innerHTML = roll.toString();
      }

      else {
        let roll = Math.floor(Math.random() * 6) + 1;;
        let numbers = Array.from(gameState);
        let tempValue2 = numbers[index2];
        console.log(tempValue2);
        let temp2 = index2;
        if(temp2 + roll <= 99){
        temp2 = temp2 + roll;
        if(temp2 === 99){
          alert("Player 2 won!")
        }
        if(temp2 === 47  || temp2 === 76  || temp2 === 97) {
          if(temp2 === 47) temp2 = 1;
          else if(temp2 === 76) temp2 = 42;
          else if(temp2 === 97) temp2 = 9;
         } 
        if(numbers[temp2] === "P1") numbers[temp2] = "P1 P2" ;
        else numbers[temp2] = "P2"; 
        if(numbers[index2] === "P1 P2") numbers[index2] = "P1"
        else numbers[index2] = initialState[index2];
        setGameState(numbers);
        setIndex2(temp2);
        document.getElementById("p")!.innerHTML = roll.toString();
        setP2(1);
        }
        else document.getElementById("p")!.innerHTML = roll.toString();
      }

    }

  return (
    <div className="App">
      <div className='board__Style'>
     <div>
      <Square state={gameState[99]} />
      <Square state={gameState[80]} />
      <Square state={gameState[79]} />
      <Square state={gameState[60]} />
      <Square state={gameState[59]} />
      <Square state={gameState[40]} />
      <Square state={gameState[39]} />
      <Square state={gameState[20]} />
      <Square state={gameState[19]} />
      <Square state={gameState[0]} />
     </div>

     <div>
      <Square state={gameState[98]} />
      <Square state={gameState[81]} />
      <Square state={gameState[78]} />
      <Square state={gameState[61]} />
      <Square state={gameState[58]} />
      <Square state={gameState[41]} />
      <Square state={gameState[38]} />
      <Square state={gameState[21]} />
      <Square state={gameState[18]} />
      <Square state={gameState[1]} />
     </div>

     <div>
      <Square state={gameState[97]} />
      <Square state={gameState[82]} />
      <Square state={gameState[78]} />
      <Square state={gameState[62]} />
      <Square state={gameState[57]} />
      <Square state={gameState[42]} />
      <Square state={gameState[37]} />
      <Square state={gameState[22]} />
      <Square state={gameState[17]} />
      <Square state={gameState[2]} />
     </div>

     <div>
      <Square state={gameState[96]} />
      <Square state={gameState[83]} />
      <Square state={gameState[77]} />
      <Square state={gameState[63]} />
      <Square state={gameState[56]} />
      <Square state={gameState[43]} />
      <Square state={gameState[36]} />
      <Square state={gameState[23]} />
      <Square state={gameState[16]} />
      <Square state={gameState[3]} />
     </div>

     <div>
      <Square state={gameState[95]} />
      <Square state={gameState[84]} />
      <Square state={gameState[76]} />
      <Square state={gameState[64]} />
      <Square state={gameState[55]} />
      <Square state={gameState[44]} />
      <Square state={gameState[35]} />
      <Square state={gameState[24]} />
      <Square state={gameState[15]} />
      <Square state={gameState[4]} />
     </div>

     <div>
      <Square state={gameState[94]} />
      <Square state={gameState[85]} />
      <Square state={gameState[75]} />
      <Square state={gameState[65]} />
      <Square state={gameState[54]} />
      <Square state={gameState[45]} />
      <Square state={gameState[34]} />
      <Square state={gameState[25]} />
      <Square state={gameState[14]} />
      <Square state={gameState[5]} />
     </div>

     <div>
      <Square state={gameState[93]} />
      <Square state={gameState[86]} />
      <Square state={gameState[74]} />
      <Square state={gameState[66]} />
      <Square state={gameState[53]} />
      <Square state={gameState[46]} />
      <Square state={gameState[33]} />
      <Square state={gameState[26]} />
      <Square state={gameState[13]} />
      <Square state={gameState[6]} />
     </div>

     <div>
      <Square state={gameState[92]} />
      <Square state={gameState[87]} />
      <Square state={gameState[73]} />
      <Square state={gameState[67]} />
      <Square state={gameState[52]} />
      <Square state={gameState[47]} />
      <Square state={gameState[32]} />
      <Square state={gameState[27]} />
      <Square state={gameState[12]} />
      <Square state={gameState[7]} />
     </div>

     <div>
      <Square state={gameState[91]} />
      <Square state={gameState[88]} />
      <Square state={gameState[72]} />
      <Square state={gameState[68]} />
      <Square state={gameState[51]} />
      <Square state={gameState[48]} />
      <Square state={gameState[31]} />
      <Square state={gameState[28]} />
      <Square state={gameState[11]} />
      <Square state={gameState[8]} />
     </div>

     <div>
      <Square state={gameState[90]} />
      <Square state={gameState[89]} />
      <Square state={gameState[71]} />
      <Square state={gameState[69]} />
      <Square state={gameState[50]} />
      <Square state={gameState[49]} />
      <Square state={gameState[30]} />
      <Square state={gameState[29]} />
      <Square state={gameState[10]} />
      <Square state={gameState[9]} />
     </div>
     </div>

     <button style={{zIndex: 100}}  onClick={() => onRolled()} >Roll</button>

     <p id="p">0</p>

   <Snake />
    </div>
  );
}

export default App;
