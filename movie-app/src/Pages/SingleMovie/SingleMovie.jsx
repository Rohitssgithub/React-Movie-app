import React from 'react';
import './SingleMovie.css'
import { singleMovie, singleMovieCast } from '../../Reducer/MovieReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Cast from '../../Components/Cast/Cast';
import Loading from '../../Components/Loader/Loading';
const SingleMovie = () => {
    let { id } = useParams()
    let dispatch = useDispatch();
    const { singleMovies, cast, genres, loading } = useSelector((state) => state.movies)
    console.log(genres)

    useEffect(() => {
        dispatch(singleMovie(id))
    }, [])
    useEffect(() => {
        dispatch(singleMovieCast(id))
    }, [])
    return (
        <>
            {loading && <Loading />}
            <div className='container single-movie-poster p-0'>
                <img src={`https://image.tmdb.org/t/p/w500/${singleMovies.backdrop_path}`} alt="" />
                <div className='single-movie-info'>
                    <div className='movie-details'>
                        <div>
                            <img src={`https://image.tmdb.org/t/p/w500/${singleMovies.poster_path}`} alt="" />
                        </div>
                        <div className='info-div'>
                            <h2>{singleMovies.title}</h2>
                            <h3>Rating : {singleMovies.vote_average}</h3>
                            <span className='movie-runtime'>{singleMovies.runtime} min</span>
                            {
                                genres.map((name) => {
                                    return (
                                        <span className='movie-genres'>{name.name},</span>
                                    )
                                })
                            }
                            <p>Release Date : {singleMovies.release_date}</p>
                        </div>
                    </div>

                    <h2>Overview</h2>
                    <p>{singleMovies.overview}</p>
                </div>
            </div>

            <div className='container-fluid single-movie-cast mt-4'>
                <h1>Cast</h1>
                <div className='row'>
                    {cast &&
                        cast.map((ele, index) => {
                            return (
                                index <= 5 ?
                                    <div className='col-lg-2 col-md-3 cast-div' key={ele.id}>
                                        <Cast ele={ele}></Cast>
                                    </div>
                                    :
                                    ''
                            )
                        })
                    }
                </div>

            </div>

        </>
    )
}

export default SingleMovie
