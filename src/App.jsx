import './App.css';
import React from 'react'
import Tab from './components/tab/tab'
import Home from './components/home/home'
import Blog from './components/blog/blog'

const title="My Blog";
function App() {
  return (
    <div className="App">
      <p hidden>{document.title=title}</p>
      <Tab tab1=<Home /> tab2=<Blog /> />
    </div>
  );
}

export default App;
