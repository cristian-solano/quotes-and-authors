import './App.css';
import Quotes from './Quotes.json'
import { useState } from 'react';

function App() {

  const random = (max) => {
    return Math.floor(Math.random() * max.length );
  }

  const Colors = [
    'red', 'green', 'skyblue', 'salmon', 'blueviolet'
  ]
  const Colors2 = [
    'black', 'brown'
  ]


  const [quote, setQuote] = useState(Quotes.quotes[random(Quotes.quotes)])
  const [currentColor, setCurrentColor] = useState(Colors[random(Colors)])
  const [currentColor2, setCurrentColor2] =  useState(Colors2[random(Colors2)])

  const handlerChangeQuote = () => {
    setQuote(Quotes.quotes[random(Quotes.quotes)])
    setCurrentColor(Colors[random(Colors)])
    setCurrentColor2(Colors[random(Colors2)])
    
    
  }

  

  

  return (
    <div className="App">
      <div className="App-header" style={{backgroundColor : currentColor}}>
        <div style={{border: "3px solid black",color: "black",backgroundColor: "white", width: "400px",  height:"auto"}}>
        <h3>"{quote.quote}"</h3>
        </div>
        <div>
        <p style={{fontFamily: "cursive"}}>{quote.author}</p>
        </div>
        
        <button style={{color: "white", padding: "7px", borderRadius: "8px",backgroundColor: currentColor2 }} onClick={handlerChangeQuote}>Next quote</button>
      </div>
    </div>
  );
}

export default App;
