import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Phone, MapPin, Shield, Clock, Check, 
  TrendingUp, Building2, MessageCircle, 
  Star, ArrowRight, Dumbbell, Activity, 
  Wallet, Sparkles, Building
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import lekkiExterior from "@/assets/lekki-exterior.png";
import lekkiInterior from "@/assets/lekki-interior.png";
import lekkiGym from "@/assets/lekki-gym.png";

const WHATSAPP_LINK = "https://wa.me/2348089382534?text=Hello,%20I'm%20interested%20in%20the%20Luxury%202-Bedroom%20Apartment%20in%20Lekki%20Phase%201.";

const LekkiApartment = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", interested: "Yes" });

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.15 } },
  };

  return (
    <div className="min-h-screen bg-[#050505] text-slate-100 overflow-x-hidden font-sans">
      {/* TOP BAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <span className="font-display text-xl bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent font-bold tracking-tighter">
            ADORNED PROPERTIES
          </span>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-slate-400 hover:text-amber-400 transition-colors">Features</a>
            <a href="#investment" className="text-sm font-medium text-slate-400 hover:text-amber-400 transition-colors">Investment</a>
            <a href="#payment" className="text-sm font-medium text-slate-400 hover:text-amber-400 transition-colors">Payment Plan</a>
          </div>
          <Button size="sm" className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-6" asChild>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              INQUIRE NOW
            </a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0">
          <img src={lekkiExterior} alt="Luxury Apartment Lekki" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp} className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold tracking-widest uppercase mb-6">
                Lekki Phase 1 • Prime Real Estate
              </motion.div>
              
              <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
                Own a Luxury <span className="text-amber-400">2-Bedroom</span> Apartment in Lekki
              </motion.h1>

              <motion.p variants={fadeUp} className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                A Prime Investment Opportunity Starting From <span className="text-white font-bold">₦280 Million</span>. 
                Imagine owning a luxury asset in Lagos&apos; most desirable neighborhood.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 mb-12">
                <Button size="lg" className="bg-white text-black hover:bg-slate-200 px-8 py-6 text-lg font-bold rounded-none" onClick={() => document.getElementById("details")?.scrollIntoView({ behavior: "smooth" })}>
                  GET FULL DETAILS <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5 px-8 py-6 text-lg font-bold rounded-none" asChild>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">CHAT ON WHATSAPP</a>
                </Button>
              </motion.div>

              <motion.div variants={fadeUp} className="flex items-center justify-center gap-8 text-sm text-slate-500 font-medium">
                <span className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-500" /> 30% Down Payment</span>
                <span className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-500" /> High Rental Yield</span>
                <span className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-500" /> Luxury Finishing</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Opportunity */}
      <section id="details" className="py-24 bg-[#080808]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Why Smart Investors Are Buying in <span className="text-amber-500">Lekki Phase 1</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-slate-400 text-lg mb-8 leading-relaxed">
                Lekki Phase 1 is one of the most valuable real estate locations in Lagos. Property values continue to rise every year and rental demand never slows down.
              </motion.p>
              
              <motion.div variants={fadeUp} className="space-y-6">
                {[
                  "Close to Victoria Island and Ikoyi",
                  "Surrounded by top restaurants, malls, and businesses",
                  "High demand for short-let and long-term rentals",
                  "Property prices appreciate every year"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center mt-1">
                      <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                    </div>
                    <span className="text-slate-200 font-medium">{item}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 group"
            >
              <img src={lekkiInterior} alt="Lekki Apartment Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl">
                <p className="text-amber-400 font-bold mb-1 italic">Investment Perspective</p>
                <p className="text-white text-sm">\"Many investors who bought in Lekki a few years ago have seen their properties double or triple in value.\"</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Premium Living Designed for Comfort</h2>
            <p className="text-slate-400 text-lg">These apartments are built with modern luxury and convenience in mind.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Building, title: "Spacious 2 Bedroom", desc: "Thoughtfully designed for privacy and flow." },
              { icon: Activity, title: "Centralized Gas", desc: "Modern utility systems for seamless living." },
              { icon: Dumbbell, title: "Modern Gym", desc: "Fully equipped to keep you in peak physical form." },
              { icon: Shield, title: "24/7 Facility Management", desc: "Professional estate management for peace of mind." },
              { icon: MapPin, title: "Secure Environment", desc: "Well-planned community with top-tier security." },
              { icon: Building2, title: "Premium Finishing", desc: "High-end contemporary architecture and materials." },
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { delay: idx * 0.1 } }
                }}
                className="bg-[#111] p-8 rounded-2xl border border-white/5 hover:border-amber-500/30 transition-all group"
              >
                <feature.icon className="w-10 h-10 text-amber-500 mb-6 transition-transform group-hover:scale-110" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rental Management */}
      <section id="investment" className="py-24 bg-amber-500">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-black">
              <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase leading-none">Earn Rental Income Without Stress</h2>
              <p className="text-black/70 text-lg font-medium mb-8">
                Our estate facility management team can handle everything for you. Perfect for diaspora investors and busy professionals.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Tenant sourcing", "Maintenance", "Rent collection", "Management"].map(item => (
                  <div key={item} className="flex items-center gap-2 font-bold text-sm uppercase tracking-wider">
                    <Check className="w-4 h-4 text-black" /> {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/3 bg-black p-8 rounded-3xl shadow-2xl">
              <p className="text-white text-3xl font-bold mb-4">Pure Asset.</p>
              <p className="text-slate-400 text-sm mb-6 uppercase tracking-widest font-bold">Passive Wealth Creation</p>
              <Button className="w-full bg-amber-500 hover:bg-amber-400 text-black font-black py-6 rounded-xl" asChild>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer uppercase">Get Started</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gym Visual */}
      <section className="h-[60vh] relative">
        <img src={lekkiGym} alt="Modern Gym" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-4">
          <div className="text-center">
            <h3 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter">Stay Healthy. Stay Elite.</h3>
            <p className="text-amber-400 font-medium text-lg uppercase tracking-[0.3em]">Exclusive Residents Gym</p>
          </div>
        </div>
      </section>

      {/* Dual Video Showcase Section */}
      <section className="py-24 bg-black overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-4 py-2 rounded-full mb-6"
            >
              <Activity className="w-4 h-4 text-amber-500" />
              <span className="text-amber-500 text-xs font-bold uppercase tracking-widest">Multimedia Showcase</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 italic tracking-tighter uppercase">Experience Luxury in Motion</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              From exclusive estate tours to cinematic highlights, witness the prestige of Lekki Phase 1 architectural excellence.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
            {/* Main Tour Video (Landscape) */}
            <div className="lg:col-span-8 group">
              <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
                <iframe 
                  src="https://www.youtube.com/embed/wOVz21crnRU" 
                  title="Estate Tour Video"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                />
              </div>
              <p className="mt-4 text-slate-500 text-sm font-bold uppercase tracking-widest flex items-center gap-2 px-4 text-center justify-center">
                <Building className="w-4 h-4" /> Full Estate Tour
              </p>
            </div>

            {/* Cinematic Short (Portrait) */}
            <div className="lg:col-span-4 group">
              <div className="relative aspect-[9/16] max-w-[320px] mx-auto rounded-[40px] overflow-hidden border border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                <iframe 
                  src="https://www.youtube.com/embed/xSdDKrj-u34" 
                  title="Lekki Apartment Cinematic Highlight"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                />
              </div>
              <p className="mt-4 text-amber-500 text-sm font-bold uppercase tracking-widest flex items-center gap-2 text-center justify-center">
                <Sparkles className="w-4 h-4" /> Interior Highlight
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Plan */}
      <section id="payment" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 italic underline decoration-amber-500/50 underline-offset-8">Flexible Payment Plan</h2>
            <p className="text-slate-400 text-lg">You don&apos;t have to pay everything at once. Lock in the current price before it increases.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <div className="bg-[#111] p-10 rounded-3xl border border-amber-500/20 w-full max-w-sm text-center">
              <p className="text-slate-400 uppercase tracking-widest font-bold text-xs mb-4">SECURE YOUR UNIT</p>
              <p className="text-7xl font-black text-white mb-2 leading-none">30%</p>
              <p className="text-amber-500 font-bold mb-8">INITIAL DEPOSIT</p>
              <div className="space-y-4 mb-8 text-sm text-slate-300 font-medium">
                <p>Pre-completion Locking</p>
                <p>Capital Appreciation Focus</p>
                <p>Prime Lagos Location</p>
              </div>
              <Button className="w-full bg-white text-black font-bold h-12" asChild>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">LOCK PRICE NOW</a>
              </Button>
            </div>

            <div className="hidden lg:block w-px h-64 bg-white/10" />

            <div className="space-y-8 max-w-lg">
              <h3 className="text-2xl font-bold">Buy Now Before the Price Increases</h3>
              <p className="text-slate-400 leading-relaxed">
                This development is currently under construction. Smart investors know this is the best time to buy. 
                When completed, the value is expected to rise significantly above <span className="text-white font-bold">₦280 million</span>.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  "Secure lower pre-completion price",
                  "Enjoy massive capital appreciation",
                  "Own property in a prime Lagos location"
                ].map(item => (
                  <div key={item} className="flex items-center gap-3 text-slate-200">
                    <Check className="w-5 h-5 text-amber-500" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="py-24 bg-[#050505] border-y border-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 uppercase tracking-widest">Perfect For</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Professionals", desc: "Luxury residence in Lekki" },
              { label: "Investors", desc: "Seeking high rental income" },
              { label: "Diaspora", desc: "Nigerians living abroad" },
              { label: "Wealth Builders", desc: "Prime real estate owners" },
            ].map(item => (
              <div key={item.label} className="text-center">
                <p className="text-amber-500 font-bold text-xl mb-1">{item.label}</p>
                <p className="text-slate-500 text-sm italic">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA FORM */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-amber-500/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto bg-black rounded-[40px] border border-white/10 overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/2 p-12 md:p-16 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white italic">
                Schedule a Private Viewing or Request Full Details
              </h2>
              <div className="space-y-4 mb-8 text-slate-400">
                <p className="flex items-center gap-3"><Check className="w-4 h-4 text-amber-500" /> Get the Brochure and Floor Plan</p>
                <p className="flex items-center gap-3"><Check className="w-4 h-4 text-amber-500" /> See Payment Plan Options</p>
                <p className="flex items-center gap-3"><Check className="w-4 h-4 text-amber-500" /> Book a Site Inspection</p>
              </div>
              <p className="text-amber-500 font-bold flex items-center gap-2">
                <Activity className="w-4 h-4" /> Limited Units Available
              </p>
            </div>
            
            <div className="md:w-1/2 bg-[#111] p-12 md:p-16">
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); window.open(WHATSAPP_LINK, "_blank"); }}>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.2em] font-bold text-slate-500">Full Name</label>
                  <Input 
                    placeholder="Enter your name" 
                    className="bg-black border-white/10 focus:border-amber-500 h-14 rounded-xl"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.2em] font-bold text-slate-500">Phone Number</label>
                  <Input 
                    placeholder="+234 808 938 2534" 
                    className="bg-black border-white/10 focus:border-amber-500 h-14 rounded-xl"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-black font-black h-16 rounded-2xl text-lg shadow-[0_10px_40px_-10px_rgba(245,158,11,0.5)] transition-transform hover:-translate-y-1">
                  REQUEST FULL DETAILS NOW
                </Button>
                <p className="text-center text-slate-600 text-[10px] uppercase font-bold tracking-widest mt-4">
                  Privacy guaranteed • Immediate response
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 border-t border-white/5 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <span className="font-display text-2xl font-black text-white italic tracking-tighter">
              ADORNED PROPERTIES
            </span>
            <div className="flex gap-12 text-slate-500 text-sm font-bold uppercase tracking-widest">
              <a href="#" className="hover:text-amber-500 transition-colors">Instagram</a>
              <a href="#" className="hover:text-amber-500 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-amber-500 transition-colors">Twitter</a>
            </div>
            <p className="text-slate-600 text-xs font-medium">© {new Date().getFullYear()} Adorned Properties. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Sticky Floating CTA */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] group"
      >
        <div className="absolute inset-0 bg-amber-500 blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
        <div className="relative bg-amber-500 text-black p-5 rounded-full shadow-2xl transition-transform group-hover:scale-110">
          <MessageCircle className="w-6 h-6 fill-current" />
        </div>
      </a>
    </div>
  );
};

export default LekkiApartment;
