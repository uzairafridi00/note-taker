import React,{FC} from 'react';
import './App.css';

import Input from "./components/Input"

const App:FC = () => {
  return (
    <>
      <div className="App">
        <span className="heading">Note Taker</span>
        <Input />
      </div>
    </>
  );
}

export default App;
