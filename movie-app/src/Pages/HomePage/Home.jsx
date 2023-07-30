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


    const [page, setPage] = useState(1);
    const handleScroll = () => {
        if (
            // window.innerHeight + document.documentElement.scrollTop ===
            // document.documentElement.offsetHeight
            window.innerHeight + document.documentElement.scrollTop + 1 >=
            document.documentElement.scrollHeight
        ) {
            if (!loading) {
                setPage((prevPage) => prevPage + 1);
            }
        }
    };


    useEffect(() => {
        dispatch(allMovies(page))
    }, [page])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
                    {
                        loading ? <Loading /> :
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
            {
                visible ?
                    <BsFillArrowUpCircleFill className='scroll-top-icon' onClick={gotoTop} />
                    : ''
            }
        </>
    )
}

export default Home
