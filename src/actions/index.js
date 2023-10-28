import axios from 'axios';

export const FETCH_GIFS = "FETCH_GIFS";
export const GIFS_SUCCESS = "GIFS_SUCCESS";

export const getGifs = (searchTerm) => {
    return (dispatch => {
        dispatch(fetchGifs());
        axios.get("https://api.giphy.com/v1/gifs/search?api_key=gJ750fydf758eYuCV01yOiKF9fSbVESt&q=Marvel&limit=5&offset=5&rating=g&lang=en&bundle=clips_grid_picker")
            .then(res => {
                console.log(res.data.data)
                dispatch(gifsSuccess(res.data.data));
            })
    });
}

export const fetchGifs = () => {
    return ({type: FETCH_GIFS});
}

export const gifsSuccess = (gifs) => {
    return ({type: GIFS_SUCCESS, payload: gifs});
}