import { configureStore } from "@reduxjs/toolkit";
import Student from "./Student";
import CourseType from "./CourseSlice";
import CourseOffering from "./courseOfferings";

export const Store = configureStore({
    reducer: {
        student: Student,
        course: CourseType,
        courseoffers: CourseOffering
    }
});
export type RootState = ReturnType<typeof Store.getState>