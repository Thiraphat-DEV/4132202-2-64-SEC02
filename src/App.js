import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import Table from './components/Table'
function App() {
  const id = "630112418048-2"
  const [color, setColor]  = useState("#000");

  return (
    <div className="App">
      <h1>My name is Thiraphat</h1>
     
      <Table />
      <a href="https://github.com/Thiraphat-DEV" target="_blank">Click to github</a>
    </div>

  );
}

export default App;
