import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    option1: '',
    option2: '',
    option3: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.message) {
        alert(result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit the form');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="w-full max-w-lg p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
        
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="Your Name"
          required
        />

        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="Your Email"
          required
        />

        <label className="block text-gray-700">Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="Your Phone Number"
          required
        />

        <label className="block text-gray-700">Option 1</label>
        <select
          name="option1"
          value={formData.option1}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring focus:ring-blue-200"
          required
        >
          <option value="">Select Option 1</option>
          <option value="Option 1A">Option 1A</option>
          <option value="Option 1B">Option 1B</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
