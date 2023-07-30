import React, { useEffect, useState } from 'react'
import { upComingMovies } from '../../Reducer/MovieReducer';
import { useDispatch, useSelector } from 'react-redux';
import Movie from '../../Components/Movie/Movie';
import Loading from '../../Components/Loader/Loading';
const UpcomingPage = () => {
  let dispatch = useDispatch();

  const { upcoming, searchData, loading } = useSelector((state) => state.movies)


  const [page, setPage] = useState(1);
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      if (!loading) {
        setPage((prevPage) => prevPage + 1);
      }
    }
  };

  useEffect(() => {
    dispatch(upComingMovies(page))
  }, [page])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
