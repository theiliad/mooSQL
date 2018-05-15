export default (state = [], action) => {
    switch (action.type) {
        case "UPDATE_AUTH":
            console.log("UPDATE_AUTH", action)
            return {
                ...state,
                isAuthenticated: action.isAuthenticated
            }

            break;
        
        default:
            return state;
    }
}