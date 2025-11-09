import { useDispatch } from "react-redux"
import { setDeleteCourseTypeModalOpen } from "../../Redux/CourseSlice";

function DeleteCourseTypeModal() {
    const dispatch = useDispatch();
    return (
        <div className="bg-black/15 w-full h-full absolute top-0 flex justify-center items-center p-2 z-9999">
            <div className="bg-white p-2 md:p-4 rounded-md drop-shadow-2xl w-full sm:w-[400px]">
                <div className="flex justify-center pb-14">
                    <h1 className="font-medium text-center">Do You Want to Delete This Course Type</h1>
                </div>
                <div className="flex gap-5 px-5">
                    <button className="bg-[brown] text-white px-4 py-2 rounded-md drop-shadow hover:bg-[brown]/85 active:bg-[brown] active:drop-shadow-none text-sm">
                        Yes
                    </button>
                    <button onClick={() => dispatch(setDeleteCourseTypeModalOpen())} className="bg-green-600 text-white px-4 py-2 rounded-md drop-shadow hover:bg-green-500 active:bg-green-600 active:drop-shadow-none text-sm">No</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteCourseTypeModal