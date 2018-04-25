const UPDATE_AUTH = "UPDATE_AUTH";

export const updateAuth = (authToken, fullName) => {
    return {
        type: UPDATE_AUTH
    }
};