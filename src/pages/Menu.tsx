import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Phone } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

interface MenuItem {
  name: { en: string; fr: string; ar: string };
  desc?: { en: string; fr: string; ar: string };
  price: string | { single?: string; double?: string; triple?: string };
}

const sections: { key: keyof ReturnType<typeof useLanguage>["t"]["menuPage"]["categories"]; items: MenuItem[] }[] = [
  {
    key: "gelato",
    items: [
      {
        name: { en: "Pistacchio di Bronte", fr: "Pistache de Bronte", ar: "فستق برونتي" },
        desc: { en: "Sicilian pistachios, slow-roasted", fr: "Pistaches siciliennes torréfiées", ar: "فستق صقلي محمص ببطء" },
        price: { single: "30", double: "55", triple: "75" },
      },
      {
        name: { en: "Matcha Ceremonial", fr: "Matcha Cérémonial", ar: "ماتشا احتفالي" },
        desc: { en: "Stone-milled Uji matcha", fr: "Matcha Uji moulu sur pierre", ar: "ماتشا أوجي مطحون بالحجر" },
        price: { single: "30", double: "55", triple: "75" },
      },
      {
        name: { en: "Cioccolato Fondente 70%", fr: "Chocolat Noir 70%", ar: "شوكولاتة داكنة 70%" },
        desc: { en: "Single-origin dark chocolate", fr: "Chocolat noir d'origine", ar: "شوكولاتة داكنة منتقاة" },
        price: { single: "25", double: "45", triple: "60" },
      },
      {
        name: { en: "Stracciatella", fr: "Stracciatella", ar: "ستراتشاتيلا" },
        desc: { en: "Vanilla cream with chocolate shards", fr: "Crème vanille, éclats de chocolat", ar: "كريمة فانيليا برقائق الشوكولاتة" },
        price: { single: "25", double: "45", triple: "60" },
      },
      {
        name: { en: "Vaniglia Bourbon", fr: "Vanille Bourbon", ar: "فانيليا بوربون" },
        desc: { en: "Madagascar vanilla bean", fr: "Gousse de vanille de Madagascar", ar: "فانيليا مدغشقر" },
        price: { single: "25", double: "45", triple: "60" },
      },
      {
        name: { en: "Nocciola del Piemonte", fr: "Noisette du Piémont", ar: "بندق بييمونتي" },
        desc: { en: "Italian hazelnut, deeply roasted", fr: "Noisette italienne torréfiée", ar: "بندق إيطالي محمص" },
        price: { single: "30", double: "55", triple: "75" },
      },
      {
        name: { en: "Caramello Salato", fr: "Caramel Salé", ar: "كراميل مملح" },
        desc: { en: "Slow-cooked salted caramel", fr: "Caramel salé mijoté", ar: "كراميل مملح مطبوخ ببطء" },
        price: { single: "25", double: "45", triple: "60" },
      },
      {
        name: { en: "Tiramisù", fr: "Tiramisù", ar: "تيراميسو" },
        desc: { en: "Mascarpone, coffee, cocoa", fr: "Mascarpone, café, cacao", ar: "ماسكاربوني، قهوة، كاكاو" },
        price: { single: "28", double: "50", triple: "68" },
      },
    ],
  },
  {
    key: "sorbet",
    items: [
      {
        name: { en: "Strawberry Sorbet", fr: "Sorbet Fraise", ar: "سوربيه الفراولة" },
        desc: { en: "Fresh Moroccan strawberries", fr: "Fraises marocaines fraîches", ar: "فراولة مغربية طازجة" },
        price: { single: "25", double: "45", triple: "60" },
      },
      {
        name: { en: "Mango Sorbet", fr: "Sorbet Mangue", ar: "سوربيه المانجو" },
        price: { single: "25", double: "45", triple: "60" },
      },
      {
        name: { en: "Lemon Sorbet", fr: "Sorbet Citron", ar: "سوربيه الليمون" },
        price: { single: "25", double: "45", triple: "60" },
      },
      {
        name: { en: "Raspberry Sorbet", fr: "Sorbet Framboise", ar: "سوربيه التوت" },
        price: { single: "25", double: "45", triple: "60" },
      },
    ],
  },
  {
    key: "coupes",
    items: [
      {
        name: { en: "Strawberry Cup", fr: "Coupe Fraise", ar: "كأس الفراولة" },
        desc: { en: "Fresh strawberries, vanilla gelato, whipped cream", fr: "Fraises fraîches, gelato vanille, chantilly", ar: "فراولة طازجة، جيلاتو فانيليا، كريمة مخفوقة" },
        price: "65",
      },
      {
        name: { en: "Coupe Pistacchio", fr: "Coupe Pistache", ar: "كأس الفستق" },
        desc: { en: "Triple pistachio, crushed nuts, syrup", fr: "Triple pistache, éclats de noix, sirop", ar: "فستق ثلاثي، مكسرات، شراب" },
        price: { single: "55", double: "75" } as any,
      },
      {
        name: { en: "Affogato al Caffè", fr: "Affogato au Café", ar: "أفوغاتو بالقهوة" },
        desc: { en: "Vanilla gelato drowned in espresso", fr: "Gelato vanille noyé d'espresso", ar: "جيلاتو فانيليا مغمور بالإسبريسو" },
        price: "40",
      },
      {
        name: { en: "Coupe Brownie", fr: "Coupe Brownie", ar: "كأس البراوني" },
        desc: { en: "Warm brownie, gelato, hot chocolate sauce", fr: "Brownie chaud, gelato, sauce chocolat", ar: "براوني دافئ، جيلاتو، صلصة الشوكولاتة" },
        price: "70",
      },
      {
        name: { en: "Banana Split", fr: "Banana Split", ar: "بنانا سبليت" },
        price: "65",
      },
    ],
  },
  {
    key: "crepes",
    items: [
      { name: { en: "Crêpe Sugar", fr: "Crêpe Sucre", ar: "كريب سكر" }, price: "25" },
      { name: { en: "Crêpe Nutella", fr: "Crêpe Nutella", ar: "كريب نوتيلا" }, price: "35" },
      { name: { en: "Crêpe Nutella & Banana", fr: "Crêpe Nutella & Banane", ar: "كريب نوتيلا وموز" }, price: "45" },
      { name: { en: "Crêpe Nutella & Strawberry", fr: "Crêpe Nutella & Fraise", ar: "كريب نوتيلا وفراولة" }, price: "50" },
      { name: { en: "Crêpe Lotus Biscoff", fr: "Crêpe Lotus", ar: "كريب لوتس" }, price: "45" },
      { name: { en: "Crêpe Gelato", fr: "Crêpe Gelato", ar: "كريب جيلاتو" }, desc: { en: "With one scoop of gelato", fr: "Avec une boule de gelato", ar: "مع كرة جيلاتو" }, price: "60" },
    ],
  },
  {
    key: "waffles",
    items: [
      { name: { en: "Waffle Sugar", fr: "Gaufre Sucre", ar: "وافل سكر" }, price: "30" },
      { name: { en: "Waffle Nutella", fr: "Gaufre Nutella", ar: "وافل نوتيلا" }, price: "40" },
      { name: { en: "Waffle Lotus", fr: "Gaufre Lotus", ar: "وافل لوتس" }, price: "50" },
      { name: { en: "Waffle Nutella & Fruits", fr: "Gaufre Nutella & Fruits", ar: "وافل نوتيلا وفواكه" }, price: "55" },
      { name: { en: "Waffle Gelato", fr: "Gaufre Gelato", ar: "وافل جيلاتو" }, desc: { en: "With one scoop of gelato", fr: "Avec une boule de gelato", ar: "مع كرة جيلاتو" }, price: "65" },
    ],
  },
  {
    key: "drinks",
    items: [
      { name: { en: "Espresso", fr: "Espresso", ar: "إسبريسو" }, price: "12" },
      { name: { en: "Cappuccino", fr: "Cappuccino", ar: "كابتشينو" }, price: "18" },
      { name: { en: "Hot Chocolate", fr: "Chocolat Chaud", ar: "شوكولاتة ساخنة" }, price: "25" },
      { name: { en: "Matcha Latte", fr: "Matcha Latte", ar: "ماتشا لاتيه" }, price: "30" },
      { name: { en: "Milkshake", fr: "Milkshake", ar: "ميلك شيك" }, desc: { en: "Any gelato flavor", fr: "Au parfum de votre choix", ar: "بأي نكهة جيلاتو" }, price: "45" },
      { name: { en: "Fresh Juice", fr: "Jus Frais", ar: "عصير طازج" }, price: "25" },
    ],
  },
];

