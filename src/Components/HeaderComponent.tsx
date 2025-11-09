import { AlignJustify, X } from "@deemlol/next-icons"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router"

function HeaderComponent() {
    const [ShowNavbar, setShowNavbar] = useState<boolean>(false);
    const Navref = useRef<any>(null);
    useEffect(() => {
        if (!ShowNavbar) return;
        const handler = (e: any) => {
            if (Navref.current && !Navref.current.contains(e.target)) {
                setShowNavbar(false)
            }
        }
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    }, [ShowNavbar]);
    return (
        <div className="px-4 py-2 flex items-center sm:items-center justify-between">
            <img src="/logo.png" className="object-contain w-30" />
            <button className="flex md:hidden" onClick={() => setShowNavbar(!ShowNavbar)}>
                {
                    ShowNavbar ?
                        <X /> :
                        <AlignJustify />
                }
            </button>
            <div ref={Navref} className={`${ShowNavbar ? "flex absolute right-0 bg-white top-12 drop-shadow-2xl rounded-md px-4 py-4" : "hidden md:flex"} gap-5 md:gap-12 flex-col md:flex-row p-2`}>
                <Link onClick={() => setShowNavbar(false)} to="/" className="hover:underline hover:text-blue-600 active:text-[brown] active:no-underline">Student Dashboard</Link>
                <Link onClick={() => setShowNavbar(false)} to="/course-offerings" className="hover:underline hover:text-blue-600 active:text-[brown] active:no-underline">Course Offerings</Link>
                <Link onClick={() => setShowNavbar(false)} to="/course-dashboard" className="hover:underline hover:text-blue-600 active:text-[brown] active:no-underline">Courses</Link>
                <Link onClick={() => setShowNavbar(false)} to="/course-type" className="hover:underline hover:text-blue-600 active:text-[brown] active:no-underline">Course-Type</Link>
            </div>
        </div>
    )
}

export default HeaderComponent