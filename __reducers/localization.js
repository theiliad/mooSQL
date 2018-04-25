export default (state = [], action) => {
    switch (action.type) {
        case "UPDATE_LANG":
            return {
                ...state,
            }

            break;
        
        default:
            return state;
    }
}