const Menu = () => {
  const { t, lang, dir } = useLanguage();

  return (
    <div className="min-h-screen bg-background" dir={dir}>
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/50">
        <div className="container mx-auto flex items-center justify-between py-4">
          <Link to="/" className="font-serif text-2xl font-semibold tracking-tight">
            L<span className="text-primary">'</span>artigelato
          </Link>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <Button variant="hero" size="sm" asChild>
              <a href="tel:+212668792095">
                <Phone className="w-4 h-4" /> {t.nav.call}
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Title */}
      <section className="py-16 md:py-20 bg-gradient-cream border-b border-border/50">
        <div className="container mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 rtl:flip-rtl" />
            {t.menuPage.back}
          </Link>
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3 font-medium">
            L'artigelato · Tetouan
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-light leading-[0.95] mb-6 text-balance">
            {t.menuPage.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {t.menuPage.sub}
          </p>
        </div>
      </section>

      {/* Sections */}
      <div className="container mx-auto py-16 md:py-24 space-y-20">
        {sections.map((section) => (
          <section key={section.key} id={section.key}>
            <div className="flex items-baseline justify-between gap-4 mb-10 pb-5 border-b border-border">
              <h2 className="font-serif text-3xl md:text-4xl font-light">
                {t.menuPage.categories[section.key]}
              </h2>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                {t.menuPage.currency}
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
              {section.items.map((item) => {
                const isScoops = typeof item.price !== "string";
                return (
                  <div
                    key={item.name.en}
                    className="flex items-start justify-between gap-6 group"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-3">
                        <h3 className="font-serif text-xl text-foreground">
                          {item.name[lang]}
                        </h3>
                        <div className="flex-1 border-b border-dashed border-border/70 mb-1.5" />
                      </div>
                      {item.desc && (
                        <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                          {item.desc[lang]}
                        </p>
                      )}
                    </div>
                    <div className="shrink-0 text-right">
                      {isScoops ? (
                        <div className="space-y-1">
                          {(["single", "double", "triple"] as const).map((s) => {
                            const p = (item.price as any)[s];
                            if (!p) return null;
                            return (
                              <div key={s} className="flex items-center justify-end gap-3 text-sm">
                                <span className="text-muted-foreground text-xs">
                                  {t.menuPage.sizes[s]}
                                </span>
                                <span className="font-medium text-primary tabular-nums w-10 text-right">
                                  {p}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <span className="font-serif text-xl text-primary tabular-nums">
                          {item.price as string}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}

        <p className="text-center text-sm text-muted-foreground italic pt-8 border-t border-border">
          {t.menuPage.note}
        </p>
      </div>

      {/* Footer */}
      <footer className="bg-foreground text-background/70 py-10">
        <div className="container mx-auto text-center">
          <Link to="/" className="font-serif text-2xl text-background">
            L'artigelato
          </Link>
          <p className="text-sm mt-2">{t.footer.tagline}</p>
        </div>
      </footer>
    </div>
  );
};

export default Menu;
