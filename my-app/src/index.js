import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import './demo.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import TodoList from './demo';
// import Gallery from './dataApp';
import './tictactoe.css'
import Game from './tictactoe';
import Avatar from './avatar';
// import VideoPlayer from './useEffect'
// import MyApp from './useContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Game />,
    <Avatar />,
  {/* </React.StrictMode> */}
);

// If you want to start measuring performance in your app pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
