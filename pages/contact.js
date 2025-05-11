import Head from 'next/head';
import { useState, createContext } from 'react';
import { supabase } from '../lib/supabaseClient';
import Button from '../components/Button';
import MyArrowIcon from '../components/MyArrowIcon';
import { MaskText } from '../components/maskText/MaskText';
import Endling from '../components/Endling';
import SmoothScroll from '../components/SmoothScroll';
import FaqList from '../components/FaqList';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PhoneInput from '../components/PhoneInput';
import WhatsAppInput from '../components/WhatsAppInput';
import CountrySelect from '../components/CountrySelect';
import CustomSelect from '../components/CustomSelect';

// Create a context to track the active dropdown
export const DropdownContext = createContext();

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    whatsapp: '',
    nationality: '',
    currentCountry: '',
    migrateCountry: '',
    age: '',
    currentOccupation: '',
    education: '',
    immigrationType: '',
  });
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // If changing the country, reset the immigration type
    if (name === 'migrateCountry') {
      setFormData({
        ...formData,
        [name]: value,
        immigrationType: ''
      });
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Existing validation code
      
      // Existing Supabase submission code
      
      // Add Meta Pixel conversion tracking
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'Lead', {
          content_name: 'Contact Form Submission',
          content_category: formData.immigrationType || 'General Inquiry',
          country: formData.migrateCountry || 'Not Specified'
        });
      }
      
      // Existing success handling code
      
    } catch (error) {
      // Existing error handling
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
        <DropdownContext.Provider value={{ activeDropdown, setActiveDropdown }}>
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

          <PhoneInput
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <WhatsAppInput
            value={formData.whatsapp}
            onChange={handleChange}
            required
          />

          <label><MaskText text="Age* (Minimum 22 years)" className="text-sec-clr uppercase font-lauanne text-1xl" /></label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            min="22"
            required
            className="w-full px-4 py-2 mb-4 rounded font-lauanne bg-[#1d1d1d] text-sec-clr focus:outline-none focus:ring-2 focus:ring-transparent"
          />

          <CustomSelect
            label="EDUCATION*"
            name="education"
            value={formData.education}
            onChange={handleChange}
            options={[
              { value: "", label: "Select Education", disabled: true },
              { value: "High school", label: "High school" },
              { value: "Bachelor's Degree", label: "Bachelor's Degree" },
              { value: "Master's Degree", label: "Master's Degree" },
              { value: "PhD", label: "PhD" },
              { value: "Others", label: "Others" }
            ]}
            required
          />

          <label><MaskText text="Current Occupation*" className="text-sec-clr uppercase font-lauanne text-1xl" /></label>
          <input
            type="text"
            name="currentOccupation"
            value={formData.currentOccupation}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mb-4 rounded font-lauanne bg-[#1d1d1d] text-sec-clr focus:outline-none focus:ring-2 focus:ring-transparent"
          />

          <CountrySelect
            label="NATIONALITY*"
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            required
          />

          <CountrySelect
            label="CURRENT COUNTRY*"
            name="currentCountry"
            value={formData.currentCountry}
            onChange={handleChange}
            required
          />

          <CustomSelect
            label="MIGRATE COUNTRY*"
            name="migrateCountry"
            value={formData.migrateCountry}
            onChange={handleChange}
            options={[
              { value: "", label: "Select Country", disabled: true },
              { value: "Canada", label: "Canada" },
              { value: "UAE/Dubai", label: "UAE/Dubai" },
              { value: "UK", label: "UK" },
              { value: "LUXEMBOURG", label: "LUXEMBOURG" },
              { value: "GERMANY", label: "GERMANY" },
              { value: "PORTUGAL", label: "PORTUGAL" },
              { value: "MALTA", label: "MALTA" },
              { value: "POLAND", label: "POLAND" },
              { value: "NETHERLANDS", label: "NETHERLANDS" },

            ]}
            required
          />

          <CustomSelect
            label="IMMIGRATION TYPE*"
            name="immigrationType"
            value={formData.immigrationType}
            onChange={handleChange}
            options={[
              { value: "", label: "Select Immigration Type", disabled: true },
              ...(formData.migrateCountry === 'Canada' ? [
                { value: "LMIA Canada Program", label: "LMIA Canada Program" },
                { value: "AIPP Program", label: "AIPP Program" },
                { value: "SINP", label: "SINP (Saskatchewan)" },
                { value: "Canada Business Visa", label: "Canada Business Visa" },
                { value: "Canada Spouse Visa", label: "Canada Spouse Visa" },
                { value: "Canada Work Permit", label: "Canada Work Permit" },
                { value: "Express Entry", label: "Express Entry" },
                { value: "PNP Canada", label: "PNP Canada" },
                { value: "YCP Program", label: "YCP Program" }

              ] : formData.migrateCountry === 'UAE/Dubai' ? [
                { value: "Dubai Freelance Visa", label: "Dubai Freelance Visa" },
                { value: "UAE Visit Visa", label: "UAE Visit Visa" }
              ]

               : formData.migrateCountry === 'UK' ? [
                { value: "UK COS Program", label: "UK COS Program" },
                { value: "UK Innovator Visa", label: "UK Innovator Visa" },
                { value: "UK Sole Representative", label: "UK Sole Representative" },
                { value: "UK Startup Visa", label: "UK Startup Visa" },
                { value: "UK Study Visa", label: "UK Study Visa" },
                { value: "UK Visit Visa", label: "UK Visit Visa" }
              ] : formData.migrateCountry === 'LUXEMBOURG' ? [
                { value: "Luxembourg Work Visa", label: "Luxembourg Work Visa" },
                { value: "Luxembourg Visit Visa", label: "Luxembourg Visit Visa" }
              ] : formData.migrateCountry === 'GERMANY' ? [
                { value: " Germany Job Seeker", label: " Germany Job Seeker" },
                { value: "Germany Blue Card", label: "Germany Blue Card" }
              ] : formData.migrateCountry === 'PORTUGAL' ? [
                { value: "Portugal Golden Visa", label: "Portugal Golden Visa" },
                { value: "PORTUGAL D7 VISA", label: "PORTUGAL D7 VISA" }
              ] : formData.migrateCountry === 'MALTA' ? [
                { value: "Malta Global Residence", label: "Malta Global Residence" },
                { value: "Malta Work Visa", label: "Malta Work Visa" }
              ] : formData.migrateCountry === 'POLAND' ? [
                { value: "Poland Business Visa", label: "Poland Business Visa" },
                { value: "Poland Work Permit", label: "Poland Work Permit" }
              ] : formData.migrateCountry === 'NETHERLANDS' ? [
                { value: "Netherlands Startup Visa", label: "Netherlands Startup Visa" },
                { value: "Netherlands Highly Skilled Migrant Visa", label: "Netherlands Highly Skilled Migrant Visa" },
                { value: "Netherlands Work Visa", label: "Netherlands Work Visa" }
              ] : [
                { value: "Visit Visa", label: "Visit Visa" },
                { value: "Work Permit", label: "Work Permit" },
                { value: "Business Visa", label: "Business Visa" },
                { value: "Student Visa", label: "Student Visa" }
              ])
            ]}
            required
          />


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
        </DropdownContext.Provider>

        <style jsx>{`
          .popup {
            position: fixed;
            bottom: 10%;
            left: 50%;
            transform: translateX(-50%);
            background: ${popupMessage.includes("error") || popupMessage.includes("must") ? "#ee6d6d" : "#7cee6d"};
            color: white;
            padding: 1rem;
            border-radius: 0.5rem;
            font-family: 'font-pp-neue', sans-serif;
            opacity: ${popupVisible ? 1 : 0};
            transition: opacity 0.5s ease;
            z-index: 10000000000;
            text-align: center;
            min-width: 250px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
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



