
import React from "react";
import "./style.css";
import data from "../../data.json";

function Portfolio() {
    // let style = {
    //     width: "25%",
    //     height: "25%"
    // };
    
    return (
        <div className="container mainportfolio">
            {data.projects.map(item => (
                <div className="card" key={item.name} >
                    <img className="scale card-img-top"src={item.gif}  alt={item.name} ></img>
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.shortDescription}</p>
                        <a href={`/${item.name}`} className="btn btn-primary">Get Details</a>
                    </div>
                </div>
            ))}

        </div>
    )
        ;
}

export default Portfolio;