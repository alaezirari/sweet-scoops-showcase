import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Star, Instagram, Facebook } from "lucide-react";
import heroImage from "@/assets/hero-gelato.jpg";
import pistachioImg from "@/assets/flavor-pistachio.jpg";
import matchaImg from "@/assets/flavor-matcha.jpg";
import strawberryImg from "@/assets/flavor-strawberry.jpg";
import chocolateImg from "@/assets/flavor-chocolate.jpg";
import crepesImg from "@/assets/crepes.jpg";
import interiorImg from "@/assets/interior.jpg";

const flavors = [
  {
    name: "Pistacchio di Bronte",
    description: "Sicilian pistachios, slow-roasted and stone-ground for an unforgettable depth.",
    image: pistachioImg,
    badge: "House signature",
  },
  {
    name: "Matcha Ceremonial",
    description: "Stone-milled Uji matcha whisked into our cold cream base for a vivid, earthy finish.",
    image: matchaImg,
    badge: "Bestseller",
  },
  {
    name: "Fragola del Giardino",
    description: "Sun-ripened strawberries folded into a silky vanilla bean cream.",
    image: strawberryImg,
    badge: "Seasonal",
  },
  {
    name: "Cioccolato Fondente",
    description: "70% single-origin dark chocolate, intense, glossy, and impossibly smooth.",
    image: chocolateImg,
    badge: "Classic",
  },
];

