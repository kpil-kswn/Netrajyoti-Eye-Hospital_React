import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative bg-blue-50 text-gray-700 mt-16 z-50 ">
      <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-blue-600 mb-3">
            Netrajyoti Eye Hospital Kanota
          </h2>
          <p className="text-sm leading-relaxed">
            Providing trusted healthcare services with modern facilities
            and experienced doctors. Your health is our priority.
          </p>
        </div>
        
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="" className="hover:text-blue-600">Home</Link></li>
            <li><Link to="/doctors"className="hover:text-blue-600">About Us</Link></li>
            <li><Link to="/services" className="hover:text-blue-600">Services</Link></li>
            <li><Link to="/doctors" className="hover:text-blue-600">Doctors</Link></li>
            <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold mb-3">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Emergency Care</li>
            <li>10:00 AM - 7:00 Pm (OPD/IPD)</li>
            <li>Laboratory</li>
            <li>Operation Theatre</li>
            <li>Ambulance Service</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Contact Us</h3>
          <p className="text-sm">📍 नेत्रज्योति, पुलिस थाने के सामने, आगरा रोड, कनोता, राजस्थान – 303012</p>
          <p className="text-sm">📞 +91 9782625667</p>
          <p className="text-sm">✉️ babulalsharma1318@gmail.com</p>
        </div>

      </div>
      <div className="bg-blue-600 text-white text-center py-3 text-sm">
        © {new Date().getFullYear()} Netrajyoti Eye Hospital Kanota. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
