import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { searchMovie } from '../Reducer/MovieReducer';
import { useDispatch } from 'react-redux';

const Navbar = () => {
    const dispatch = useDispatch()
    const [search, setSearch] = useState("")
    const handlesubmit = (e) => {
        e.preventDefault()
        dispatch(searchMovie(search))
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">MovieDB</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to="/popular">Popular</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/toprated">Top Rated</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " to='/upcoming'>Upcoming</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex" onClick={handlesubmit}>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
