import { Form } from './components/Form';
import Info from "./components/Info"
import './App.css';
import { useState } from 'react';

function App() {
  const [info,setInfo]=useState([]);
  const [state,setState]=useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <Form setInfo={setInfo} setState={setState}/>
        <Info info={info} setInfo={setInfo} state={state}/>
      </header>
    </div>
  );
}

export default App;
