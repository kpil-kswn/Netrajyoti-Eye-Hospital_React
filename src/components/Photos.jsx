import React from "react";

import back1 from "../assets/gallary/back1.jpeg";
import back2 from "../assets/gallary/back2.jpeg";
import back3 from "../assets/gallary/back3.jpeg";

import image1 from "../assets/gallary/image1.jpeg";
import image2 from "../assets/gallary/image2.jpeg";
import image3 from "../assets/gallary/image3.jpeg";
import image4 from "../assets/gallary/image4.jpeg";
import image5 from "../assets/gallary/image5.jpeg";
import image6 from "../assets/gallary/image6.jpeg";
import image7 from "../assets/gallary/image7.jpeg";
import image8 from "../assets/gallary/image8.jpeg";
import image9 from "../assets/gallary/image9.jpeg";
import image10 from "../assets/gallary/image10.jpeg";
import image11 from "../assets/gallary/image11.jpeg";
import image12 from "../assets/gallary/image12.jpeg";
import image13 from "../assets/gallary/image13.jpeg";
import image14 from "../assets/gallary/image14.jpeg";
import image15 from "../assets/gallary/image15.jpeg";
import image16 from "../assets/gallary/image16.jpeg";

const Photos = () => {
  const backgroundImages = [back1, back2, back3];

  const gridImages = [
    { src: image1, alt: "Modern Equipment" },
    { src: image2, alt: "Reception Area" },
    { src: image3, alt: "Consultation Room" },
    { src: image4, alt: "Surgery Team" },
    { src: image5, alt: "Ward Interior" },
    { src: image6, alt: "Optical Shop" },
    { src: image7, alt: "Optical Shop" },
    { src: image8, alt: "Optical Shop" },
    { src: image9, alt: "Optical Shop" },
    { src: image10, alt: "Optical Shop" },
    { src: image11, alt: "Optical Shop" },
    { src: image12, alt: "Optical Shop" },
    { src: image13, alt: "Featured Facility" },
    { src: image14, alt: "Advanced OT" },
    { src: image15, alt: "Diagnostic Center" },
    { src: image16, alt: "Patient Care" },
  ];

  return (
    <div className="relative min-h-screen bg-slate-50 overflow-hidden">
      
      <div className="fixed inset-0 pointer-events-none z-[0] overflow-hidden">
        {backgroundImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="background decor"
            className="absolute w-full h-full object-cover opacity-[0.95] blur-sm"
            style={{
              top: `${index * 100}%`, 
              left: 0,
              height: '100vh' 
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto py-16 px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-blue-900 italic mb-4">
            Hospital Gallery
          </h1>
          <div className="w-24 h-1 bg-cyan-500 mx-auto"></div>
          <p className="mt-4 text-slate-600">
            A glimpse into our advanced facilities and dedicated medical environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gridImages.map((image, index) => {
            const shouldZoom = index >= 12 && index <= 15;
            return (
              <div
                key={index}
                className="group relative h-80 bg-white rounded-2xl overflow-hidden shadow-md border border-slate-200"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full h-full transition-all duration-1000 ease-in-out 
    ${
      shouldZoom
        ? "object-cover object-bottom scale-125 group-hover:scale-150"
        : "object-cover object-center group-hover:scale-110"
    }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex items-end">
                  <p className="text-white font-medium">{image.alt}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Photos;