import { Button } from "@/components/ui/button"; // refresh
import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, Star, Instagram } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import heroImage from "@/assets/hero-gelato.jpg";
import pistachioImg from "@/assets/flavor-pistachio.jpg";
import matchaImg from "@/assets/flavor-matcha.jpg";
import strawberryImg from "@/assets/flavor-strawberry.jpg";
import chocolateImg from "@/assets/flavor-chocolate.jpg";
import interiorImg from "@/assets/interior.jpg";

const INSTAGRAM_URL = "https://www.instagram.com/lartigelato";

const flavorImages = [pistachioImg, matchaImg, strawberryImg, chocolateImg];

const reviewsData = [
  {
    name: "Maroua Lahbib",
    role: "Local Guide · 17 reviews",
    text: {
      en: "What a beautiful, very well thought project! The interior design is so pretty, the staff is friendly and the ice cream is sooo tasty — especially the pistachio one. I loved everything about this place!",
      fr: "Quel beau projet, très bien pensé ! Le design intérieur est superbe, le personnel est sympathique et la glace est vraiment délicieuse — surtout celle à la pistache. J'ai adoré cet endroit !",
      ar: "يا له من مشروع جميل ومدروس جداً! التصميم الداخلي رائع، الطاقم لطيف والآيس كريم لذيذ جداً — خاصة الفستق. أحببت كل شيء في هذا المكان!",
    },
  },
  {
    name: "imaginesyndrom",
    role: "Local Guide · 205 reviews",
    text: {
      en: "Definitely a place to go over and over again. The workers are energetic and young, everything looks delicious, and the matcha has a very nice strong taste.",
      fr: "Un endroit où l'on revient encore et encore. Le personnel est jeune et énergique, tout a l'air délicieux, et le matcha a un goût bien prononcé.",
      ar: "بالتأكيد مكان للعودة إليه مرات ومرات. العاملون مفعمون بالنشاط والشباب، كل شيء يبدو لذيذاً، والماتشا له طعم قوي جميل.",
    },
  },
  {
    name: "Me — The visitor",
    role: "Local Guide · 111 reviews",
    text: {
      en: "Over the past few years, I've seen many ice cream shops open in Tetouan, but this one truly has it all. You're paying for pure quality and style.",
      fr: "Ces dernières années, j'ai vu beaucoup de glaciers ouvrir à Tétouan, mais celui-ci a vraiment tout. Vous payez pour de la qualité et du style purs.",
      ar: "خلال السنوات الماضية، رأيت العديد من محلات الآيس كريم تفتح في تطوان، لكن هذا المحل لديه كل شيء حقاً. أنتم تدفعون مقابل جودة وأناقة خالصتين.",
    },
  },
];

const flavorContent = [
  {
    nameKey: "Pistacchio di Bronte",
    desc: {
      en: "Sicilian pistachios, slow-roasted and stone-ground for an unforgettable depth.",
      fr: "Pistaches siciliennes, lentement torréfiées et moulues sur pierre.",
      ar: "فستق صقلي، محمص ببطء ومطحون بالحجر لعمق لا يُنسى.",
    },
    badge: { en: "House signature", fr: "Signature maison", ar: "نكهة المحل" },
  },
  {
    nameKey: "Matcha Ceremonial",
    desc: {
      en: "Stone-milled Uji matcha whisked into our cold cream base for a vivid, earthy finish.",
      fr: "Matcha Uji moulu sur pierre, fouetté dans notre base crémeuse froide.",
      ar: "ماتشا أوجي مطحون بالحجر، مخفوق في قاعدة كريمتنا الباردة.",
    },
    badge: { en: "Bestseller", fr: "Best-seller", ar: "الأكثر مبيعاً" },
  },
  {
    nameKey: "Fragola del Giardino",
    desc: {
      en: "Sun-ripened strawberries folded into a silky vanilla bean cream.",
      fr: "Fraises mûries au soleil dans une crème vanillée soyeuse.",
      ar: "فراولة ناضجة بالشمس مع كريمة فانيليا حريرية.",
    },
    badge: { en: "Seasonal", fr: "Saisonnier", ar: "موسمي" },
  },
  {
    nameKey: "Cioccolato Fondente",
    desc: {
      en: "70% single-origin dark chocolate, intense, glossy, and impossibly smooth.",
      fr: "Chocolat noir 70% d'origine unique, intense, brillant et incroyablement onctueux.",
      ar: "شوكولاتة داكنة 70% من أصل واحد، مكثفة، لامعة وناعمة بشكل لا يُصدق.",
    },
    badge: { en: "Classic", fr: "Classique", ar: "كلاسيكي" },
  },
];

