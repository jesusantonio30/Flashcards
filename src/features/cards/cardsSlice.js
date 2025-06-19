import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
    name: 'cardsSlice',
    initialState: {
        // will eventually hold all cards keyed by id
        cards: {}
    },
    reducers: {
        addCard: (state, action) => {
            const { id } = action.payload;
            state.cards[id] = action.payload;
        },
    }
});

export const selectCard = (id) => (state) => state.cardsSlice.cards[id];

export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;