const reviews = [
  {
    name: "Maroua Lahbib",
    role: "Local Guide · 17 reviews",
    text: "What a beautiful, very well thought project! The interior design is so pretty, the staff is friendly and the ice cream is sooo tasty — especially the pistachio one. I loved everything about this place!",
  },
  {
    name: "imaginesyndrom",
    role: "Local Guide · 205 reviews",
    text: "Definitely a place to go over and over again. The workers are energetic and young, everything looks delicious, and the matcha has a very nice strong taste.",
  },
  {
    name: "Me — The visitor",
    role: "Local Guide · 111 reviews",
    text: "Over the past few years, I've seen many ice cream shops open in Tetouan, but this one truly has it all. You're paying for pure quality and style.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
        <div className="container mx-auto flex items-center justify-between py-4">
          <a href="#" className="font-serif text-2xl font-semibold tracking-tight">
            L<span className="text-primary">'</span>artigelato
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#flavors" className="hover:text-foreground transition-colors">Flavors</a>
            <a href="#story" className="hover:text-foreground transition-colors">Story</a>
            <a href="#menu" className="hover:text-foreground transition-colors">Menu</a>
            <a href="#visit" className="hover:text-foreground transition-colors">Visit</a>
          </nav>
          <Button variant="hero" size="sm" asChild>
            <a href="tel:+212668792095">Call us</a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden">
        <img
          src={heroImage}
          alt="Artisan gelato display at L'artigelato in Tetouan"
          width={1600}
          height={1024}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />

        <div className="relative container mx-auto pb-20 md:pb-28 pt-32 text-background">
          <div className="max-w-3xl animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background/15 backdrop-blur border border-background/20 text-xs font-medium tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-glow" />
              Artigianale · Tetouan
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[0.95] text-balance mb-6">
              Gelato made the <em className="text-primary-glow not-italic font-normal">slow</em>, beautiful way.
            </h1>
            <p className="text-lg md:text-xl text-background/85 max-w-xl text-balance mb-10 leading-relaxed">
              Small batches. Real ingredients. A neighborhood gelateria on Avenue des FAR, where every scoop is a tiny act of craft.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" asChild>
                <a href="#flavors">Discover our flavors</a>
              </Button>
              <Button variant="cream" size="xl" asChild>
                <a href="#visit">Visit the shop</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / rating bar */}
      <section className="border-y border-border bg-card">
        <div className="container mx-auto py-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "4.7", label: "Google rating", icon: <Star className="w-4 h-4 fill-current" /> },
            { value: "138+", label: "Happy reviews" },
            { value: "12", label: "Rotating flavors" },
            { value: "100%", label: "Made in-house" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-1.5 font-serif text-3xl md:text-4xl text-primary">
                {s.icon}
                {s.value}
              </div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Flavors */}
      <section id="flavors" className="py-24 md:py-32 bg-gradient-cream">
        <div className="container mx-auto">
          <div className="max-w-2xl mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4 font-medium">Our flavors</p>
            <h2 className="font-serif text-4xl md:text-6xl font-light leading-tight text-balance">
              A small menu, obsessively crafted.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {flavors.map((f, i) => (
              <article
                key={f.name}
                className="group bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-warm transition-base hover:-translate-y-2"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={f.image}
                    alt={f.name}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-base"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block text-[10px] uppercase tracking-widest text-primary font-semibold mb-3">
                    {f.badge}
                  </span>
                  <h3 className="font-serif text-2xl mb-2">{f.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section id="story" className="py-24 md:py-32">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <img
              src={interiorImg}
              alt="Inside L'artigelato Tetouan"
              width={1400}
              height={900}
              loading="lazy"
              className="rounded-3xl shadow-warm w-full h-auto object-cover"
            />
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-card rounded-2xl p-5 shadow-soft border border-border max-w-[220px]">
              <div className="flex gap-0.5 mb-2 text-primary">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-xs text-muted-foreground italic">"The interior is so pretty, the staff is friendly and the ice cream is sooo tasty."</p>
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4 font-medium">Our story</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8 text-balance">
              A little corner of Italy, in the heart of Tetouan.
            </h2>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                L'artigelato was born from a simple obsession — to make gelato the way it was meant to be made: with patience, with the best ingredients we can find, and with no shortcuts.
              </p>
              <p>
                Our pistachios travel from Bronte, our chocolate from single-origin estates, our fruit from local Moroccan growers when the season is right. Everything is churned in small batches, every single morning.
              </p>
              <p>
                Step inside, take a seat, and let us serve you something a little extraordinary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu / Crêpes */}
      <section id="menu" className="py-24 md:py-32 bg-foreground text-background relative overflow-hidden">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-primary-glow mb-4 font-medium">Beyond gelato</p>
            <h2 className="font-serif text-4xl md:text-6xl font-light leading-tight mb-6 text-balance">
              Classic crêpes, freshly made.
            </h2>
            <p className="text-lg text-background/75 mb-10 max-w-md leading-relaxed">
              Thin, golden, and folded around your favorite indulgence — Nutella, fresh fruit, salted caramel, or topped with a generous scoop of our gelato.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                ["Crêpe Nutella", "35 MAD"],
                ["Crêpe Fraise & Crème", "45 MAD"],
                ["Crêpe Gelato", "60 MAD"],
                ["Coupe Pistacchio", "55 MAD"],
                ["Affogato al Caffè", "40 MAD"],
              ].map(([name, price]) => (
                <li key={name} className="flex items-baseline justify-between gap-4 border-b border-background/15 pb-3">
                  <span className="font-serif text-xl">{name}</span>
                  <span className="text-primary-glow font-medium">{price}</span>
                </li>
              ))}
            </ul>
            <Button variant="hero" size="lg">See full menu</Button>
          </div>
          <div className="relative">
            <img
              src={crepesImg}
              alt="Freshly made crêpe with chocolate and berries"
              width={1200}
              height={800}
              loading="lazy"
              className="rounded-3xl shadow-warm w-full h-auto object-cover animate-float-slow"
            />
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 md:py-32 bg-gradient-cream">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4 font-medium">Loved in Tetouan</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-balance">
              4.7 stars from 138 happy guests.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <blockquote key={r.name} className="bg-card rounded-3xl p-8 shadow-card border border-border/60 flex flex-col">
                <div className="flex gap-0.5 mb-5 text-primary">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-foreground/90 leading-relaxed flex-1 mb-6">"{r.text}"</p>
                <footer>
                  <div className="font-serif text-lg">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Visit */}
      <section id="visit" className="py-24 md:py-32">
        <div className="container mx-auto">
          <div className="rounded-[2rem] bg-gradient-pistachio text-primary-foreground p-10 md:p-16 lg:p-20 shadow-warm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-glow/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] opacity-80 mb-4 font-medium">Come say hi</p>
                <h2 className="font-serif text-4xl md:text-6xl font-light leading-tight mb-6 text-balance">
                  Visit us in Tetouan.
                </h2>
                <p className="text-lg opacity-90 max-w-md leading-relaxed mb-10">
                  We're open every day until midnight. Walk in, take your time, ask for a taste — that's how it should be.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="cream" size="lg" asChild>
                    <a href="https://maps.google.com/?q=L'artigelato+Tetouan" target="_blank" rel="noreferrer">
                      <MapPin className="w-4 h-4" /> Get directions
                    </a>
                  </Button>
                  <Button variant="warm" size="lg" asChild>
                    <a href="tel:+212668792095"><Phone className="w-4 h-4" /> 06 68 79 20 95</a>
                  </Button>
                </div>
              </div>

              <div className="space-y-6 lg:pl-8">
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 mt-1 shrink-0" />
                  <div>
                    <div className="font-serif text-xl mb-1">Address</div>
                    <p className="opacity-90 leading-relaxed">
                      Rez-de-chaussée, Av des FAR<br />
                      Immeuble HANIA, Magasin 2<br />
                      Tétouan 93000, Maroc
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="w-5 h-5 mt-1 shrink-0" />
                  <div>
                    <div className="font-serif text-xl mb-1">Hours</div>
                    <p className="opacity-90 leading-relaxed">
                      Open daily<br />
                      Until 12:00 AM
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="w-5 h-5 mt-1 shrink-0" />
                  <div>
                    <div className="font-serif text-xl mb-1">Reservations</div>
                    <p className="opacity-90">06 68 79 20 95</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background/70 py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-serif text-2xl text-background mb-1">L'artigelato</div>
            <p className="text-sm">Artisan gelato · Tetouan, Morocco</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-base">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-base">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
          <p className="text-xs">© {new Date().getFullYear()} L'artigelato. Made with love.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
