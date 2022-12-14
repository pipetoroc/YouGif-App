import React, { useEffect, useState } from "react";
import { Gif } from "../Gif/Gif";
import { getGifs } from "../../services/get-gifs";


function ListOfGifs({ keyword }) {
  const [gifs, setGifs] = useState([]);

  useEffect(
    function () {
      getGifs({ keyword }).then((gifs) => setGifs(gifs));
    },
    [keyword]
  );

  return gifs.map(({ id, url, title }) => (
    <Gif
      key={id}
      title={title}
      url={url}
    />
  ));
} 

export default ListOfGifs;
