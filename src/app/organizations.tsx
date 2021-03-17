import { createSlice } from '@reduxjs/toolkit'

export const organizations = createSlice({
    name: 'organizations',
    initialState: {
        value: []
    },
    reducers: {
        addOrganizations: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { addOrganizations } = organizations.actions;

export default organizations.reducer;
