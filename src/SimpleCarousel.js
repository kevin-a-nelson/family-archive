import React, { useState } from 'react'
import { Button } from 'react-bootstrap'


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
                <div className="buttons-top">
                    <div>
                        <Button onClick={() => prevImage()}>Prev</Button>
                    </div>
                    <p className="counter">{index + 1} / {props.images.length}</p>
                    <div>
                        <Button onClick={() => nextImage()}>Next</Button>
                    </div>
                </div>
                <img 
                    onClick={() => nextImage()} 
                    className="simple-image" 
                    src={props.images[index].fields.Attachments[0].url} 
                    alt="family">
                </img>
                <div className="buttons-bottom">
                    <div>
                        <Button onClick={() => prevImage()}>Prev</Button>
                    </div>
                    <p className="counter">{index + 1} / {props.images.length}</p>
                    <div>
                        <Button onClick={() => nextImage()}>Next</Button>
                    </div>
                </div>
            </div>
        )
    }

    return <div></div>

}