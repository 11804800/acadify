import { X } from "@deemlol/next-icons"
import { useDispatch, useSelector } from "react-redux"
import { setUpdateCourseTypeModalOpen, UpdateCourseType } from "../../Redux/CourseSlice";
import type { RootState } from "../../Redux/Store";
import { useState } from "react";

type CourseType = {
    id: number,
    coursetype: string
}

function UpdateCourseTypeModal() {
    const dispatch = useDispatch();

    const Coursetype: CourseType[] = useSelector((state: RootState) => {
        return state.course.courseType
    });

    const CourseTypeIndex: number = useSelector((state: RootState) => {
        return state.course.courseTypeIndex
    })

    const filterData: CourseType | undefined = Coursetype.find((item: any, index: number) => index == CourseTypeIndex)
    const [name, setName] = useState(filterData?.coursetype);

    function FormSubmit(e: any) {
        e.preventDefault();
        if (filterData && name) {
            dispatch(UpdateCourseType({
                id: filterData?.id,
                coursetype: name
            }));
            dispatch(setUpdateCourseTypeModalOpen())
        }
        else {
            alert("cannot set empty course name");
        }
    }
    return (
        <div className="bg-black/15 w-full h-full absolute top-0 flex justify-center items-center p-2 z-9999">
            <div className="bg-white p-2 md:p-4 rounded-md drop-shadow-2xl w-full sm:w-[400px]">
                <div className="flex justify-between items-center pb-14">
                    <h1 className="font-medium">Update Course Type</h1>
                    <button onClick={() => dispatch(setUpdateCourseTypeModalOpen())} className="hover:text-zinc-400 active:text-black">
                        <X />
                    </button></div>
                <form onSubmit={FormSubmit} className="flex flex-col gap-3">
                    <input value={name} onChange={(e: any) => setName(e.target.value)} type="text" placeholder="Enter Course Type" className="bg-zinc-100 px-2 py-2 rounded-md text-sm mb-4" />
                    <button className="w-fit self-end px-6 py-2 drop-shadow-2xl bg-black text-white rounded-md hover:bg-black/85 active:bg-black active:drop-shadow-none text-sm">Update</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateCourseTypeModal