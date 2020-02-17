
import React from "react";
import "./style.css";
import data from '../../data.json';
// import Live from "../../components/livesites"

function Project(props) {
    console.log(props.match.params.id)
    let index;
    const indexFinder = (props) => {
        for (let i = 0; i < data.projects.length; i++) {
            if (props.match.params.id === data.projects[i].name) {
                return (i)
            }
        }
    }
    index = indexFinder(props);
    console.log(index);

    // if (props.match.params.id )
    // let i =0;

    // let style = {
    //     width: "25%",
    //     height: "25%"
    // };
    return (
        // <Live index={index} ></Live>
        <div className="container">
            <h3>{data.projects[index].name}</h3>
            <h6>{data.projects[index].shortDescription}</h6>
            <img src={data.projects[index].gif} alt="politicalgif"></img>
            <div>
                {data.projects[index].isDeployed &&
                    <a href={data.projects[index].liveLink}>Live Link</a>

                }
                <a href={data.projects[index].repoLink}>Repository Link</a>
            </div>

        </div>
    )
        ;
}

export default Project;