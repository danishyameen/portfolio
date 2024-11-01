import Image from "next/image"
import Profile from "@/app/img/profileImg.png"
import { Button, CVbutton } from "@/components/button/Button"

export default function AboutPage() {
    return (
        <div>
            <div className="w-[200px] mx-auto">
                <h1 className="mt-[100px] text-[40px] font-semibold text-center">About Me</h1>
                <div className="flex">
                    <hr className="mt-3 mr-3 w-[40px] h-[5px] bg-black" /><h2 className="text-center text-[20px] text-rose-600 font-semibold">Who I Am</h2><hr className="ml-3 mt-3 w-[40px] h-[5px] bg-black" />
                </div>
            </div>
            <div className="sm:p-0 md:3 p-3 grid md:grid-cols-12 grid-cols-1">
                <div className="sm:col-span-4 ">
                    <Image src={Profile} className=" sm:w-[400px] w-[300px] sm:ml-[80px] mx-auto" alt="" />
                </div>
                <div className="sm:mt-[30px] mt-[50px] sm:col-span-8 sm:w-[700px] w-full mx-auto">
                    <h2 className="text-[30px] md:text-left text-center font-semibold sm:mr-5">I'm Danish Yameen</h2>
                    <h2 className="text-[26px] md:text-left text-center font-semibold sm:mb-3 sm:mr-5">I'm Front web Developer</h2>
                    <p className="sm:text-[18px] text-[16px] sm:mt-0 mt-3  font-medium leading-8 text-justify">I am glad to introduce myself as a highly and skilled Front-end web developer. I am a dilligent person who works hard and pays attention to detail. I'm flexible, quick to pick up new skills, and eager to learn from others. I have start learning web develompent since 2023 and to carry on. I have 1year of learning experience and developed muiltiple projects using latest technology. I am a student of governor Sindh IT Program. I am learned multiple technology Html5, Css3, JavaScript, ES5 & ES6, Typescript, BootStrap, Ant-Design, Material-Ui, Canva, Firebase, ReactJs, NextJS, Php-Crud, WordPress (Theming and Customization), Digital Marketing. In future i am also learning Web-3.0 Python programing, Ai & Metaverse technoloy. I have search my problem and solved using google, youtube and my senior Teachers those are helped me in project.</p>

                    <div className="sm:p-0 p-1 sm:flex  flex gap-3 mb-5">
                        <Button />
                        <CVbutton />
                    </div>
                </div>
            </div>
        </div>
    )
}