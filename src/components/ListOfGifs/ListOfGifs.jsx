import React, { useEffect, useState } from "react";
import { Gif } from "../Gif/Gif";
import { getGifs } from "../../services/get-gifs";

function ListOfGifs({ params }) {
  const { keyword } = params;
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(
    function () {
      setLoading(true);
      getGifs({ keyword }).then((gifs) => {
        setGifs(gifs);
        setLoading(false);
      });
    },
    [keyword]
  );

  if(loading) return <i> Cargando </i>

  return gifs.map(({ id, url, title }) => (
    <Gif
      key={id}
      title={title}
      url={url}
    />
  ));
}

export default ListOfGifs;
