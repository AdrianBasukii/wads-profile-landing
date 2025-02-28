import { NavLink } from "react-router-dom"

export default function HeroContent(){
    return(
        <div className="w-full  md:h-[600px] grid grid-rows-2 lg:grid-cols-2 lg:gap-8 px-8">
            <div className="flex flex-wrap flex-col items-start justify-center gap-8 lg:row-span-full w-full md:px-16">
                <h1 className="text-5xl md:text-6xl font-bold">Welcome to My To-Do App.</h1>
                <p className="text-2xl md:text-3xl text-neutral-500">Stay organized and boost your productivity.</p>
                <NavLink to="/todolist" className="bg-blue-500 p-2 rounded-sm">To-Do List</NavLink>
            </div>
            <div className="flex items-center justify-center lg:row-span-full w-full">
                <img src="src/assets/landing_image.png" alt="Landing image" className="rounded-xl border border-neutral-900 hover:shadow-md shadow-blue-900 transition-all"/>
            </div>
        </div>
    )
}