import Image from "next/image"
import DaniyalNagori from "@/app/img/team8.png"
import AmeenAlam from "@/app/img/team6.png"
import HamzahSyed from "@/app/img/team7.png"
import  AliMughal from "@/app/img/team1.png"
import GhousAhmed from "@/app/img/team2.png"
import BasitAhmed from "@/app/img/team3 (2).png"
export default function TeamPage() {
    return (
        <div className="bg-black h-auto lg:pt-5 lg:pb-20 p-5">
            <div className="w-[280px] space-x-5 mx-auto">
                <h1 className="mt-[100px] text-[40px] font-semibold text-white text-center">My Team</h1>
                <div className="flex">
                    <hr className="mt-3 mr-3 w-[40px] h-[5px] bg-black" /><h2 className="text-center text-[20px] text-rose-600 font-semibold">Who With Me</h2><hr className="ml-3 mt-3 w-[40px] h-[5px] bg-black" />
                </div>
            </div>
            <div className="mt-5">
                <div className="w-full bg-black h-auto">
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-5 space-x-2 mx-auto p-5">
                        <div className=" w-auto mx-auto h-auto  bg-white text-center p-8 rounded-md  ">
                            <div className="w-full mx-auto ">
                                <Image src={DaniyalNagori} className="w-[100px] mx-auto h-auto " alt="Daniyal Nagori" />
                            </div>
                            <h1 className="text-[24px] mt-[5px] font-bold mb-2">Daniyal Nagori</h1>
                            <h4 className="text-[18px]">CEO at Giaic, Piaic Program & Pana Cloud Software House. He is a full stack Software Engeeier.</h4>


                        </div>

                        <div className="w-auto mx-auto h-auto  bg-white text-center  p-8 rounded-md ">
                            <div className="w-[130px] flex mx-auto">
                                <div className="w-full mx-auto ">
                                    <Image src={AmeenAlam} className="w-[150px] mx-auto h-auto" alt="Ameen Alam" />
                                </div>
                            </div>
                            <h1 className="text-[24px] mt-[5px] font-bold mb-2">Ameen Alam</h1>
                            <h4 className="text-[18px] ">Faculty Head at Giaic Program. He is a Certified AWS Developer, Certified Kubernetes Application Developer</h4>
                        </div>

                        <div className=" w-auto mx-auto h-auto   bg-white text-center p-8 rounded-md ">
                            <div className="w-full mx-auto ">
                                <Image src={HamzahSyed} className="w-[130px] mx-auto h-auto" alt="Hamzah Syed" />
                            </div>
                            <h1 className="text-[24px] mt-[5px] font-bold mb-2">Hamzah Syed</h1>
                            <h4 className="text-[18px]">Senior Teacher at Giaic & Piaic Program. Top-Rated web developer & Expert JAMStack, React and Next.js </h4>

                        </div>

                        <div className="w-auto mx-auto h-auto  bg-white text-center p-8 rounded-md">
                            <div className="w-[180px] flex mx-auto">
                            <div className="w-full mx-auto ">
                                <Image src={AliMughal} className="w-[130px] mx-auto h-auto" alt="Ali Mughal" />
                            </div>
                            </div>
                            <h1 className="text-[24px] mt-[5px] font-bold mb-2">Muhammad Ali Mughal</h1>
                            <h4 className="text-[18px]">Founder & CEO of Jawan Pakistan &amp; Job Creation Program. Studies at National University Karachi</h4>

                        </div>

                        <div className="w-auto mx-auto h-auto  bg-white text-center p-8 rounded-md">
                            <div className="w-[180px] flex mx-auto">
                            <div className="w-full mx-auto ">
                                <Image src={GhousAhmed} className=" w-[130px] mx-auto h-auto" alt="Ghous Ahmed" />
                            </div>
                            </div>
                            <h1 className="text-[24px] font-bold mb-2">Ghous Ahmed</h1>
                            <h4 className="text-[18px]">Senior Software Engeeier at Tech Kolachi & Senior Teacher at Mass Training & Job Creation Program.</h4>

                        </div>

                        <div className="w-auto mx-auto h-auto  bg-white text-center p-8 rounded-md">
                            <div className="w-[130px] flex mx-auto">
                            <div className="w-full mx-auto ">
                                <Image src={BasitAhmed} className=" w-[130px] mx-auto h-auto" alt="Basit Ahmed" />
                            </div>

                            </div>
                            <h1 className="text-[24px] font-bold mb-2">Abdul Basit Ahmed</h1>
                            <h4 className="text-[18px]">Assistant trainer at Saylani Welfare Mass Training & Job Creation Program. Studies at University of Karachi</h4>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}