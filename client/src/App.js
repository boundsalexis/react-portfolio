import React from 'react';
// import {
//   BrowserRouter as Router,

//   Route,

// } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
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
   
   <Switch>
        <Route exact path="/"><Glance/></Route>
      <Route path="/biography"><Biography/></Route>
      <Route path="/portfolio"><Portfolio/></Route>
      <Route path="/portfolio/:id"><Project/></Route>

        </Switch>
   </Router>
   </Wrapper>
   <Push/>
   <Footer/>
 </div>
  )
}

export default App;
