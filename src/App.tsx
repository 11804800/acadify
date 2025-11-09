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

  const OpenCreateCourseTypeModal: boolean = useSelector((state: RootState) => {
    return state.course.openCreateCourseTypeModal
  });

  return (
    <>
      {OpenCreateCourseTypeModal && <CreateCourseTypeModal />}
      {OpenDeleteCourseTypeModal && <DeleteCourseTypeModal />}
      {OpenUpdateCourseTypeModal && <UpdateCourseTypeModal />}
      <HeaderComponent />
      <Routes>
        <Route path='/' element={<StudentDashboard />} />
        <Route path='/course-dashboard' element={<CourseDashboard />} />
        <Route path='/course-type' element={<CourseTypes />} />
      </Routes>
    </>
  )
}

export default App