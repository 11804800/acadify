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
    data: [
        { fullname: "Alice 1", email: "alice.1@example.com", courseId: "group - Hindi" },
        { fullname: "Bob 2", email: "bob.2@example.com", courseId: "individual - Python Coding" },
        { fullname: "Charlie 3", email: "charlie.3@example.com", courseId: "Special - English" },
        { fullname: "David 4", email: "david.4@example.com", courseId: "Special - Maths" },
        { fullname: "Eva 5", email: "eva.5@example.com", courseId: "individual - Graphic Design" },
        { fullname: "Frank 6", email: "frank.6@example.com", courseId: "group - Python Coding" },
        { fullname: "Grace 7", email: "grace.7@example.com", courseId: "group - Image Editing" },
        { fullname: "Helen 8", email: "helen.8@example.com", courseId: "group - Hindi" },
        { fullname: "Ian 9", email: "ian.9@example.com", courseId: "individual - Python Coding" },
        { fullname: "Jane 10", email: "jane.10@example.com", courseId: "Special - English" },
        { fullname: "Kevin 11", email: "kevin.11@example.com", courseId: "Special - Maths" },
        { fullname: "Laura 12", email: "laura.12@example.com", courseId: "individual - Graphic Design" },
        { fullname: "Mike 13", email: "mike.13@example.com", courseId: "group - Python Coding" },
        { fullname: "Nina 14", email: "nina.14@example.com", courseId: "group - Image Editing" },
        { fullname: "Oscar 15", email: "oscar.15@example.com", courseId: "group - Hindi" },
        { fullname: "Paul 16", email: "paul.16@example.com", courseId: "individual - Python Coding" },
        { fullname: "Quinn 17", email: "quinn.17@example.com", courseId: "Special - English" },
        { fullname: "Rachel 18", email: "rachel.18@example.com", courseId: "Special - Maths" },
        { fullname: "Steve 19", email: "steve.19@example.com", courseId: "individual - Graphic Design" },
        { fullname: "Tina 20", email: "tina.20@example.com", courseId: "group - Image Editing" }
    ],
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