import { X } from "@deemlol/next-icons"
import { useDispatch } from "react-redux"
import { CreateNewCourse, setCreateCourseModalOpen } from "../../Redux/CourseSlice";
import { useState } from "react";

function CreateCourseModal() {
    const dispatch = useDispatch();
    const [name, setName] = useState<string>("");

    function FormSubmit(e: any) {
        e.preventDefault();
        if (name) {
            dispatch(CreateNewCourse(name));
            dispatch(setCreateCourseModalOpen());
        }
        else {
            alert("cannot set empty course name")
        }
    }

    return (
        <div className="bg-black/15 w-full h-full absolute top-0 flex justify-center items-center p-2 z-9999">
            <div className="bg-white p-2 md:p-4 rounded-md drop-shadow-2xl w-full sm:w-[400px]">
                <div className="flex justify-between items-center pb-14">
                    <h1 className="font-medium">Create Course</h1>
                    <button onClick={() => dispatch(setCreateCourseModalOpen())} className="hover:text-zinc-400 active:text-black">
                        <X />
                    </button></div>
                <form onSubmit={FormSubmit} className="flex flex-col gap-3">
                    <input onChange={(e: any) => setName(e.target.value)} type="text" placeholder="Enter Course name" className="bg-zinc-100 px-2 py-2 rounded-md text-sm mb-4" />
                    <button className="w-fit self-end px-6 py-2 drop-shadow-2xl bg-black text-white rounded-md hover:bg-black/85 active:bg-black active:drop-shadow-none">Create</button>
                </form>
            </div>
        </div>
    )
}

export default CreateCourseModal