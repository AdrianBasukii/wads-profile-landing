export default function FlexContainer({children}){
    return(
        <div className="w-full h-full flex mt-24 md:mt-0 md:items-center justify-center">
            {children}
        </div>
    )
}