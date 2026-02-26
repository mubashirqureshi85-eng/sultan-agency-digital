import { Shield, Truck, Award, Users } from "lucide-react";

const features = [
  { icon: Shield, title: "100% शुद्ध गुणवत्ता", desc: "हम केवल उच्चतम गुणवत्ता का माल बेचते हैं।" },
  { icon: Truck, title: "तेज़ डिलीवरी", desc: "पूरे कानपुर देहात और आसपास के क्षेत्रों में।" },
  { icon: Award, title: "GST पंजीकृत", desc: "GSTIN: 09CBIPR7857K1ZO — विश्वसनीय व्यापार।" },
  { icon: Users, title: "500+ संतुष्ट ग्राहक", desc: "वर्षों से ग्राहकों का भरोसा बना हुआ है।" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">हमारे बारे में</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
            सुलतान एजेंसी
          </h2>
          <p className="text-muted-foreground mt-5 text-lg font-hindi leading-relaxed">
            सुलतान एजेंसी, बाड़ापुर रोड, अकबरपुर, कानपुर देहात में स्थित एक विश्वसनीय सूखा मेवा और किराना व्यापारी है। 
            हमारे संस्थापक <strong className="text-foreground">मुहम्मद फैसल</strong> जी के नेतृत्व में, हम अपने ग्राहकों को 
            सबसे बेहतरीन गुणवत्ता के उत्पाद प्रदान करने के लिए प्रतिबद्ध हैं।
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-background rounded-2xl p-6 text-center border border-border hover:border-primary/30 transition-colors group"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">{f.title}</h3>
              <p className="text-muted-foreground text-sm mt-2 font-hindi">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
