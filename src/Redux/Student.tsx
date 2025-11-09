import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"


type studentType = {
    fullname: string,
    email: string,
    courseId: string
}

interface StudentInterface {
    data: studentType[],
    openRegisterModal: boolean
}

const initialState: StudentInterface = {
    data: [],
    openRegisterModal: false
}

const Student = createSlice({
    name: "courseSlice",
    initialState,
    reducers: {
        addNewStudent: (state, action: PayloadAction<studentType>) => {
            state.data.push(action.payload)
        },
        setRegisterModalOpen: (state) => {
            state.openRegisterModal = !state.openRegisterModal
        }
    }
})

export default Student.reducer;
export const { addNewStudent, setRegisterModalOpen } = Student.actions;