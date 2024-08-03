import { useState } from "react";
export default function CardImg({ cardNo, randomImg }) {
  const [imgSrc, setImgSrc] = useState("");
  async function imgFetcher(cardNo) {
    const apiAddress = "https://akabab.github.io/starwars-api/api/id/";
    let completeApiAddress = apiAddress + cardNo + ".json";
    await fetch(completeApiAddress, { mode: "cors" })
      .then((response) => response.json())
      .then((data) => setImgSrc(data.image));
  }
  imgFetcher(cardNo);

  return <img src={imgSrc} height="100%" width="100%" />;
}
