import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import './App.css';
import data from './data.json' 
import Navbar from './components/navbar';
import Wrapper from "./components/wrapper";
import Glance from "./pages/ataglance";
import Footer from "./components/footer";
import Portfolio from "./pages/portfolio";
import Project from "./pages/project";
// import Project from "./pages/projects";

function App() {
  return (
    <div>
      <Router>
      <Navbar/>
      <Wrapper>
      <Route exact path="/" component={Glance}/>
      <Route exact path="/portfolio" component={Portfolio}/>
      <Route exact path="/portfolio/:id" component={Project}/>

      {/* <Route exact path="/biography" component={Biography}/> */}
      </Wrapper>
      <Footer/>
      </Router>

    </div>
  )
}

export default App;