const teaserItems = [
  { en: "Strawberry Cup", fr: "Coupe Fraise", ar: "كأس الفراولة", price: "65" },
  { en: "Crêpe Nutella", fr: "Crêpe Nutella", ar: "كريب نوتيلا", price: "35" },
  { en: "Crêpe Gelato", fr: "Crêpe Gelato", ar: "كريب جيلاتو", price: "60" },
  { en: "Coupe Pistacchio", fr: "Coupe Pistache", ar: "كأس الفستق", price: "55" },
  { en: "Affogato al Caffè", fr: "Affogato Café", ar: "أفوغاتو بالقهوة", price: "40" },
];

const Index = () => {
  const { t, lang, dir } = useLanguage();

  return (
    <div className="min-h-screen bg-background" dir={dir}>
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/50">
        <div className="container mx-auto flex items-center justify-between py-4 gap-4">
          <a href="#" className="font-serif text-2xl font-semibold tracking-tight shrink-0">
            L<span className="text-primary">'</span>artigelato
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#flavors" className="hover:text-foreground transition-colors">{t.nav.flavors}</a>
            <a href="#story" className="hover:text-foreground transition-colors">{t.nav.story}</a>
            <Link to="/menu" className="hover:text-foreground transition-colors">{t.nav.menu}</Link>
            <a href="#visit" className="hover:text-foreground transition-colors">{t.nav.visit}</a>
          </nav>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <Button variant="hero" size="sm" asChild className="hidden sm:inline-flex">
              <a href="tel:+212668792095">{t.nav.call}</a>
            </Button>
          </div>
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
              {t.hero.tagline}
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[0.95] text-balance mb-6">
              {t.hero.title} <em className="text-primary-glow not-italic font-normal">{t.hero.titleEm}</em>{t.hero.titleAfter}
            </h1>
            <p className="text-lg md:text-xl text-background/85 max-w-xl text-balance mb-10 leading-relaxed">
              {t.hero.sub}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" asChild>
                <a href="#flavors">{t.hero.cta1}</a>
              </Button>
              <Button variant="cream" size="xl" asChild>
                <a href="#visit">{t.hero.cta2}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / rating bar */}
      <section className="border-y border-border bg-card">
        <div className="container mx-auto py-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "4.7", label: t.stats.rating, icon: <Star className="w-4 h-4 fill-current" /> },
            { value: "138+", label: t.stats.reviews },
            { value: "12", label: t.stats.flavors },
            { value: "100%", label: t.stats.made },
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
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4 font-medium">{t.flavors.kicker}</p>
            <h2 className="font-serif text-4xl md:text-6xl font-light leading-tight text-balance">
              {t.flavors.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {flavorContent.map((f, i) => (
              <article
                key={f.nameKey}
                className="group bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-warm transition-base hover:-translate-y-2"
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={flavorImages[i]}
                    alt={f.nameKey}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-base"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block text-[10px] uppercase tracking-widest text-primary font-semibold mb-3">
                    {f.badge[lang]}
                  </span>
                  <h3 className="font-serif text-2xl mb-2">{f.nameKey}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc[lang]}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/menu">{t.flavors.viewAll}</Link>
            </Button>
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
              <p className="text-xs text-muted-foreground italic">"{reviewsData[0].text[lang].slice(0, 100)}…"</p>
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4 font-medium">{t.story.kicker}</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8 text-balance">
              {t.story.title}
            </h2>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>{t.story.p1}</p>
              <p>{t.story.p2}</p>
              <p>{t.story.p3}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu teaser */}
      <section id="menu" className="py-24 md:py-32 bg-foreground text-background relative overflow-hidden">
        <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl" />
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-primary-glow mb-4 font-medium">{t.menuSection.kicker}</p>
            <h2 className="font-serif text-4xl md:text-6xl font-light leading-tight mb-6 text-balance">
              {t.menuSection.title}
            </h2>
            <p className="text-lg text-background/75 mb-10 max-w-md leading-relaxed">
              {t.menuSection.sub}
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/menu">{t.menuSection.cta}</Link>
            </Button>
          </div>

          <ul className="space-y-4">
            {teaserItems.map((item) => (
              <li
                key={item.en}
                className="flex items-baseline justify-between gap-4 border-b border-background/15 pb-3"
              >
                <span className="font-serif text-xl">{item[lang]}</span>
                <span className="text-primary-glow font-medium">
                  {item.price} {t.menuPage.currency}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 md:py-32 bg-gradient-cream">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4 font-medium">{t.reviews.kicker}</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-balance">
              {t.reviews.title}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviewsData.map((r) => (
              <blockquote key={r.name} className="bg-card rounded-3xl p-8 shadow-card border border-border/60 flex flex-col">
                <div className="flex gap-0.5 mb-5 text-primary">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-foreground/90 leading-relaxed flex-1 mb-6">"{r.text[lang]}"</p>
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
          <div className="rounded-[2rem] bg-gradient-teal text-primary-foreground p-10 md:p-16 lg:p-20 shadow-warm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-glow/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] opacity-80 mb-4 font-medium">{t.visit.kicker}</p>
                <h2 className="font-serif text-4xl md:text-6xl font-light leading-tight mb-6 text-balance">
                  {t.visit.title}
                </h2>
                <p className="text-lg opacity-90 max-w-md leading-relaxed mb-10">
                  {t.visit.sub}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="cream" size="lg" asChild>
                    <a href="https://maps.google.com/?q=L'artigelato+Tetouan" target="_blank" rel="noreferrer">
                      <MapPin className="w-4 h-4" /> {t.visit.directions}
                    </a>
                  </Button>
                  <Button variant="warm" size="lg" asChild>
                    <a href="tel:+212668792095"><Phone className="w-4 h-4" /> 06 68 79 20 95</a>
                  </Button>
                </div>
              </div>

              <div className="space-y-6 lg:ps-8">
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 mt-1 shrink-0" />
                  <div>
                    <div className="font-serif text-xl mb-1">{t.visit.address}</div>
                    <p className="opacity-90 leading-relaxed">
                      {t.visit.addressLine1}<br />
                      {t.visit.addressLine2}<br />
                      {t.visit.addressLine3}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="w-5 h-5 mt-1 shrink-0" />
                  <div>
                    <div className="font-serif text-xl mb-1">{t.visit.hours}</div>
                    <p className="opacity-90 leading-relaxed">
                      {t.visit.hoursLine1}<br />
                      {t.visit.hoursLine2}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="w-5 h-5 mt-1 shrink-0" />
                  <div>
                    <div className="font-serif text-xl mb-1">{t.visit.reservations}</div>
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
          <div className="text-center md:text-start">
            <div className="font-serif text-2xl text-background mb-1">L'artigelato</div>
            <p className="text-sm">{t.footer.tagline}</p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-base"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
          <p className="text-xs">© {new Date().getFullYear()} L'artigelato. {t.footer.made}</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
