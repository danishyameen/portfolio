import Link from "next/link"
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { BsBootstrapFill } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";

export default function MyWork() {
    return (
        <div className="bg-black h-auto  lg:pt-5 lg:pb-20 p-5">
            <div className="w-[280px] space-x-3 mx-auto">
                <h1 className="mt-[100px] text-[40px] font-semibold text-white text-center">My Work</h1>
                <div className="flex">
                    <hr className="mt-3 mr-3 w-[40px] h-[5px] bg-black" /><h2 className="text-center text-[20px] text-rose-600 font-semibold">I Made Projects</h2><hr className="ml-3 mt-3 w-[40px] h-[5px] bg-black" />
                </div>
            </div>
            <div className="mt-5">
                <div className="w-full bg-black h-auto">
                    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5 space-x-2 mx-auto p-5">
                        <div className=" w-auto mx-auto h-auto bg-white text-center p-8 rounded-md ">
                            <div className="w-[130px] flex mx-auto">
                                <FaHtml5 color="red " size="50px" />
                                <RiTailwindCssFill color="#22d3ee" size="50px" />
                                <RiNextjsFill color="black" size="50px" />
                            </div>
                            <h1 className="text-[24px] mt-[5px] font-bold mb-2">zKing Man</h1>
                            <h4 className="text-[18px]">zKing-man is a fully complete responsive website created jointly by HTML5 Tailwind Css & NextJS</h4>
                            <br />
                            <h4 className="mt-[-5px] hover:underline hover:text-indigo-800 text-red-600 text-[18px]">
                                <Link href="https://motors-lime.vercel.app/">See Website</Link>
                            </h4>
                        </div>

                        <div className="w-auto mx-auto h-auto  bg-white text-center  p-8 rounded-md ">
                            <div className="w-[130px] flex mx-auto">
                                <FaHtml5 color="red " size="50px" />
                                <FaCss3Alt color="blue" size="50px" />
                                <BsBootstrapFill color="blue" size="50px" />
                            </div>
                            <h1 className="text-[24px] mt-[5px] font-bold mb-2">Uptown</h1>
                            <h4 className="text-[18px] ">Uptown is a full responsive single page website created jointly by HTML5, CSS3 and BootStrap. </h4>
                            <br />
                            <h4 className="hover:underline mt-[-5px]  hover:text-indigo-800 text-red-600 text-[18px]"><Link href="https://uptown-web.web.app">See Website</Link></h4>
                        </div>

                        <div className=" w-auto mx-auto h-auto bg-white text-center p-8 rounded-md ">
                            <div className="w-[180px] flex mx-auto">
                                <FaHtml5 color="red " size="50px" />
                                <FaCss3Alt color="blue" size="50px" />
                                <BsBootstrapFill color="blue" size="50px" />
                                <IoLogoJavascript color="#8B8000" size="50px" />
                            </div>
                            <h1 className="text-[24px] mt-[5px] font-bold mb-2">Saylani wlafare</h1>
                            <h4 className="text-[18px]">This is a full responsive single page website created by HTML5 CSS3 BootStrap and JavaScript</h4>
                            <br />
                            <h4 className="hover:underline mt-[-5px] hover:text-indigo-800 text-red-600 text-[18px]"><Link href="https://saylani-assignments-29c16.web.app/saylani%20welfare%20page/index.html">See Website</Link></h4>
                        </div>

                        <div className="w-auto mx-auto h-auto bg-white text-center p-8 rounded-md">
                            <div className="w-[180px] flex mx-auto">
                                <FaHtml5 color="red " size="50px" />
                                <FaCss3Alt color="blue" size="50px" />
                                <BsBootstrapFill color="blue" size="50px" />
                                <IoLogoJavascript color="#8B8000" size="50px" />
                            </div>
                            <h1 className="text-[24px] mt-[5px] font-bold mb-2">O.Galaxy</h1>
                            <h4 className="text-[18px]">O.Galaxy is a fully responsive smart phone website created jointly by HTML5, CSS3 BootStrap & Javascript</h4>
                            <br />
                            <h4 className="hover:underline hover:text-indigo-800 text-red-600 text-[18px]"><Link href="https://smartphoneweb-1.web.app">See Website</Link></h4>
                        </div>

                        <div className="w-auto mx-auto h-auto bg-white text-center p-8 rounded-md">
                            <div className="w-[180px] flex mx-auto">
                                <FaHtml5 color="red " size="50px" />
                                <FaCss3Alt color="blue" size="50px" />
                                <BsBootstrapFill color="blue" size="50px" />
                                <IoLogoJavascript color="#8B8000" size="50px" />
                            </div>
                            <h1 className="text-[24px] font-bold mb-2">Quiz App</h1>
                            <h4 className="text-[18px]">Build a quiz app website created jointly by HTML5, CSS3, BootStrap & Javascript.</h4>
                            <br />
                            <h4 className="hover:underline  hover:text-indigo-800 text-red-600 text-[18px]"><Link href="https://saylani-quizapp.web.app">See Website</Link></h4>
                        </div>

                        <div className="w-auto mx-auto h-auto bg-white text-center p-8 rounded-md">
                            <div className="w-[130px] flex mx-auto">
                                <FaHtml5 color="red " size="50px" />
                                <FaCss3Alt color="blue" size="50px" />
                                <IoLogoJavascript color="#8B8000" size="50px" />
                            </div>
                            <h1 className="text-[24px] font-bold mb-2">Stop Watch App</h1>
                            <h4 className="text-[18px]">Stop Watch App is a fully responsive website created jointly by HTML5, CSS3 & Javascript</h4>
                            <br />
                            <h4 className="hover:underline hover:text-indigo-800 text-red-600 text-[18px]"><Link href="https://stopwatch-2020-21.web.app/">See Website</Link></h4>
                        </div>

                    </div>

                    {/* <div className="grid sm:grid-cols-3 grid-cols-1 gap-5 mt-[-20px] space-x-2 my-auto mx-auto p-5">
                        <div className="w-auto mx-auto h-auto bg-white text-center p-8 rounded-md">
                            <div className="w-[180px] flex mx-auto">
                                <FaHtml5 color="red " size="50px" />
                                <FaCss3Alt color="blue" size="50px" />
                                <BsBootstrapFill color="blue" size="50px" />
                                <IoLogoJavascript color="#8B8000" size="50px" />
                            </div>
                            <h1 className="text-[24px] mt-[5px] font-bold mb-2">O.Galaxy</h1>
                            <h4 className="text-[18px]">O.Galaxy is a fully responsive smart phone website created jointly by HTML5, CSS3 BootStrap & Javascript</h4>
                            <br />
                            <h4 className="hover:underline hover:text-indigo-800 text-red-600 text-[18px]"><Link href="https://smartphoneweb-1.web.app">See Website</Link></h4>
                        </div>

                        <div className="w-auto mx-auto h-auto bg-white text-center p-8 rounded-md">
                            <div className="w-[180px] flex mx-auto">
                                <FaHtml5 color="red " size="50px" />
                                <FaCss3Alt color="blue" size="50px" />
                                <BsBootstrapFill color="blue" size="50px" />
                                <IoLogoJavascript color="#8B8000" size="50px" />
                            </div>
                            <h1 className="text-[24px] font-bold mb-2">Quiz App</h1>
                            <h4 className="text-[18px]">Build a quiz app website created jointly by HTML5, CSS3, BootStrap & Javascript.</h4>
                            <br />
                            <h4 className="hover:underline  hover:text-indigo-800 text-red-600 text-[18px]"><Link href="https://saylani-quizapp.web.app">See Website</Link></h4>
                        </div>

                        <div className="w-auto mx-auto h-auto bg-white text-center p-8 rounded-md">
                            <div className="w-[130px] flex mx-auto">
                                <FaHtml5 color="red " size="50px" />
                                <FaCss3Alt color="blue" size="50px" />
                                <IoLogoJavascript color="#8B8000" size="50px" />
                            </div>
                            <h1 className="text-[24px] font-bold mb-2">Stop Watch App</h1>
                            <h4 className="text-[18px]">Stop Watch App is a fully responsive website created jointly by HTML5, CSS3 & Javascript</h4>
                            <br />
                            <h4 className="hover:underline hover:text-indigo-800 text-red-600 text-[18px]"><Link href="https://stopwatch-2020-21.web.app/">See Website</Link></h4>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}