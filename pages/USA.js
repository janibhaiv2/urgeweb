import WaveScene from '../components/USAFlag';
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

const usaVisaPrograms = () => {
  return (
    <div>
      <SmoothScroll>
        <Navbar />
        <div className="h-screen w-screen relative bg-pri-clr">
          <div>
            <WaveScene />
          </div>

          <div className="w-full absolute top-1/2 -right-10 mix-blend-difference ">
            <MaskText
              text="USA Visa Programs"
              className="text-sec-clr uppercase font-pp-neue text-3xl md:text-5xl lg:text-6xl xl:text-7xl"
            />
            <MaskText
              text="Explore Your Path to the United States"
              className="text-sec-clr font-pp-neue text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
          </div>
        </div>

        <div className='h-auto w-screen bg-pri-clr py-10 px-5'>
        <div className='mb-3'> <MaskText 
              text="L1 Visa"
              className="text-sec-clr uppercase font-pp-neue text-3xl md:text-5xl lg:text-6xl xl:text-7xl"/></div>
        <div className='py-3'>
        <MaskText
              text="Description"
              className="text-pri-light-clr font-lauanne text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
              <MaskText
              text="The L-1 Visa allows companies to transfer employees from their foreign offices to their U.S. offices. This visa is ideal for intra-company transfers of specialized knowledge workers and executives"
              className="text-sec-clr font-pp-neue text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
        </div>
        <div className='py-3'>
        <MaskText
              text="Eligibility"
              className="text-pri-light-clr font-lauanne text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
              <MaskText
              text="The employee must have worked for the company outside the U.S. for at least one year"
              className="text-sec-clr font-pp-neue text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
        </div>
        <div className='py-3' >
        <MaskText
              text="BENEFITS"
              className="text-pri-light-clr font-lauanne text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
              <MaskText
              text="Facilitates expansion of foreign companies into the U.S. by transferring key personnel"
              className="text-sec-clr font-pp-neue text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
        </div>
        <div className='py-3' >
        <MaskText
              text="DURATION"
              className="text-pri-light-clr font-lauanne text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
              <MaskText
              text="Up to 7 years for executives, 5 years for specialized knowledge workers"
              className="text-sec-clr font-pp-neue text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
        </div>

        </div>
        <AnimatedLine index={0} />

        <div className='h-auto w-screen bg-pri-clr py-10 px-5'>
        <div className='mb-3'> <MaskText 
              text="EB-5 Immigrant Investor Program "
              className="text-sec-clr uppercase font-pp-neue text-3xl md:text-5xl lg:text-6xl xl:text-7xl"/></div>
        <div className='py-3'>
        <MaskText
              text="Description"
              className="text-pri-light-clr font-lauanne text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
              <MaskText
              text="The EB-5 program provides a pathway to U.S. permanent residency through investment. Applicants must invest $1.8 million (or $900,000 in a targeted employment area) in a new commercial enterprise that creates at least 10 full-time jobs"
              className="text-sec-clr font-pp-neue text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
        </div>
        <div className='py-3'>
        <MaskText
              text="Eligibility"
              className="text-pri-light-clr font-lauanne text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
              <MaskText
              text="Minimum investment of $900,000 in a qualified project"
              className="text-sec-clr font-pp-neue text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
        </div>
        <div className='py-3' >
        <MaskText
              text="Benefits"
              className="text-pri-light-clr font-lauanne text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
              <MaskText
              text="Grants permanent residency to investors and their families"
              className="text-sec-clr font-pp-neue text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
        </div>
        <div className='py-3' >
        <MaskText
              text="DURATION"
              className="text-pri-light-clr font-lauanne text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
              <MaskText
              text="Permanent residency status upon successful approval and fulfillment of investment requirements"
              className="text-sec-clr font-pp-neue text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
        </div>

        </div>
        <AnimatedLine index={1} />
        
        <div className='h-auto w-screen bg-pri-clr py-10 px-5'>
        <div className='mb-3'> <MaskText 
              text="E-2 Investor Visa"
              className="text-sec-clr uppercase font-pp-neue text-3xl md:text-5xl lg:text-6xl xl:text-7xl"/></div>
        <div className='py-3'>
        <MaskText
              text="Description"
              className="text-pri-light-clr font-lauanne text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
              <MaskText
              text="The E-2 visa is for investors from treaty countries who wish to invest a substantial amount of capital in a U.S. business"
              className="text-sec-clr font-pp-neue text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
        </div>
        <div className='py-3'>
        <MaskText
              text="Eligibility"
              className="text-pri-light-clr font-lauanne text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
              <MaskText
              text="Must be a national of a treaty country and make a substantial investment in a U.S. business"
              className="text-sec-clr font-pp-neue text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
        </div>
        <div className='py-3' >
        <MaskText
              text="BENEFITS"
              className="text-pri-light-clr font-lauanne text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
              <MaskText
              text="Allows investors to live and work in the U.S. while managing their business"
              className="text-sec-clr font-pp-neue text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
        </div>
        <div className='py-3' >
        <MaskText
              text="DURATION"
              className="text-pri-light-clr font-lauanne text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
              <MaskText
              text="Renewable every two years, indefinitely as long as the business remains operational"
              className="text-sec-clr font-pp-neue text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
        </div>

        </div>
        <AnimatedLine index={2} />

        <div className='h-auto w-screen bg-pri-clr py-10 px-5'>
        <div className='mb-3'> <MaskText 
              text="H-1B Visa"
              className="text-sec-clr uppercase font-pp-neue text-3xl md:text-5xl lg:text-6xl xl:text-7xl"/></div>
        <div className='py-3'>
        <MaskText
              text="Description"
              className="text-pri-light-clr font-lauanne text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
              <MaskText
              text="The H-1B visa allows U.S. companies to employ foreign workers in specialty occupations that require theoretical or technical expertise"
              className="text-sec-clr font-pp-neue text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
        </div>
        <div className='py-3'>
        <MaskText
              text="Eligibility"
              className="text-pri-light-clr font-lauanne text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
              <MaskText
              text="Bachelor's degree or higher in a related field"
              className="text-sec-clr font-pp-neue text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
        </div>
        <div className='py-3' >
        <MaskText
              text="Duration"
              className="text-pri-light-clr font-lauanne text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
              <MaskText
              text="Up to 6 years"
              className="text-sec-clr font-pp-neue text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
        </div>

        </div>

<Endling/>
<FaqList/>
<Footer/>
      </SmoothScroll>
    </div>
  );
};

export default usaVisaPrograms;
