import React, { useEffect, useState } from 'react';
import './MovieDetail.css'

const MovieDetail = ({ movie }) => {
    console.log(movie.genres);

    // let [data, SetData] = useState(movie.genres)
    // console.log(data)

    // useEffect(() => {
    //     SetData(movie.genres)
    // }, [movie])
    return (
        <>
            <div className='movie-details'>
                <div>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                </div>
                <div className='info-div'>
                    <h2>{movie.title}</h2>
                    <h3>Rating : {movie.vote_average}</h3>
                    <span>{movie.runtime} min</span>
                    {
                        // movie.genres.map((name) => {
                        //     return (
                        //         <span key={name.id}>{name.name},</span>
                        //     )
                        // })
                    }

                    <p>Release Date : {movie.release_date}</p>
                </div>
            </div>
        </>
    )
}

export default MovieDetail
