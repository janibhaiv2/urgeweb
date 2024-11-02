'use client'
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MaskText } from "./maskText/MaskText";

// Register ScrollTrigger with GSAP
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    title: "Entrepreneur",
    company: "OCRA Worldwide",
    testimonial:
      "Urge of Immigration made my dream of settling in Canada a reality! Their expert guidance and attention to detail were invaluable",
    readMore:
      "I couldn’t be more satisfied with the service I received from Urge of Immigration. As an entrepreneur looking to expand my business to Canada, their team handled all my paperwork and visa application seamlessly. They truly care about their clients and go above and beyond to make the process stress-free.",
    companyLogo: "https://www.basecreate.com/media/pages/testimonials/c93bd32d80-1708657765/screenshot-2024-02-23-at-11-09-05-am-270x270-crop-q72.jpg",
  },
  {
    id: 2,
    name: "Aisha Khan",
    title: "Software Engineer",
    testimonial: "Thanks to Urge of Immigration, I now have my work visa for Germany. Professional, fast, and reliable!",
    readMore:
      "From the initial consultation to receiving my work visa for Germany, Urge of Immigration’s team was incredibly supportive. They guided me through every step, ensuring my documents were in perfect order and that I met all the eligibility requirements. Their expertise made all the difference in my success",
    companyLogo: "https://www.basecreate.com/media/pages/testimonials/6d9d48544f-1676519494/bld-testimonial-270x270-crop-q72.jpg",
  },
  {
    id: 3,
    name: "Maria Lopez",
    title: "Student",
    testimonial:
      "The best team for student visa applications! They made my study visa process smooth and worry-free.",
    readMore:
      "I applied for a study visa for Australia, and Urge of Immigration was there to help me at every stage. They answered all my questions promptly, ensured my documents were flawless, and gave me the confidence to take this big step in my life. I highly recommend them to any student seeking to study abroad.",
    companyLogo: "https://www.basecreate.com/media/pages/testimonials/76c7739283-1676519494/hyatt-testimonial-270x270-crop-q72.jpg",
  },
  {
    id: 4,
    name: "Ahmed Al-Sharif",
    title: "Businessman",
    testimonial: "I highly recommend Urge of Immigration for anyone looking for professional and hassle-free immigration services",
    readMore:
      "I needed to secure an investor visa for the UK, and Urge of Immigration’s team made the entire process effortless. They took care of all the legal complexities, ensuring my application was successful. Their dedication and expertise are unmatched, and I couldn’t have asked for a better partner in this journey.",
    companyLogo: "/tech-logo.png",
  },
  {
    id: 5,
    name: "Emily Zhang",
    title: "Doctor",
    testimonial: "Their team made my Canadian PR process a breeze! Highly efficient and reliable.",
    readMore:
      "As a healthcare professional, time is very valuable to me. Urge of Immigration helped me secure permanent residency in Canada with minimal stress. Their knowledgeable team handled every detail, allowing me to focus on my career while they ensured my immigration process went smoothly.",
    companyLogo: "/global-logo.png",
  },
  {
    id: 6,
    name: "Raj Patel",
    title: "Engineer",
    testimonial: "Excellent service! Thanks to Urge of Immigration, I’m now working in Australia.",
    readMore:
      "Urge of Immigration came highly recommended, and I can see why. They helped me get a skilled worker visa for Australia with ease. The entire team was professional and kept me informed at every stage. I couldn’t have done it without them!",
    companyLogo: "/global-logo.png",
  },
  {
    id: 7,
    name: "Fatima Ali",
    title: "Investor",
    testimonial: "An exceptional team for investor visas. Their expertise is unmatched!",
    readMore:
      "I wanted to secure an investor visa for Germany, and Urge of Immigration’s consultants made it a seamless experience. They handled all the paperwork efficiently and were always available to address my concerns. I’m grateful for their support throughout the process.",
    companyLogo: "/global-logo.png",
  },
];


const Testimonials = () => {
  const [isClient, setIsClient] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(null); // Track active testimonial
  const containerRef = useRef(null);
  const testimonialRef = useRef(null);
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    setIsClient(true);

    if (containerRef.current) {
      const containerWidth = containerRef.current.scrollWidth;
      const parentWidth = containerRef.current.parentNode.offsetWidth;
      const maxDrag = parentWidth - containerWidth;
      setDragConstraints({ left: maxDrag, right: 0 });
    }

    if (testimonialRef.current) {
      gsap.fromTo(
        testimonialRef.current,
        { x: 200 },
        {
          x: 0,
          scrollTrigger: {
            trigger: ".jolo",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }
  }, [isClient]);

  if (!isClient) return null;

  return (
    <div className="jolo min-h-auto bg-pri-clr w-screen flex justify-center items-center flex-col py-10">
      <div className="w-full overflow-hidden mb-10 px-5">
      
        <MaskText
            text="What Our"
            className="text-pri-light-clr font-pp-neue text-4xl uppercase leading-[90%] md:text-8xl"/>
        <MaskText
            text="Clients Say?"
            className="text-pri-light-clr font-pp-neue text-4xl uppercase leading-[90%] mb-4 md:text-8xl"/>
        
        {/* Drag container */}
        <motion.div
          ref={containerRef}
          className="flex space-x-4 w-max overflow-hidden px-4"
          drag="x"
          dragConstraints={dragConstraints}
          dragTransition={{ bounceStiffness: 100, bounceDamping: 20 }}
          whileTap={{ cursor: "grabbing" }}
          style={{ cursor: "grab" }}
        >
          <div ref={testimonialRef} className="flex space-x-8">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="bg-[#1f1f1f] rounded-lg p-6 shadow-lg min-w-80 w-[23vw] max-h-min flex-none"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.companyLogo}
                    alt={`${testimonial.company} logo`}
                    className="w-12 h-12 object-contain rounded-full"
                  />
                  <div>
                    <p className="text-sec-clr font-pp-neue text-md sm:text-1xl md:text-2xl">{testimonial.name}</p>
                    <p className="text-sec-clr font-pp-neue text-sm sm:text-md md:text-1xl">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-sec-clr font-pp-neue text-sm sm:text-md md:text-1xl mt-4">{testimonial.testimonial}</p>
                <button
                  className="mb-4 text-sec-clr font-pp-neue text-sm uppercase mt-4 hover:text-logo-clr transition-colors duration-300 ease-in-out"
                  onClick={() => setActiveTestimonial(testimonial)}
                >
                  Read More
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Popup Modal for Detailed View */}
      {activeTestimonial && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-sec-clr rounded-lg p-8 max-w-lg">
            <h2 className="text-pri-clr font-pp-neue text-md sm:text-1xl md:text-2xl mb-4">
              {activeTestimonial.name}'s Review
            </h2>
            <p className="mb-4 text-pri-clr font-pp-neue text-sm sm:text-md md:text-md md:text-lg" style={{ lineHeight: "110%" }}>
              {activeTestimonial.readMore}
            </p>
            <button
              className="relative flex items-center justify-center text-center py-[0.10rem] px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 bg-pri-clr text-sec-clr uppercase font-pp-neue"
              onClick={() => setActiveTestimonial(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonials;