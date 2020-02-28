
import React from "react";
import "./style.css";
import data from '../../data.json.js'

function Biography(props) {
    // let style = {
    //     width: "25%",
    //     height: "25%"
    // };
    return (
        <div className="container">
            <img class="img-fluid" src={data.headshot} alt="my head"></img>
    <p>{data.bio}</p>
        </div>
    )
        ;
}

export default Biography;