export default function ProfileContainer(){
    return(
        <div className="grid grid-rows-2 md:grid-cols-2 w-full md:max-w-[900px] h-[400px] gap-8">
            <div className="w-full h-full p-4 md:row-span-full">
                <img className="h-full w-full object-cover rounded-sm" src="src/assets/pfp.png" alt="Profile Image" />
            </div>
            <div className="w-full h-full p-2 md:row-span-full flex flex-col gap-12">
                <h1 className="text-4xl px-2 md:text-6xl font-bold">Hi, I'm Adrian Basuki</h1>
                <p className="text-lg px-2 md:text-xl text-neutral-500">A passionate 2nd-year Computer Science student with a keen interest in web development, currently learning React.js and Tailwind CSS to build modern, responsive applications.</p>
            </div>
        </div>
    )
}