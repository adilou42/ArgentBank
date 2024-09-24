export const TokenAction = (token: string) => ({
    type: 'TOKEN_ACTION',
    payload: token,
});

export const deleteUserAction = () => ({
    type: 'DELETE_USER_ACTION'
})

export const userAction = (firstName: string, lastName: string, userName: string) => ({
    type: 'USER_ACTION',
    payload: {
        firstName,
        lastName,
        userName
    },
});