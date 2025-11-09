import { X } from '@deemlol/next-icons';
import { useDispatch, useSelector } from 'react-redux'
import { addNewStudent, setRegisterModalOpen } from '../../Redux/Student';
import { useState } from 'react';
import type { RootState } from '../../Redux/Store';

type CourseOffers = {
    id: number,
    name: string,
    course: string,
    courseType: string
}

function RegisterModal() {

    const [courseOfferName, setCourseOfferName] = useState<string>("");
    const [fullname, setFullname] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const CourseOffer: CourseOffers[] = useSelector((state: RootState) => {
        return state.courseoffers.courseOffers
    });

    const dispatch = useDispatch();

    function FormSubmit(e: any) {
        e.preventDefault();
        if (courseOfferName && fullname && email) {
            dispatch(addNewStudent({
                fullname: fullname,
                email: email,
                courseId: courseOfferName
            }));
            dispatch(setRegisterModalOpen())
        }
        else {
            alert("full the form completely")
        }

    }

    return (
        <div className="bg-black/15 w-full h-full absolute top-0 flex justify-center items-center p-2 z-9999">
            <div className="bg-white p-2 md:p-4 pb-7 rounded-md drop-shadow-2xl w-full sm:w-[400px]">
                <div className='flex justify-between items-center pb-8'>
                    <h1 className='font-medium'>Register New Student</h1>
                    <button onClick={() => dispatch(setRegisterModalOpen())}><X /></button>
                </div>
                <div>
                    <form onSubmit={FormSubmit} className='flex flex-col gap-3'>
                        <div className='flex flex-col bg-zinc-100 rounded-md py-3 px-3'>
                            <label htmlFor='fullname' className='text-[13px] font-medium text-zinc-500'>Full Name</label>
                            <input onChange={(e: any) => setFullname(e.target.value)} required type='text' id='fullname' name='fullname' className='outline-none py-2 text-sm' />
                        </div>
                        <div className='flex flex-col bg-zinc-100 rounded-md py-3 px-3'>
                            <label htmlFor='Email' className='text-[13px] font-medium text-zinc-500'>Email</label>
                            <input onChange={(e: any) => setEmail(e.target.value)} type="email" name="email" id="email" required className='outline-none py-2 text-sm' />
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2 sm:items-center justify-between">
                            <label htmlFor="course" className="font-medium">Course Offer : </label>
                            <select onChange={(e: any) => {
                                if (e.target.value) {
                                    setCourseOfferName(e.target.value)
                                }
                            }} value={courseOfferName} className="outline-none bg-zinc-100 px-2 py-2 rounded-md text-sm capitalize">
                                <option value="">Select Course Offer</option>
                                {
                                    CourseOffer.map((item: CourseOffers, index: number) => {
                                        return (
                                            <option value={item.name} key={index} className='capitalize'>{item.name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <button className="mt-3 w-fit self-end px-6 py-2 drop-shadow-2xl bg-black text-white rounded-md hover:bg-black/85 active:bg-black active:drop-shadow-none text-sm">Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterModal