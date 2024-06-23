import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
    name: "GPT",
    initialState: {
        showGPTSearch : false,
        gptMovieData : null,
        gptMovieNames: null,
    },
    reducers:{
        toggleGPTSearchView : (state) => {
            state.showGPTSearch = !state.showGPTSearch;
        },
        addGptMovieResult: (state, action) => {
            const {gptMovieData, gptMovieNames} = action.payload
            state.gptMovieData = gptMovieData;
            state.gptMovieNames = gptMovieNames;
        }
    }
})

export const { toggleGPTSearchView, addGptMovieResult} = GPTSlice.actions;

export default GPTSlice.reducer;