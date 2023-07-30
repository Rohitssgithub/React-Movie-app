import React from 'react';
import './Cast.css'

const Cast = ({ ele }) => {
    return (
        <>
            <div className='cast-card mb-5'>
                <img src={`https://image.tmdb.org/t/p/w500/${ele.profile_path}`} class="card-img-top" alt="..." />
                <div className="movie-card-info" >
                    <p>{ele.name}</p>
                    <p>Rating : {ele.character}</p>
                </div>
            </div>
        </>
    )
}

export default Cast
