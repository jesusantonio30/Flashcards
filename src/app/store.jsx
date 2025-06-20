import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from '../features/topics/topicsSlice';
import quizzesReducer from '../features/quizzes/quizzesSlice';
import cardsReducer, { cardsSlice } from '../features/cards/cardsSlice'

export default configureStore({
    reducer: {
        topicsSlice: topicsReducer,
        quizzesSlice: quizzesReducer,
        cardsSlice: cardsReducer,
    },
});