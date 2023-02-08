import './App.css';
import React from 'react';
import { Element } from './Component/Element/Element';
import { Tabela } from './Component/Tabela';

function App() {
  const [value, setValue] = React.useState(1);
  function addmaisum() {
    setValue(value + 1);
  }
  return (
    <div className="App">
      <section>
        <Element value={value} />
        <Tabela />
        <button onClick={addmaisum}>adcionar</button>
      </section>
    </div>
  );
}

export default App;
