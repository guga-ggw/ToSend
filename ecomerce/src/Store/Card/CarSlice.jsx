import { createSlice } from "@reduxjs/toolkit";
import { getCarInfo } from "./card.thunks";
import { createcarCard } from "./card.thunks";

const initialState = {
    carList: [],
    loading: false,
    error: null, 
};

const carSlice = createSlice({
    name: "CarSlice",
    initialState,
    reducers: {
        consol : (state) => {
            console.log('helo')
        }
    },
    extraReducers :{
        [getCarInfo.pending.type]:(state) =>{
            state.loading = true
        },
        [getCarInfo.fulfilled.type]:(state, action) =>{
            state.loading = false
            state.error = false
            console.log('helo')
            state.todoList = action.payload.items
        },
        [getCarInfo.rejected.type]:(state, action) =>{
            state.loading = false
            state.error = true
        },
        [createcarCard.pending.type]:(state) =>{
            state.loading = true
        },
        [createcarCard.fulfilled.type]:(state, action) =>{
            state.loading = false
            state.error = false
            console.log('helo')
        },
        [createcarCard.rejected.type]:(state, action) =>{
            state.loading = false
            state.error = true
            console.log('false')
        },

    }
});

export const {consol} = carSlice.actions
export default carSlice.reducer;