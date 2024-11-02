import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        gptState: false
    },

    reducers:{
        toggleGptState: (state)=>{
           state.gptState = !state.gptState
        }
    }
})

export const {toggleGptState} = gptSlice.actions;
export default gptSlice.reducer;