import { createSlice } from "@reduxjs/toolkit";


export const topicsSlice = createSlice({
    name: 'topicsSlice',
    initialState: {
        // Holds all topics keyed by 'id'
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            const { id } = action.payload;
            state.topics[id] = {
                ...action.payload,
                quizIds: []
            };
        },
    }
});

export const selectTopics = (state) => state.topicsSlice.topics;

export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;