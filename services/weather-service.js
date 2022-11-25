import axios from 'axios'
import { WEATHER } from '../urls/weather'

export const getWeather = (lat, lon) => axios.get(WEATHER(lat, lon))
