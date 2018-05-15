export default (state = [], action) => {
    switch (action.type) {
        case "UPDATE_AUTH":
            return {
                ...state,
                isAuthenticated: action.isAuthenticated
            }

            break;
        
        default:
            return state;
    }
}