import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router';
import Blog from './components/Blog/Blog';
import DetailsArticles from './components/DetailsArticles'
function App() {
  return(
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/post/:titre" element={<DetailsArticles/>}/>
      </Routes>
    </div>
  )
}
export default App;