import Head from 'next/head';
import WaveScene from '../components/AUSTRALIAFlag';
import SmoothScroll from '../components/SmoothScroll';
import Navbar from '../components/Navbar';
import { MaskText } from '../components/maskText/MaskText';
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Endling from '../components/Endling';
import FaqList from '../components/FaqList';
import Footer from '../components/Footer';



const AnimatedLine = ({ index }) => {
  const lineRef = useRef(null);
  const isInView = useInView(lineRef, { once: true });

  return (
    <div className="w-screen py-1 bg-pri-clr">
      <motion.div
        ref={lineRef}
        className="gg h-[0.01rem] bg-sec-clr"
        initial={{ width: "0%" }}
        animate={isInView ? { width: "100%" } : {}} // Animate only when in view
        transition={{ duration: 1, ease: "easeInOut" }}
      ></motion.div>
    </div>
  );
};

const AustraliaVisaPrograms  = () => {
  return (
    <>
     <Head>
        <title>Australia Visa Programs | URGE OF IMMIGRATION</title>
        <meta name="description" content="Explore various visa options for Australia including Subclass 189, 190, 489, and more with URGE OF IMMIGRATION. Discover your pathway to Australia." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

    <div>
      <SmoothScroll>
        <Navbar />
        <div className="h-screen w-screen relative bg-pri-clr">
          <div>
            <WaveScene />
          </div>

          <div className="w-full absolute top-1/2 -right-10 mix-blend-difference ">
            <MaskText
              text="Australia Visa Programs"
              className="text-sec-clr uppercase font-pp-neue text-3xl md:text-5xl lg:text-6xl xl:text-7xl"
            />
            <MaskText
              text="Explore Your Path to the Australia"
              className="text-sec-clr font-pp-neue text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
          </div>
        </div>

        <div className='h-auto w-screen bg-pri-clr py-10 px-5'>
        <div className='mb-3'> <MaskText 
              text="SUB CLASS 189"
              className="text-sec-clr uppercase font-pp-neue text-3xl md:text-5xl lg:text-6xl xl:text-7xl"/></div>
        <div className='py-3'>
        <MaskText
              text="Description"
              className="text-pri-light-clr font-lauanne text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
              <MaskText
              text="The Subclass 189 Visa is a points-tested visa that allows skilled workers to live and work anywhere in Australia as permanent residents without requiring sponsorship from an employer, state, or family member"
              className="text-sec-clr font-pp-neue text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
        </div>
        <div className='py-3'>
        <MaskText
              text="Eligibility"
              className="text-pri-light-clr font-lauanne text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
              <MaskText
              text="Applicants must meet the points requirement based on age, education, work experience, and English proficiency"
              className="text-sec-clr font-pp-neue text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
        </div>
       

        <div className='py-3' >
        <MaskText
              text="BENEFITS"
              className="text-pri-light-clr font-lauanne text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
              <MaskText
              text="Grants permanent residency with full work and study rights across Australia"
              className="text-sec-clr font-pp-neue text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
        </div>

        <div className='py-3' >
        <MaskText
              text="Duration"
              className="text-pri-light-clr font-lauanne text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
              <MaskText
              text="Permanent residency upon approval"
              className="text-sec-clr font-pp-neue text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
        </div>
        </div>
        <AnimatedLine index={0} />

        <div className='h-auto w-screen bg-pri-clr py-10 px-5'>
        <div className='mb-3'> <MaskText 
              text="SUB CLASS 190"
              className="text-sec-clr uppercase font-pp-neue text-3xl md:text-5xl lg:text-6xl xl:text-7xl"/></div>
        <div className='py-3'>
        <MaskText
              text="Description"
              className="text-pri-light-clr font-lauanne text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
              <MaskText
              text="The Subclass 190 Visa is a points-tested visa that requires nomination by an Australian state or territory. It allows skilled workers to live and work as permanent residents in the nominating state"
              className="text-sec-clr font-pp-neue text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
        </div>
        <div className='py-3'>
        <MaskText
              text="Eligibility"
              className="text-pri-light-clr font-lauanne text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
              <MaskText
              text="Must meet the points requirement and receive nomination from an Australian state or territory"
              className="text-sec-clr font-pp-neue text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
        </div>
        <div className='py-3' >
        <MaskText
              text="Benefits"
              className="text-pri-light-clr font-lauanne text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
              <MaskText
              text="Permanent residency with the obligation to live in the nominating state for a specified period"
              className="text-sec-clr font-pp-neue text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
        </div>

        <div className='py-3' >
        <MaskText
              text="DURATION"
              className="text-pri-light-clr font-lauanne text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
              <MaskText
              text="Permanent residency upon approval"
              className="text-sec-clr font-pp-neue text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
        </div>

        </div>
        <AnimatedLine index={1} />
        
        <div className='h-auto w-screen bg-pri-clr py-10 px-5'>
        <div className='mb-3'> <MaskText 
              text="SUB CLASS 489"
              className="text-sec-clr uppercase font-pp-neue text-3xl md:text-5xl lg:text-6xl xl:text-7xl"/></div>
        <div className='py-3'>
        <MaskText
              text="Description"
              className="text-pri-light-clr font-lauanne text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
              <MaskText
              text="The Subclass 489 Visa is a temporary visa for skilled workers who are sponsored by an Australian state, territory, or a family member residing in a designated regional area"
              className="text-sec-clr font-pp-neue text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
        </div>
        <div className='py-3'>
        <MaskText
              text="Eligibility"
              className="text-pri-light-clr font-lauanne text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
              <MaskText
              text="Requires sponsorship from a state, territory, or eligible family member and a commitment to live and work in a regional area"
              className="text-sec-clr font-pp-neue text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
        </div>
        <div className='py-3' >
        <MaskText
              text="BENEFITS"
              className="text-pri-light-clr font-lauanne text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
              <MaskText
              text="Pathway to permanent residency after living and working in a regional area for a specified period"
              className="text-sec-clr font-pp-neue text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
        </div>

        <div className='py-3' >
        <MaskText
              text="DURATION"
              className="text-pri-light-clr font-lauanne text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
              <MaskText
              text="Valid for 4 years, with a pathway to permanent residency"
              className="text-sec-clr font-pp-neue text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
        </div>

        </div>
        <AnimatedLine index={2} />

        <div className='h-auto w-screen bg-pri-clr py-10 px-5'>
        <div className='mb-3'> <MaskText 
              text="AUSTRALIA VISIT VISA"
              className="text-sec-clr uppercase font-pp-neue text-3xl md:text-5xl lg:text-6xl xl:text-7xl"/></div>
        <div className='py-3'>
        <MaskText
              text="Description"
              className="text-pri-light-clr font-lauanne text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
              <MaskText
              text="The Australia Visit Visa allows individuals to travel to Australia for tourism, business, or to visit family and friends"
              className="text-sec-clr font-pp-neue text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
        </div>
        <div className='py-3'>
        <MaskText
              text="Eligibility"
              className="text-pri-light-clr font-lauanne text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
              <MaskText
              text="Must meet health and character requirements and demonstrate financial capacity to support the visit"
              className="text-sec-clr font-pp-neue text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
        </div>
        <div className='py-3' >
        <MaskText
              text="BENEFITS"
              className="text-pri-light-clr font-lauanne text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
              <MaskText
              text="Enables short-term stays in Australia for leisure or business purposes"
              className="text-sec-clr font-pp-neue text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
        </div>
        <div className='py-3' >
        <MaskText
              text="DURATION"
              className="text-pri-light-clr font-lauanne text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
              <MaskText
              text="Typically 3, 6, or 12 months, depending on the visa type and purpose"
              className="text-sec-clr font-pp-neue text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
        </div>

        </div>
        <AnimatedLine index={3} />

        <div className='h-auto w-screen bg-pri-clr py-10 px-5'>
        <div className='mb-3'> <MaskText 
              text="AUSTRALIA SPOUSE VISA"
              className="text-sec-clr uppercase font-pp-neue text-3xl md:text-5xl lg:text-6xl xl:text-7xl"/></div>
        <div className='py-3'>
        <MaskText
              text="Description"
              className="text-pri-light-clr font-lauanne text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
              <MaskText
              text="The Australia Spouse Visa allows Australian citizens, permanent residents, or eligible New Zealand citizens to sponsor their spouse or partner for permanent residency"
              className="text-sec-clr font-pp-neue text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
        </div>
        <div className='py-3'>
        <MaskText
              text="Eligibility"
              className="text-pri-light-clr font-lauanne text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
              <MaskText
              text="Sponsor must be an Australian citizen, permanent resident, or eligible New Zealand citizen, and must demonstrate a genuine relationship with the applicant"
              className="text-sec-clr font-pp-neue text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
        </div>
        <div className='py-3' >
        <MaskText
              text="BENEFITS"
              className="text-pri-light-clr font-lauanne text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
              <MaskText
              text="Grants pathway to permanent residency for the sponsored spouse or partner"
              className="text-sec-clr font-pp-neue text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
        </div>
        <div className='py-3' >
        <MaskText
              text="DURATION"
              className="text-pri-light-clr font-lauanne text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
              <MaskText
              text="Temporary residency leading to permanent residency after two years, provided the relationship remains intact"
              className="text-sec-clr font-pp-neue text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
        </div>

        </div>
        <AnimatedLine index={4} />

        <div className='h-auto w-screen bg-pri-clr py-10 px-5'>
        <div className='mb-3'> <MaskText 
              text="AUSTRALIA STUDY VISA"
              className="text-sec-clr uppercase font-pp-neue text-3xl md:text-5xl lg:text-6xl xl:text-7xl"/></div>
        <div className='py-3'>
        <MaskText
              text="Description"
              className="text-pri-light-clr font-lauanne text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
              <MaskText
              text="The Australia Study Visa (Subclass 500) allows international students to study at an accredited educational institution in Australia."
              className="text-sec-clr font-pp-neue text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
        </div>
        <div className='py-3'>
        <MaskText
              text="Eligibility"
              className="text-pri-light-clr font-lauanne text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
              <MaskText
              text="Must be enrolled in a full-time course, have adequate health insurance, and meet English language requirements"
              className="text-sec-clr font-pp-neue text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
        </div>
        <div className='py-3' >
        <MaskText
              text="BENEFITS"
              className="text-pri-light-clr font-lauanne text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
              <MaskText
              text="Allows students to study and work part-time during their course in Australia"
              className="text-sec-clr font-pp-neue text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
        </div>
        <div className='py-3' >
        <MaskText
              text="DURATION"
              className="text-pri-light-clr font-lauanne text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
              <MaskText
              text="Valid for the duration of the course, with possible extensions based on study level"
              className="text-sec-clr font-pp-neue text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
        </div>

        </div>
        <AnimatedLine index={5} />

        <div className='h-auto w-screen bg-pri-clr py-10 px-5'>
        <div className='mb-3'> <MaskText 
              text="AUTRALIA WORK VISA"
              className="text-sec-clr uppercase font-pp-neue text-3xl md:text-5xl lg:text-6xl xl:text-7xl"/></div>
        <div className='py-3'>
        <MaskText
              text="Description"
              className="text-pri-light-clr font-lauanne text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
              <MaskText
              text="The Australia Work Visa encompasses various visa types allowing skilled workers to work in Australia, including temporary and permanent options"
              className="text-sec-clr font-pp-neue text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
        </div>
        <div className='py-3'>
        <MaskText
              text="Eligibility"
              className="text-pri-light-clr font-lauanne text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
              <MaskText
              text="Eligibility varies by visa type but typically includes skill, experience, and sometimes sponsorship by an employer"
              className="text-sec-clr font-pp-neue text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
        </div>
        <div className='py-3' >
        <MaskText
              text="BENEFITS"
              className="text-pri-light-clr font-lauanne text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
              <MaskText
              text="Enables skilled workers to work in Australia, with certain visas providing pathways to permanent residency"
              className="text-sec-clr font-pp-neue text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
        </div>
        <div className='py-3' >
        <MaskText
              text="DURATION"
              className="text-pri-light-clr font-lauanne text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
              <MaskText
              text="Varies based on the specific work visa type; may be temporary or lead to permanent residency"
              className="text-sec-clr font-pp-neue text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
        </div>

        </div>
        
        <AnimatedLine index={6} />

     
        <div className='h-auto w-screen bg-pri-clr py-10 px-5'>
        <div className='mb-3'> <MaskText 
              text="YCP PROGRAM"
              className="text-sec-clr uppercase font-pp-neue text-3xl md:text-5xl lg:text-6xl xl:text-7xl"/></div>
        <div className='py-3'>
        <MaskText
              text="Description"
              className="text-pri-light-clr font-lauanne text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
              <MaskText
              text="The Young Canada Professionals (YCP) Program allows young professionals to gain work experience in Canada, boosting career development and skills"
              className="text-sec-clr font-pp-neue text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
        </div>
        <div className='py-3'>
        <MaskText
              text="Eligibility"
              className="text-pri-light-clr font-lauanne text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
              <MaskText
              text="Applicants must meet age, language, and education requirements, as well as have a job offer in Canada"
              className="text-sec-clr font-pp-neue text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
        </div>
        <div className='py-3' >
        <MaskText
              text="BENEFITS"
              className="text-pri-light-clr font-lauanne text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
              <MaskText
              text="Work experience in Canada with potential for future immigration pathways"
              className="text-sec-clr font-pp-neue text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
        </div>
        <div className='py-3' >
        <MaskText
              text="DURATION"
              className="text-pri-light-clr font-lauanne text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
              <MaskText
              text="Varies; typically a temporary work permit"
              className="text-sec-clr font-pp-neue text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
        </div>

        </div>

<Endling/>
<FaqList/>
<Footer/>
      </SmoothScroll>
    </div>
  </>

  );
};

export default AustraliaVisaPrograms ;
