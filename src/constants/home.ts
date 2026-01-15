import {
  Btn,
  Data,
  Feature,
  HarnessIn,
  ImpactData,
  Infos,
  NavIn,
  PackageInfo,
  PoweringIn,
  Product,
  TestimonialIn,
  UninterruptedIn,
} from "@/types";

export const NavData: NavIn[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Products",
    href: "/products",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export const productItems: NavIn[] = [
  { name: "Residential Solar", href: "/residential" },
  { name: "Commercial Solar", href: "/commercial" },
  { name: "Solar Batteries", href: "/solar" },
];

export const features: Feature[] = [
  {
    icon: "/lightning.png",
    title: "Power Up with Savings!",
    description:
      "Our affordable energy solutions help lower your bills making a positive impact on the environment.",
  },
  {
    icon: "/leaf.png",
    title: "Go Green, Breathe Clean!",
    description:
      "Every system we install helps decrease in carbon emissions, contributing to a healthier planet.",
  },
  {
    icon: "/trophy.png",
    title: "Quality You Can Count On!",
    description:
      "Our systems are built to last, ensuring reliable performance and peace of mind for years to come.",
  },
  {
    icon: "/sailboat.png",
    title: "Smooth Sailing to Solar!",
    description:
      "We guide you through every step so you can enjoy the benefits of sustainable living without hassle.",
  },
];

export const products: Product[] = [
  {
    id: 1,
    title: "Residential Solar",
    description:
      "Designed for efficiency and affordability, our solar systems allow to harness the sun’s power, reduce your energy bills, and contribute to a cleaner planet.",
    imageSrc:
      "/img/Commercial_Solar_Panels_Installation_for_Home_In_Brisbane1.webp",
    link: "/residential",
  },
  {
    id: 2,
    title: "Commercial Solar",
    description:
      "Designed to help businesses reduce costs, increase energy independence, and enhance sustainability, while benefiting from significant tax incentives.",
    imageSrc:
      "/img/Commercial_Solar_Panels_Installation_for_Home_In_Brisbane2.webp",
    link: "commercial",
  },
  {
    id: 3,
    title: "Solar Batteries",
    description:
      "Designed to store excess energy for use during peak demand or outages, our battery solutions provide peace of mind and enhance your energy independence.",
    imageSrc:
      "/img/Commercial_Solar_Panels_Installation_for_Home_In_Brisbane3.webp",
    link: "solar",
  },
];

export const BtnData: Btn[] = [
  {
    icon: "/icon/7.png",
    title: "Free Solar Assessment (Obligation-Free) ",
  },
  {
    icon: "/icon/9.png",
    title: "Zero % Interest,Zero Upfront, Payment Plans",
  },
  {
    icon: "/icon/10.png",
    title: "Premium Solar Panels, Batteries & Inverters",
  },
  {
    icon: "/icon/1.png",
    title: "Solar Paying for Itself",
  },
  {
    icon: "/icon/2.png",
    title: "Tailor-Made Solar System For Your Specific Needs.",
  },
  {
    icon: "/icon/3.png",
    title: "The Fastest Growing Company",
  },
  {
    icon: "/icon/4.png",
    title: "Residential Solar & Commercial Solar",
  },
  {
    icon: "/icon/11.png",
    title: "Power Bill Saving Up to 100%",
  },
  {
    icon: "/img/sas1.png",
    title: "SAA Accredited  Installers & Designers",
  },
  {
    icon: "/icon/6.png",
    title: "Massive Federal Government Solar Subsidy",
  },
  {
    icon: "/icon/12.png",
    title: "More Than 25 Years Warranty (PRODUCT + PERFORMANCE)",
  },
];

export const CompanyImg: string[] = [
  "/img/partners/1.webp",
  "/img/partners/2.webp",
  "/img/partners/3.webp",
  "/img/partners/4.webp",
  "/img/partners/5.webp",
  "/img/partners/6.webp",
  "/img/partners/7.webp",
  "/img/partners/8.webp",
  "/img/partners/9.webp",
  "/img/partners/10.webp",
];

export const testimonials: TestimonialIn[] = [
  {
    quote:
      "Splitting to color was one of the best decisions we made for our home. The team was incredibly knowledgeable and walked us through every step, from watching the system to understanding the options. The process was efficient and extremely disruptive. We started seeing the benefits almost immediately. The support team was always ready to help and provided excellent service. I highly recommend this company.",
    author: "Duala Peterson",
    img: "/testimonial.png",
  },
  {
    quote:
      "As a business owner, I was looking for ways to reduce operational costs without compromising efficiency. Going solar was a strategic move, and this company exceeded my expectations. The installation was completed over the weekend to avoid any disruption, and the team was extremely professional. We’ve seen a significant reduction in energy expenses, improving our bottom line. I highly recommend their services to any business looking to go green and save money.",
    author: "Daniel Michaels",
    img: "/testimonial.png",
  },
  {
    quote:
      "Our household has high energy consumption with kids, gadgets, and appliances running all day. We were tired of the skyrocketing utility bills and decided to go solar. This company was fantastic from the start. They did a detaile and the team was extremely professional. We’ve seen a significant reduction in energy expenses, improving our bottom line. I highly recommend their services to any business looking to go green and save money.",
    author: "Mike Timberlake",
    img: "/testimonial.png",
  },
  {
    quote:
      "As a single parent with a tight budget, I needed a way to reduce expenses. Solar seemed like the best option, and this company made it possible. They helped me navigate the available subsidies and financing options and the team was extremely professional. We’ve seen a significant reduction in energy expenses, improving our bottom line. I highly recommend their services to any business looking to go green and save money.",
    author: "Emma Robak",
    img: "/testimonial.png",
  },
  {
    quote:
      "From the moment I reached out for a consultation, their team was incredibly professional and knowledgeable. They took the time to explain all of my options, and I felt confident in my decision to go solar. The installation was quick and efficient, and the crew made sure everything was set up perfectly. The customer service has been top-notch, with frequent follow-ups to ensure everything is running smoothly. I highly recommend DAYLIGHT SOLAR for anyone considering solar energy.",
    author: "Survi Basyal",
    img: "/testimonial.png",
  },
  {
    quote:
      "Young and energetic Daylight Solar team did an outstanding job installing our solar panels. From start to finish, their team was professional, efficient, and knowledgeable. The entire process was smooth, and they explained everything clearly. We’re thrilled with the quality of their work and the noticeable savings on our energy bills. I highly recommend Daylight Solar to anyone considering solar energy. ",
    author: "Rupak Regmi",
    img: "/testimonial.png",
  },
  {
    quote:
      "I had a fantastic experience with Daylight solar. From the initial consultation to the final installation, the team was professional, knowledgeable, and efficient. They designed a system that perfectly suited my needs, and the installation was completed on time. Since then, my energy bills have significantly dropped. Highly recommended for anyone looking to switch to solar!",
    author: "Krishna",
    img: "/testimonial.png",
  },
];

export const PoweringELData: PoweringIn[] = [
  {
    img: "/img/powering1.png",
    title: "Residential Solar",
    des: "Transform your home into a sustainable powerhouse with our residential solar solutions.",
    href: "/residential",
    item: {
      img: "/lightning.png",
      name: "2,500 kWh monthly production",
    },
  },

  {
    img: "/img/comm1.png",
    title: "Commercial Solar",
    des: "Power your business with enterprise-grade solar technology designed for maximum ROI.",
    href: "/commercial",
    item: {
      img: "/icon/powering1.png",
      name: "10,000 kWh monthly production",
    },
  },

  {
    img: "/img/powering3.png",
    title: "Solar Batteries",
    des: "Store and manage your energy with next-generation battery technology.",
    href: "/solar",
    item: {
      img: "/icon/powering3.png",
      name: "13.5 kWh storage capacity",
    },
  },
];

export const HarnessData: HarnessIn[] = [
  {
    title: "Up to 30% More Energy Efficient",
    des: "Our advanced solar panels maximize every ray of sunshine.",
  },
  {
    title: "Lower Bills, Higher Savings",
    des: "See immediate reduction in your energy costs.",
  },
  {
    title: "Smart Home Integration",
    des: "Seamlessly connects with your existing smart home setup.",
  },
];

export const UninterruptedData: UninterruptedIn[] = [
  {
    icon: "/icon/powering3.png",
    title: "Smart Storage",
    des: "Store excess energy during peak production and use it when you need it most.",
    energy: 70,
  },
  {
    icon: "/icon/light.png",
    title: "Smart Storage",
    des: "Store excess energy during peak production and use it when you need it most.",
    energy: 90,
  },
];
export const CommercialData: Data[] = [
  {
    title: "Commercial Solar System",
    des: "Commercial solar systems are a great way for business to cut energy costs and boost sustainability. By generating their own power from the sun, businesses can significantly lower their electricity bills and gain long-term savings. With incentives like tax credits and accelerated depreciation, the initial investment is more affordable, and businesses often see a return on investment in just a few years. Solar panels also help businesses reduce their environmental impact.",
  },
];

export const CommercialPackage: PackageInfo[] = [
  {
    img: "/img/card1.jpeg",
    title: "20kW Solar System",
    des1: "Panels: 46 X 440W Tier 1 solar modules",
    des2: "Inverter: 20KW integrated inverter with WIFI  high efficiency Half-cut cell mono PERC solar modules.",
    Button: "Learn More",
  },
  {
    img: "/img/card2.jpeg",

    title: "30kW Solar System",
    des1: "Panels: 68 X 440W Tier 1 solar modules",
    des2: "Inverter: 30KW integrated inverter with WIFI  high efficiency Half-cut cell mono PERC solar modules.",
    Button: "Learn More",
  },
  {
    img: "/img/sunlight1.jpeg",

    title: "50kW Solar System",
    des1: "Panels: 114 X 440W Tier 1 solar modules",
    des2: "Inverter: 30KW + 10KW + 10 KW integrated inverter with WIFI  high efficiency Half-cut cell mono PERC solar modules.",
    Button: "Learn More",
  },
];

export const ResidentialPackage: PackageInfo[] = [
  {
    img: "/img/res.jpeg",
    title: "6.6kW Solar System",
    des1: "Panels: 15 X 440W Tier 1 solar modules",
    des2: "Inverter: 5KW integrated inverter with WIFI  high efficiency Half-cut cell mono PERC solar modules.",

    Button: "Learn More",
  },
  {
    img: "/img/res2.jpeg",

    title: "10.56KW Solar System",
    des1: "Panels: 25 * 440watt Tier 1 solar modules",
    des2: "Inverter: 8KW integrated inverter with WIFI  high efficiency Half-cut cell mono PERC solar modules.",
    Button: "Learn More",
  },
  {
    img: "/img/res3.jpeg",

    title: "13.2KW Solar System",
    des1: "Panels: 30* 440watt Tier 1 solar modules",
    des2: "Inverter: 10KW integrated inverter with WIFI  high efficiency Half-cut cell mono PERC solar modules.",
    Button: "Learn More",
  },
];

export const SolarProducts: PackageInfo[] = [
  {
    img: "/img/solar1.jpeg",
    title: "SunPower Reserve",
    des1: "SunPower solar technology is designed and manufactured by Maxeon Solar Technologies with over 35 years of experience. They sell their products under the Maxeon and SunPower brands in more than 100 countries, working with over 1,200 partners worldwide.",
    Button: "Know More",
  },
  {
    img: "/img/battery.png",
    title: "Sungrow Battery",
    des1: "Sungrow offers advanced energy storage solutions for homes, businesses, and utilities, storing solar power for night use. Their turnkey systems integrate PCS, high-performance lithium-ion batteries, and smart energy management for efficient performance.",
    Button: "Know More",
  },
  {
    img: "/img/comm.png",
    title: "Growatt Solar Batteries",
    des1: "Growatt off-grid series that can be used for self-consumption and backup power. Growatt off-grid batteries allow you to use solar energy more efficiently by increasing your self-consumption, reducing your electricity expenses, and becoming independent from the grid.",
    Button: "Know More",
  },
];
export const impactData: ImpactData[] = [
  {
    title: "Households Powered",
    data: "1,000+",
    color: "#EAB308",
    color1: "#EAB308",
    progress: 70,
  },
  {
    title: "CO₂ Reduction",
    data: "500,000+",
    color: "#22C55E",
    color1: "#22C55E",
    progress: 80,
  },
  {
    title: "Energy Produced",
    data: "1M+ kW",
    color: "#3B82F6",
    color1: "#3B82F6",
    progress: 90,
  },
];
export const AboutDetails: Infos[] = [
  {
    icon: "/icon/10.png",
    des: "Premium Solar Panels, Batteries & Investors",
  },
  {
    icon: "/icon/8.png",
    des: "Free Solar Assessment",
  },
  {
    icon: "/icon/1.png",
    des: "Solar Paying for Itself",
  },
  {
    icon: "/icon/3.png",
    des: "The Fastest Growing Company",
  },
  {
    icon: "/img/sas1.png",
    des: "SOLAR ACCREDITATION AUSTRALIA (SAA) Accredited  Installers & Designers",
  },
  {
    icon: "/icon/2.png",
    des: "Tailor-Made Solar System For Your Specific Needs.",
  },
  {
    icon: "/icon/verify.png",
    des: "More Than 25 Years Warranty (PRODUCT + PERFORMANCE)",
  },
  {
    icon: "/icon/4.png",
    des: "Residential Solar & Commercial Solar",
  },
  {
    icon: "/icon/9.png",
    des: "Zero Upfront, Zero Interest",
  },
  {
    icon: "/icon/11.png",
    des: "Power Bill Saving Up to 100%",
  },
  {
    icon: "/icon/6.png",
    des: "Massive Federal Solar Incentives",
  },
];
export const CommercialInfo: Infos[] = [
  {
    icon: "/icon/22.png",
    des: "Claim Solar Subsidy Up to 100%",
  },
  {
    icon: "/icon/1.png",
    des: "Zero Upfront, Solar Pays for Itself",
  },
  {
    icon: "/icon/11.png",
    des: "Save Your Power Up to 100%",
  },
  {
    icon: "/icon/9.png",
    des: "Tax Benefits",
  },
  {
    icon: "/img/sas1.png",
    des: "SAA Accredited  Installers & Designers",
  },
  {
    icon: "/icon/2.png",
    des: "Get Tailored Solar Design",
  },
];
export const ResidentialInfo: Infos[] = [
  {
    icon: "/icon/9.png",
    des: "Zero Upfront, Zero % Interest",
  },
  {
    icon: "/icon/1.png",
    des: "Solar Paying For Itself",
  },

  {
    icon: "/icon/11.png",
    des: "Save Your Power Up to 100%",
  },
  {
    icon: "/icon/22.png",
    des: "Claim Massive Solar Subsidy",
  },
  {
    icon: "/img/sas1.png",
    des: "SAA Accredited  Installers & Designers",
  },
  {
    icon: "/icon/2.png",
    des: "Get Tailored Solar Design",
  },
];
