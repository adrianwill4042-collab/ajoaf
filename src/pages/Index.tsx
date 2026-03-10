import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Shield, Clock, ChevronDown, Check, AlertTriangle, TrendingUp, Home, Users, Landmark, Building2, MessageCircle, Play, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroImg from "@/assets/hero-estate.jpg";
import aerialImg from "@/assets/estate-aerial.jpg";
import gateImg from "@/assets/estate-gate.jpg";

// Countdown Timer
const useCountdown = () => {
  const [time, setTime] = useState({ days: 5, hours: 23, mins: 59, secs: 59 });
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { days, hours, mins, secs } = prev;
        secs--;
        if (secs < 0) { secs = 59; mins--; }
        if (mins < 0) { mins = 59; hours--; }
        if (hours < 0) { hours = 23; days--; }
        if (days < 0) return { days: 0, hours: 0, mins: 0, secs: 0 };
        return { days, hours, mins, secs };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return time;
};

const CountdownBox = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="bg-primary text-primary-foreground font-display text-3xl md:text-4xl w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-md">
      {String(value).padStart(2, "0")}
    </div>
    <span className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{label}</span>
  </div>
);

const WHATSAPP_LINK = "https://wa.me/2348000000000?text=Hello%20Adorned%20Properties,%20I'm%20interested%20in%20your%20estate.";

