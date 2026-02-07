import React from 'react';

const SymptomCard = ({ title, description }) => (
  <div className="flex gap-4 p-4 bg-white rounded-xl border-l-4 border-red-500 shadow-sm">
    <div className="text-red-500 text-xl font-bold">!</div>
    <div>
      <h4 className="font-bold text-slate-800">{title}</h4>
      <p className="text-sm text-slate-600">{description}</p>
    </div>
  </div>
);

const Patient = () => {
  const symptoms = [
    { title: "Blurred Vision", description: "धुंधला दिखाई देना या रोशनी के चारों ओर घेरे दिखना।" },
    { title: "Eye Irritation", description: "आँखों में लगातार खुजली, जलन या लालिमा रहना।" },
    { title: "Night Blindness", description: "शाम के समय या कम रोशनी में देखने में कठिनाई होना।" },
    { title: "Frequent Specs Change", description: "चश्मे का नंबर बार-बार बदलना।" },
    { title: "Watery Eyes", description: "आँखों से बेवजह पानी आना या कीचड़ आना।" },
    { title: "Spots in Vision", description: "आँखों के सामने काले धब्बे या तैरती हुई चीजें दिखना।" }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      <div className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-16 px-8 text-center">
        <h1 className="text-4xl font-extrabold mb-4 italic">Patient Awareness & Care</h1>
        <p className="max-w-2xl mx-auto text-cyan-50">
          Your vision is precious. Recognizing early warning signs can prevent permanent vision loss.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-8 mt-12">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-3xl font-bold text-blue-900">
              खतरे के संकेत: <span className="text-red-600">इन्हें अनदेखा न करें</span>
            </h2>
            <p className="text-slate-700 leading-relaxed">
              यदि आप नीचे दिए गए किसी भी लक्षण का अनुभव कर रहे हैं, तो तुरंत हमारे विशेषज्ञों से परामर्श लें। 
              ये लक्षण मोतियाबिंद या काला पानी की शुरुआत हो सकते हैं।
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {symptoms.map((s, idx) => (
                <SymptomCard key={idx} title={s.title} description={s.description} />
              ))}
            </div>

            <div className="bg-blue-900 text-white p-6 rounded-2xl shadow-lg mt-8">
              <h3 className="text-xl font-bold mb-2 underline decoration-cyan-400">Expert Advice</h3>
              <p className="italic opacity-90">
                "40 वर्ष की आयु के बाद वर्ष में एक बार आँखों की विस्तृत जांच अवश्य करानी चाहिए, 
                भले ही आपकी दृष्टि सामान्य लग रही हो।"
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">Understanding Your Eye</h3>
            
            <div className="aspect-square bg-slate-100 rounded-4xl mb-8 flex items-center justify-center border-8 border-slate-50 relative overflow-hidden">
                 <img src="/src/assets/image.png" alt="humaneye" className='w-full h-full object-cover rounded-4xl' />
            </div>


            <div className="space-y-6">
              <div className="p-4 bg-cyan-50 rounded-lg">
                <h4 className="font-bold text-cyan-800">Cataract (मोतियाबिंद)</h4>
                <p className="text-sm text-slate-600">The clouding of the eye's natural lens. Treatment is only possible through surgery.</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-bold text-blue-800">Glaucoma (काला पानी)</h4>
                <p className="text-sm text-slate-600">Increased eye pressure that damages the optic nerve. Often called the 'silent thief of sight'.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Patient;
