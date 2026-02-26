import { Phone, MapPin, Mail } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-brown/95 backdrop-blur-md border-b border-gold/20">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm border-b border-gold/10">
          <div className="flex items-center gap-6 text-gold-light">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" />
              +91 99360-58220
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              बाड़ापुर रोड, अकबरपुर, कानपुर देहात
            </span>
          </div>
          <span className="text-gold-light/70 text-xs">GSTIN: 09CBIPR7857K1ZO</span>
        </div>
        {/* Main nav */}
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center font-display font-bold text-warm-brown text-lg">
              S
            </div>
            <div>
              <h2 className="font-display text-gold font-bold text-lg leading-tight">Sultan Agency</h2>
              <p className="text-gold-light/60 text-xs font-hindi">सुलतान एजेंसी</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {["होम", "उत्पाद", "हमारे बारे में", "संपर्क"].map((item, i) => (
              <a
                key={i}
                href={`#${["home", "products", "about", "contact"][i]}`}
                className="text-gold-light/80 hover:text-gold transition-colors text-sm font-hindi font-medium"
              >
                {item}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="bg-gradient-gold text-warm-brown px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity shadow-gold"
          >
            संपर्क करें
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
