import React from "react";

const Months = ['January','February','March','April','May','June','July','August','September','October','November','December']

export default function Card(props){
    const {title,coverImage,startDate,episodes,source,description,genres,studios} = props.info;

    let desc = null
    if(description){
        desc =  description.replace(/[/]/g,"").replace(/<i>/g,'"').replace(/<br>/g,"")
    }



    const genreElements = genres.map(g => {
        return <p style={{background: coverImage.color}} className="genre">{g}</p>
    }).splice(0,2)


    return(
        <div className="card" >
            <div className="card--left">
                <img className="card--img" src={coverImage.extraLarge} />
                <div className="card--name-box">
                    <h1>{title.romaji}</h1>
                    <p>{studios.nodes.length>0 && studios.nodes[0].name}</p>
                </div>
            </div>
            <div className="card--right">
                <p>{episodes ? episodes+" Episodes a" : "A"}iring in</p>
                <h1>{startDate.month && (Months[startDate.month+1]+" ") }{startDate.day && (startDate.day+", ") }{startDate.year}</h1>
                <h2>Source • {source}</h2>
                <h3>{desc && desc}</h3>
                <div className="category-box">
                    {genreElements}
                </div>
            </div>
        </div>
        
    )
}