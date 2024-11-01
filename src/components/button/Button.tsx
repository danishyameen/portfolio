import Link from "next/link"

function Button() {
    return (

        <div className=" w-auto h-auto">
            <button className="border-rose-600 sm:text-[22px] md:text-[18px] text-[20px] text-white border-solid border-2 bg-rose-600 hover:bg-transparent hover:text-black rounded px-[32px] sm:w-auto md:w-[150px] w-auto mt-5 sm:h-auto h-auto">
                <Link className="" href="./contact">Hire Me</Link>
            </button>

        </div>
    )
}

function CVbutton() {
    return (
        <div className="w-auto h-auto">
            <button className="border-rose-600 sm:text-[22px] md:text-[18px] text-[20px] text-white border-solid border-2 bg-rose-600 hover:bg-transparent hover:text-black rounded pt-[0px] px-[32px] sm:w-auto md:w-[200px] w-auto mt-5 sm:h-auto h-auto">
                <Link className="" href="https://drive.google.com/file/d/1QEJduCVW9L3f297pj0X6HKk-9Rj7bcd4/view?usp=drivesdk">Download CV</Link>
            </button>
        </div>
    )
}

function FormButton() {
    return (
        <div className="mt-[-15px]">
            <button className=" border-rose-600 sm:text-[20px] text-[16px] text-white border-solid border-2 bg-rose-600  rounded pt-[0px] px-[32px] sm:w-[150px] w-[180px] mt-5 sm:h-[50px] h-[40px]">Submit</button>
        </div>
    )
}


export {
    Button,
    CVbutton,
    FormButton
}