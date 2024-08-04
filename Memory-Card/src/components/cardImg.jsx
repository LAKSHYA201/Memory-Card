import { useState } from "react";
export default function CardImg({ cardNo }) {
  const [imgSrc, setImgSrc] = useState("");
  async function imgFetcher(cardNo) {
    await fetch(`https://akabab.github.io/starwars-api/api/id/${cardNo}.json`, {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => setImgSrc(data.image));
  }
  imgFetcher(cardNo);

  return <img src={imgSrc} height="100%" width="100%" />;
}
