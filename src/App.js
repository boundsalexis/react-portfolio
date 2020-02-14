import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import data from './data.json' 
import Navbar from './components/navbar';
import Wrapper from "./components/wrapper";
import Glance from "./pages/ataglance";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Router>
      <Navbar/>
      <Wrapper>
      <Route exact path="/" component={Glance}/>
      </Wrapper>
      <Footer/>
      </Router>

    </div>
  )
}

export default App;
