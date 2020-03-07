
import React from "react";
import "./style.css";
import data from "../../data.json";


function Glance(props) {
 
    return (
        <div className="container mainglance">
            <h1>Alexis at a glance...</h1>
            <div className="ftapp">
                {/* <h2>Featured Application</h2> */}
                <h3>{data.projects[0].name}</h3>
                <img className="image" src={data.projects[0].gif}  alt="politicalgif"></img>
                
                           <h2>Highlights</h2> 
                           <ul>
        
                         {data.projects[0].highlights.map(item => (
                    <li>{item}</li>
                ))}
                </ul>
           
                <div className="links">
                      <a href={data.projects[0].liveLink} >Live Link</a>
                    <a href={data.projects[0].repoLink} >Repository Link</a>
                    <a href={data.projects[0].name} className="btn btn-primary" id={data.projects[0].name}>Get Details</a>
                  
                </div>
                </div>
                <div className="skills">
                <h3>Technical Skills</h3>
                <div className="technical">
                    {data.skills.map(item => (
                        <h6 key={item}>{item}</h6>
                    ))}
                </div>
                </div>
             
                <div className="edu">
                    <h3>Education</h3>
                    <h6>{data.education[1]}</h6>
                    <h6>{data.education[0]}</h6>
                </div>


            
        </div>
    );
}

export default Glance;