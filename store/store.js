import { configureStore } from "@reduxjs/toolkit";
import weather from "./slices/weatherSlice";
import { createWrapper } from "next-redux-wrapper";

export const makeSotre = () => {
    return configureStore({
        reducer: {
            weather
        }
    })
}

export const wrapper = createWrapper(makeSotre)