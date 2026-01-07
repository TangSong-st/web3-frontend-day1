import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


function App() {

  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("Button clicked! 这是我第一次按钮点击");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Hello Web3, I'm learning React!</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}


export default App;
