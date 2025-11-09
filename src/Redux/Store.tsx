import { configureStore } from "@reduxjs/toolkit";
import Student from "./Student";
import CourseType from "./CourseSlice";

export const Store = configureStore({
    reducer: {
        student: Student,
        course: CourseType
    }
});
export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = ReturnType<typeof Store.dispatch>