export type Lang = "en" | "fr" | "ar";

interface Translation {
  nav: { flavors: string; story: string; menu: string; visit: string; call: string; home: string };
  hero: { tagline: string; title: string; titleEm: string; titleAfter: string; sub: string; cta1: string; cta2: string };
  stats: { rating: string; reviews: string; flavors: string; made: string };
  flavors: { kicker: string; title: string; viewAll: string };
  story: { kicker: string; title: string; p1: string; p2: string; p3: string };
  menuSection: { kicker: string; title: string; sub: string; cta: string };
  reviews: { kicker: string; title: string };
  visit: {
    kicker: string; title: string; sub: string; directions: string;
    address: string; addressLine1: string; addressLine2: string; addressLine3: string;
    hours: string; hoursLine1: string; hoursLine2: string; reservations: string;
  };
  whatsapp: string;
  footer: { tagline: string; made: string };
  menuPage: {
    title: string; sub: string; back: string;
    categories: { gelato: string; sorbet: string; coupes: string; crepes: string; waffles: string; drinks: string };
    sizes: { single: string; double: string; triple: string };
    currency: string; note: string;
  };
}

export type { Translation };

export const translations: Record<Lang, Translation> = {
  en: {
    nav: { flavors: "Flavors", story: "Story", menu: "Menu", visit: "Visit", call: "Call us", home: "Home" },
    hero: {
      tagline: "Artigianale · Tetouan",
      title: "Gelato made the",
      titleEm: "slow",
      titleAfter: ", beautiful way.",
      sub: "Small batches. Real ingredients. A neighborhood gelateria on Avenue des FAR, where every scoop is a tiny act of craft.",
      cta1: "Discover our flavors",
      cta2: "Visit the shop",
    },
    stats: { rating: "Google rating", reviews: "Happy reviews", flavors: "Rotating flavors", made: "Made in-house" },
    flavors: { kicker: "Our flavors", title: "A small menu, obsessively crafted.", viewAll: "See full menu" },
    story: {
      kicker: "Our story",
      title: "A little corner of Italy, in the heart of Tetouan.",
      p1: "L'artigelato was born from a simple obsession — to make gelato the way it was meant to be made: with patience, with the best ingredients we can find, and with no shortcuts.",
      p2: "Our pistachios travel from Bronte, our chocolate from single-origin estates, our fruit from local Moroccan growers when the season is right. Everything is churned in small batches, every single morning.",
      p3: "Step inside, take a seat, and let us serve you something a little extraordinary.",
    },
    menuSection: {
      kicker: "Beyond gelato",
      title: "Crêpes, waffles & coupes.",
      sub: "Thin golden crêpes, crisp waffles, and decadent gelato coupes — folded around your favorite indulgence.",
      cta: "See full menu",
    },
    reviews: { kicker: "Loved in Tetouan", title: "4.7 stars from 138 happy guests." },
    visit: {
      kicker: "Come say hi",
      title: "Visit us in Tetouan.",
      sub: "We're open every day until midnight. Walk in, take your time, ask for a taste — that's how it should be.",
      directions: "Get directions",
      address: "Address",
      addressLine1: "Rez-de-chaussée, Av des FAR",
      addressLine2: "Immeuble HANIA, Magasin 2",
      addressLine3: "Tétouan 93000, Maroc",
      hours: "Hours",
      hoursLine1: "Open daily",
      hoursLine2: "9 AM – 12 AM",
      reservations: "Reservations",
    },
    whatsapp: "Chat on WhatsApp",
    footer: { tagline: "Artisan gelato · Tetouan, Morocco", made: "Made with love." },
    menuPage: {
      title: "Our menu",
      sub: "All our gelato flavors, crêpes, waffles and signature coupes — crafted fresh every morning.",
      back: "Back to home",
      categories: {
        gelato: "Gelato — by the scoop",
        sorbet: "Sorbets & Fruit",
        coupes: "Signature coupes",
        crepes: "Crêpes",
        waffles: "Waffles",
        drinks: "Drinks & Hot",
      },
      sizes: { single: "1 scoop", double: "2 scoops", triple: "3 scoops" },
      currency: "MAD",
      note: "Prices in MAD. Menu may vary with the season.",
    },
  },
  fr: {
    nav: { flavors: "Parfums", story: "Histoire", menu: "Menu", visit: "Visiter", call: "Appelez-nous", home: "Accueil" },
    hero: {
      tagline: "Artigianale · Tétouan",
      title: "Le gelato fait avec",
      titleEm: "lenteur",
      titleAfter: " et passion.",
      sub: "Petits lots. Vrais ingrédients. Une gelateria de quartier sur l'Avenue des FAR, où chaque boule est un petit acte d'artisanat.",
      cta1: "Découvrir nos parfums",
      cta2: "Visiter la boutique",
    },
    stats: { rating: "Note Google", reviews: "Avis heureux", flavors: "Parfums du jour", made: "Fait maison" },
    flavors: { kicker: "Nos parfums", title: "Un petit menu, méticuleusement élaboré.", viewAll: "Voir le menu complet" },
    story: {
      kicker: "Notre histoire",
      title: "Un petit coin d'Italie, au cœur de Tétouan.",
      p1: "L'artigelato est né d'une obsession simple — faire le gelato comme il devrait l'être : avec patience, avec les meilleurs ingrédients possibles, et sans raccourcis.",
      p2: "Nos pistaches viennent de Bronte, notre chocolat d'origines uniques, nos fruits des producteurs marocains de saison. Tout est baratté en petits lots, chaque matin.",
      p3: "Entrez, asseyez-vous, et laissez-nous vous servir quelque chose d'un peu extraordinaire.",
    },
    menuSection: {
      kicker: "Au-delà du gelato",
      title: "Crêpes, gaufres & coupes.",
      sub: "Crêpes fines et dorées, gaufres croustillantes, et coupes gourmandes — autour de votre douceur préférée.",
      cta: "Voir le menu complet",
    },
    reviews: { kicker: "Aimés à Tétouan", title: "4,7 étoiles sur 138 avis." },
    visit: {
      kicker: "Venez nous voir",
      title: "Rendez-nous visite à Tétouan.",
      sub: "Ouverts tous les jours jusqu'à minuit. Entrez, prenez votre temps, demandez à goûter — c'est comme ça que ça devrait être.",
      directions: "Itinéraire",
      address: "Adresse",
      addressLine1: "Rez-de-chaussée, Av des FAR",
      addressLine2: "Immeuble HANIA, Magasin 2",
      addressLine3: "Tétouan 93000, Maroc",
      hours: "Horaires",
      hoursLine1: "Tous les jours",
      hoursLine2: "9h – Minuit",
      reservations: "Réservations",
    },
    whatsapp: "Discuter sur WhatsApp",
    footer: { tagline: "Gelato artisanal · Tétouan, Maroc", made: "Fait avec amour." },
    menuPage: {
      title: "Notre menu",
      sub: "Tous nos parfums de gelato, crêpes, gaufres et coupes signature — préparés frais chaque matin.",
      back: "Retour à l'accueil",
      categories: {
        gelato: "Gelato — à la boule",
        sorbet: "Sorbets & Fruits",
        coupes: "Coupes signature",
        crepes: "Crêpes",
        waffles: "Gaufres",
        drinks: "Boissons & Chauds",
      },
      sizes: { single: "1 boule", double: "2 boules", triple: "3 boules" },
      currency: "MAD",
      note: "Prix en MAD. Le menu peut varier selon la saison.",
    },
  },
  ar: {
    nav: { flavors: "النكهات", story: "قصتنا", menu: "القائمة", visit: "زورونا", call: "اتصلوا بنا", home: "الرئيسية" },
    hero: {
      tagline: "حِرفي · تطوان",
      title: "جيلاتو يُصنع بـ",
      titleEm: "تأنٍّ",
      titleAfter: " وجمال.",
      sub: "دفعات صغيرة. مكونات حقيقية. جيلاتيريا حيّكم في شارع المسيرة الخضراء، حيث كل كرة هي قطعة فنّ صغيرة.",
      cta1: "اكتشفوا نكهاتنا",
      cta2: "زوروا المحل",
    },
    stats: { rating: "تقييم جوجل", reviews: "تقييمات سعيدة", flavors: "نكهات متجددة", made: "صناعة محلية" },
    flavors: { kicker: "نكهاتنا", title: "قائمة صغيرة، مصنوعة بهَوس.", viewAll: "عرض القائمة الكاملة" },
    story: {
      kicker: "قصتنا",
      title: "زاوية إيطالية صغيرة في قلب تطوان.",
      p1: "وُلِد L'artigelato من هَوس بسيط — صنع الجيلاتو كما يجب أن يُصنع: بصبر، وبأفضل المكونات المتاحة، ودون اختصارات.",
      p2: "فستقنا يأتي من برونتي، شوكولاتنا من مزارع منتقاة، وفواكهنا من مزارعين مغاربة محليين حسب الموسم. كل شيء يُحضّر في دفعات صغيرة كل صباح.",
      p3: "ادخلوا، استريحوا، ودعونا نقدم لكم شيئاً استثنائياً.",
    },
    menuSection: {
      kicker: "أكثر من جيلاتو",
      title: "كريب، وافل وكؤوس مميزة.",
      sub: "كريب رقيق وذهبي، وافل مقرمش، وكؤوس جيلاتو فاخرة — حول حلواكم المفضلة.",
      cta: "عرض القائمة الكاملة",
    },
    reviews: { kicker: "محبوبون في تطوان", title: "4.7 نجوم من 138 ضيفاً سعيداً." },
    visit: {
      kicker: "تعالوا لزيارتنا",
      title: "زورونا في تطوان.",
      sub: "نفتح كل يوم حتى منتصف الليل. ادخلوا، خذوا وقتكم، اطلبوا التذوق — هكذا يجب أن يكون.",
      directions: "احصل على الاتجاهات",
      address: "العنوان",
      addressLine1: "الطابق الأرضي، شارع المسيرة الخضراء",
      addressLine2: "عمارة هانيا، محل رقم 2",
      addressLine3: "تطوان 93000، المغرب",
      hours: "ساعات العمل",
      hoursLine1: "يومياً",
      hoursLine2: "9 صباحاً – 12 منتصف الليل",
      reservations: "الحجوزات",
    },
    whatsapp: "تواصل عبر واتساب",
    footer: { tagline: "جيلاتو حِرفي · تطوان، المغرب", made: "صُنع بحب." },
    menuPage: {
      title: "قائمتنا",
      sub: "كل نكهات الجيلاتو، الكريب، الوافل والكؤوس المميزة — تُحضّر طازجة كل صباح.",
      back: "العودة للرئيسية",
      categories: {
        gelato: "جيلاتو — بالكرة",
        sorbet: "سوربيه وفواكه",
        coupes: "كؤوس مميزة",
        crepes: "كريب",
        waffles: "وافل",
        drinks: "مشروبات وساخنة",
      },
      sizes: { single: "كرة واحدة", double: "كرتان", triple: "3 كرات" },
      currency: "درهم",
      note: "الأسعار بالدرهم المغربي. القائمة قد تتغير حسب الموسم.",
    },
  },
};

