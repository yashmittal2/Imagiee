import React, { useState } from "react";
import axios from "axios";
import TextOverlay from "./TextOverlay";
import "./ImageViewer.css";

const ImageViewer = () => {
  const [query, setQuery] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [textOverlayVisible, setTextOverlayVisible] = useState(false);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${query}&per_page=1&client_id=FOGQgZbanNVtGqMM71g4kUnI8we52lFazjT9EWcPgSw`
      );

      setImageUrl(response.data.results[0].urls.regular);
      setTextOverlayVisible(true);
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };

  return (
    <div className="image-viewer">
      <div className="search-container" >
        <input
          type="text"
          placeholder="Search for an image"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="image-container">
        {imageUrl && <img src={imageUrl}/>}
        {textOverlayVisible && <TextOverlay />}
      </div>
    </div>
  );
};

export default ImageViewer;
