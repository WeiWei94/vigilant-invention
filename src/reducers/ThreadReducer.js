const INITIAL_STATE={
    list:null,
    content:null,
    comments:null
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'FETCH_THREADS':
            return{...state, list:action.payload}
        case 'FETCH_SORTED_THREADS':
            return{...state, list:action.payload}
        case 'FETCH_CONTENT':
            return{...state, list:state.list, content:action.payload.data[0], comment: action.payload.data[1]}
        default:
            return{state}
    }
}