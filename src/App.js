import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  const [value, setValue] = React.useState(0);
  const [value1, setValue1] = React.useState(0);

  const [addRes, setAddRes] = React.useState(0);

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleChange1 = event => {
    setValue1(event.target.value);
  };

  const hello = async (value, value1) => {
    const response = await fetch("./hello.wasm");
    const file = await response.arrayBuffer();
    const wasm = await WebAssembly.instantiate(file);
    const {add} = wasm.instance.exports;

    let x = add(value, value1)

    return x;
  };

  const runHello = async () => {
    let res = await hello(value, value1);
    setAddRes(res);
  };


    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <input
            type="number"
            placeholder="Your fav number"
            value={value}
            onChange={handleChange}
        />
        <input
            type="number"
            placeholder="Your fav number"
            value={value1}
            onChange={handleChange1}
        />
        <button onClick={runHello}>Click me!</button>
        {(addRes !== 0) ?
            <p>
              {addRes}
            </p>:
            <p></p>}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;