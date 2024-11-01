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
    <form onSubmit={handleSubmit}>
      {/* Form Fields */}
      <input type="text" name="name" onChange={handleChange} placeholder="Your Name" required />
      <input type="email" name="email" onChange={handleChange} placeholder="Your Email" required />
      <input type="tel" name="phone" onChange={handleChange} placeholder="Your Phone Number" required />
      <select name="option1" onChange={handleChange}>
        <option value="">Select Option 1</option>
        <option value="Option 1A">Option 1A</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}
