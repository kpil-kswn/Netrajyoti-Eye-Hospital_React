import React from 'react';

const DoctorCard = ({ name, qualification, role, description }) => (
  <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-8 flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group">
    
    <div className="w-32 h-32 bg-blue-100 rounded-full mb-6 flex items-center justify-center text-4xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
      👨‍⚕️
    </div>
    
    <h3 className="text-2xl font-bold text-blue-900 mb-1">{name}</h3>
    <p className="text-cyan-600 font-bold text-sm uppercase tracking-widest mb-4">
      {qualification}
    </p>
    <div className="w-12 h-1 bg-slate-200 mb-4 group-hover:w-20 group-hover:bg-cyan-500 transition-all duration-500"></div>
    <p className="text-slate-500 text-sm leading-relaxed">
      {description}
    </p>
    
    
  </div>
);

const Doctors = () => {
  const medicalTeam = [
    {
      name: "Dr. Madhusudhan Sharma",
      qualification: "MBBS",
      description: "Senior Medical Consultant specializing in comprehensive eye health diagnostics and primary vision care management."
    },
    {
      name: "Dr. Babulal Saudawat",
      qualification: "BPT-OPTM",
      description: "Expert Optometrist focused on binocular vision, pediatric eye care, and advanced refractive error corrections."
    },
    {
      name: "Rajesh Sharma",
      qualification: "OPTM",
      description: "Specialist in computerized eye testing and precision contact lens fitting with extensive clinical experience."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
       
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-blue-900 mb-4 italic">
            Meet Our Medical Experts
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Our team of dedicated professionals at Netrajyoti Eye Hospital brings years of clinical experience and compassionate care to every patient.
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {medicalTeam.map((doc, index) => (
            <DoctorCard key={index} {...doc} />
          ))}
        </div>

        
      </div>
    </div>
  );
};

export default Doctors;