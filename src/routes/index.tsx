import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { z } from "zod";
import { toast } from "sonner";
import heroAthlete from "@/assets/hero-athlete.jpg";
import gymInterior from "@/assets/gym-interior.jpg";
import weightsImg from "@/assets/weights.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";
import gallery11 from "@/assets/gallery-11.jpg";
import gallery12 from "@/assets/gallery-12.jpg";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dumbbell,
  Activity,
  Award,
  UserCheck,
  Trophy,
  Flame,
  ShieldCheck,
  Phone,
  MapPin,
  ArrowRight,
  Check,
  Menu,
  X,
  Quote,
  Star,
  Clock,
  Wifi,
  Snowflake,
  Lock,
  Apple,
  Heart,
  Zap,
  Medal,
  Send,
  Mail,
  User as UserIcon,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "DLIMITLESS GYM — No Limit. Only Progress. | Delhi" },
      {
        name: "description",
        content:
          "Delhi's transformation-focused gym. Bodybuilding, powerlifting & personal training with certified coaches including Mr Asia Vipin Saini.",
      },
      { property: "og:title", content: "DLIMITLESS GYM — No Limit. Only Progress." },
      {
        property: "og:description",
        content: "Train with champions at Delhi's transformation-focused fitness destination.",
      },
    ],
  }),
});

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Trainers", href: "#trainers" },
  { label: "Facilities", href: "#facilities" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

function Nav() {
  const [open, setOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        <a href="#home" onClick={(e) => handleClick(e, "#home")} className="font-display text-lg sm:text-xl tracking-wider">
          <span className="text-primary text-glow">D</span>LIMITLESS GYM
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm tracking-widest uppercase">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={(e) => handleClick(e, l.href)} className="text-muted-foreground hover:text-primary transition-smooth">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          onClick={(e) => handleClick(e, "#contact")}
          className="hidden md:inline-flex items-center gap-2 bg-gradient-red text-primary-foreground px-5 py-2 text-sm tracking-widest uppercase font-display shadow-red-sm hover:shadow-red transition-smooth"
        >
          Join Now <ArrowRight className="w-4 h-4" />
        </a>
        <button
          className="md:hidden text-foreground p-2 -mr-2"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <nav className="container mx-auto px-4 py-4 flex flex-col">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleClick(e, l.href)}
                className="py-3 text-sm tracking-widest uppercase text-muted-foreground hover:text-primary border-b border-border last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleClick(e, "#contact")}
              className="mt-4 inline-flex items-center justify-center gap-2 bg-gradient-red text-primary-foreground px-5 py-3 text-sm tracking-widest uppercase font-display shadow-red-sm"
            >
              Join Now <ArrowRight className="w-4 h-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 sm:pt-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={gymInterior}
          alt=""
          width={1280}
          height={960}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute -left-32 top-1/3 w-[600px] h-[600px] bg-radial-red blur-3xl opacity-60" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center py-12 sm:py-20">
        <div>
          <div className="flex items-center gap-3 mb-5 sm:mb-6">
            <span className="h-px w-8 sm:w-12 bg-primary" />
            <p className="text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] text-primary uppercase">
              Delhi's Transformation-Focused Fitness
            </p>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase leading-[0.95] tracking-tight">
            No Limit. <br />
            <span className="text-primary text-glow-strong">Only Progress.</span>
          </h1>

          <p className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
            At <span className="text-foreground font-medium">DLIMITLESS GYM</span>, fitness is more than a workout — it's a
            lifestyle built on discipline, strength, and continuous growth. Whether your goal is muscle building, fat
            loss, bodybuilding, powerlifting, or overall transformation, our expert trainers help you push beyond
            limits and unlock your true potential.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 bg-gradient-red text-primary-foreground px-6 sm:px-8 py-4 font-display tracking-widest uppercase text-xs sm:text-sm shadow-red animate-pulse-glow"
            >
              Join the Movement
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-smooth" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 border border-primary/60 text-foreground px-6 sm:px-8 py-4 font-display tracking-widest uppercase text-xs sm:text-sm hover:bg-primary/10 transition-smooth"
            >
              Book a Free Visit
            </a>
          </div>

          <div className="mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {[
              "Established Since 2020",
              "Certified Trainers",
              "Modern Equipment",
              "Personal Training",
            ].map((b) => (
              <div key={b} className="flex items-center gap-2 text-[11px] sm:text-xs text-muted-foreground">
                <Check className="w-4 h-4 text-primary shrink-0" />
                <span className="uppercase tracking-wider">{b}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute -inset-8 bg-radial-red blur-3xl opacity-70" />
          <div className="relative">
            <img
              src={heroAthlete}
              alt="DLIMITLESS athlete in dramatic red lighting"
              width={1280}
              height={1600}
              className="w-full h-[680px] object-cover object-top grayscale-[0.1] contrast-125"
            />
            <div className="absolute inset-0 ring-1 ring-primary/40" />
            <div className="absolute -bottom-6 -left-6 bg-background border border-primary px-6 py-4 shadow-red-sm">
              <p className="font-display text-3xl text-primary text-glow">15+</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Years Coaching</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="h-px w-8 bg-primary" />
      <p className="text-xs tracking-[0.3em] text-primary uppercase">{children}</p>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative py-16 md:py-32 overflow-hidden">
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-radial-red blur-3xl opacity-40" />
      <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-16 items-center relative">
        <div className="grid grid-cols-2 gap-4">
          <img src={gymInterior} alt="Gym interior" width={1280} height={960} loading="lazy" className="w-full h-72 object-cover row-span-2" />
          <img src={weightsImg} alt="Weights" width={960} height={1280} loading="lazy" className="w-full h-44 object-cover" />
          <div className="bg-gradient-red p-6 flex flex-col justify-between h-44 shadow-red">
            <Flame className="w-8 h-8 text-primary-foreground" />
            <div>
              <p className="font-display text-4xl text-primary-foreground">2020</p>
              <p className="text-xs uppercase tracking-widest text-primary-foreground/80">Since</p>
            </div>
          </div>
        </div>

        <div>
          <SectionTag>About Dlimitless</SectionTag>
          <h2 className="font-display text-4xl md:text-5xl uppercase leading-tight mb-6">
            Built for People Who <span className="text-primary text-glow">Refuse</span> to Stay Average
          </h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            DLIMITLESS GYM was founded with a simple but powerful vision — creating a space where dedication meets
            professional guidance and real transformations happen every single day. Since opening on 20 September 2020,
            the gym has helped fitness enthusiasts, beginners, athletes, and bodybuilders train with purpose.
          </p>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            From advanced workout machines and functional training zones to certified trainers with competitive
            achievements, every part of DLIMITLESS GYM is designed to support your fitness journey at every level.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              "Professional Coaching",
              "Transformation-Focused Training",
              "Functional Fitness Support",
              "Modern Gym Infrastructure",
              "Personalized Guidance",
            ].map((p) => (
              <li key={p} className="flex items-center gap-3 text-sm">
                <span className="w-2 h-2 bg-primary shadow-red-sm" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const images = [
    { src: gallery1, alt: "Cardio area with treadmills and bikes" },
    { src: gallery2, alt: "Loaded barbell on deadlift platform" },
    { src: gallery3, alt: "Functional training area with kettlebells" },
    { src: gallery4, alt: "Treadmills with neon red lighting" },
    { src: gallery5, alt: "Chrome dumbbell rack" },
    { src: gallery6, alt: "Squat rack and power cage" },
    { src: gallery7, alt: "Cardio area with treadmills and bikes" },
    { src: gallery8, alt: "Loaded barbell on deadlift platform" },
    { src: gallery9, alt: "Functional training area with kettlebells" },
    { src: gallery10, alt: "Treadmills with neon red lighting" },
    { src: gallery11, alt: "Chrome dumbbell rack" },
    { src: gallery12, alt: "Squat rack and power cage" },
  ];

  return (
    <section className="py-16 md:py-32 bg-card/40">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
          <SectionTag>Gym Gallery</SectionTag>
          <h2 className="font-display text-4xl md:text-5xl uppercase">
            Step Inside <span className="text-primary text-glow">Dlimitless</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            A look at the floor, the iron, and the atmosphere that drives every transformation.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {images.map((img) => (
            <div
              key={img.src}
              className="group relative overflow-hidden border border-border hover:border-primary/60 transition-smooth aspect-[4/3]"
            >
              <img
                src={img.src}
                alt={img.alt}
                width={1024}
                height={768}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-smooth" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Trainers() {
  const trainers = [
    {
      name: "Vipin Saini",
      exp: "15+ Years Experience",
      desc: "An experienced bodybuilding coach with national and international achievements, specializing in physique development, muscle building, strength training, and competition preparation.",
      achievements: ["Mr Delhi", "Mr India", "Mr Asia"],
      expertise: "Bodybuilding • Men's Physique • Classic Bodybuilding",
    },
    {
      name: "Yuvi Hooda",
      exp: "10+ Years Experience",
      desc: "Dedicated fitness coach with expertise in bodybuilding and men's physique training, helping clients improve muscle definition, strength, and physical conditioning.",
      achievements: ["Mr Delhi"],
      expertise: "Bodybuilding • Men's Physique",
    },
    {
      name: "Sahil Verma",
      exp: "6+ Years Experience",
      desc: "Power-focused trainer specializing in strength development, lifting techniques, and performance training with experience in competitive powerlifting.",
      achievements: ["Delhi Powerlifting"],
      expertise: "Strength Training • Powerlifting • Conditioning",
    },
    {
      name: "Arun Chindalya",
      exp: "5+ Years Experience",
      desc: "Focused on transformation training, beginner guidance, and building sustainable fitness routines that help members stay motivated and consistent.",
      achievements: [],
      expertise: "Fitness Transformation • Strength Building • Conditioning",
    },
  ];

  return (
    <section id="trainers" className="py-16 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-16">
          <SectionTag>Our Trainers</SectionTag>
          <h2 className="font-display text-4xl md:text-5xl uppercase mb-6">
            Train With <span className="text-primary text-glow">Experienced</span> Fitness Professionals
          </h2>
          <p className="text-muted-foreground">
            Every trainer at DLIMITLESS GYM brings practical experience, competitive achievements, and deep fitness
            knowledge to help members train safely, effectively, and confidently.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((t, i) => (
            <article
              key={t.name}
              className="group bg-card border border-border p-8 relative overflow-hidden hover:border-primary transition-smooth hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-radial-red opacity-0 group-hover:opacity-100 transition-smooth" />
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display text-5xl text-primary/20 group-hover:text-primary/60 transition-smooth">
                    0{i + 1}
                  </span>
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-2xl uppercase mb-1">{t.name}</h3>
                <p className="text-xs uppercase tracking-widest text-primary mb-4">{t.exp}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{t.desc}</p>

                {t.achievements.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {t.achievements.map((a) => (
                      <span key={a} className="text-[10px] tracking-widest uppercase border border-primary/50 px-2 py-1 text-primary">
                        {a}
                      </span>
                    ))}
                  </div>
                )}
                <p className="text-xs text-muted-foreground border-t border-border pt-4">{t.expertise}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Facilities() {
  const facilities = [
    {
      icon: Dumbbell,
      title: "Modern Workout Machines",
      desc: "Train using advanced fitness equipment designed for muscle growth, strength improvement, endurance training, and overall body conditioning.",
    },
    {
      icon: Activity,
      title: "Functional Training Area",
      desc: "Dedicated functional workout space for agility drills, mobility training, athletic conditioning, endurance workouts, and performance-focused exercises.",
    },
    {
      icon: Award,
      title: "Certified Trainers",
      desc: "Get guidance from experienced and certified fitness professionals committed to helping you train safely and effectively.",
    },
    {
      icon: UserCheck,
      title: "Personal Training Support",
      desc: "Receive personalized attention, workout guidance, and motivation tailored to your fitness goals and training requirements.",
    },
  ];

  return (
    <section id="facilities" className="py-16 md:py-32 bg-card/40">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionTag>Facilities</SectionTag>
          <h2 className="font-display text-4xl md:text-5xl uppercase mb-6">
            Everything You Need For <span className="text-primary text-glow">Serious</span> Training
          </h2>
          <p className="text-muted-foreground">
            DLIMITLESS GYM combines modern fitness infrastructure with professional support to deliver a complete
            training experience for every fitness level.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((f) => (
            <div
              key={f.title}
              className="group bg-background border border-border p-8 hover:border-primary hover:shadow-red-sm transition-smooth"
            >
              <div className="w-14 h-14 bg-primary/10 border border-primary/40 flex items-center justify-center mb-6 group-hover:bg-gradient-red group-hover:shadow-red transition-smooth">
                <f.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-smooth" />
              </div>
              <h3 className="font-display text-xl uppercase mb-3">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  const features = [
    { title: "Champion-Level Guidance", desc: "Train under experienced professionals with competitive achievements and real industry experience." },
    { title: "Professional Environment", desc: "A disciplined and energetic atmosphere designed to keep you motivated and focused." },
    { title: "Transformation-Focused Training", desc: "Workout programs and guidance tailored for muscle gain, fat loss, strength, and physique improvement." },
    { title: "Modern Infrastructure", desc: "Premium machines and functional training space for complete fitness development." },
  ];

  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "04", label: "Expert Trainers" },
    { value: "2020", label: "Established Since" },
    { value: "∞", label: "Transformations" },
  ];

  return (
    <section className="py-16 md:py-32 relative overflow-hidden">
      <div className="absolute -left-40 top-0 w-[500px] h-[500px] bg-radial-red blur-3xl opacity-50" />
      <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-16 items-center relative">
        <div>
          <SectionTag>Why Dlimitless</SectionTag>
          <h2 className="font-display text-4xl md:text-5xl uppercase mb-6 leading-tight">
            More Than a Gym — <br />
            A Place Built For <span className="text-primary text-glow">Real Progress</span>
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            At DLIMITLESS GYM, we believe results come from the right environment, proper guidance, and consistent
            effort. That's why we focus on creating a motivating atmosphere where every member feels supported,
            challenged, and inspired to improve daily.
          </p>
          <div className="space-y-6">
            {features.map((f, i) => (
              <div key={f.title} className="flex gap-4 border-l-2 border-primary pl-4 sm:pl-5 min-w-0">
                <div className="min-w-0 flex-1">
                  <p className="font-display text-xs text-primary tracking-widest uppercase mb-1">0{i + 1}</p>
                  <h4 className="font-display text-base sm:text-lg uppercase mb-1 break-words">{f.title}</h4>
                  <p className="text-sm text-muted-foreground break-words">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`relative p-5 sm:p-8 md:p-10 border border-border bg-card hover:border-primary transition-smooth ${
                i % 3 === 0 ? "bg-gradient-red border-primary shadow-red" : ""
              }`}
            >
              <p className={`font-display text-4xl sm:text-5xl md:text-6xl mb-2 break-words ${i % 3 === 0 ? "text-primary-foreground" : "text-primary text-glow"}`}>
                {s.value}
              </p>
              <p className={`text-xs uppercase tracking-widest break-words ${i % 3 === 0 ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Motivation() {
  return (
    <section className="relative py-16 md:py-32 overflow-hidden border-y border-border">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-primary/10 to-background" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-radial-red blur-3xl" />
      <div className="container mx-auto px-4 sm:px-6 relative text-center max-w-4xl">
        <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-8" />
        <h2 className="font-display text-5xl md:text-7xl uppercase leading-[0.95]">
          The Body Achieves <br />
          What The Mind <span className="text-primary text-glow-strong">Believes</span>
        </h2>
        <p className="mt-8 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          Progress doesn't happen overnight. It's built through discipline, consistency, and the decision to keep
          pushing — even when it gets difficult. Every workout is a step closer to becoming stronger, healthier, and
          more confident than yesterday.
        </p>
      </div>
    </section>
  );
}

function MembershipCTA() {
  return (
    <section className="relative py-16 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={gymInterior}
          alt=""
          width={1280}
          height={960}
          loading="lazy"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative text-center">
        <h2 className="font-display text-4xl md:text-6xl uppercase mb-6">
          Your Fitness Journey <br />
          <span className="text-primary text-glow-strong">
            Starts Here
          </span>
        </h2>

        <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg">
          Whether your goal is transformation, strength, bodybuilding,
          or overall fitness, DLIMITLESS GYM provides the coaching,
          environment, and support needed to help you achieve lasting results.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#contact"
            className="bg-gradient-red text-primary-foreground px-10 py-4 font-display tracking-widest uppercase text-sm shadow-red animate-pulse-glow"
          >
            Join Now
          </a>

          <a
            href="#contact"
            className="border border-primary/60 text-foreground px-10 py-4 font-display tracking-widest uppercase text-sm hover:bg-primary/10 transition-smooth"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

function WhyWeStarted() {
  return (
    <section className="py-16 md:py-32 bg-card/40 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-radial-red blur-3xl opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <SectionTag>Why We Started</SectionTag>

          <h2 className="font-display text-4xl md:text-6xl uppercase mb-6 leading-tight">
            Built From Passion. <br />
            Driven By{" "}
            <span className="text-primary text-glow">
              Results.
            </span>
          </h2>

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            DLIMITLESS GYM was created to build more than physiques.
            We wanted to create a place where people could improve
            their confidence, mindset, discipline, and lifestyle
            through fitness. Every member who walks through our doors
            becomes part of a community focused on growth and progress.
          </p>
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  const achievements = ["Mr Delhi", "Mr India", "Mr Asia", "Delhi Powerlifting"];
  return (
    <section className="py-16 md:py-32 relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-radial-red blur-3xl opacity-50" />
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionTag>Hall Of Champions</SectionTag>
          <h2 className="font-display text-4xl md:text-5xl uppercase mb-4">
            Achievements That <span className="text-primary text-glow">Inspire</span>
          </h2>
          <p className="text-muted-foreground">
            Proudly led by trainers with achievements including:
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((a, i) => (
            <div
              key={a}
              className="group relative bg-card border border-border hover:border-primary p-5 sm:p-8 text-center transition-smooth hover:-translate-y-2 hover:shadow-red min-w-0"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-5 relative">
                <div className="absolute inset-0 bg-gradient-red rotate-45 shadow-red group-hover:animate-pulse-glow" />
                <Medal className="w-8 h-8 sm:w-10 sm:h-10 text-primary-foreground absolute inset-0 m-auto" />
              </div>
              <p className="font-display text-xs text-primary tracking-widest uppercase mb-2">
                Title 0{i + 1}
              </p>
              <h3 className="font-display text-lg sm:text-2xl uppercase break-words">{a}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Programs() {
  const programs = [
    "Bodybuilding Training",
    "Men's Physique Training",
    "Classic Bodybuilding Training",
    "Strength Training",
    "CrossFit Training",
    "StrongMan Training",
    "Powerlifting Training",
    "Zumba Classes",
    "Aerobics Classes",
  ];
  return (
    <section className="py-16 md:py-32 bg-card/40">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-16">
          <SectionTag>Training Programs</SectionTag>
          <h2 className="font-display text-4xl md:text-5xl uppercase mb-6">
            Programs Built To <span className="text-primary text-glow">Push Limits</span>
          </h2>
          <p className="text-muted-foreground">
            From competitive bodybuilding to high-energy group classes — choose the discipline that matches your
            ambition.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {programs.map((p, i) => (
            <div
              key={p}
              className="group flex items-center gap-3 sm:gap-4 bg-background border border-border hover:border-primary p-4 sm:p-6 transition-smooth min-w-0"
            >
              <span className="font-display text-xl sm:text-2xl text-primary/40 group-hover:text-primary transition-smooth w-8 sm:w-10 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-sm sm:text-lg uppercase tracking-wider flex-1 min-w-0 break-words">{p}</span>
              <ArrowRight className="w-4 h-4 text-primary shrink-0 opacity-0 group-hover:opacity-100 transition-smooth" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Amenities() {
  const items = [
    { icon: Snowflake, title: "Fully AC" },
    { icon: Wifi, title: "Free Wifi" },
    { icon: Lock, title: "Locker Facilities" },
    { icon: Dumbbell, title: "Imported Equipment" },
    { icon: Award, title: "Certified Personal Trainers" },
    { icon: Apple, title: "Diet & Supplementation Expert" },
  ];
  return (
    <section className="py-24 border-y border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <SectionTag>Facility Highlights</SectionTag>
          <h3 className="font-display text-3xl md:text-4xl uppercase">
            Premium <span className="text-primary text-glow">Amenities</span> Included
          </h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {items.map((it) => (
            <div
              key={it.title}
              className="flex flex-col items-center text-center gap-3 p-6 border border-border hover:border-primary hover:bg-card transition-smooth"
            >
              <it.icon className="w-7 h-7 text-primary" />
              <p className="text-xs uppercase tracking-widest font-display">{it.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      tag: "Weight Loss · 8 Months",
      text: "Joined DLIMITLESS GYM 8 months ago for weight loss and strength improvement. Lost 14 kg while gaining confidence and stamina. The trainers are highly supportive and the environment keeps me motivated every day.",
    },
    {
      name: "Aman Yadav",
      tag: "Bodybuilding",
      text: "One of the best gyms for serious training and bodybuilding. The workout machines, functional area, and guidance from trainers helped improve my physique and overall discipline within a few months.",
    },
    {
      name: "Karan Mehta",
      tag: "Beginner Transformation",
      text: "Started as a beginner with no gym experience. The trainers guided me properly from day one and helped me build muscle, improve posture, and stay consistent with workouts.",
    },
    {
      name: "Priya Verma",
      tag: "Fitness & Toning",
      text: "The atmosphere at DLIMITLESS GYM is energetic and motivating. I joined for fitness and toning, and within a few months I started feeling healthier, stronger, and more confident.",
    },
    {
      name: "Neha Singh",
      tag: "General Fitness",
      text: "The trainers are professional, friendly, and always ready to help. The gym is well-maintained, and the workout environment pushes you to stay focused on your goals.",
    },
  ];
  return (
    <section className="py-16 md:py-32 relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-radial-red blur-3xl opacity-40" />
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="max-w-3xl mb-16">
          <SectionTag>Testimonials</SectionTag>
          <h2 className="font-display text-4xl md:text-5xl uppercase mb-6">
            Real Members. <span className="text-primary text-glow">Real Results.</span>
          </h2>
          <p className="text-muted-foreground">
            Hear from the people transforming their bodies and mindset at DLIMITLESS GYM.
          </p>
        </div>
        <TestimonialsCarousel reviews={reviews} />
      </div>
    </section>
  );
}

function TestimonialsCarousel({ reviews }: { reviews: { name: string; tag: string; text: string }[] }) {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [selected, setSelected] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setSelected(api.selectedScrollSnap());
    const onSelect = () => setSelected(api.selectedScrollSnap());
    api.on("select", onSelect);
    const interval = setInterval(() => api.scrollNext(), 5000);
    return () => {
      api.off("select", onSelect);
      clearInterval(interval);
    };
  }, [api]);

  return (
    <div className="relative">
      <Carousel setApi={setApi} opts={{ loop: true, align: "start" }} className="w-full">
        <CarouselContent>
          {reviews.map((r) => (
            <CarouselItem key={r.name} className="md:basis-1/2 lg:basis-1/3">
              <article className="h-full p-6 sm:p-8 bg-card border border-border hover:border-primary transition-smooth">
                <Quote className="w-8 h-8 text-primary mb-4 opacity-70" />
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">{r.text}</p>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <div className="border-t border-border pt-4 flex items-center justify-between">
                  <div>
                    <p className="font-display text-lg uppercase">{r.name}</p>
                    <p className="text-[10px] sm:text-xs uppercase tracking-widest text-primary">{r.tag}</p>
                  </div>
                  <div className="w-10 h-10 bg-gradient-red flex items-center justify-center font-display text-primary-foreground">
                    {r.name.charAt(0)}
                  </div>
                </div>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex -left-4 lg:-left-12 bg-background border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground" />
        <CarouselNext className="hidden sm:flex -right-4 lg:-right-12 bg-background border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground" />
      </Carousel>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            onClick={() => api?.scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-smooth ${
              i === selected ? "w-8 bg-primary shadow-red-sm" : "w-3 bg-border"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function Pricing() {
  const singles = [
    { duration: "1 Month", price: "1,500" },
    { duration: "3 Months", price: "4,000" },
    { duration: "6 Months", price: "7,500", popular: true },
    { duration: "12 Months", price: "12,000" },
  ];
  const couples = [
    { duration: "1 Month", price: "2,500" },
    { duration: "3 Months", price: "7,000" },
    { duration: "6 Months", price: "13,500", popular: true },
    { duration: "12 Months", price: "22,000" },
  ];

  const Plan = ({ duration, price, popular }: { duration: string; price: string; popular?: boolean }) => (
    <div
      className={`relative p-6 border transition-smooth ${
        popular
          ? "bg-gradient-red border-primary shadow-red text-primary-foreground"
          : "bg-background border-border hover:border-primary"
      }`}
    >
      {popular && (
        <span className="absolute -top-3 left-6 bg-background text-primary border border-primary text-[10px] tracking-widest uppercase px-2 py-1 font-display">
          Best Value
        </span>
      )}
      <p className={`text-xs uppercase tracking-widest mb-3 ${popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
        {duration}
      </p>
      <p className="font-display text-4xl">
        ₹{price}
      </p>
    </div>
  );

  return (
    <section id="pricing" className="py-16 md:py-32 bg-card/40">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionTag>Membership Fees</SectionTag>
          <h2 className="font-display text-4xl md:text-5xl uppercase mb-4">
            Simple Plans. <span className="text-primary text-glow">Serious Value.</span>
          </h2>
          <p className="text-muted-foreground">
            Choose the plan that fits your training goals — flexible options for individuals and couples.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="border border-border bg-background/50 p-8">
            <div className="flex items-center gap-3 mb-8">
              <Zap className="w-6 h-6 text-primary" />
              <h3 className="font-display text-2xl uppercase">For Singles</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {singles.map((p) => (
                <Plan key={p.duration} {...p} />
              ))}
            </div>
          </div>
          <div className="border border-border bg-background/50 p-8">
            <div className="flex items-center gap-3 mb-8">
              <Heart className="w-6 h-6 text-primary" />
              <h3 className="font-display text-2xl uppercase">For Couples</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {couples.map((p) => (
                <Plan key={p.duration} {...p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(80),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20).regex(/^[0-9+\-\s()]+$/, "Invalid phone"),
  email: z.string().trim().email("Invalid email").max(150).optional().or(z.literal("")),
  message: z.string().trim().min(5, "Tell us a bit more").max(1000),
});

function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    const text = `Hi DLIMITLESS GYM, I'm ${result.data.name} (${result.data.phone}). ${result.data.message}`;
    const wa = `https://wa.me/919910053007?text=${encodeURIComponent(text)}`;
    window.open(wa, "_blank", "noopener,noreferrer");
    toast.success("Opening WhatsApp to send your message");
    setForm({ name: "", phone: "", email: "", message: "" });
    setSubmitting(false);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="relative">
          <UserIcon className="w-4 h-4 text-primary absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <Input
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="pl-10 h-12 bg-background/60 border-border focus-visible:ring-primary"
            required
            maxLength={80}
          />
        </div>
        <div className="relative">
          <Phone className="w-4 h-4 text-primary absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <Input
            type="tel"
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="pl-10 h-12 bg-background/60 border-border focus-visible:ring-primary"
            required
            maxLength={20}
          />
        </div>
      </div>
      <div className="relative">
        <Mail className="w-4 h-4 text-primary absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        <Input
          type="email"
          placeholder="Email (optional)"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="pl-10 h-12 bg-background/60 border-border focus-visible:ring-primary"
          maxLength={150}
        />
      </div>
      <Textarea
        placeholder="Your goal — weight loss, bodybuilding, strength, transformation…"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="min-h-32 bg-background/60 border-border focus-visible:ring-primary resize-none"
        required
        maxLength={1000}
      />
      <button
        type="submit"
        disabled={submitting}
        className="w-full inline-flex items-center justify-center gap-3 bg-gradient-red text-primary-foreground px-8 py-4 font-display tracking-widest uppercase text-sm shadow-red hover:shadow-red-lg transition-smooth disabled:opacity-60"
      >
        Send Message <Send className="w-4 h-4" />
      </button>
    </form>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-16 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-12 md:mb-16">
          <SectionTag>Contact Us</SectionTag>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl uppercase mb-4 sm:mb-6">
            Ready To Take The <span className="text-primary text-glow">First Step?</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Get in touch with DLIMITLESS GYM today and start training in an environment built for motivation, strength,
            and transformation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Left: Info + Timings */}
          <div className="space-y-5">
            <div className="flex items-start gap-4 sm:gap-5 p-5 sm:p-6 border border-border hover:border-primary transition-smooth">
              <div className="w-11 h-11 sm:w-12 sm:h-12 bg-gradient-red flex items-center justify-center shadow-red-sm shrink-0">
                <Phone className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground mb-1">Phone</p>
                <a href="tel:+919910053007" className="block font-display text-lg sm:text-xl hover:text-primary transition-smooth">
                  +91 99100 53007
                </a>
                <a href="tel:+919999495914" className="block font-display text-lg sm:text-xl hover:text-primary transition-smooth">
                  +91 99994 95914
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 sm:gap-5 p-5 sm:p-6 border border-border hover:border-primary transition-smooth">
              <div className="w-11 h-11 sm:w-12 sm:h-12 bg-gradient-red flex items-center justify-center shadow-red-sm shrink-0">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground mb-1">Location</p>
                <p className="font-display text-lg sm:text-xl">2nd Floor, KH.NO-35/19, Near Pillar No 415, Nangloi EXTENSION 1-B, New DELHI 110041</p>
                <p className="text-xs sm:text-sm text-primary">No Limit, Only Progress</p>
              </div>
            </div>

            <div className="border border-primary/40 bg-card/40 p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-radial-red blur-3xl opacity-50" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-6 h-6 text-primary" />
                  <h3 className="font-display text-2xl sm:text-3xl uppercase">Gym Timings</h3>
                </div>

                <div className="space-y-5">
                  <div className="border-l-2 border-primary pl-5">
                    <p className="text-[10px] sm:text-xs uppercase tracking-widest text-primary mb-3">Monday — Saturday</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground mb-1">Morning</p>
                        <p className="font-display text-lg sm:text-xl">5 — 11 AM</p>
                      </div>
                      <div>
                        <p className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground mb-1">Evening</p>
                        <p className="font-display text-lg sm:text-xl">4 — 10 PM</p>
                      </div>
                    </div>
                  </div>
                  <div className="border-l-2 border-primary pl-5">
                    <p className="text-[10px] sm:text-xs uppercase tracking-widest text-primary mb-2">Sunday</p>
                    <p className="font-display text-lg sm:text-xl">7 — 11 AM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="border border-primary/40 bg-card/40 p-6 sm:p-8 md:p-10 relative overflow-hidden">
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-radial-red blur-3xl opacity-40" />
            <div className="relative">
              <h3 className="font-display text-2xl sm:text-3xl uppercase mb-2">
                Send Us A <span className="text-primary text-glow">Message</span>
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8">
                Drop your details and we'll get in touch over WhatsApp.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="border border-border hover:border-primary/60 transition-smooth overflow-hidden">
          <div className="flex items-center justify-between p-4 sm:p-5 border-b border-border bg-card/40">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary" />
              <p className="font-display text-sm sm:text-base uppercase tracking-widest">Find Us On The Map</p>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=DLIMITLESS+GYM+Delhi"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary hover:underline"
            >
              Open in Maps <ArrowRight className="w-3 h-3" />
            </a>
          </div>
          <div className="relative aspect-video sm:aspect-[21/9] bg-background">
            <iframe
              title="DLIMITLESS GYM Location"
              src="https://www.google.com/maps?q=DLIMITLESS+GYM+Delhi&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(0.6) invert(0.92) hue-rotate(180deg)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card/40 py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <p className="font-display text-2xl mb-4">
              <span className="text-primary text-glow">D</span>LIMITLESS
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              DLIMITLESS GYM is dedicated to helping individuals build strength, confidence, discipline, and long-term
              fitness through professional coaching and high-quality training facilities.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-primary mb-4">Navigate</p>
            <ul className="space-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-muted-foreground hover:text-primary transition-smooth">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-primary mb-4">Contact</p>
            <p className="text-sm text-muted-foreground">+91 99100 53007</p>
            <p className="text-sm text-muted-foreground">+91 99994 95914</p>
            <p className="text-sm text-muted-foreground mt-2">2nd Floor, KH.NO-35/19, Near Pillar No 415, Nangloi EXTENSION 1-B, New DELHI 110041</p>
          </div>
        </div>
        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground uppercase tracking-widest">
          <p>© 2026 DLIMITLESS GYM. All Rights Reserved.</p>
          <p className="text-primary">No Limit · Only Progress</p>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <WhyWeStarted />
        <Gallery />
        <Achievements />
        <Trainers />
        <Programs />
        <Facilities />
        <Amenities />
        <WhyChoose />
        <Testimonials />
        <Motivation />
        <Pricing />
        <MembershipCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
