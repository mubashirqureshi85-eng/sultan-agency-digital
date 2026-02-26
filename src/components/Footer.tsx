const Footer = () => {
  return (
    <footer className="bg-warm-brown border-t border-gold/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display text-gold text-xl font-bold">Sultan Agency</h3>
            <p className="text-gold-light/50 text-sm font-hindi mt-2">सुलतान एजेंसी — प्रीमियम सूखा मेवा और किराना</p>
            <p className="text-gold-light/40 text-xs mt-2">GSTIN: 09CBIPR7857K1ZO</p>
          </div>
          <div>
            <h4 className="text-gold font-semibold text-sm mb-3">उत्पाद</h4>
            <ul className="space-y-1.5 text-gold-light/50 text-sm font-hindi">
              <li>काजू (Cashews)</li>
              <li>बादाम (Almonds)</li>
              <li>मखाना (Fox Nuts)</li>
              <li>किशमिश (Raisins)</li>
              <li>किराना सामान</li>
            </ul>
          </div>
          <div>
            <h4 className="text-gold font-semibold text-sm mb-3">पता</h4>
            <p className="text-gold-light/50 text-sm font-hindi">
              बाड़ापुर रोड, अकबरपुर<br />
              कानपुर देहात, उत्तर प्रदेश<br />
              भारत
            </p>
          </div>
        </div>
        <div className="border-t border-gold/10 pt-6 text-center">
          <p className="text-gold-light/40 text-xs">
            © {new Date().getFullYear()} Sultan Agency (सुलतान एजेंसी). सर्वाधिकार सुरक्षित।
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
