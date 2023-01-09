import './App.css';
import React from 'react'
import Tab from './components/tab/tab.jsx'

const title="My Blog";
function App() {
  return (
    <div className="App">
      <p hidden>{document.title=title}</p>
      <Tab tab1=<p>主页</p> tab2=<p>文章</p> />
    </div>
  );
}

export default App;
