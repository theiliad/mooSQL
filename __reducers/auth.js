export default (state = [], action) => {
    switch (action.type) {
        case "UPDATE_AUTH":
            return {
                ...state
            }

            break;
        
        default:
            return state;
    }
}