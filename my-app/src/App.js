import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const products = [
  { title: 'HTML', isFruit: true, id: 1 },
  { title: 'CSS', isFruit: false, id: 2 },
  { title: 'JS', isFruit: true, id: 3 },
];
function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'yellow' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );
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
        <MyButton count={count} onClick={handleClick} />
        <MyButton count={count} onClick={handleClick} />
        <ul>{listItems}</ul>
      </header>
    </div>
  );
  function MyButton({ count, onClick }) {
    return (
      <button onClick={onClick}>
        Clicked {count} times
      </button>
    );
  }
}

export default App;
