import { createSlice } from '@reduxjs/toolkit'
import { HomeModel } from '../models/HomeModel'


let initialState: HomeModel[] = []


export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        favorites: initialState
    },
    reducers: {
        add: (state, action) => {
            let favoritesControl = state.favorites.find(q => q.id == action.payload.id)
            if (!favoritesControl)
                state.favorites.push(action.payload);
        },
        remove: (state, action) => {
            state.favorites = state.favorites.filter(q => q.id != action.payload.id);
        },
        load: (state, action) => {
            state.favorites = action.payload;
        }
    }
})


export const { add, remove, load } = favoritesSlice.actions;

export default favoritesSlice.reducer