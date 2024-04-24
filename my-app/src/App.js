import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const title = "Wellcome Back!"
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  function MyButton({ count, primary, onClick }) {
    console.log(primary);
    return (
      <button onClick={onClick}>
        Clicked {count} times 
      </button>
    );
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Training React
        </h1>
        <h3>VietDay</h3>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyButton count={count} onClick={handleClick} primary title={title} />
        <MyButton count={count} onClick={handleClick}  primary title={title}/>
      </header>
    </div>
  );
}

export default App;
