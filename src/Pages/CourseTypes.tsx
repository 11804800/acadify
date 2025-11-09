import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../Redux/Store"
import { Edit2, Trash2 } from "@deemlol/next-icons";
import { setCreateCourseTypeModalOpen, setDeleteCourseTypeModalOpen, setUpdateCourseTypeModalOpen } from "../Redux/CourseSlice";

type CourseType = {
    id: number,
    coursetype: string
}

function CourseTypes() {
    const courseType = useSelector((state: RootState) => {
        return state.course.courseType
    });

    const dispatch = useDispatch();

    return (
        <div className="p-2 w-full h-full">
            <div className="px-3 bg-zinc-50 py-2 rounded-md">
                <p className="text-[11px]">Course Type</p>
            </div>
            <div className="py-5 px-2">
                <button onClick={() => dispatch(setCreateCourseTypeModalOpen())} className="bg-blue-600 text-white px-3 sm:px-6 py-2 rounded-md shadow active:bg-blue-600 hover:bg-blue-500">Add New Course Type</button>
            </div>
            <div className="flex flex-col p-2 h-[80%]">
                <div className="flex bg-slate-200 p-2 font-medium">
                    <h3 className="w-full px-2">Id</h3>
                    <h3 className="w-full px-2">Name</h3>
                </div>
                <div className="overflow-y-auto h-[80%]">
                    {
                        courseType.map((item: CourseType, index: number) => {
                            return (
                                <div key={index} className={`flex w-full p-2 ${index % 2 != 0 && "bg-slate-50"}`}>
                                    <p className="w-full px-2">{item.id}.</p>
                                    <div className="w-full flex items-center justify-between pr-2 gap-2 sm:pr-4">
                                        <div className="w-[80%]">
                                            <p>{item.coursetype}</p>
                                        </div>
                                        <button onClick={() => dispatch(setUpdateCourseTypeModalOpen())} className="hover:text-blue-500 active:text-black">
                                            <Edit2 size={15} />
                                        </button>
                                        <button onClick={() => dispatch(setDeleteCourseTypeModalOpen())} className="hover:text-blue-500 active:text-black"><Trash2 size={15} /></button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default CourseTypes