import { FormButton } from "../button/Button"



export default function Form() {
    return (
        <div className="sm:w-auto w-[325px]">
            <form action="">
                <div className="mb-3 box-border ">
                    <input className="px-3 py-2 sm:mr-0 mr-3 sm:w-[500px] w-full h-[50px] mb-3 rounded-sm border-solid border-2 border-black" type="text" name="name" id="" placeholder="name" />
                    <br />
                    <input className="px-3 py-2 sm:mr-0 mr-3 sm:w-[500px] w-full h-[50px] mb-3 rounded-sm border-solid border-2 border-black" type="text" name="email" id="" placeholder="email" />
                    <br />
                    <input className="px-3 py-2 sm:mr-0 mr-3 sm:w-[500px] w-full h-[50px]rounded-sm border-solid border-2 border-black" type="text" name="subject" id="" placeholder="subject" />
                </div>
                <div className="box-border">
                    <textarea className="px-3 py-2 sm:mr-0 mr-4 sm:w-[500px] w-full h-[150px] resize-none rounded-sm border-solid border-2 border-black" name="" id="" placeholder="Describe Project Details"></textarea>
                    <FormButton />
                </div>
                                
            </form>
        </div>
    )
}