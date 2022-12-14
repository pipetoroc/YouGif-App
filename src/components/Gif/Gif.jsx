import React from "react";
import './Gif.css'

function Gif({ title, url }) {
  return (
    <div>
      <h4> {title} </h4>
      <img
        alt={title}
        src={url}
      />
    </div>
  );
}

export { Gif };
