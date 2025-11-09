import HeaderComponent from './Components/HeaderComponent'
import FooterComponent from './Components/FooterComponent'
import { Route, Routes } from 'react-router'
import StudentDashboard from './Pages/StudentDashboard'

function App() {
  return (
    <>
      <HeaderComponent />
      <Routes>
        <Route path='/' element={<StudentDashboard />} />
      </Routes>
      <FooterComponent />
    </>
  )
}

export default App