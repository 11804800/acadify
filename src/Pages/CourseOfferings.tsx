import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../Redux/Store"
import { Edit2, Trash2 } from "@deemlol/next-icons";
import { DeleteCourseOffer, setCourseOfferIndex, setCreateCourseOfferModalOpen, setUpdateCourseOfferModalOpen } from "../Redux/courseOfferings";

type CourseOffer = {
    id: number,
    name: string,
    course: string,
    courseType: string
}

function CourseOfferings() {
    const CourseOffers = useSelector((state: RootState) => {
        return state.courseoffers.courseOffers
    });

    const dispatch = useDispatch();

    return (
        <div className="p-2 w-full h-full">
            <div className="px-3 bg-zinc-50 py-2 rounded-md">
                <p className="text-[11px]">Course offerings</p>
            </div>
            <div className="py-5 px-2">
                <button onClick={() => dispatch(setCreateCourseOfferModalOpen())} className="bg-blue-600 text-sm text-white px-3 sm:px-6 py-2 rounded-md shadow active:bg-blue-600 hover:bg-blue-500">Create New Course Offering</button>
            </div>
            <div className="flex flex-col p-2 h-[80%]">
                <div className="flex flex-col sm:flex-row gap-2 bg-slate-200 p-2 font-medium">
                    <h3 className="w-fit pl-2 pr-4">Id</h3>
                    <h3 className="w-full px-2">name</h3>
                    <h3 className="w-full px-2">Course</h3>
                    <h3 className="w-full px-2">Course Type</h3>
                </div>
                <div className="overflow-y-auto h-[80%]">
                    {
                        CourseOffers.map((item: CourseOffer, index: number) => {
                            return (
                                <div key={index} className={`flex flex-col sm:flex-row gap-3 w-full p-2 ${index % 2 != 0 && "bg-slate-50"}`}>
                                    <p className="w-fit pl-2 pr-4">{item.id}.</p>
                                    <p className="w-full sm:px-2 capitalize">{item.name}</p>
                                    <p className="w-full">{item.course}</p>
                                    <div className="w-full flex flex-col sm:flex-row  sm:items-center justify-between pr-2 gap-2 sm:pr-4">
                                        <div className="w-[80%]">
                                            <p className="capitalize">{item.courseType}</p>
                                        </div>
                                        <div className="flex gap-4 py-2">
                                            <button onClick={() => {
                                                dispatch(setUpdateCourseOfferModalOpen())
                                                dispatch(setCourseOfferIndex(index))
                                            }} className="hover:text-blue-500 active:text-black">
                                                <Edit2 size={15} />
                                            </button>
                                            <button onClick={() => {
                                                dispatch(setCourseOfferIndex(index));
                                                dispatch(DeleteCourseOffer());
                                            }} className="hover:text-blue-500 active:text-black"><Trash2 size={15} /></button>
                                        </div>
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

export default CourseOfferings