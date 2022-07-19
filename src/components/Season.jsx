
import React from "react"

export default function Seasson(props){

    return(
        <div style={props.info.selected ? {color:"#DFE0E3"} : {color: "#B0B3D5"}} 
        onClick={() => props.handleClick(props.info.value)} className="season">
            <div className="year-wrap">
                <h1>{props.info.value}</h1>
                <p>2022</p>   
            </div>
            
        </div>
    )
}