import React from "react";
import Card from "./Card"

export default function Main(props){


    const mediaElements = props.media.map(anime => {
        return <Card info = {anime} darkMode={props.darkMode}/>
    })
    

    return(
        <div className="main-container">
            <div className="cards">
                {mediaElements}
            </div>
        </div>
    )
}