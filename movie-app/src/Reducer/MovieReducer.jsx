import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const allMovies = createAsyncThunk('allmovies/get', async (thunkAPI) => {
    try {
        const data = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=${thunkAPI}`, thunkAPI, { withCredentials: true })
        return data.data.results
    }
    catch (err) {
        console.log(err)
    }
})

export const singleMovie = createAsyncThunk('single/movie/get', async (thunkAPI) => {
    try {
        const data = await axios.get(`https://api.themoviedb.org/3/movie/${thunkAPI}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`, thunkAPI, { withCredentials: true })
        return data.data
    }
    catch (err) {
        console.log(err)
    }

})

export const singleMovieCast = createAsyncThunk('singleMovieCast/get', async (thunkAPI) => {
    try {
        const data = await axios.get(`https://api.themoviedb.org/3/movie/${thunkAPI}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`, thunkAPI, { withCredentials: true })
        return data.data.cast
    }
    catch (err) {
        console.log(err)
    }
}
)

export const topRatedMovies = createAsyncThunk('topRatedMovies/get', async (thunkAPI) => {
    try {
        const data = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=${thunkAPI}`, thunkAPI, { withCredentials: true })
        return data.data.results
    }
    catch (err) {
        console.log(err)
    }
}
)

export const upComingMovies = createAsyncThunk('upComingMovies/get', async (thunkAPI) => {
    try {
        const data = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=${thunkAPI}`, thunkAPI, { withCredentials: true })
        return data.data.results
    }
    catch (err) {
        console.log(err)
    }
})

export const searchMovie = createAsyncThunk('searchMovie/get', async (thunkAPI) => {
    try {
        const data = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query=${thunkAPI}&page=1`, thunkAPI, { withCredentials: true })
        return data.data.results
    }
    catch (err) {
        console.log(err)
    }
}
)

const MovieSlice = createSlice({
    name: "movie",
    initialState: {
        allMovie: [],
        singleMovies: [],
        cast: [],
        topRated: [],
        upcoming: [],
        searchData: [],
        genres: [],
        loading: false,
        error: null,
    },
    extraReducers: {
        [allMovies.pending]: (state) => {
            state.loading = true;
        },
        [allMovies.fulfilled]: (state, action) => {
            state.loading = false;
            state.allMovie = action.payload;
        },
        [allMovies.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
        [singleMovie.pending]: (state) => {
            state.loading = true;
        },
        [singleMovie.fulfilled]: (state, action) => {
            state.loading = false;
            state.singleMovies = action.payload;
            state.genres = action.payload.genres
        },
        [singleMovie.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
        [singleMovieCast.pending]: (state) => {
            state.loading = true;
        },
        [singleMovieCast.fulfilled]: (state, action) => {
            state.loading = false;
            state.cast = action.payload;
        },
        [singleMovieCast.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
        [topRatedMovies.pending]: (state) => {
            state.loading = true;
        },
        [topRatedMovies.fulfilled]: (state, action) => {
            state.loading = false;
            state.topRated = action.payload;
        },
        [topRatedMovies.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
        [upComingMovies.pending]: (state) => {
            state.loading = true;
        },
        [upComingMovies.fulfilled]: (state, action) => {
            state.loading = false;
            state.upcoming = action.payload;
        },
        [upComingMovies.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
        [searchMovie.pending]: (state) => {
            state.loading = true;
        },
        [searchMovie.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.loading = false;
            state.searchData = action.payload;
        },
        [searchMovie.rejected]: (state, action) => {
            console.log(action.payload)
            state.loading = false;
            state.error = action.payload.message;
        },
    }
})

export default MovieSlice.reducer
