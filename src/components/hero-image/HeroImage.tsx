import Image from "next/image"
import Profile from "@/app/img/profile.png"

export default function HeroImage(){
    return(
        <div className="w-auto md:mt-[-5px] sm:hidden  md:block lg:mt-[-50px]  xl:mt-[-100px] mt-[-150px] lg:ml-5">
            <Image className="sm:bg-white sm:hover:bg-rose-600 hover:bg-rose-600 bg-white cursor-pointer rounded-full mx-auto w-[450px]" src={Profile} alt="HeroImage" width="450" height={100}/>
        </div>
    )
}