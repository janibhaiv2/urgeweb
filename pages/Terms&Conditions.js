import Head from 'next/head';
import SmoothScroll from '../components/SmoothScroll';
import Navbar from '../components/Navbar';
import { MaskText } from '../components/maskText/MaskText';
import React, { useRef } from "react";
import Footer from '../components/Footer';


const Terms_Conditions = () => {
  return (
    <>
      <Head>
        <title>Terms & Conditions | URGE OF IMMIGRATION</title>
        <meta name="description" content="Explore the terms and conditions of URGE OF IMMIGRATION VISA SERVICES, including policies on data security, refund, and privacy." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Favicon */}
        <link rel="icon" href="/LOGO.svg" />
      </Head>
      <SmoothScroll>
        <Navbar />
        <div className='bg-sec-clr w-screen h-24'>
        </div>


        <div className="w-screen bg-sec-clr px-5 py-10 flex justify-center items-start flex-col">
        <MaskText
              text="Terms and Policies:"
              className="text-pri-clr uppercase font-pp-neue text-3xl md:text-5xl lg:text-6xl xl:text-7xl"
            />

<div className='py-3'>
              <MaskText
              text="The use of our website or any associated services rendered through URGE OF IMMIGRATION VISA are subject to the subsequent privacy policy and are in lines with your acceptance of these terms, including future amendments made thereto. We at URGE OF IMMIGRATION VISA respect and guard your privacy as our consultants gather specific credentials of prospective individuals seeking immigration under various programs. The information collected by us via telephonic conversation or face to face interaction, helps us as an organization to meet the needs of the applicants and we work under a complete data protect policy, where in all your credentials are secured at all levels. All credit/debit cards detail and personally identifiable information will NOT be stored, sold, shared, rented or leased to any third parties. All our payments are processed by our payment processing agent. We do not keep any personal or credit card information, except for the payment details. Any information, details document or others form (documents) provided by the candidate to URGE OF IMMIGRATION VISA will be kept confidential. All Information & documents provided by the candidate will not be shared with any other party EXCEPT any 3rd party which is a required for the immigration process, such like a government bodies or Visa Immigration department and case officers. We would only collect your name, contact details, delivery details and email address and all of these are kept strictly confidential."
              className="text-pri-clr font-pp-neue text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
        </div>

<div className='py-3 mt-8'>
<MaskText
              text="Refund Policy:"
              className="text-pri-clr uppercase font-pp-neue text-3xl md:text-5xl lg:text-6xl xl:text-7xl"
            />
        </div>
<div className='py-3'>
              <MaskText
              text="The customer agree that they will not liable to be claim a refund in cases of he/she wish to end of their agreement with services and withdraw from before the time of URGE OF IMMIGRATION VISA submitting the clients Immigration and or Visa application. The customer confirms that before making any purchase that he/she read and understands all our terms and conditions. The client may cancel/withhold the application at various stages of the process without claiming any refund from the company even if it is the very next day after signing the contract. The COMPANY will not refund the amount once the agreement is signed as all the information and process details was explained in good faith and have given accurate details as per the existing rules and regulations of the respective country to file their application. Clients also agrees that they would be responsible on misrepresentation or fraud information on the application package The CLIENT having failed the medical; The CLIENT having a criminal record; The CLIENT not being proficient in the English language; The CLIENT unable to provide relevant documents as per requirement (depending on the countries and the program you applied for) Or any changes in criteria or whatsoever changes in corporate by the respective There won’t be any refund even in the event of Client being informed by the respective Immigration Office that he/she does not qualify for required program applied with URGE OF IMMIGRATION VISA other than and the one’s explained here: Medical, Security, Misrepresentation, Insufficient information, Insufficient funds, point lost on language or Misleading information, Point lost on education because of non-accredited, unrecognized or false credential, Points lost on work experience where in the case officer was not satisfied with the evidence furnished by the applicant, non-submission of complete/required documents from client’s side within stipulated time changes introduced by the relevant Government office which may retroactively affect the client’s case, non-cooperation from client’s or client’s dependents side and any other violation of contractual clause. If a refund is issued, it is only made on special consideration which is against URGE OF IMMIGRATION VISA terms & conditions, however the refund application will be processed in 90 working days at the sole discretion of URGE OF IMMIGRATION VISA legal team. For complete information and all the relevant clauses kindly refer to the retainer agreement signed by both the parties"
              className="text-pri-clr font-pp-neue text-base sm:text-lg md:text-2xl lg:text-3xl"
            />
        </div>
        </div>


       
        

       


<Footer/>
      </SmoothScroll>
      </>

  );
};

export default Terms_Conditions;
