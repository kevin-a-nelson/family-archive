
import React, { useEffect, useState } from 'react';
import './App.css';
import SimpleCarousel from "./SimpleCarousel"
import axios from 'axios';


function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get(
        "https://api.airtable.com/v0/appG5lF32eK3y8xNy/Images?maxRecords=10&view=Grid%20view", {
          headers: {
            authorization: `Bearer ${"keyMY6DG93rVebo5z"}`
          }
        }
    ).then(
      response => {
        const images = response.data.records.filter((record) => record.fields.Attachments)
        setImages(images)
      }
    );
  }, []);

  return (
    <div className="app">
      <div className="simple-carousel-container">
        <SimpleCarousel
          images={images}
        >
        </SimpleCarousel>
      </div>
    </div>
  );
}

export default App;
