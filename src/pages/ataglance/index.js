
import React from "react";
import "./style.css";
import data from '../../data.json'


function Glance(props) {
    let styles = {
        width: "70%",
        height: "20%"
    };
    return (
        <div className="container">
            <h1>At a glance...</h1>
            <div className="ftapp">
                {/* <h2>Featured Application</h2> */}
                <h3>{data.projects[0].name}</h3>
                <h6>{data.projects[0].shortDescription}</h6>
                <img src={data.projects[0].gif} style={styles} alt="politicalgif"></img>
                <div>
                <a href={data.projects[0].liveLink}>Live Link</a>
                <a href={data.projects[0].repoLink}>Repository Link</a>
                </div>
                <h3>Technical Skills</h3>
                {data.skills.map(item => (
                    <h6 key={item}>{item}</h6>
                ))}

            </div>
        </div>
    );
}

export default Glance;