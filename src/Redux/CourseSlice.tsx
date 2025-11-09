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
    courseIndex: number,
    openUpdateCourseTypeModal: boolean,
    openDeleteCourseTypeModal: boolean,
    openCreateCourseTypeModal: boolean,
    openUpdateCourseModal: boolean,
    openDeleteCourseModal: boolean,
    openCreateCourseModal: boolean,
    courseType: CourseType[],
    courses: Courses[]
}

const initialState: CourseInterface = {
    courseTypeIndex: -1,
    courseIndex: -1,
    openUpdateCourseTypeModal: false,
    openDeleteCourseTypeModal: false,
    openCreateCourseTypeModal: false,
    openUpdateCourseModal: false,
    openDeleteCourseModal: false,
    openCreateCourseModal: false,
    courses: [
        {
            id: 1,
            name: "Hindi"
        },
        {
            id: 2,
            name: "English"
        },
        {
            id: 3,
            name: "Maths"
        },
        {
            id: 4,
            name: "Python Coding"
        },
        {
            id: 5,
            name: "Graphic Design"
        },
        {
            id: 6,
            name: "Image Editing"
        },
    ],
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
        setUpdateCourseModalOpen: (state) => {
            state.openUpdateCourseModal = !state.openUpdateCourseModal
        },
        setCreateCourseModalOpen: (state) => {
            state.openCreateCourseModal = !state.openCreateCourseModal
        },
        setDeleteCourseModalOpen: (state) => {
            state.openDeleteCourseModal = !state.openDeleteCourseModal
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
        DeleteCourseType: (state) => {
            const index = state.courseTypeIndex;
            if (index >= 0 && index < state.courseType.length) {
                state.courseType.splice(index, 1);
            }
            state.courseTypeIndex = -1;
        },
        setCourseTypeIndex: (state, action: PayloadAction<number>) => {
            state.courseTypeIndex = action.payload
        },
        setCourseIndex: (state, action: PayloadAction<number>) => {
            state.courseIndex = action.payload
        },
        CreateNewCourse: (state, action: PayloadAction<string>) => {
            state.courses.push({
                id: state.courses.length + 1,
                name: action.payload
            });
        },
    }
});

export default CourseSlice.reducer;
export const {
    setCreateCourseTypeModalOpen,
    setDeleteCourseTypeModalOpen,
    setUpdateCourseTypeModalOpen,
    setCreateCourseModalOpen,
    setDeleteCourseModalOpen,
    setUpdateCourseModalOpen,
    setCourseTypeIndex,
    UpdateCourseType,
    DeleteCourseType,
    CreateNewCourseType,
    CreateNewCourse
} = CourseSlice.actions