
import React from "react";
import "./style.css";
import data from "../../data.json";

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
             <h1>{data.projects[index].name}</h1>
            <div className="ftapp">
            {/* <h3>{data.projects[index].name}</h3> */}
            {/* <h6>{data.projects[index].shortDescription}</h6> */}
            <img className="image" src={data.projects[index].gif} alt={data.projects[index].name}></img>
            <h3>Highlights</h3>
<ul>
{data.projects[index].highlights.map(item => (
                <li>{item}</li>
            ))}
</ul>
     
            <h3>Description</h3>
                <h6>{data.projects[index].longDescription}</h6>

            </div>
          

            <div className="skills">
            <h3>Technologies</h3>

                <div className="technical">
                {data.projects[index].technologies.map(item => (
                <h6>{item}</h6>
            ))}
                </div>
                    <div className="links">
                    {data.projects[index].isDeployed &&
                    <a className="link" href={data.projects[index].liveLink}>Live Link</a>
                }
                {/* <br></br> */}
             
         
                <a className="link" href={data.projects[index].repoLink}>Repository Link</a>
                {/* <br></br> */}
         

                <a className="link" href="/portfolio" className="btn btn-primary">Return to portfolio</a>

                    </div>
            </div>
            {/* <a href="/portfolio" className="btn btn-primary">Return to portfolio</a> */}
        </div>
    );
}

export default Project;