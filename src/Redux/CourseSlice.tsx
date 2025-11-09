import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type CourseType = {
    id: number,
    coursetype: string
}

type Courses = {
    id: number,
    name: string,
}

interface CourseInterface {
    courseTypeIndex: number,
    openUpdateCourseTypeModal: boolean,
    openDeleteCourseTypeModal: boolean,
    openCreateCourseTypeModal: boolean,
    courseType: CourseType[],
    courses: Courses[]
}

const initialState: CourseInterface = {
    courseTypeIndex: -1,
    openUpdateCourseTypeModal: false,
    openDeleteCourseTypeModal: false,
    openCreateCourseTypeModal: false,
    courses: [],
    courseType: [
        {
            id: 1,
            coursetype: "individual"
        },
        {
            id: 2,
            coursetype: "group"
        },
        {
            id: 3,
            coursetype: "special"
        },
    ]
}

const CourseSlice = createSlice({
    name: "course",
    initialState,
    reducers: {
        setUpdateCourseTypeModalOpen: (state) => {
            state.openUpdateCourseTypeModal = !state.openUpdateCourseTypeModal
        },
        setCreateCourseTypeModalOpen: (state) => {
            state.openCreateCourseTypeModal = !state.openCreateCourseTypeModal
        },
        setDeleteCourseTypeModalOpen: (state) => {
            state.openDeleteCourseTypeModal = !state.openDeleteCourseTypeModal
        },
        CreateNewCourseType: (state, action: PayloadAction<string>) => {
            state.courseType.push({
                id: state.courseType.length + 1,
                coursetype: action.payload
            });
        },
        UpdateCourseType: (state, action: PayloadAction<CourseType>) => {
            state.courseType[state.courseTypeIndex] = action.payload;
            state.courseTypeIndex = -1;
        },
        DeleteCourseType: (state, action: PayloadAction<number>) => {
            state.courseType = state.courseType.slice(action.payload, 1);
        },
        setCourseTypeIndex: (state, action: PayloadAction<number>) => {
            state.courseTypeIndex = action.payload
        }
    }
});

export default CourseSlice.reducer;
export const {
    setCreateCourseTypeModalOpen,
    setDeleteCourseTypeModalOpen,
    setUpdateCourseTypeModalOpen,
    setCourseTypeIndex,
    UpdateCourseType,
    DeleteCourseType,
    CreateNewCourseType
} = CourseSlice.actions