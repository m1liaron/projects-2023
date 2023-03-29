import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './Pages/About';
import Shop from './Pages/Shop';
import ItemDetail from './Pages/ItemDetail';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/shop" exact element={<Shop/>}/>
        <Route path='/shop/:id' element={<ItemDetail/>}/>
      </Routes>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
    <img src="https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg" alt="" />
  </div>
);

export default App;
