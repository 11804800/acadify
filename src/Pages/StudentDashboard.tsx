import { useDispatch, useSelector } from "react-redux"
import { setRegisterModalOpen } from "../Redux/Student";
import type { RootState } from "../Redux/Store";

type CourseOffers = {
    id: number,
    name: string,
    course: string,
    courseType: string
}

type studentType = {
    fullname: string,
    email: string,
    courseId: string
}

function StudentDashboard() {
    const dispatch = useDispatch();

    const CourseOfferings: CourseOffers[] = useSelector((state: RootState) => {
        return state.courseoffers.courseOffers
    });

    const StudentData: studentType[] = useSelector((state: RootState) => {
        return state.student.data
    });


    return (
        <div className="p-2 w-full h-full">
            <div className="px-3 bg-zinc-50 py-2 rounded-md">
                <p className="text-[11px]">Student Dashboard</p>
            </div>
            <div className="py-5 px-2">
                <button onClick={() => dispatch(setRegisterModalOpen())} className="bg-blue-600 text-white px-3 sm:px-6 py-2 rounded-md shadow active:bg-blue-600 hover:bg-blue-500">Register New Student</button>
            </div>
            <div className="flex flex-col gap-2">
                {CourseOfferings.map((item: CourseOffers, index: number) => {
                    return (
                        <div key={index} className="flex flex-col gap-2 px-2 pt-2 pb-4">
                            <div className="px-2 py-2 bg-slate-100 rounded-md">
                                <h1 className="text-[13px] sm:text-[16px] font-medium">Couse Offer Name: {item.name}</h1>
                            </div>
                            Registered Students
                            <div className="flex flex-col gap-2">
                                {
                                    StudentData.filter((elem: studentType) => elem.courseId == item.name).map((val: studentType, index: number) => {
                                        return (
                                            <div key={index} className="bg-blue-50 p-2 rounded-md flex">
                                                <p className="w-full">{val.fullname}</p>
                                                <p className="w-full">{val.email}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default StudentDashboard