import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dropdown1: '',
    dropdown2: '',
    dropdown3: '',
    dropdown4: '',
    dropdown5: '',
  });
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://yourdomain.com/submit_contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setPopupMessage(result.message);
      setPopupVisible(true);

      setTimeout(() => {
        setPopupVisible(false);
      }, 2000);

      if (result.status === 'success') {
        setFormData({
          name: '',
          email: '',
          phone: '',
          dropdown1: '',
          dropdown2: '',
          dropdown3: '',
          dropdown4: '',
          dropdown5: '',
        });
      }
    } catch (error) {
      setPopupMessage('An error occurred. Please try again.');
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

        <label>Phone:</label>
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />

        {[...Array(5)].map((_, index) => (
          <div key={index}>
            <label>Option {index + 1}:</label>
            <select name={`dropdown${index + 1}`} value={formData[`dropdown${index + 1}`]} onChange={handleChange} required>
              <option value="">Select an option</option>
              <option value="Option A">Option A</option>
              <option value="Option B">Option B</option>
              <option value="Option C">Option C</option>
            </select>
          </div>
        ))}

        <button type="submit">Submit</button>

        {/* Popup */}
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
