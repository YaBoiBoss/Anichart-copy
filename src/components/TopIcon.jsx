import React from "react";

export default function TopIcon(props){



    return(
        <div className={"top-icon "+(props.info.selected && "selected")} 
         onClick={()=>props.handleClick(props.info.value)}>
            {props.info.img}
            <p>{props.info.value}</p>
        </div>
    )
}