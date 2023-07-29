import { configureStore } from "@reduxjs/toolkit";
import MovieSlice from "../Reducer/MovieReducer";


const store = configureStore({
    reducer: {
        movies: MovieSlice,
    }
})

export default store;