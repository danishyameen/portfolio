import { Progress } from "@/components/ui/progress"


export default function SkillPage() {
    return (
        <div className="space-x-3 mx-auto">
            <div className="w-[280px] space-x-6 mx-auto">
                <h1 className="mt-[100px] text-[40px] font-semibold text-center">My Skill</h1>
                <div className="flex w-[300px]">
                    <hr className="mt-3 mr-3 w-[40px] h-[5px] bg-black" /><h2 className="text-center text-[20px] text-rose-600 font-semibold">What I Know</h2><hr className="ml-3 mt-3 w-[40px] h-[5px] bg-black" />
                </div>
            </div>

            <div className="mb-5">

                <div className="grid sm:grid-cols-2 gap-5 p-5">
                    <div className="w-auto h-auto">
                        <div className="m-auto">
                            <div className="flex justify-between">
                                <h1 className="font-semibold">HTML5</h1>
                                <h3 className="font-semibold">90%</h3>
                            </div>
                            <div>
                                <Progress value={90} />
                            </div>
                        </div>

                        <div className="mt-3">
                            <div className="flex justify-between">
                                <h1 className="font-semibold">CSS3</h1>
                                <h3 className="font-semibold">70%</h3>
                            </div>
                            <div>
                                <Progress value={70} />
                            </div>
                        </div>

                        <div className="mt-3">
                            <div className="flex justify-between">
                                <h1 className="font-semibold">Tailwind CSS</h1>
                                <h3 className="font-semibold">85%</h3>
                            </div>
                            <div>
                                <Progress value={85} />
                            </div>
                        </div>

                        <div className="mt-3">
                            <div className="flex justify-between">
                                <h1 className="font-semibold">Javascript ES5, ES6</h1>
                                <h3 className="font-semibold">70%</h3>
                            </div>
                            <div>
                                <Progress value={70} />
                            </div>
                        </div>

                        <div className="mt-3">
                            <div className="flex justify-between">
                                <h1 className="font-semibold">Typescript</h1>
                                <h3 className="font-semibold">80%</h3>
                            </div>
                            <div>
                                <Progress value={80} />
                            </div>
                        </div>

                        <div className="mt-3">
                            <div className="flex justify-between">
                                <h1 className="font-semibold">Firebase</h1>
                                <h3 className="font-semibold">50%</h3>
                            </div>
                            <div>
                                <Progress value={50} />
                            </div>
                        </div>

                        <div className="mt-3">
                            <div className="flex justify-between">
                                <h1 className="font-semibold">GitHub</h1>
                                <h3 className="font-semibold">60%</h3>
                            </div>
                            <div>
                                <Progress value={60} />
                            </div>
                        </div>

                    </div>


                    <div className="w-auto h-auto">
                        <div className="mt-auto">
                            <div className="flex justify-between">
                                <h1 className="font-semibold">React Js</h1>
                                <h3 className="font-semibold">70%</h3>
                            </div>
                            <div>
                                <Progress value={70} />
                            </div>
                        </div>

                        <div className="mt-3">
                            <div className="flex justify-between">
                                <h1 className="font-semibold">Next js</h1>
                                <h3 className="font-semibold">70%</h3>
                            </div>
                            <div>
                                <Progress value={70} />
                            </div>
                        </div>

                        <div className="mt-3">
                            <div className="flex justify-between">
                                <h1 className="font-semibold">Canva</h1>
                                <h3 className="font-semibold">80%</h3>
                            </div>
                            <div>
                                <Progress value={80} />
                            </div>
                        </div>

                        <div className="mt-3">
                            <div className="flex justify-between">
                                <h1 className="font-semibold">Ui library {`(SadCn, Material-UI, Ant-Desin)`}</h1>
                                <h3 className="font-semibold">80%</h3>
                            </div>
                            <div>
                                <Progress value={80} />
                            </div>
                        </div>

                        <div className="mt-3">
                            <div className="flex justify-between">
                                <h1 className="font-semibold">Wordpress {`(Theming - Saliant, Porto)`}</h1>
                                <h3 className="font-semibold">75%</h3>
                            </div>
                            <div>
                                <Progress value={75} />
                            </div>
                        </div>

                        <div className="mt-3">
                            <div className="flex justify-between">
                                <h1 className="font-semibold">Social Media Marketing {`(Facebook, Instagram)`}</h1>
                                <h3 className="font-semibold">80%</h3>
                            </div>
                            <div>
                                <Progress value={80} />
                            </div>
                        </div>

                        <div className="mt-3">
                            <div className="flex justify-between">
                                <h1 className="font-semibold">Ecommerce Handling {`(Facebook, Instagram, Whatsapp)`}</h1>
                                <h3 className="font-semibold">80%</h3>
                            </div>
                            <div>
                                <Progress value={80} />
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}