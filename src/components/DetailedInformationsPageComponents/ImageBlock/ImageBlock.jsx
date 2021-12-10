import React from "react";
import "../scss/ImageBlock.scss";

function ImageBlock({ image }) {
  return (
    <div className="image__block">
      <img src={image.url} alt="restaurant" />
      <div>
        <h1>{image.title}</h1>
      </div>
    </div>
  );
}

export default ImageBlock;
