export const TokenAction = (token: string) => ({
    type: 'TOKEN_ACTION',
    payload: token,
});

export const deleteTokenAction = () => ({
    type: 'DELETE_TOKEN_ACTION'
})