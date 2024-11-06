import HeroImage from "@/components/hero-image/HeroImage"
import { Button, CVbutton } from "@/components/button/Button"
import Typewriter from 'typewriter-effect';


export default function HeroSection() {
    return (
        <div className="sm:p-10 p-7 sm:w-auto sm:h-auto w-auto h-auto sm:absolute absolute sm:top-[200px] top-[150px] bottom-0 grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 grid-cols-1 sm:gap-64 gap-52 ">
            
            <div className="sm:leading-[4.5rem] md:leading-[3rem] lg:leading-[3.5rem] md:mt-5">
                <h2 className="text-white font-normal sm:text-[27px] md:text-[20px]  lg:text-[28px] text-[20px]">Dear, My Name Is</h2>
                <h1 className="text-white font-semibold sm:text-[65px] md:text-[35px] lg:text-[45px] text-[35px]">Danish Yameen</h1>
                <h2 className="text-white font-normal sm:text-[35px] md:text-[20px] lg:text-[25px] text-[20px]">And I'm a  Frontend Developer </h2>

                <div className="flex gap-3 h-auto w-auto ">
                    <Button />
                    <CVbutton />
                </div>

            </div>

            <div className="">
                <HeroImage />
            </div>


        </div>
    )
}

