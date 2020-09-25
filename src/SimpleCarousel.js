import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";


export default function SimpleCarousel(props) {
    const [index, setIndex] = useState(0)

    const nextImage = () => {
        if(index + 1 < props.images.length) {
            setIndex(index + 1)
        } else {
            setIndex(0)
        }
    }

    const prevImage = () => {
        if(index - 1 >= 0) {
            setIndex(index - 1)
        } else {
            setIndex(props.images.length - 1)
        }
    }

    if(props.images.length > 0) {
        return (
            <div>
                {/* <FontAwesomeIcon icon={faArrowCircleLeft} />
                <FontAwesomeIcon icon={faArrowCircleRight} /> */}
                <div className="buttons-top">
                    <div className="arrow" onClick={() => prevImage()}>
                        <FontAwesomeIcon icon={faArrowCircleLeft} />
                    </div>
                    <p className="counter">
                        {index + 1} / {props.images.length}
                    </p>
                    <div className="arrow" onClick={() => nextImage()}>
                        <FontAwesomeIcon icon={faArrowCircleRight} />
                    </div>
                </div>
                <img
                    onClick={() => nextImage()}
                    className="simple-image"
                    src={props.images[index].fields.Attachments[0].url}
                    alt="family"
                ></img>
                <div className="buttons-bottom">
                    <div className="arrow">
                        <FontAwesomeIcon onClick={() => prevImage()} icon={faArrowCircleLeft} />
                    </div>
                    <p className="counter">
                        {index + 1} / {props.images.length}
                    </p>
                    <div className="arrow">
                        <FontAwesomeIcon onClick={() => nextImage()} icon={faArrowCircleRight} />
                    </div>
                </div>
            </div>
        );
    }

    return <div></div>

}