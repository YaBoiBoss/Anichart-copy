import React from "react";

export default function TopIcon(props){
    return(
        <div className="top-icon" style={props.info.selected ? {color:"#DFE0E3"} : {color: "#B0B3D5"}}
         onClick={()=>props.handleClick(props.info.value)}>
            <img  src={props.info.selected ? props.info.selectedImg : props.info.img} className="top-img" />
            <p>{props.info.value}</p>
        </div>
    )
}