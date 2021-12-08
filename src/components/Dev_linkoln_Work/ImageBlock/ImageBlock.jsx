import React from "react";
import "../scss/ImageBlock.scss";

function ImageBlock(props) {
  return (
    <div className="image__block">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Restaurant_Näsinneula.jpg/1200px-Restaurant_Näsinneula.jpg"
        alt="restaurant"
      />
      <div>
       <h1>Ресторан Купол</h1>
      </div>
    </div>
  );
}

export default ImageBlock;
