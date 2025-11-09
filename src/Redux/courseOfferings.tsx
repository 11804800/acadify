import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"


type CourseOffers = {
    id: number,
    name: string,
    course: string,
    courseType: string
}

interface CourseOfferings {
    openUpdateCourseOffersModal: boolean,
    openAddNewCourseOffersModal: boolean,
    courseOffers: CourseOffers[],
    courseOfferIndex: number
}

const initialState: CourseOfferings = {
    openAddNewCourseOffersModal: false,
    openUpdateCourseOffersModal: false,
    courseOffers: [
        {
            id: 1,
            name: "group - Hindi",
            course: "Hindi",
            courseType: "group"
        },
        {
            id: 2,
            name: "individual - Python Coding",
            course: "Python Coding",
            courseType: "individual"
        },
        {
            id: 3,
            name: "Special - English",
            course: "English",
            courseType: "Special"
        },
        {
            id: 4,
            name: "Special - Maths",
            course: "Maths",
            courseType: "Special"
        },
        {
            id: 5,
            name: "individual - Graphic Design",
            course: "Graphic Design",
            courseType: "individual"
        },
        {
            id: 6,
            name: "group - Python Coding",
            course: "Python Coding",
            courseType: "group"
        },
        {
            id: 7,
            name: "group - Image Editing",
            course: "Image Editing",
            courseType: "group"
        }
    ],
    courseOfferIndex: -1
}

const CourseOffering = createSlice({
    name: "courseSlice",
    initialState,
    reducers: {
        setCourseOfferIndex: (state, action: PayloadAction<number>) => {
            state.courseOfferIndex = action.payload
        },
        setUpdateCourseOfferModalOpen: (state) => {
            state.openUpdateCourseOffersModal = !state.openUpdateCourseOffersModal
        },
        setCreateCourseOfferModalOpen: (state) => {
            state.openAddNewCourseOffersModal = !state.openAddNewCourseOffersModal
        },
        CreateNewCourseOffer: (state, action: PayloadAction<any>) => {
            state.courseOffers.push({
                id: state.courseOffers.length + 1,
                name: action.payload.courseType + " - " + action.payload.course,
                course: action.payload.course,
                courseType: action.payload.courseType
            });
        },
        UpdateCourseOffer: (state, action: PayloadAction<CourseOffers>) => {
            state.courseOffers[state.courseOfferIndex] = action.payload;
            state.courseOfferIndex = -1;
        },
        DeleteCourseOffer: (state) => {
            const index = state.courseOfferIndex;
            if (index >= 0 && index < state.courseOffers.length) {
                state.courseOffers.splice(index, 1);
            }
            state.courseOfferIndex = -1;
        },
    }
})

export default CourseOffering.reducer;
export const {
    setCourseOfferIndex,
    CreateNewCourseOffer,
    UpdateCourseOffer,
    DeleteCourseOffer,
    setCreateCourseOfferModalOpen,
    setUpdateCourseOfferModalOpen
} = CourseOffering.actions;