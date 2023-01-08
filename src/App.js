import './App.css';
import React from 'react'
import ReactDOM from 'react-dom'
import Tab from './components/tab/tab.jsx'

const title="My Blog";
function App() {
  return (
    <div className="App">
      <p hidden>{document.title=title}</p>
      <Tab tab1=<p>1</p> tab2=<p>2</p> />
    </div>
  );
}

export default App;
