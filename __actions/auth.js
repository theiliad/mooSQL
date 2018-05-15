const UPDATE_AUTH = "UPDATE_AUTH";

export const updateAuth = (isAuthenticated) => {
    return {
        type: UPDATE_AUTH,
        isAuthenticated
    }
};