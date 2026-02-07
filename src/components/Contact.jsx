import React from "react";
import locate from "../assets/location.jpeg";

const ContactInfo = ({ icon, title, details }) => (
  <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-2xl border border-blue-100">
    <div className="text-3xl text-blue-600">{icon}</div>
    <div>
      <h4 className="font-bold text-blue-900 text-lg mb-1">{title}</h4>
      {details.map((line, index) => (
        <p key={index} className="text-slate-600 font-medium">{line}</p>
      ))}
    </div>
  </div>
);

const Contact = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-white flex flex-col">
      
      <section className="bg-blue-900 py-16 px-8 text-center text-white">
        <h1 className="text-4xl font-extrabold mb-4">Contact Us</h1>
        <p className="max-w-xl mx-auto text-blue-100">
          We are here to help you with your vision needs. Reach out to us via 
          phone, email, or visit our clinic in Kanota.
        </p>
      </section>

      
      <div className="flex-grow max-w-7xl mx-auto w-full py-12 px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
       
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Get in Touch</h2>
          
          <ContactInfo 
            icon="📍" 
            title="Our Location" 
            details={[
              "Agra Rd, Kanota,",
              "Kanauta,"
              ," Rajasthan 303012"
            ]} 
          />

          <ContactInfo 
            icon="📞" 
            title="Phone Numbers" 
            details={[
              "+91-9782625667"
            ]} 
          />

          <ContactInfo 
            icon="✉️" 
            title="Email & Web" 
            details={[
              "babulalsharma1318@gmail.com"
            ]} 
          />

          <div className="p-6 bg-cyan-600 rounded-2xl text-white">
            <h4 className="font-bold text-xl mb-2 italic">Emergency Hours</h4>
            <p className="opacity-90 leading-relaxed">
              Our emergency trauma unit and pharmacy are available 24/7 for urgent eye care needs.
            </p>
          </div>
        </div>

        
          <div className="bg-slate-100 rounded-3xl overflow-hidden shadow-inner border-2 border-dashed border-slate-300">
            <img src={locate} alt="location" className="w-full h-full object-cover object-center" />
            
          </div>
        
      </div>

      
      <footer className="bg-slate-50 py-8 border-t border-slate-200 text-center">
        <p className="text-slate-400 text-sm italic">
          &copy; 2026 Netrajyoti Eye Hospital Kanota. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Contact;
