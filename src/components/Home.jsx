import React from 'react';
import { Link } from 'react-router-dom';
import home from "../assets/home.jpeg";

const ServiceCard = ({ title, description, icon }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow text-center">
    <div className="text-4xl mb-4 flex justify-center">{icon}</div>
    <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const Home = () => {
  return (
    <div className="font-sans text-slate-900">
      
      <section className="relative bg-gradient-to-r from-blue-900 to-cyan-700 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              नेत्रज्योति आँखों का अस्पताल
            </h1>
            <p className="text-xl text-cyan-50 font-medium">
              Advanced Eye Care & Microsurgery Center
            </p>
            <p className="text-lg opacity-90 leading-relaxed">
              Providing world-class ophthalmic care with cutting-edge technology. 
              Dedicated to restoring and preserving your vision.
            </p>
            <div className="flex gap-4 pt-4">
              <Link to="/services">
              <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-cyan-50 transition-colors">
                Our Services
              </button></Link>
              <Link to="/contact"><button className="border-2 border-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-blue-900 transition-all">
                Contact Us
              </button></Link>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
             
            <div className="w-full h-[400px] bg-slate-200 rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl flex items-center justify-center text-slate-400">
              <img src={home} alt="DoctorImage" className='w-full h-full object-cover object-center'/>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 underline decoration-cyan-500 underline-offset-8">
              Our Key Facilities
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
  icon="👁️" 
  title="Phacoemulsification (फेको सर्जरी)" 
  description="Advanced phaco surgery with foldable lens implantation for faster recovery and better vision outcomes." 
/>

<ServiceCard 
  icon="👁️" 
  title="SICS Surgery (एसआईसीएस सर्जरी)" 
  description="Small Incision Cataract Surgery (SICS) – safe and cost-effective treatment for cataract removal." 
/>

<ServiceCard 
  icon="👁️" 
  title="Phaco with Foldable Lens Implant (फोल्डेबल लेंस इम्प्लांट)" 
  description="Modern cataract treatment using foldable intraocular lens (IOL) for minimal incision and quick healing." 
/>
            <ServiceCard 
              icon="🔬" 
              title="Glaucoma (काला पानी)" 
              description="Comprehensive screening and surgical management for eye pressure." 
            />
            <ServiceCard 
              icon="👓" 
              title="Optical Shop" 
              description="Wide range of frames and computerized lens fitting available on-site." 
            />
            <ServiceCard 
              icon="🏥" 
              title="10:00 AM - 7:00 PM (OPD/IPD)" 
              description="Round-the-clock emergency eye trauma care and pharmacy services." 
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto bg-blue-50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/3">
             <div className="w-48 h-48 bg-white rounded-full shadow-lg flex items-center justify-center text-6xl">
               👁️
             </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">जब तक आप ये लक्षण न देखें, तब तक न रुकें:</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['धुंधला दिखना', 'आँखों में खुजली', 'आँखों का लाल होना', 'आँखों से पानी आना', 'पास या दूर का कम दिखना', 'रात में देखने में कठिनाई'].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-slate-700">
                  <span className="text-cyan-600">✔</span> {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 p-4 bg-white rounded-lg border-l-4 border-cyan-500 italic text-slate-600">
              "तुरंत नेत्र रोग विशेषज्ञ से मिलें"
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
