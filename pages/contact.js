import { useState } from 'react';
import { db } from '../firebaseConfig'; // import the Firestore database
import { collection, addDoc } from 'firebase/firestore';

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
      // Add a new document to the Firestore collection
      await addDoc(collection(db, "contacts"), formData);

      setPopupMessage("Form submitted successfully!");
      setPopupVisible(true);

      // Clear form data after submission
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

      // Hide the success message after 2 seconds
      setTimeout(() => setPopupVisible(false), 2000);
    } catch (error) {
      setPopupMessage("An error occurred. Please try again.");
      setPopupVisible(true);
      setTimeout(() => setPopupVisible(false), 2000);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="w-full max-w-lg p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>

        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Phone Number:</label>
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />

        <label>Migrate Country:</label>
        <select name="migrateCountry" value={formData.migrateCountry} onChange={handleChange} required>
          <option value="">Select Country</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="Australia">Australia</option>
          <option value="UK">UK</option>
          <option value="Germany">Germany</option>
        </select>

        <label>Age Range:</label>
        <select name="ageRange" value={formData.ageRange} onChange={handleChange} required>
          <option value="">Select Age Range</option>
          <option value="18-25">18-25</option>
          <option value="26-35">26-35</option>
          <option value="36-45">36-45</option>
          <option value="46-55">46-55</option>
          <option value="56+">56+</option>
        </select>

        <label>Education:</label>
        <select name="education" value={formData.education} onChange={handleChange} required>
          <option value="">Select Education</option>
          <option value="High school">High school</option>
          <option value="Bachelor's Degree">Bachelor's Degree</option>
          <option value="Master's Degree">Master's Degree</option>
          <option value="PhD">PhD</option>
          <option value="Others">Others</option>
        </select>

        <label>Immigration Type:</label>
        <select name="immigrationType" value={formData.immigrationType} onChange={handleChange} required>
          <option value="">Select Immigration Type</option>
          <option value="Canada skilled immigration">Canada skilled immigration</option>
          <option value="Australia skilled immigration">Australia skilled immigration</option>
          <option value="Visit Visa">Visit Visa</option>
          <option value="Work Permit">Work Permit</option>
        </select>

        <label>Preferred Location:</label>
        <select name="preferredLocation" value={formData.preferredLocation} onChange={handleChange} required>
          <option value="">Select Location</option>
          <option value="Dubai (SZR)">Dubai (SZR)</option>
          <option value="Abu Dhabi">Abu Dhabi</option>
          <option value="Sharjah">Sharjah</option>
        </select>

        <button type="submit">Submit</button>

        {popupVisible && (
          <div className="popup">{popupMessage}</div>
        )}
      </form>

      <style jsx>{`
        form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .popup {
          position: fixed;
          bottom: 10%;
          left: 50%;
          transform: translateX(-50%);
          background: #4caf50;
          color: white;
          padding: 1rem;
          border-radius: 0.5rem;
          opacity: ${popupVisible ? 1 : 0};
          transition: opacity 0.5s ease;
        }
      `}</style>
    </div>
  );
}
