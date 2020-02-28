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
import Push from "./components/push";
// import Project from "./pages/projects";

function App() {
  return (
    <div>
       <Navbar/> 
      <Wrapper>
      <Router>
      {/* <Navbar/>       */}
      <Route exact path="/boundsalexis" component={Glance}/>
      <Route exact path="/boundsalexis/biography" component={Biography}/>
      <Route exact path="/boundsalexis/portfolio" component={Portfolio}/>
      <Route exact path="/boundsalexisn /portfolio/:id" component={Project}/>
      </Router>
      </Wrapper>
      <Push/>
      <Footer/>
    </div>
  )
}

export default App;
