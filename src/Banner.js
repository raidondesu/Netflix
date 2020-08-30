import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./request";

function Banner() {
  const [movie, setmovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setmovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.table(movie);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        {/* title */}
        <h1>{movie?.title || movie?.name || movie?.originalname}</h1>
        {/* div 2 buttons */}
        {/* description */}
      </div>
    </header>
  );
}

export default Banner;
