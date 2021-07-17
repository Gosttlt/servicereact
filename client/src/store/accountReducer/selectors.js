import { createSelector } from "reselect"


export const getAppoints = state => state.accountReducer.user
export const getUsersAppoints = createSelector(getAppoints, users => {
    let arr = users.map(
        user => {
            if (user.dateCreate) {
                user.dateCreate = user.dateCreate.split('T')[0].split('-').reverse().join('/')
            }
            return user
        }
    )
    return arr
})

