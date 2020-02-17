import React from 'react';
import {
  BrowserRouter as Router,

  Route,

} from "react-router-dom";
import './App.css';
import Navbar from './components/navbar';
import Wrapper from "./components/wrapper";
import Glance from "./pages/ataglance";
import Footer from "./components/footer";
import Portfolio from "./pages/portfolio";
import Project from "./pages/project";
import Biography from './pages/bio';
// import Project from "./pages/projects";

function App() {
  return (
    <div>
      <Wrapper>
      <Router>
      <Navbar/>      
      <Route exact path="/" component={Glance}/>
      <Route exact path="/biography" component={Biography}/>
      <Route exact path="/portfolio" component={Portfolio}/>
      <Route exact path="/portfolio/:id" component={Project}/>
      </Router>
      </Wrapper>
      <Footer/>
    </div>
  )
}

export default App;
