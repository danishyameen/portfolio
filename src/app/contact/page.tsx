import Form from "@/components/form/Form"
import { FaRegUserCircle } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { FaRegEnvelope } from "react-icons/fa"

export default function ContactPage() {
    return (
        <div className="space-x-5 mx-auto mb-5">
            <div className="w-[280px] space-x-5 mx-auto">
                <h1 className="mt-[100px] text-[40px] font-semibold text-center">Contact Me</h1>
                <div className="flex">
                    <hr className="mt-3 mr-3 w-[40px] h-[5px] bg-black" /><h2 className="text-center text-[20px] text-rose-600 font-semibold">Get In Touch </h2><hr className="ml-3 mt-3 w-[40px] h-[5px] bg-black" />
                </div>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-10">
                <div className="">
                    <div className="sm:mr-0 mr-5">
                        <h2 className="sm:text-[20px] text-[18px] sm:text-justify text-justify font-semibold ">Connect with me</h2>
                        <p className="sm:text-[16px] text-[16px] sm:text-justify text-justify">I am Front-end and Back-end Web Developer. I can build Dynamic Webistes for you and your business. I will give you to my best efforts to the job. If you want to build your own websites so don't waste your time amd money you can contact me my description is given below.</p>
                    </div>

                    <div className="mt-5 flex justify-between max-w-[160px]">
                        <div className="mt-3">
                            <FaRegUserCircle color="#ed143d" size="25px" />
                        </div>
                        <div>
                            <h2 className="sm:text-[18px] text-[16px] font-semibold">Name</h2>
                            <p className="sm:text-[14px] text-[15px] font-medium">Danish Yameen</p>
                        </div>
                    </div>

                    <div className="mt-5 flex justify-between max-w-[220px]">
                        <div className="mt-3">
                            <SlLocationPin color="#ed143d" size="25px" />
                        </div>
                        <div>
                            <h2 className="sm:text-[18px] text-[16px] font-semibold">Address</h2>
                            <p className="sm:text-[14px] text-[15px] font-medium">karachi, Sindh, Pakistan</p>
                        </div>
                    </div>

                    <div className="mt-5 flex justify-between max-w-[280px]">
                        <div className="mt-3">
                            <FaRegEnvelope color="#ed143d" size="25px" />
                        </div>
                        <div>
                            <h2 className="sm:text-[18px] text-[16px] font-semibold">Email</h2>
                            <p className="sm:text-[14px] text-[15px] font-medium">danisahyameennew@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div>
                    <Form />
                </div>
            </div>
        </div>
    )
}