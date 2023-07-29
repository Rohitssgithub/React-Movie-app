import React from 'react'
import { useEffect } from 'react';
import { upComingMovies } from '../../Reducer/MovieReducer';
import { useDispatch, useSelector } from 'react-redux';
import Movie from '../../Components/Movie/Movie';
import Loading from '../../Components/Loader/Loading';
const UpcomingPage = () => {
  let dispatch = useDispatch();

  const { upcoming, searchData, loading } = useSelector((state) => state.movies)

  useEffect(() => {
    dispatch(upComingMovies())
  }, [])
  return (
    <>
      {loading && <Loading />}

      <div className='container movies-container'>
        <div className='row'>
          {
            searchData.length > 0 ?
              searchData.map((movie) => {
                return (
                  <div className='col-lg-3 col-md-6' key={movie.id}>
                    <Movie movie={movie}></Movie>
                  </div>
                )
              })
              :
              upcoming.map((movie) => {
                return (
                  <div className='col-lg-3 col-md-6'>
                    <Movie movie={movie}></Movie>
                  </div>
                )
              })
          }
        </div>
      </div>
    </>
  )
}

export default UpcomingPage
