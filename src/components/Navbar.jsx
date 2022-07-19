import React , {useState}from "react"

import Seasson from "./Season"
import TopIcon from "./TopIcon"

const seasonsArr = ["Winter","Spring","Summer","Fall"]
const topIconArr = [
    {
        img: "https://i.imgur.com/BmS97UE.png",
        selectedImg: "https://i.imgur.com/bA27Dve.png",
        value: "Airing"
    },
    {
        img: "https://i.imgur.com/yDQLV5p.png",
        selectedImg: "https://i.imgur.com/jNAbltI.png",
        value: "Archieve"
    },
    {
        img: "https://i.imgur.com/jzGJy9B.png",
        selectedImg: "https://i.imgur.com/xd64GWW.png",
        value: "TBA"
    },
    {
        img: "https://i.imgur.com/9ciXNfL.png",
        selectedImg: "https://i.imgur.com/DWuijfu.png",
        value: "Settings"
    },
]

export default function Navbar(props){


    const [seasons,setSeasons] = useState(seasonsArr.map((season,index)=>{
        return{
            value: season,
            selected: false,
            id: index
        }
    }))

    const [topIcons,setTopIcons] = useState(topIconArr.map(icon=>(
        {...icon,selected:false}
    )))

    function handleClick(value){
        setSeasons(prevState => (
            prevState.map(season => {
                return season.value == value ? {...season,selected:true} : {...season,selected:false}
            })
        ))
        setTopIcons(prevState =>(
            prevState.map(topIcon => {
                return topIcon.value == value ? {...topIcon,selected:true} : {...topIcon,selected:false}
            })
        ))
    }


    const seasonElements = seasons.map(
        season => <Seasson info={season} key={season.id} handleClick={handleClick} />
    )

    const topIconElements = topIcons.map(
        topIcon => <TopIcon key={topIcon.value} info={topIcon} handleClick={handleClick}/>
    )

    return(
        <nav>
            <img src="https://i.imgur.com/h03nBpt.png"/>
            <div className="seasons">
                {seasonElements}
            </div>
            <div className="top-icons">
                {topIconElements}
            </div>
        </nav>
    )
}