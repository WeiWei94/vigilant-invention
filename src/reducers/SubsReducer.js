
export default (state={},action) => {
    switch(action.type){
        case "FETCH_SUBS":
            return({...state, subreddits: action.payload})
        default:
            return(state)
    }
}