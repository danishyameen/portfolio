import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"

import Link from "next/link"


export default function NavBar() {
    return (
        <main>
            <header className="fixed top-0 z-10 w-full bg-rose-600 fo px-10 py-4 grid grid-cols-2">
                <div className="logo">
                    <h2 className="text-white font-semibold sm:text-[24px] text-[18px]">DanishYameen</h2>
                </div>
                <nav className="mt-1 flex justify-end">
                    <div className="md:block hidden">
                        <ul className=" text-white font-semibold gap-5 sm:text-[18px] text-[16px] flex justify-end">
                            <li className="hover:underline hover:text-black"><Link href="/">Home</Link></li>
                            <li className="hover:underline hover:text-black"><Link href="/about">About</Link></li>
                            <li className="hover:underline hover:text-black"><Link href="/mywork">MyWorks</Link></li>
                            <li className="hover:underline hover:text-black"><Link href="/skill">Skill</Link></li>
                            <li className="hover:underline hover:text-black"><Link href="/team">Team</Link></li>
                            <li className="hover:underline hover:text-black"><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className=" sm:block md:hidden">
                    <Sheet>
                        <SheetTrigger><Menu color="white"/></SheetTrigger>
                        <SheetContent className="bg-black" side="left">
                        <ul className=" text-white font-semibold gap-5 text-[18px] text-center leading-10 items-center">
                            <li className="hover:underline hover:text-red-500 "><Link href="/">Home</Link></li>
                            <li className="hover:underline hover:text-red-500"><Link href="/about">About</Link></li>
                            <li className="hover:underline hover:text-red-500"><Link href="/mywork">MyWorks</Link></li>
                            <li className="hover:underline hover:text-red-500"><Link href="/skill">Skill</Link></li>
                            <li className="hover:underline hover:text-red-500"><Link href="/team">Team</Link></li>
                            <li className="hover:underline hover:text-red-500"><Link href="/contact">Contact</Link></li>
                        </ul>
                        </SheetContent>
                    </Sheet>
                    </div>


                </nav>

            </header>
        </main>
    )
}



