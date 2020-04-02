
import React from "react";
import "./style.css";
import data from "../../data.json";

function Biography(props) {
   
    return (
        <div className="container">
            <img className="img-fluid skills" src={data.headshot} alt="my head"></img>
            <div className="ftapp">
                <h1 className="title">Biography</h1>
            <p className="bioparagraph">{data.bio}</p>

            </div>
        </div>
    )
        ;
}

export default Biography;