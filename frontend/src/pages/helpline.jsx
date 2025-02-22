import React from 'react';
import { Link } from 'react-router-dom';

const Helpline = () => {
  const handleCallClick = () => {
    window.location.href = 'tel:18001234567';
  };

  const handleWhatsAppClick = () => {
    window.location.href = 'https://wa.me/911234567890';
  };

  const commonQueries = [
    {
      question: 'How do I check if Im eligible for a scheme?',
      answer: 'You can check eligibility by visiting the scheme details page or using our AI chatbot for instant verification.'
    },
    {
      question: 'What documents do I need for application?',
      answer: 'Common documents include Aadhaar card, land records, bank details, and recent passport-size photographs.'
    },
    {
      question: 'Where can I track my application status?',
      answer: 'Use your application ID to track status in the "Track Application" section of our portal.'
    },
    {
      question: 'What should I do if my application is rejected?',
      answer: 'Contact our helpline for assistance. You can reapply after addressing the rejection reasons.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Need Help? Get Instant Support for Government Schemes!
        </h1>
        <p className="text-xl mb-8">
          Our team is here to assist you with scheme eligibility, application processes, and more.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={handleCallClick}
            className="bg-green-600 text-white px-6 py-3 rounded-lg flex items-center"
          >
            📞 Call Now
          </button>
        </div>
      </section>

      {/* Contact Options */}
      <section className="bg-gray-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-bold mb-6">Contact Options</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold">📞 Toll-Free Number</h3>
            <p>1800-180-1551 (9 AM – 6 PM)</p>
          </div>
          <div>
            <h3 className="font-semibold">📩 Email Support</h3>
            <p>support@farmerschemes.in</p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">📌 Before calling, check these common questions:</h2>
        <div className="space-y-6">
          {commonQueries.map((query, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-2">{query.question}</h3>
              <p className="text-gray-600">{query.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Helpline;