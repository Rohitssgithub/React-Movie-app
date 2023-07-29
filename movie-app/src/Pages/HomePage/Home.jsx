import React from 'react'
import { allMovies } from '../../Reducer/MovieReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Movie from '../../Components/Movie/Movie';
import Loading from '../../Components/Loader/Loading';
import { BsFillArrowUpCircleFill } from "react-icons/bs";

import './Home.css'
const Home = () => {
    let dispatch = useDispatch();
    const [visible, setVisible] = useState(false)

    const { allMovie, searchData, loading } = useSelector((state) => state.movies)

    // console.log(allMovie)


    const [page, setPage] = useState(1);
    console.log(page)
    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop ===
            document.documentElement.offsetHeight
        ) {
            if (!loading) {
                setPage((prevPage) => prevPage + 1);
            }
        }
    };


    // const loadNextPage = () => {
    //     setPage((prevPage) => prevPage + 1);
    // };



    useEffect(() => {
        console.log(page + 'called')
        dispatch(allMovies(page))
    }, [page])

    useEffect(() => {
        console.log(page + 'in')
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 250) {
            setVisible(true)
        }
        else if (scrolled <= 250) {
            setVisible(false)
        }
    };

    const gotoTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    window.addEventListener('scroll', toggleVisible);

    return (
        <>
            <div className='container movies-container'>
                <div className='row'>
                    {loading ? <Loading /> :
                        searchData.length > 0 ?
                            searchData.map((movie) => {
                                return (
                                    <div className='col-lg-3 col-md-6' key={movie.id}>
                                        <Movie movie={movie}></Movie>
                                    </div>
                                )
                            })
                            :
                            allMovie.map((movie) => {
                                return (
                                    <div className='col-lg-3 col-md-6 sdkmk' key={movie.id}>
                                        <Movie movie={movie}></Movie>
                                    </div>
                                )
                            })
                    }
                </div>
            </div>
            {/* {loading && <Loading />} */}

            {
                visible ?
                    <BsFillArrowUpCircleFill className='scroll-top-icon' onClick={gotoTop} />
                    : ''
            }
        </>
    )
}

export default Home
