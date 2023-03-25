import { createSlice } from '@reduxjs/toolkit'
import { HomeModel } from '../models/HomeModel'


let initialState: HomeModel[] = []


export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        favorites:initialState
    },
    reducers: {
        add: (state, action) => {
            state.favorites.push(action.payload);
        },
        remove: (state, action) => {
            state.favorites = state.favorites.filter(q => q.id != action.payload.id);

        }
    }
})


export const { add, remove } = favoritesSlice.actions;

export default favoritesSlice.reducer