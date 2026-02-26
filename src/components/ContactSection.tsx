import { Phone, MapPin, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">संपर्क</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
            हमसे संपर्क करें
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto font-hindi">
            ऑर्डर या किसी भी जानकारी के लिए हमसे सीधे संपर्क करें।
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {[
              { icon: MapPin, title: "पता", info: "बाड़ापुर रोड, अकबरपुर, कानपुर देहात, उत्तर प्रदेश" },
              { icon: Phone, title: "फ़ोन", info: "+91 99360-58220" },
              { icon: Mail, title: "वेबसाइट", info: "www.sultanagency.in" },
              { icon: Clock, title: "समय", info: "सोमवार - शनिवार: सुबह 9 बजे - रात 8 बजे" },
            ].map((c, i) => (
              <div key={i} className="flex gap-4 items-start p-4 rounded-xl bg-card border border-border">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <c.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">{c.title}</h3>
                  <p className="text-muted-foreground text-sm font-hindi mt-0.5">{c.info}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <form className="bg-card rounded-2xl p-6 border border-border space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-sm font-medium text-foreground font-hindi">आपका नाम</label>
              <input
                type="text"
                placeholder="नाम दर्ज करें"
                className="mt-1 w-full px-4 py-2.5 rounded-lg bg-background border border-input text-foreground text-sm font-hindi focus:ring-2 focus:ring-ring focus:outline-none"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground font-hindi">फ़ोन नंबर</label>
              <input
                type="tel"
                placeholder="फ़ोन नंबर दर्ज करें"
                className="mt-1 w-full px-4 py-2.5 rounded-lg bg-background border border-input text-foreground text-sm font-hindi focus:ring-2 focus:ring-ring focus:outline-none"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground font-hindi">संदेश</label>
              <textarea
                rows={4}
                placeholder="अपना संदेश लिखें..."
                className="mt-1 w-full px-4 py-2.5 rounded-lg bg-background border border-input text-foreground text-sm font-hindi focus:ring-2 focus:ring-ring focus:outline-none resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-gold text-warm-brown py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity shadow-gold"
            >
              संदेश भेजें
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
