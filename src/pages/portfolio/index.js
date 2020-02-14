
import React from "react";
import "./style.css";
import data from '../../data.json'

function Portfolio(props) {
    let style = {
        width: "25%",
        height: "25%"
    };
    return (
        <div className="container">

            {data.projects.map(item=>(
   <div className="card" style={style} >
   <img src={item.gif} className="card-img-top" alt={item} key={item}></img>
       <div className="card-body">
            <p className="card-text">{item.shortDescription}</p>
       </div>
       </div>


            ))}
         
         </div>
            )
          ;
        }
        
export default Portfolio;