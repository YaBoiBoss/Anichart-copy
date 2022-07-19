import React from "react";

export default function TopIcon(props){

    let styles ={
        color:"#B0B3D5"
    }

    let img = props.info.img

    if(props.info.selected){
        if(props.darkMode){
            styles.color="#B0B3D5" 
            img = props.info.img
        }else{
            styles.color="#DFE0E3" 

            img = props.info.selectedImg
        }
    }else{
        if(props.darkMode){
            styles.color="#DFE0E3"
            img = props.info.selectedImg
        }else{

            styles.color="#B0B3D5"  
            img = props.info.img
        }
    }

    return(
        <div className="top-icon" style={styles}
         onClick={()=>props.handleClick(props.info.value)}>
            <img  src={img} className="top-img" />
            <p>{props.info.value}</p>
        </div>
    )
}