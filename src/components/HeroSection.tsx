import heroImg from "@/assets/hero-dryfruits.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="प्रीमियम सूखे मेवे - काजू, बादाम, किशमिश, मखाना" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-warm-brown/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-warm-brown via-warm-brown/40 to-transparent" />
      </div>

      <div className="relative container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-gold text-sm font-medium">प्रीमियम क्वालिटी | थोक एवं खुदरा</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6" style={{ animationDelay: "0.2s" }}>
            <span className="text-cream">सुलतान एजेंसी</span>
            <br />
            <span className="text-gradient-gold">Sultan Agency</span>
          </h1>

          <p className="text-gold-light/80 text-lg md:text-xl font-hindi mb-4 max-w-xl animate-fade-up" style={{ animationDelay: "0.4s" }}>
            प्रीमियम सूखा मेवा और किराना — काजू, बादाम, किशमिश, मखाना और बहुत कुछ।
          </p>
          <p className="text-gold-light/60 text-base font-hindi mb-8 max-w-lg animate-fade-up" style={{ animationDelay: "0.5s" }}>
            बाड़ापुर रोड, अकबरपुर, कानपुर देहात से पूरे भारत में उच्च गुणवत्ता की सेवा।
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <a
              href="#products"
              className="bg-gradient-gold text-warm-brown px-8 py-3.5 rounded-lg font-bold text-base hover:opacity-90 transition-opacity shadow-gold"
            >
              उत्पाद देखें
            </a>
            <a
              href="#contact"
              className="border-2 border-gold/40 text-gold px-8 py-3.5 rounded-lg font-semibold text-base hover:bg-gold/10 transition-colors"
            >
              संपर्क करें
            </a>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="absolute bottom-0 left-0 right-0 bg-warm-brown/90 backdrop-blur border-t border-gold/10">
        <div className="container mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { num: "100+", label: "उत्पाद" },
            { num: "500+", label: "ग्राहक" },
            { num: "5+", label: "वर्षों का अनुभव" },
            { num: "100%", label: "शुद्ध गुणवत्ता" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-gold font-display text-2xl md:text-3xl font-bold">{s.num}</div>
              <div className="text-gold-light/60 text-sm font-hindi mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
