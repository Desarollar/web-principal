import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    contactInfo: {
        Nombre: '',
        Telefono: '',
        Email: '',
        Mensaje: '',
    },
};

const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        setContactInfo: (state, action) => {
            state.contactInfo = action.payload;
        },
    },
});

export const { setContactInfo } = contactSlice.actions;
export default contactSlice.reducer;