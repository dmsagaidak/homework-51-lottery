import React, {useState} from 'react';
import './App.css';
import Lottery from "./Lottery/Lottery";

function App() {
    const [numbers, setNumbers] = useState([
    {number: 5 + Math.floor(Math.random() * (36 - 5 + 1))},
    {number: 5 + Math.floor(Math.random() * (36 - 5 + 1))},
    {number: 5 + Math.floor(Math.random() * (36 - 5 + 1))},
    {number: 5 + Math.floor(Math.random() * (36 - 5 + 1))},
    {number: 5 + Math.floor(Math.random() * (36 - 5 + 1))},
  ]);

  numbers.sort( (a,b)=>{
    return a.number - b.number;
  });


  const newNumbers = () =>{
    setNumbers([
      {number: 5 + Math.floor(Math.random() * (36 - 5 + 1))},
      {number: 5 + Math.floor(Math.random() * (36 - 5 + 1))},
      {number: 5 + Math.floor(Math.random() * (36 - 5 + 1))},
      {number: 5 + Math.floor(Math.random() * (36 - 5 + 1))},
      {number: 5 + Math.floor(Math.random() * (36 - 5 + 1))},
    ])
  };


  return (
    <div className="App">
      <button className="newNumbers" onClick={newNumbers}>New numbers</button>
      <Lottery number={numbers[0].number}/>
      <Lottery number={numbers[1].number}/>
      <Lottery number={numbers[2].number}/>
      <Lottery number={numbers[3].number}/>
      <Lottery number={numbers[4].number}/>
    </div>
  );
}

export default App;
