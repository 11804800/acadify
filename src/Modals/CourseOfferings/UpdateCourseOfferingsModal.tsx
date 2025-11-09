import { X } from "@deemlol/next-icons";
import { useDispatch, useSelector } from "react-redux";
import { setUpdateCourseOfferModalOpen, UpdateCourseOffer } from "../../Redux/courseOfferings";
import type { RootState } from "../../Redux/Store";
import { useState } from "react";

type CourseType = {
    id: number,
    coursetype: string
}

type Courses = {
    id: number,
    name: string,
}

type CourseOffers = {
    id: number,
    name: string,
    course: string,
    courseType: string
}

function UpdateCourseOfferingsModal() {
    const dispatch = useDispatch();


    const CourseOfferIndex: number = useSelector((state: RootState) => {
        return state.courseoffers.courseOfferIndex
    });

    const Course: Courses[] = useSelector((state: RootState) => {
        return state.course.courses
    });

    const coursetype: CourseType[] = useSelector((state: RootState) => {
        return state.course.courseType
    });

    const CourseOffer: CourseOffers[] = useSelector((state: RootState) => {
        return state.courseoffers.courseOffers
    });

    const FilterData: CourseOffers | undefined = CourseOffer.find((_, index: number) => index == CourseOfferIndex);

    const [course, setCourse] = useState<string | undefined>(FilterData?.course);
    const [courseType, setCourseType] = useState<string | undefined>(FilterData?.courseType);

    function EditCourseOffer() {
        if (course && courseType && FilterData) {
            dispatch(UpdateCourseOffer(
                {
                    id: FilterData?.id,
                    name: courseType + " - " + course,
                    course: course,
                    courseType: courseType
                }
            ));
            dispatch(setUpdateCourseOfferModalOpen());
        }
        else {
            alert("select both course and course type first")
        }
    }

    return (
        <div className="bg-black/15 w-full h-full absolute top-0 flex justify-center items-center p-2 z-9999">
            <div className="bg-white p-2 md:p-4 rounded-md drop-shadow-2xl w-full sm:w-[400px]">
                <div className="flex justify-between items-center pb-8">
                    <h1 className="font-medium">Update Course Offer {FilterData?.name}</h1>
                    <button onClick={() => dispatch(setUpdateCourseOfferModalOpen())} className="hover:text-zinc-400 active:text-black">
                        <X />
                    </button>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex gap-2 items-center justify-between">
                        <label htmlFor="course" className="font-medium">Course : </label>
                        <select onChange={(e: any) => {
                            if (e.target.value) {
                                setCourse(e.target.value)
                            }
                        }} value={course} className="outline-none bg-zinc-100 px-2 py-1 rounded-md text-sm">
                            <option value="">Select Course</option>
                            {
                                Course.map((item: Courses, index: number) => {
                                    return (
                                        <option value={item.name} key={index}>{item.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="flex gap-2 items-center justify-between">
                        <label className="font-medium" htmlFor="course">Course Type : </label>
                        <select onChange={(e: any) => {
                            if (e.target.value) {
                                setCourseType(e.target.value)
                            }
                        }} value={courseType} className="bg-zinc-100 outline-none px-2 py-1 rounded-md text-sm">
                            <option value="">Select Course Type</option>
                            {
                                coursetype.map((item: CourseType, index: number) => {
                                    return (
                                        <option value={item.coursetype} key={index}>{item.coursetype}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <button onClick={EditCourseOffer} className="mt-2 w-fit self-end px-6 py-2 drop-shadow-2xl bg-black text-white rounded-md hover:bg-black/85 active:bg-black active:drop-shadow-none">Create</button>
                </div>
            </div>
        </div>
    )
}

export default UpdateCourseOfferingsModal