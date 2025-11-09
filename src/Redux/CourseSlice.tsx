import { createSlice } from "@reduxjs/toolkit"

interface CourseInterface {
    courseType: any[],
    courses: any[]
}

const initialState: CourseInterface = {
    courses: [],
    courseType: []
}

const CourseSlice = createSlice({
    name: "course",
    initialState,
    reducers: {

    }
});

export default CourseSlice.reducer;
export const { } = CourseSlice.actions