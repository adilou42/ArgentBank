export const setToken = (token: string) => ({
    type: 'SET_TOKEN',
    payload: token,
});

export const deleteTokenAction = () => ({
    type: 'DELETE_TOKEN_ACTION'
})