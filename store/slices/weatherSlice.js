import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { HYDRATE } from "next-redux-wrapper";

const weatherSlice = createSlice({
    name: "weatherSlice",
    initialState,
    reducers: {
        fetchWeather: (state, { payload }) => {
            state.weather = payload
        },
        filterWeather: (state, { payload }) => {
            state.chosenWeather = []
            state.chosenWeather = state.weather.filter((item) => new Date(item.dt_txt).toDateString() === new Date(payload).toDateString());

        }
    },
    extraReducers: {
        [HYDRATE]: (state, { payload }) => {
            return {
                ...state,
                weather: [...payload.weather.weather.list]
            }
        }
    },
})

export default weatherSlice.reducer
export const { fetchWeather, filterWeather } = weatherSlice.actions