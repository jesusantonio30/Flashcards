import { createSlice } from "@reduxjs/toolkit";

export const quizzesSlice = createSlice({
    name: 'quizzesSlice',
    initialState: {
        // hold all quizzes keyed by id
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            const { id } = action.payload;
            state.quizzes[id] = action.payload;
        },
    }
});

export const selectQuizzes = (state) => state.quizzesSlice.quizzes;

export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;