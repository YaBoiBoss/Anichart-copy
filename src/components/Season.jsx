
import React from "react"

export default function Seasson(props){

    let addedClassName = props.darkMode ? "dark " : ""
    addedClassName+=props.info.selected? "selected " : ""

    return(
        <div  
        onClick={() => props.handleClick(props.info.value)} className={"season "+addedClassName}>
            <div className="year-wrap ">
                <h1>{props.info.value}</h1>
                <p>2022</p>   
            </div>
            
        </div>
    )
}