const Index = () => {
  const countdown = useCountdown();
  const [formData, setFormData] = useState({ name: "", phone: "", date: "" });

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.15 } },
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* TOP BAR */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <span className="font-display text-xl text-primary tracking-wider">ADORNED PROPERTIES</span>
          <div className="hidden md:flex items-center gap-6">
            <a href="#plots" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">Plots</a>
            <a href="#video" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">Tour</a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </div>
          <Button size="sm" className="bg-primary text-primary-foreground font-bold text-xs" asChild>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Phone className="w-3 h-3 mr-1" /> CALL NOW
            </a>
          </Button>
        </div>
      </nav>

      {/* Sticky WhatsApp */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[hsl(142,70%,45%)] text-primary-foreground p-4 rounded-full shadow-2xl hover:scale-110 transition-transform animate-bounce"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-14">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Adorned Properties Estate" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-block bg-accent/20 border border-accent/40 px-4 py-2 rounded-sm mb-6">
              <span className="text-accent font-body text-sm font-semibold tracking-wide uppercase">
                Premium Plots — Verified & Secure
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-4">
              Own Your Plot at<br />
              <span className="text-gradient">Adorned Estate</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-foreground/70 text-lg md:text-xl max-w-lg mb-6 font-body">
              Start with just <span className="text-primary font-bold">₦200,000</span> today.
              Flexible 3–24 months payment plan. Instant allocation. No Omo-Onile issues.
            </motion.p>

            <motion.div variants={fadeUp} className="mb-6">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Flash Sale Ends In:</p>
              <div className="flex gap-3">
                <CountdownBox value={countdown.days} label="Days" />
                <CountdownBox value={countdown.hours} label="Hrs" />
                <CountdownBox value={countdown.mins} label="Min" />
                <CountdownBox value={countdown.secs} label="Sec" />
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <Button size="lg" className="bg-primary text-primary-foreground font-bold animate-pulse-glow" onClick={() => document.getElementById("plots")?.scrollIntoView({ behavior: "smooth" })}>
                VIEW PLOT SIZES
              </Button>
              <Button size="lg" variant="outline" className="border-foreground/20" asChild>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">CHAT ON WHATSAPP</a>
              </Button>
            </motion.div>

            <motion.p variants={fadeUp} className="mt-4 text-sm text-accent flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" /> Limited plots available at current price.
            </motion.p>
          </motion.div>

          {/* Lead Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-card/80 backdrop-blur-xl border border-border rounded-lg p-8"
          >
            <h3 className="font-display text-2xl mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" /> Book Free Site Inspection
            </h3>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); window.open(WHATSAPP_LINK, "_blank"); }}>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Full Name" className="pl-10 bg-secondary border-border" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
              </div>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Phone Number" className="pl-10 bg-secondary border-border" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
              </div>
              <div className="relative">
                <Input type="date" className="bg-secondary border-border" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold text-lg h-12">
                SECURE MY SPOT
              </Button>
              <p className="text-xs text-center text-muted-foreground italic">No obligation. Just a free tour of your future investment.</p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* WHO IS THIS FOR */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.p variants={fadeUp} className="text-primary uppercase tracking-widest text-sm mb-2">This Is For Everyone.</motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl">Smart Investors Recognize <span className="text-gradient">Early Entry</span></motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { icon: Home, label: "First-Time Owners" },
              { icon: TrendingUp, label: "Smart Investors" },
              { icon: Building2, label: "Lagos Professionals" },
              { icon: Landmark, label: "Pension Planners" },
              { icon: Users, label: "Diaspora Buyers" },
            ].map(({ icon: Icon, label }) => (
              <motion.div key={label} variants={fadeUp} className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-body text-sm font-semibold">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.p variants={fadeUp} className="text-accent uppercase tracking-widest text-sm mb-2">Why Smart Buyers Are Moving</motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl">Why You Can't Afford<br />To <span className="text-gradient">Wait</span></motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: TrendingUp, title: "Price Surge", desc: "Land prices double yearly, pushing ownership out of reach." },
              { icon: AlertTriangle, title: "Rent Trap", desc: "Rent keeps increasing while your income stays the same." },
              { icon: Shield, title: "Land Scams", desc: "Unverified documentation destroys hard-earned investments." },
              { icon: Users, title: "Omo-Onile Drama", desc: "Documentation problems and hidden issues cause endless stress." },
            ].map(({ icon: Icon, title, desc }) => (
              <motion.div key={title} variants={fadeUp}>
                <Card className="bg-card border-border hover:border-accent/40 transition-colors h-full">
                  <CardContent className="p-6">
                    <Icon className="w-10 h-10 text-accent mb-4" />
                    <h3 className="font-display text-xl mb-2">{title}</h3>
                    <p className="text-muted-foreground text-sm font-body">{desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* GALLERY / ABOUT */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.p variants={fadeUp} className="text-primary uppercase tracking-widest text-sm mb-2">Welcome to Adorned Estate</motion.p>
              <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl mb-6">
                Strategically Located for <span className="text-gradient">Maximum Value</span>
              </motion.h2>
              <motion.div variants={fadeUp} className="grid grid-cols-2 gap-3 mb-6">
                {["Secure environment", "Motorable roads", "Electricity connection", "Street lights", "Verified documentation", "Instant allocation"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm font-body">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
              <img src={gateImg} alt="Estate entrance" className="rounded-lg col-span-2 w-full h-48 object-cover" />
              <img src={aerialImg} alt="Aerial view" className="rounded-lg w-full h-40 object-cover" />
              <img src={heroImg} alt="Estate overview" className="rounded-lg w-full h-40 object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section id="video" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full mb-4">
              <Play className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">Watch The Tour</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-6xl mb-4">
              See It Before You <span className="text-gradient">Buy It</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground font-body text-lg max-w-xl mx-auto">
              Take a virtual walkthrough of the estate and see why hundreds of smart investors are securing their plots.
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden border-2 border-primary/20 shadow-[0_0_60px_-15px_hsl(var(--primary)/0.3)]">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/wOVz21crnRU"
                  title="Adorned Properties Estate Tour"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {[
                { icon: Shield, text: "Verified & Secure" },
                { icon: MapPin, text: "Prime Location" },
                { icon: Star, text: "5-Star Rated" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-muted-foreground">
                  <Icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-body font-medium">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PLOT SIZES */}
      <section id="plots" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.p variants={fadeUp} className="text-primary uppercase tracking-widest text-sm mb-2">Plot Categories</motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl">Choose Your <span className="text-gradient">Plot Size</span></motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-8">
            {[
              { size: "300 SQM", desc: "Perfect for compact residential homes", deposit: "₦200,000", plan: "Up to 24 months" },
              { size: "500 SQM", desc: "Ideal for standard family homes", deposit: "₦200,000", plan: "Spread balance conveniently" },
              { size: "600 SQM", desc: "For spacious duplex or premium build", deposit: "₦200,000", plan: "Flexible options available" },
            ].map((plot) => (
              <motion.div key={plot.size} variants={fadeUp}>
                <Card className="bg-card border-border hover:border-primary/60 transition-all group overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img src={aerialImg} alt={plot.size} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-sm font-display text-lg">
                      {plot.size}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-display text-2xl mb-2">{plot.size} Plot</h3>
                    <p className="text-muted-foreground text-sm mb-4 font-body">{plot.desc}</p>
                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between text-sm font-body">
                        <span className="text-muted-foreground">Initial Deposit</span>
                        <span className="text-primary font-bold">{plot.deposit}</span>
                      </div>
                      <div className="flex justify-between text-sm font-body">
                        <span className="text-muted-foreground">Payment Plan</span>
                        <span>{plot.plan}</span>
                      </div>
                    </div>
                    <Button className="w-full bg-primary text-primary-foreground" asChild>
                      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">CHECK AVAILABILITY</a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PAYMENT PLAN */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-accent uppercase tracking-widest text-sm mb-2">No Millions Sitting In Account? No Problem.</motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl mb-8">Your Dream Home<br /><span className="text-gradient">Doesn't Have To Wait</span></motion.h2>
            <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-10">
              {["Zero Interest on selected plans", "Spread balance for up to 2 years", "No hidden maintenance fees", "Instant documentation"].map((item) => (
                <div key={item} className="bg-card border border-border rounded-lg p-4 text-center">
                  <Check className="w-5 h-5 text-primary mx-auto mb-2" />
                  <p className="text-xs font-body">{item}</p>
                </div>
              ))}
            </motion.div>
            <motion.div variants={fadeUp} className="bg-card border border-primary/30 rounded-xl p-8 max-w-md mx-auto">
              <p className="text-muted-foreground text-sm mb-2 font-body">Entry Point</p>
              <p className="font-display text-6xl text-primary mb-2">₦200K</p>
              <p className="text-muted-foreground text-sm mb-6 font-body">Spread your balance over 3–24 months.</p>
              <Button size="lg" className="bg-primary text-primary-foreground font-bold w-full animate-pulse-glow" asChild>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">RESERVE MY PLOT</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl">Join 100+ <span className="text-gradient">Happy Landowners</span></motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground font-body">Real buyers. Real allocation. Real documents.</motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { quote: "After my first visit, I was convinced. Documentation was clear and allocation was smooth.", name: "Mr. Chinedu O.", role: "Business Owner" },
              { quote: "I secured mine on flexible payment. The process was stress-free.", name: "Mrs. Onajafe", role: "Diaspora Buyer" },
              { quote: "Best decision I made this year. The estate is well-planned and the team is professional.", name: "Engr. Adebayo", role: "Civil Engineer" },
              { quote: "From Lagos to owning land — Adorned Properties made it seamless even from abroad.", name: "Dr. Amina K.", role: "Medical Professional" },
            ].map((t) => (
              <motion.div key={t.name} variants={fadeUp}>
                <Card className="bg-card border-border hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                      ))}
                    </div>
                    <p className="text-foreground/80 italic mb-4 font-body">"{t.quote}"</p>
                    <p className="font-display text-lg text-primary">{t.name}</p>
                    <p className="text-xs text-muted-foreground font-body">{t.role}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* URGENCY */}
      <section className="py-20 bg-accent/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl mb-8">Only Limited Plots <span className="text-gradient">Remaining!</span></motion.h2>
            <motion.div variants={fadeUp} className="flex justify-center gap-8 mb-10">
              {[
                { label: "Prices", sub: "Increase" },
                { label: "Demand", sub: "Rises" },
                { label: "Availability", sub: "Reduces" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <p className="font-display text-3xl text-accent">{item.label}</p>
                  <p className="text-muted-foreground text-sm font-body">{item.sub}</p>
                </div>
              ))}
            </motion.div>
            <motion.div variants={fadeUp}>
              <Button size="lg" className="bg-primary text-primary-foreground font-bold animate-pulse-glow" onClick={() => document.getElementById("plots")?.scrollIntoView({ behavior: "smooth" })}>
                BOOK INSPECTION NOW
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl">Frequently Asked <span className="text-gradient">Questions</span></motion.h2>
          </motion.div>
          <Accordion type="single" collapsible className="space-y-3">
            {[
              { q: "Where is the estate located?", a: "Our estate is strategically located in a fast-growing corridor with proximity to major landmarks and institutions." },
              { q: "Who is the developer?", a: "Adorned Properties is a trusted real estate development company with a track record of delivered projects." },
              { q: "Are there encumbrances?", a: "No. All our plots come with clean, verified documentation free from any encumbrances." },
              { q: "What title does the land have?", a: "The land has proper government-approved documentation including registered survey and deed of assignment." },
              { q: "Are there extra charges?", a: "No hidden fees. The price you see is what you pay. All charges are disclosed upfront." },
              { q: "How long can I spread payment?", a: "You can spread your payment over 3 to 24 months with zero interest on selected plans." },
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="font-body font-semibold text-left">{item.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4 font-body">Still have questions?</p>
            <Button variant="outline" className="border-primary text-primary" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">CHAT WITH OUR SUPPORT TEAM</a>
            </Button>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-gradient-to-br from-primary/20 via-background to-accent/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-6xl mb-4">
              Don't Wait Until Prices<br /><span className="text-gradient">Increase Again.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground text-lg mb-8 font-body max-w-xl mx-auto">
              The best time to buy land was 3 years ago. The second best time is today.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground font-bold animate-pulse-glow" asChild>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">SECURE MY PLOT NOW</a>
              </Button>
              <Button size="lg" variant="outline" className="border-foreground/20" asChild>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">BOOK FREE INSPECTION</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="font-display text-2xl text-primary mb-2">Adorned Properties</p>
          <p className="text-muted-foreground text-sm font-body">© {new Date().getFullYear()} Adorned Properties. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
