export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "How Solar Panels Can Save You Money This Summer",
    slug: "how-solar-panels-save-money-summer",
    excerpt:
      "Discover how installing solar panels can significantly reduce your electricity bills during the hot summer months.",
    content: `Solar panels are one of the most effective ways to reduce your electricity bills, especially during summer when air conditioning usage peaks. In Australia, summer temperatures can be extreme, leading to high energy consumption.

By harnessing the power of the sun, solar panels generate electricity during peak daylight hours when your home needs it most. This direct usage means you're drawing less from the grid, significantly reducing your energy costs.

Benefits include:
- Reduced electricity bills by up to 70%
- Protection against rising energy prices
- Environmental impact reduction
- Government rebates and incentives

The average household can save between $10,000 to $30,000 over the lifetime of a solar system.`,
    image: "/img/solar1.jpeg",
    author: "Daylight Solar Team",
    date: "2024-01-10",
    category: "Solar Benefits",
    readTime: 5,
  },
  {
    id: "2",
    title: "Understanding Solar Panel Efficiency in Different Weather Conditions",
    slug: "solar-panel-efficiency-weather",
    excerpt:
      "Learn how weather conditions affect solar panel performance and what you can expect year-round.",
    content: `Many people assume that solar panels only work in sunny weather. However, modern solar technology is designed to generate electricity even on cloudy days, though efficiency is lower.

Understanding how different weather conditions affect your solar panels helps you maintain realistic expectations about your system's performance.

Weather Impact Overview:
- Sunny Days: 100% efficiency
- Cloudy Days: 25-50% efficiency
- Rainy Days: 15-25% efficiency
- Snow: Minimal to no output

Even in less-than-ideal weather, your solar system continues to generate power. On average, Australian homes can rely on consistent solar generation throughout the year.

Modern inverters and battery storage systems help maximize the use of generated electricity, ensuring your investment delivers consistent returns.`,
    image: "/img/sunlight1.jpeg",
    author: "Sarah Mitchell",
    date: "2024-01-05",
    category: "Technical Guide",
    readTime: 6,
  },
  {
    id: "3",
    title: "Government Solar Rebates and Incentives in 2024",
    slug: "government-solar-rebates-2024",
    excerpt:
      "Complete guide to available government rebates, incentives, and tax breaks for solar panel installations.",
    content: `Installing solar panels is more affordable than ever thanks to various government incentives and rebate programs available to Australian homeowners and businesses.

Current Incentives Available:

1. Small-scale Technology Certificates (STCs)
- Also known as solar rebates
- Available for systems up to 100kW
- Value depends on location and system size

2. Feed-in Tariffs
- Get paid for excess electricity exported to the grid
- Rates vary by state and retailer
- Average return: 10-15 cents per kWh

3. State-Based Incentives
- NSW, VIC, QLD all have additional programs
- Battery storage rebates
- Low-interest loans available

4. Tax Benefits
- Depreciation deductions for businesses
- Capital works deductions

The best time to install is now, as incentive values are declining annually. Contact us for a detailed assessment of your eligibility.`,
    image: "/img/res.jpeg",
    author: "David Chen",
    date: "2024-01-01",
    category: "Financial Benefits",
    readTime: 7,
  },
  {
    id: "4",
    title: "Residential vs Commercial Solar Systems: Which is Right for You?",
    slug: "residential-vs-commercial-solar",
    excerpt:
      "Understand the differences between residential and commercial solar systems and choose the best option.",
    content: `While the basic principles of solar energy are the same, residential and commercial solar systems differ significantly in scale, design, and implementation.

Residential Solar Systems:
- Typical capacity: 3-10kW
- Single-phase power connection
- Rooftop installation (most common)
- Average cost: $5,000-$15,000
- Payback period: 4-6 years
- Ideal for: Homeowners

Commercial Solar Systems:
- Typical capacity: 10kW-500kW+
- Three-phase power connection
- Rooftop or ground-mounted
- Average cost: $30,000-$200,000+
- Payback period: 3-5 years
- Ideal for: Small businesses to large corporations

Commercial systems benefit from:
- Higher efficiency rates
- Greater tax deductions
- Faster ROI due to higher consumption
- Scalability for future expansion

Whether residential or commercial, solar energy represents a smart investment in your property's future and the environment.`,
    image: "/img/comm.png",
    author: "Emma Rodriguez",
    date: "2023-12-28",
    category: "Comparison Guide",
    readTime: 5,
  },
  {
    id: "5",
    title: "Solar Battery Storage: What You Need to Know",
    slug: "solar-battery-storage-guide",
    excerpt:
      "A comprehensive guide to solar battery storage systems and how they can maximize your solar investment.",
    content: `Solar battery storage is revolutionizing how homeowners use solar energy, allowing you to store excess power for use at night or during peak rate periods.

Why Battery Storage Matters:

Traditional solar systems generate power during the day but rely on the grid when the sun sets. Battery storage eliminates this dependency, providing:

- 24/7 solar power usage
- Emergency backup power
- Peak rate period shifting
- Grid independence
- Increased system efficiency

Popular Battery Options:

1. Lithium-ion Batteries
- Most efficient and durable
- 10-15 year lifespan
- Cost: $8,000-$15,000 for 10kWh

2. Lead-acid Batteries
- More affordable
- 5-7 year lifespan
- Cost: $3,000-$6,000 for 10kWh

Investment Considerations:
- System capacity needed
- Budget constraints
- Payback period analysis
- Potential government incentives

Battery technology continues to improve, making this an excellent time to consider storage for your solar system.`,
    image: "/img/battery.png",
    author: "James Wilson",
    date: "2023-12-20",
    category: "Energy Storage",
    readTime: 8,
  },
];

export const blogCategories = ["All", "Solar Benefits", "Technical Guide", "Financial Benefits", "Comparison Guide", "Energy Storage"];
