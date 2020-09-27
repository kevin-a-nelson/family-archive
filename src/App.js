
import React, { useEffect, useState } from 'react';
import './App.css';
import SimpleCarousel from "./SimpleCarousel"
import axios from 'axios';
import secret from "./secret"


function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get(
        secret.url, {
          headers: {
            authorization: `Bearer ${secret.key}`
          }
        }
    ).then(
      response => {
        // filter out records that don't have attachments
        const images = response.data.records.filter((record) => record.fields.Attachments)
        setImages(images)
      }
    );
  }, []);

  return (
    <div className="app">
      <div>
        <span className="tap-instructions">
          <br></br>
          Tap the right side of the image to see the next image
          <br></br>
          Tap the left side of the image image to see the prev image
        </span>
      </div>
        <SimpleCarousel
          images={images}
        >
        </SimpleCarousel>
    </div>
  );
}

export default App;
