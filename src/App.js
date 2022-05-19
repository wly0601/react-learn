import { useState } from "react"
import './App.css';

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [showText, setShowText] = useState(false);
  const sum = count1 + count2;
  const [name, setName] = useState("Guest")
  return (
    <div className="App">
      <header className="App-header">
        <h1> Hello, {name}!</h1>
        <div className="App-grid-container">
          <div className="App-grid-item">
            <button className="App-button" onClick={() => setName("Anya Forger")}>Anya Forger</button>
          </div>
          <div className="App-grid-item">
            <button className="App-button" onClick={() => setName("Loid Forger")}>Loid Forger</button>
          </div>
          <div className="App-grid-item">
            <button className="App-button" onClick={() => setName("Yor Forger")}>Yor Forger</button>
          </div>  
        </div>
        
        <h1> Let's Play Some Math! </h1>
          <div className="App-grid-container">
            <div className="App-grid-item">
              <h4> First Number : </h4>
              <h3> {count1} </h3>
              <button className="App-button" onClick={() => {setCount1(count1 + 1); setShowText(false)}}>Click Me!</button>
            </div>
            <div className="App-grid-item">
              <h4> Second Number : </h4>
              <h3> {count2} </h3>
              <button className="App-button" onClick={() => {setCount2(count2 + 1); setShowText(false)}}>Click Me!</button>
            </div>
            <div className="App-grid-item">
              <h4> Sum of Those Numbers : </h4>
              <h3> {count1} + {count2} =  {showText ? sum : null}  </h3>
              <button className="App-button" onClick={() => setShowText(true)}>Reveal Answer!</button>
            </div>
          </div> 
      </header>
    </div>
  );
}

export default App;
