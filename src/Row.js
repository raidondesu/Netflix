import React, { useState, useEffect } from 'react'

function Row({ title }) {
    const [movies, setMovies] = useState([]);

    //When the row loads, make a requests to the database
    useEffect(() => {
        // if [] is blank, run once when the row loads and dont run again
    }, []);
    return (
        <div>
            <h2>(title)</h2>

            {/* Container -> Posters */}
        </div>
    )
}

export default Row