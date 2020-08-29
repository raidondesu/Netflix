import React, { useState, useEffect } from 'react'
import axios from './axios';

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);

    //When the row loads, make a requests to the database
    useEffect(() => {
        // if [] is blank, run once when the row loads and dont run again
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            //BaseURL + Row URL + APIKEY
            console.log(request.data.results);
            // request.data.results is the array that contains the movies for each row
            setMovies(request.data.resuts);
            console.log(request);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    console.log([movies]);
    return (
        <div classNmae = "row">
            <h2>{title}</h2>

            <div className="movie_posters">
                {/* posters */}
            </div>

        </div>
    )
}

export default Row