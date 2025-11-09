import { Link } from "react-router"

function HeaderComponent() {
    return (
        <div className="px-4 py-2 flex items-start sm:items-center justify-between">
            <img src="/logo.png" className="object-contain w-30" />
            <div className="flex gap-5 md:gap-22 flex-col sm:flex-row p-2">
                <Link to="/" className="hover:underline hover:text-blue-600 active:text-[brown] active:no-underline">Student Dashboard</Link>
                <Link to="/course-dashboard" className="hover:underline hover:text-blue-600 active:text-[brown] active:no-underline">Courses</Link>
                <Link to="/course-type" className="hover:underline hover:text-blue-600 active:text-[brown] active:no-underline">Course-Type</Link>
            </div>
        </div>
    )
}

export default HeaderComponent