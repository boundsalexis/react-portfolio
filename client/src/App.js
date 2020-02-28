import React from 'react';
import {
  BrowserRouter as Router,

  Route,

} from "react-router-dom";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from 'react-router-dom';
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
   <Route exact path="/" component={Glance}/>
   <Route exact path="/biography" component={Biography}/>
   <Route exact path="/portfolio" component={Portfolio}/>
   <Route exact path="/portfolio/:id" component={Project}/>
   </Router>
   </Wrapper>
   <Push/>
   <Footer/>
 </div>
  )
}

export default App;
