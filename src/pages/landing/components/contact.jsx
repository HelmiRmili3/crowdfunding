import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  };

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
                rows="4"
                placeholder="Type your message here"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
