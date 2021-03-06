import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";


export default function SimpleCarousel(props) {
    const [index, setIndex] = useState(0)
    const [cords, setCords] = useState(null)

    const nextImage = () => {
        index + 1 < props.images.length ?
            setIndex(index + 1)
            :
            setIndex(0)
    }

    const prevImage = () => {
        index - 1 >= 0 ? 
            setIndex(index - 1)
            :
            setIndex(props.images.length - 1)
    }

    const changeImage = (e) => {
        const screenWidth = window.innerWidth
        const clickXCord = e.clientX

        clickXCord < screenWidth / 2 ?
            prevImage()
            :
            nextImage()
    }

    if(props.images.length <= 0) {
        return null
    }

    return (
        <div>
            <div className="counter">
                <span> {index} / {props.images.length} </span>
            </div>
            <img
                onClick={changeImage}
                id="simple-image"
                src={props.images[index]}
                alt="family"
            ></img>
            <div className="tap-left">
                Tap Left of Image
            </div>
            <div className="tap-right">
                Tap Right of Image
            </div>
        </div>
    );
}