import React from 'react'
import './Movie.css'
import { Link } from 'react-router-dom'

const Movie = ({ movie }) => {
    return (
        <>
            <div className='movie-card mb-5'>
                <Link to={`/singleMovie/${movie.id}`} className=" card-link" key={movie.id}>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt={movie.title} />
                    <div className="movie-card-info" >
                        <p>{movie.title}</p>
                        <p>Rating : {movie.vote_average}</p>
                    </div>
                </Link>
            </div>

        </>
    )
}

export default Movie
