import Image from 'next/image'
import NavBar from '@/components/navbar/Navbar'
import backGround from "@/app/img/background.png"
import HeroSection from "@/components/hero-section/HeroSection"
import Skill from "@/app/skill/page";
import MyWork from "@/app/mywork/page";
import MyTeam from "@/app//team/page";
import Contact from "@/app/contact/page"


export default function HomePage() {
  return (
    <main>

      <div className='homePage'>
        <div className='bg-barnnerImg bg-cover bg-repeat bg-bottom w-full sm:min-h-[650px] min-h-[850px]'>
        </div>
        <div>
          <HeroSection />
        </div>
      </div>

      <div className='myWork'>
        <MyWork/>
      </div>

      <div className='skill'>
        <Skill/>
      </div>

      <div className='myTeam'>
        <MyTeam/>
      </div>

      {/* <div className='contact'>
        <Contact/>
      </div> */}

    </main>
  )
}