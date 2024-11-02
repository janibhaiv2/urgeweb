import Head from 'next/head';
import { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import Button from '../components/Button'; 
import MyArrowIcon from '../components/MyArrowIcon'; 
import { MaskText } from '../components/maskText/MaskText';
import Endling from '../components/Endling';
import SmoothScroll from '../components/SmoothScroll';
import FaqList from '../components/FaqList';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    migrateCountry: '',
    ageRange: '',
    education: '',
    immigrationType: '',
    preferredLocation: '',
  });
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        timestamp: Timestamp.now()
      });

      setPopupMessage("Form submitted successfully!");
      setPopupVisible(true);

      setFormData({
        name: '',
        email: '',
        phone: '',
        migrateCountry: '',
        ageRange: '',
        education: '',
        immigrationType: '',
        preferredLocation: '',
      });

      setTimeout(() => setPopupVisible(false), 2000);
    } catch (error) {
      setPopupMessage("An error occurred. Please try again.");
      setPopupVisible(true);
      setTimeout(() => setPopupVisible(false), 2000);
    }
  };

  return (
    <>
    <Head>
        <title>Contact Us | URGE OF IMMIGRATION - Your Visa Consultancy Partner</title>
        <meta name="description" content="Reach out to URGE OF IMMIGRATION for expert guidance on your immigration journey. Contact us for visa consultation, assistance, and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

    <SmoothScroll>
      
      <Navbar />
      <div className='w-screen h-10 bg-pri-clr'>
      </div>
      <div className="flex items-center justify-center w-screen">
        <form onSubmit={handleSubmit} className="w-full bg-pri-clr py-10 px-5">
          <div className="py-10">
            <MaskText 
              text="LET'S TALK"
              className="text-sec-clr uppercase font-pp-neue text-3xl md:text-5xl lg:text-6xl xl:text-7xl"/>
          </div>

          <label><MaskText text="NAME*" className="text-sec-clr font-lauanne text-1xl" /></label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 mb-4 rounded font-lauanne bg-[#1d1d1d] text-sec-clr focus:outline-none focus:ring-2 focus:ring-transparent" />

          <label><MaskText text="EMAIL*" className="text-sec-clr font-lauanne text-1xl" /></label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 mb-4 rounded font-lauanne bg-[#1d1d1d] text-sec-clr focus:outline-none focus:ring-2 focus:ring-transparent" />

          <label><MaskText text="PHONE NUMBER*" className="text-sec-clr font-lauanne text-1xl" /></label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-2 mb-4 rounded font-lauanne bg-[#1d1d1d] text-sec-clr focus:outline-none focus:ring-2 focus:ring-transparent" />

          <label><MaskText text="Migrate Country*" className="text-sec-clr uppercase font-lauanne text-1xl" /></label>
          <select name="migrateCountry" value={formData.migrateCountry} onChange={handleChange} required className="w-full flex items-center justify-center px-4 py-3 mb-4 rounded font-lauanne uppercase bg-[#1d1d1d] text-sec-clr focus:outline-none focus:ring-2 focus:ring-transparent">
            <option value="">Select Country</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            <option value="UK">UK</option>
            <option value="Germany">Germany</option>
          </select>

          <label><MaskText text="Age Range*" className="text-sec-clr uppercase font-lauanne text-1xl" /></label>
          <select name="ageRange" value={formData.ageRange} onChange={handleChange} required className="w-full flex items-center justify-center px-4 py-3 mb-4 rounded font-lauanne uppercase bg-[#1d1d1d] text-sec-clr focus:outline-none focus:ring-2 focus:ring-transparent">
            <option value="">Select Age Range</option>
            <option value="18-25">18-25</option>
            <option value="26-35">26-35</option>
            <option value="36-45">36-45</option>
            <option value="46-55">46-55</option>
            <option value="56+">56+</option>
          </select>

          <label><MaskText text="Education*" className="text-sec-clr uppercase font-lauanne text-1xl" /></label>
          <select name="education" value={formData.education} onChange={handleChange} required className="w-full flex items-center justify-center px-4 py-3 mb-4 rounded font-lauanne uppercase bg-[#1d1d1d] text-sec-clr focus:outline-none focus:ring-2 focus:ring-transparent">
            <option value="">Select Education</option>
            <option value="High school">High school</option>
            <option value="Bachelor's Degree">Bachelor's Degree</option>
            <option value="Master's Degree">Master's Degree</option>
            <option value="PhD">PhD</option>
            <option value="Others">Others</option>
          </select>

          <label><MaskText text="Immigration Type*" className="text-sec-clr uppercase font-lauanne text-1xl" /></label>
          <select name="immigrationType" value={formData.immigrationType} onChange={handleChange} required className="w-full flex items-center justify-center px-4 py-3 mb-4 rounded font-lauanne uppercase bg-[#1d1d1d] text-sec-clr focus:outline-none focus:ring-2 focus:ring-transparent">
            <option value="">Select Immigration Type</option>
            <option value="Canada skilled immigration">Canada skilled immigration</option>
            <option value="Australia skilled immigration">Australia skilled immigration</option>
            <option value="Visit Visa">Visit Visa</option>
            <option value="Work Permit">Work Permit</option>
          </select>

          <label><MaskText text="Preferred Location*" className="text-sec-clr uppercase font-lauanne text-1xl" /></label>
          <select name="preferredLocation" value={formData.preferredLocation} onChange={handleChange} required className="w-full flex items-center justify-center px-4 py-3 mb-4 rounded font-lauanne uppercase bg-[#1d1d1d] text-sec-clr focus:outline-none focus:ring-2 focus:ring-transparent">
            <option value="">Select Location</option>
            <option value="Dubai (SZR)">Dubai (SZR)</option>
            <option value="Abu Dhabi">Abu Dhabi</option>
            <option value="Sharjah">Sharjah</option>
          </select>

          <div className="mt-6">
            <Button
             type="submit"
              svgIcon={<MyArrowIcon />}
              textOne="SUBMIT"
              textTwo="SUBMIT"
              wrapperBgColor="bg-sec-clr"
              linkTextColor="font-[500] text-pri-clr font-pp-neue"
              svgWrapperBgColor="bg-pri-clr"
            />
          </div>

          {popupVisible && (
            <div className="popup font-pp-neue">{popupMessage}</div>
          )}
        </form>

        <style jsx>{`
          .popup {
            position: fixed;
            bottom: 10%;
            left: 50%;
            transform: translateX(-50%);
            background: #7cee6d;
            color: white;
            padding: 1rem;
            border-radius: 0.5rem;
            font-family: 'font-pp-neue', sans-serif;
            opacity: ${popupVisible ? 1 : 0};
            transition: opacity 0.5s ease;
            z-index:10000000000
          }
        `}</style>
      </div>
      <Endling />
      <FaqList />
      <Footer />
    </SmoothScroll>
    </>
  );
}
