import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { homeSection } from "../data/HomeSection"
import { coursesSection } from "../data/CoursesSection"
import { tutorsSection,tutorList } from "../data/TutorsSection"
import Tutors from "../components/Tutors"
import { partnersSection,partnersList } from "../data/PartnersSection"
import Partners from "../components/Partners"
import Contact from "../components/Contact"
import { contactSection } from "../data/ContactSection"

import parse from 'html-react-parser'
import '../styles/Home.css'


function Home() {
  return (
    <>
      <Navbar/>
        <div className='wrapper'>
            {/* Homepage */}
            <section id="home">
                <img src={homeSection.image}/>
                <div className="kolom">
                    {parse(homeSection.content)}
                </div>
            </section>

            {/* Courses */}
            <section id="courses">
                <div className="kolom">
                    {parse(coursesSection.content)}
                </div>
                <img src={coursesSection.image}/>
            </section>

            {/* Tutor */}
            <section id="tutors">
                <div className="tengah">
                    <div className="kolom">
                        {parse(tutorsSection.content)}
                    </div>
                    <Tutors tutorList={tutorList}/>
                </div>
            </section>

            {/* Partners */}
            <section id="partners">
                <div className="tengah">
                    <div className="kolom">
                        {parse(partnersSection.content)}
                    </div>

                    <Partners partnersList={partnersList}/>
                </div>
            </section>
            
        </div>
        {/* Contact */}
        <Contact contactSection={contactSection}/>
      <Footer/>
    </>
  )
}

export default Home
