import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
    user: null | object
    token: null | string
}
const initialState: InitialState = {
    user: null,
    token: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { user, token } = action.payload

            state.user = user,
                state.token = token

        }


    }
})

export const { setUser } = authSlice.actions
export default authSlice.reducer





