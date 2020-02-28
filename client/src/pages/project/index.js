
import React from "react";
import "./style.css";
import data from '../../data.json.js';

function Project(props) {
    let index;
    const indexFinder = (props) => {
        for (let i = 0; i < data.projects.length; i++) {
            if (props.match.params.id === data.projects[i].name) {
                return (i)
            }
        }
    }
    index = indexFinder(props);
  
    return (
        <div className="container">
            <div className="project">
            <h3>{data.projects[index].name}</h3>
            {/* <h6>{data.projects[index].shortDescription}</h6> */}
            <img className="projectimage" src={data.projects[index].gif} alt={data.projects[index].name}></img>
     {data.projects[index].highlights.map(item => (
                <h6>{item}</h6>
            ))}
            </div>
          

            <div class="projectlinks">
                {data.projects[index].isDeployed &&
                    <a href={data.projects[index].liveLink}>Live Link</a>
                }
                <a href={data.projects[index].repoLink}>Repository Link</a>
                <a href="/portfolio" className="btn btn-primary">Return to portfolio</a>
            </div>
            {/* <a href="/portfolio" className="btn btn-primary">Return to portfolio</a> */}
        </div>
    );
}

export default Project;