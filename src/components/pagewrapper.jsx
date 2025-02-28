export default function PageWrapper({children}){
    return(
        <div className="bg-neutral-950 h-screen w-screen text-white fixed">
            {children}
        </div>
    )
}