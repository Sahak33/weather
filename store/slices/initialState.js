export const initialState = {
    weather: [],
    chosenWeather: [],
    countrys: [
        {
            id: 1,
            name: 'New York',
            geocode: { lat: 40.712776, lon: -74.005974 },
            link: "/new-york"
        },
        {
            id: 2,
            name: 'London',
            geocode: { lat: 51.507351, lon: -0.127758 },
            link: "/london"
        },
        {
            id: 3,
            name: 'Berlin',
            geocode: { lat: 52.520008, lon: 13.404954 },
            link: "/berlin"
        }
        , {
            id: 4,
            name: 'Paris',
            geocode: { lat: 48.856613, lon: 2.352222 },
            link: "/paris"
        },
        {
            id: 5,
            name: 'Tokyo',
            geocode: { lat: 35.689487, lon: 139.691711 },
            link: "/tokyo"
        }],
}