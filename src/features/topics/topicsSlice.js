import { createSlice } from "@reduxjs/toolkit";
import { addQuiz } from "../quizzes/quizzesSlice";


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
    },
    extraReducers: (builder) => {
        builder.addCase(addQuiz, (state, action) => {
            const { topicId, id } = action.payload;
            if (state.topics[topicId]) {
                state.topics[topicId].quizIds.push(id);
            }
        })
    }
});

export const selectTopics = (state) => state.topicsSlice.topics;

export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;