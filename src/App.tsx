import HeaderComponent from './Components/HeaderComponent'
import { Route, Routes } from 'react-router'
import StudentDashboard from './Pages/StudentDashboard'
import CourseDashboard from './Pages/CourseDashboard'
import CourseTypes from './Pages/CourseTypes'
import { useEffect } from 'react'
import Lenis from 'lenis'
import type { RootState } from './Redux/Store'
import { useSelector } from 'react-redux'
import CreateCourseTypeModal from './Modals/CourseType/CreateCourseTypeModal'
import DeleteCourseTypeModal from './Modals/CourseType/DeleteCourseTypeModal'
import UpdateCourseTypeModal from './Modals/CourseType/UpdateCourseTypeModal'
import CreateCourseModal from './Modals/Course/CreateCourseModal'
import UpdateCourseModal from './Modals/Course/UpdateCouseModal'
import CourseOfferings from './Pages/CourseOfferings'
import CreateCourseOfferingsModal from './Modals/CourseOfferings/CreateCourseOfferingsModal'
import UpdateCourseOfferingsModal from './Modals/CourseOfferings/UpdateCourseOfferingsModal'

function App() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const OpenDeleteCourseTypeModal: boolean = useSelector((state: RootState) => {
    return state.course.openDeleteCourseTypeModal
  });

  const OpenUpdateCourseTypeModal: boolean = useSelector((state: RootState) => {
    return state.course.openUpdateCourseTypeModal
  });
  const OpenUpdateCourseModal: boolean = useSelector((state: RootState) => {
    return state.course.openUpdateCourseModal
  });
  const OpenUpdateCourseOfferingsModal: boolean = useSelector((state: RootState) => {
    return state.courseoffers.openUpdateCourseOffersModal
  });

  const OpenCreateCourseTypeModal: boolean = useSelector((state: RootState) => {
    return state.course.openCreateCourseTypeModal
  });
  const OpenCreateCourseModal: boolean = useSelector((state: RootState) => {
    return state.course.openCreateCourseModal
  });
  const OpenCreateCourseOfferingModal: boolean = useSelector((state: RootState) => {
    return state.courseoffers.openAddNewCourseOffersModal
  });

  return (
    <>
      {OpenCreateCourseOfferingModal && <CreateCourseOfferingsModal />}
      {OpenCreateCourseModal && <CreateCourseModal />}
      {OpenCreateCourseTypeModal && <CreateCourseTypeModal />}
      {OpenDeleteCourseTypeModal && <DeleteCourseTypeModal />}
      {OpenUpdateCourseTypeModal && <UpdateCourseTypeModal />}
      {OpenUpdateCourseModal && <UpdateCourseModal />}
      {OpenUpdateCourseOfferingsModal && <UpdateCourseOfferingsModal />}
      <HeaderComponent />
      <Routes>
        <Route path='/' element={<StudentDashboard />} />
        <Route path='/course-dashboard' element={<CourseDashboard />} />
        <Route path='/course-type' element={<CourseTypes />} />
        <Route path='/course-offerings' element={<CourseOfferings />} />
      </Routes>
    </>
  )
}

export default App