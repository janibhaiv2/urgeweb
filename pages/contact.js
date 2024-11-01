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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Submit handling logic goes here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
        
        <label className="block mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
          placeholder="Enter your name"
          required
        />

        <label className="block mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
          placeholder="Enter your email"
          required
        />

        <label className="block mb-2">Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
          placeholder="Enter your phone number"
          required
        />

        <label className="block mb-2">Option 1</label>
        <select
          name="option1"
          value={formData.option1}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
          required
        >
          <option value="">Select an option</option>
          <option value="Option 1A">Option 1A</option>
          <option value="Option 1B">Option 1B</option>
          <option value="Option 1C">Option 1C</option>
        </select>

        <label className="block mb-2">Option 2</label>
        <select
          name="option2"
          value={formData.option2}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
          required
        >
          <option value="">Select an option</option>
          <option value="Option 2A">Option 2A</option>
          <option value="Option 2B">Option 2B</option>
          <option value="Option 2C">Option 2C</option>
        </select>

        <label className="block mb-2">Option 3</label>
        <select
          name="option3"
          value={formData.option3}
          onChange={handleChange}
          className="w-full p-2 mb-6 border rounded"
          required
        >
          <option value="">Select an option</option>
          <option value="Option 3A">Option 3A</option>
          <option value="Option 3B">Option 3B</option>
          <option value="Option 3C">Option 3C</option>
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
