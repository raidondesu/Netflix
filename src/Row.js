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
            // request.data.results is the array that contains the movies for each row
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    console.table(movies);
    return (
        <div className = "row">
            <h2>{title}</h2>
            <div className = "row_posters">
                {movies.map(movie => (
                    <img src = {movie.poster_path} alt={movie.name}/>
                ))}
            </div>
        </div>
    )
}

export default Row