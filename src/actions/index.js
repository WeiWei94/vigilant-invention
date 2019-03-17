import axios from 'axios';


export const fetchThreads = (sub='popular') => async dispatch => {

    const response = await axios.get(`https://www.reddit.com/r/${sub}.json`)

    dispatch({
        type:'FETCH_THREADS',
        payload: response.data
    })
}

export const fetchSortedThreads = (sub,sortBy) => async dispatch => {
    const response = await axios.get(`https://www.reddit.com/r/${sub}/${sortBy}.json`)

    dispatch({
        type:"FETCH_SORTED_THREADS",
        payload: response.data
    })
}

export const fetchContents = (sub,id) => async dispatch => {
    const response = await axios.get(`https://www.reddit.com/r/${sub}/comments/${id}.json`)

    dispatch({
        type:"FETCH_CONTENT",
        payload:response
    })
}

export const fetchSubreddits = (sub) => async dispatch => {
    const response = await axios.get(`https://www.reddit.com/subreddits/search.json?q=${sub}`)

    dispatch({
        type:"FETCH_SUBS",
        payload: response.data
    })
}