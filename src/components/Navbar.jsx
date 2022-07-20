import React , {useState}from "react"

import Seasson from "./Season"
import TopIcon from "./TopIcon"

import {BsCalendar2Event, BsArchive, BsChevronDoubleRight, } from "react-icons/bs";
import {FiSettings} from "react-icons/fi";

const seasonsArr = ["Winter","Spring","Summer","Fall"]
const topIconArr = [
    {
        img: <BsCalendar2Event />,
        value: "Airing"
    },
    {
        img: <BsArchive />,
        value: "Archieve"
    },
    {
        img: <BsChevronDoubleRight />,
        value: "TBA"
    },
    {
        img: <FiSettings />,
        value: "Settings"
    },
]

export default function Navbar(props){


    const {darkMode,setDarkMode} = props

    const addedClass = darkMode ? "dark" : ""


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
        season => <Seasson darkMode={props.darkMode} info={season} key={season.id} handleClick={handleClick} />
    )

    const topIconElements = topIcons.map(
        topIcon => <TopIcon darkMode={props.darkMode} key={topIcon.value} info={topIcon} handleClick={handleClick}/>
    )

    return(
        <nav className={addedClass}>
            <img src="https://i.imgur.com/h03nBpt.png"/>
            <div className="seasons">
                {seasonElements}
            </div>
            <div className={"top-icons "+addedClass}>
                {topIconElements}
            </div>
            <div className="dark-mode-wrap">
                <p>Dark Mode</p>
                <div className={"dark-mode-frame "+addedClass} onClick={()=>setDarkMode(prevState => !prevState)}>
                    <div className={"dark-mode--toggle "+addedClass} >
                    </div>
                </div>
            </div>
        </nav>
    )
}