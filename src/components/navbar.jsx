import { NavLink } from "react-router-dom";

export default function Navbar(){
    return(
        <nav className="w-full flex justify-between items-center p-8 md:px-16 md:py-12 fixed top-0 left-0 right-0 z-50">
            <div>
                <h1 className="text-xl md:text-3xl font-bold select-none">Adrian Basuki</h1>
            </div>
            <ul className="flex gap-8">
                <li>
                    <NavLink to="/home" className="hover:text-blue-500 transition-all">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/profile" className="hover:text-blue-500 transition-all">Profile</NavLink>
                </li>
            </ul>
        </nav>
    )
}