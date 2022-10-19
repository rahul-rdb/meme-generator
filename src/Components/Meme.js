import React, { useState, useEffect } from "react";
import memeLogo from "../images/unnamed.png";
import axios from "axios";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: `${memeLogo}`,
  });

  function changeHandler(e) {
    setMeme((prevMeme) => {
      const { name, value } = e.target;
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }
  
  const [allMemeImages, setAllMemeImages] = useState([]);

  useEffect(() => {
    axios.get("https://api.imgflip.com/get_memes")
         .then((res) => setAllMemeImages(res.data.data.memes));
  }, []);

  function getMemeImg() {
    const randomNum = Math.floor(Math.random() * allMemeImages.length) + 1;
    setMeme((prevState) => {
      return {
        ...prevState,
        randomImage: `${allMemeImages[randomNum].url}`,
      };
    });
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
          name="topText"
          value={meme.topText}
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          name="bottomText"
          value={meme.bottomText}
          onChange={changeHandler}
        />
        <button className="form--btn" onClick={getMemeImg}>
          Get a new meme image
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} alt="memeImage" className="meme--image" />
        <h2 className="meme--toptext">{meme.topText}</h2>
        <h2 className="meme--bottomtext">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
