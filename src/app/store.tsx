import { configureStore } from '@reduxjs/toolkit';
import organizationReducer from './organizations';

export default configureStore({
    reducer: {
        organizations: organizationReducer
    }
})
