import { createSlice } from "@reduxjs/toolkit"

interface StudentInterface {
    data: any[]
}

const initialState: StudentInterface = {
    data: []
}

const Student = createSlice({
    name: "Student",
    initialState,
    reducers: {

    }
});

export default Student.reducer;
export const { } = Student.actions