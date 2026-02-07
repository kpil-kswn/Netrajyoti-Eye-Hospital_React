import React from "react";
import area1 from "../assets/area1.jpeg";
import area2 from "../assets/area2.jpeg";

const ServiceItem = ({ title, hindiTitle, description,fees}) => (
  <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600 hover:transform hover:-translate-y-1 transition-all duration-300">
    <div className="flex items-start gap-4">
      <div className="bg-blue-100 p-3 rounded-full text-blue-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <div>
        <h3 className="text-xl font-bold text-blue-900">{title}</h3>
        <p className="text-sm font-semibold text-cyan-600 mb-2 italic">
          {hindiTitle}
        </p>
        <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
        <p className="text-slate-600 text-sm leading-relaxed">{fees}</p>
      </div>
    </div>
  </div>
);

const Services = () => {
  const medicalServices = [
    {
      title: "Cataract Surgery (Phaco)",
      hindiTitle: "मोतियाबिंद का ऑपरेशन (फेको विधि)",
      description:
        "Advanced stitchless surgery with foldable lens implantation for quick recovery.",
        fees:"Starting from 5000Rs only"
    },
    {
      title: "Glaucoma Management",
      hindiTitle: "काला पानी का उपचार",
      description:
        "Comprehensive screening, visual field analysis, and advanced medical/surgical management.",
    },
    {
      title: "Pediatric Ophthalmology",
      hindiTitle: "बच्चों की आँखों का उपचार",
      description:
        "Specialized care for children's eye issues, including squint and vision correction.",
    },
    {
      title: "Retina Services",
      hindiTitle: "पर्दा रोग विशेषज्ञ",
      description:
        "Diagnosis and treatment of retinal disorders and diabetic retinopathy.",
        fees:"Starting from 1500Rs only",
    },
    {
      title: "Computerized Testing",
      hindiTitle: "कंप्यूटरीकृत आँखों की जांच",
      description:
        "High-precision vision testing using modern automated refractometers.",
    },
    {
      title: "Contact Lens Clinic",
      hindiTitle: "कांटेक्ट लेंस क्लीनिक",
      description:
        "Professional fitting for soft, semi-soft, and cosmetic contact lenses.",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
    
      <div className="bg-blue-900 text-white py-16 px-8 text-center">
        <h1 className="text-4xl font-extrabold mb-4">Our Medical Services</h1>
        <p className="max-w-2xl mx-auto text-blue-100">
          Netrajyoti Eye Hospital provides state-of-the-art facilities for
          complete eye care, combining expertise with the latest medical
          technology.
        </p>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {medicalServices.map((service, index) => (
            <ServiceItem key={index} {...service} />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto pb-20 px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 bg-cyan-600 p-12 text-white">
            <h2 className="text-3xl font-bold mb-6 italic">
              Hospital Facilities
            </h2>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center gap-3">
                <span className="bg-white/20 p-1 rounded">✓</span> 24x7
                Emergency Services
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-white/20 p-1 rounded">✓</span> In-house
                Pharmacy
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-white/20 p-1 rounded">✓</span> Optical Shop
                (Frame & Lens)
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-white/20 p-1 rounded">✓</span> Comfortable
                Recovery Ward
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-white/20 p-1 rounded">✓</span> Cashless TPA
                Insurance Facility
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 bg-slate-200 flex items-center justify-center p-10">
            <div>
              <img src={area1} alt="advanceclinic" />
            </div>
            <div>
              <img src={area2} alt="eyetesting" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
