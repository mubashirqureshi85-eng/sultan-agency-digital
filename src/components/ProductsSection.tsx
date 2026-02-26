import cashewsImg from "@/assets/cashews.jpg";
import almondsImg from "@/assets/almonds.jpg";
import makhanaImg from "@/assets/makhana.jpg";
import raisinsImg from "@/assets/raisins.jpg";

const products = [
  { name: "काजू (Cashews)", img: cashewsImg, desc: "प्रीमियम W240 & W320 काजू, थोक और खुदरा में उपलब्ध।", alt: "प्रीमियम काजू - Sultan Agency" },
  { name: "बादाम (Almonds)", img: almondsImg, desc: "कैलिफोर्निया और गिरी बादाम, उच्चतम गुणवत्ता।", alt: "प्रीमियम बादाम - Sultan Agency" },
  { name: "मखाना (Fox Nuts)", img: makhanaImg, desc: "ताज़ा और कुरकुरे मखाना, स्वास्थ्य के लिए उत्तम।", alt: "प्रीमियम मखाना - Sultan Agency" },
  { name: "किशमिश (Raisins)", img: raisinsImg, desc: "गोल्डन और ग्रीन किशमिश, मिठास से भरपूर।", alt: "प्रीमियम किशमिश - Sultan Agency" },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">हमारे उत्पाद</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
            प्रीमियम सूखा मेवा
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto font-hindi">
            हम सबसे बेहतरीन गुणवत्ता के सूखे मेवे और किराना सामग्री प्रदान करते हैं।
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p, i) => (
            <article
              key={i}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-gold transition-all duration-500 hover:-translate-y-1"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={p.img}
                  alt={p.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-bold text-foreground">{p.name}</h3>
                <p className="text-muted-foreground text-sm mt-2 font-hindi">{p.desc}</p>
                <a
                  href="#contact"
                  className="inline-block mt-4 text-primary font-semibold text-sm hover:text-gold-dark transition-colors"
                >
                  दाम जानें →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
