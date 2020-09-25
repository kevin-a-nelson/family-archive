import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";


export default function SimpleCarousel(props) {
    const [index, setIndex] = useState(0)

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

    if(props.images.length <= 0) {
        return null
    }

    return (
        <div>

            {/* Buttons at the top for desktop */}
            <div className="buttons-desktop">
                <div className="arrow" onClick={() => prevImage()}>
                    <FontAwesomeIcon icon={faArrowCircleLeft} />
                </div>
                <p className="counter">
                    {index + 1}&nbsp;/&nbsp;{props.images.length}
                </p>
                <div className="arrow" onClick={() => nextImage()}>
                    <FontAwesomeIcon icon={faArrowCircleRight} />
                </div>
            </div>

            {/* Image */}
            <img
                onClick={() => nextImage()}
                className="simple-image"
                src={props.images[index].fields.Attachments[0].url}
                alt="family"
            ></img>

            {/* Buttons at the bottom for mobile */}
            <div className="buttons-mobile">
                <div className="arrow">
                    <FontAwesomeIcon onClick={() => prevImage()} icon={faArrowCircleLeft} />
                </div>
                <p className="counter">
                    {index + 1}&nbsp;/&nbsp;{props.images.length}
                </p>
                <div className="arrow">
                    <FontAwesomeIcon onClick={() => nextImage()} icon={faArrowCircleRight} />
                </div>
            </div>

        </div>
    );
}