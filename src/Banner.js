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
    <header>
      {/* title */}
      {/* div 2 buttons */}
      {/* description */}
    </header>
  );
}

export default Banner;
