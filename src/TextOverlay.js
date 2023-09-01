import React, { useState } from "react";
import Draggable from "react-draggable";
import './TextOverlay.css'

const TextOverlay = ({imageUrl}) => {
  const [text, setText] = useState("");
  const [textList, setTextList] = useState([]);

  const handleAddText = () => {
    if (text.trim() !== "") {
      setTextList([...textList, text]);
      setText("");
    }
  };

  return (
    <div className="text-overlay-container">
      <input
        type="text"
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddText}>Add Text</button>
      <div className="image-container">
        {textList.map((item, index) => (
          <Draggable key={index}>
            <div className="text-overlay" style={{ position: "absolute" }}>
              {item}
            </div>
          </Draggable>
        ))}
      </div>
    </div>
  );
};

export default TextOverlay;
