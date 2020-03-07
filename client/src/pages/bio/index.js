
import React from "react";
import "./style.css";
import data from "../../data.json";

function Biography(props) {
    // let style = {
    //     width: "25%",
    //     height: "25%"
    // };
    return (
        <div className="container">
            <img class="img-fluid skills" src={data.headshot} alt="my head"></img>
            <div className="ftapp">
                <h1 className="title">Biography</h1>
            <p>{data.bio}</p>

            </div>
        </div>
    )
        ;
}

export default Biography;