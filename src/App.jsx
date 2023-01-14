import './App.css';
import React from 'react'
import Tab from './components/tab/tab'
import Home from './components/home/home'
import Blog from './components/blog/blog'
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'
import GitalkComponent from "gitalk/dist/gitalk-component"

const title="My Blog";
function App() {
  return (
    <div className="App">
      <p hidden>{document.title=title}</p>
      <center><Tab tab1=<Home /> tab2=<Blog /> /></center>
        {/* <GitalkComponent
          options={{
            clientID: "e3b29eaa3c0dd6fa5864",
            clientSecret: "781b08e06149b8f7af17e48ab57913e976a7da32",
            repo: "hwtalk-data",
            owner: "hwtalk",
            admin: "WP-Studio01",
            number: 2
          }}
        /> */}
    </div>
  );
}

export default App;
