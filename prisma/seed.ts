import prisma from "../src/lib/prisma";

async function main() {
  // Seed testimonials from constants
  const testimonials = [
    {
      quote: "Switching to solar was one of the best decisions we made for our home. The team was incredibly knowledgeable and walked us through every step, from watching the system to understanding the options. The process was efficient and extremely disruptive. We started seeing the benefits almost immediately. The support team was always ready to help and provided excellent service. I highly recommend this company.",
      author: "Duala Peterson",
      image: "/testimonial.png",
      rating: 5,
      verified: true,
      active: true,
    },
    {
      quote: "As a business owner, I was looking for ways to reduce operational costs without compromising efficiency. Going solar was a strategic move, and this company exceeded my expectations. The installation was completed over the weekend to avoid any disruption, and the team was extremely professional. We've seen a significant reduction in energy expenses, improving our bottom line.",
      author: "Daniel Michaels",
      image: "/testimonial.png",
      rating: 5,
      verified: true,
      active: true,
    },
    {
      quote: "Our household has high energy consumption with kids, gadgets, and appliances running all day. We were tired of the skyrocketing utility bills and decided to go solar. This company was fantastic from the start. They did a detailed assessment and the team was extremely professional.",
      author: "Mike Timberlake",
      image: "/testimonial.png",
      rating: 5,
      verified: true,
      active: true,
    },
    {
      quote: "From the moment I reached out for a consultation, their team was incredibly professional and knowledgeable. They took the time to explain all of my options, and I felt confident in my decision to go solar. The installation was quick and efficient, and the crew made sure everything was set up perfectly.",
      author: "Survi Basyal",
      image: "/testimonial.png",
      rating: 5,
      verified: true,
      active: true,
    },
    {
      quote: "Young and energetic Daylight Solar team did an outstanding job installing our solar panels. From start to finish, their team was professional, efficient, and knowledgeable. The entire process was smooth, and they explained everything clearly. We're thrilled with the quality of their work and the noticeable savings on our energy bills.",
      author: "Rupak Regmi",
      image: "/testimonial.png",
      rating: 5,
      verified: true,
      active: true,
    },
  ];

  for (const testimonial of testimonials) {
    await prisma.testimonial.create({ data: testimonial });
  }

  // Seed blogs
  const blogs = [
    {
      title: "How Solar Panels Can Save You Money This Summer",
      slug: "how-solar-panels-save-money-summer",
      excerpt: "Discover how installing solar panels can significantly reduce your electricity bills during the hot summer months.",
      content: `Solar panels are one of the most effective ways to reduce your electricity bills, especially during summer when air conditioning usage peaks. In Australia, summer temperatures can be extreme, leading to high energy consumption.

By harnessing the power of the sun, solar panels generate electricity during peak daylight hours when your home needs it most. This direct usage means you're drawing less from the grid, significantly reducing your energy costs.

Benefits include:
- Reduced electricity bills by up to 70%
- Protection against rising energy prices
- Environmental impact reduction
- Government rebates and incentives

The average household can save between $10,000 to $30,000 over the lifetime of a solar system.`,
      image: "/img/solar-summer.jpg",
      author: "Daylight Solar Team",
      category: "Solar Benefits",
      readTime: 5,
      published: true,
    },
    {
      title: "Understanding Solar Panel Efficiency in Different Weather",
      slug: "solar-panel-efficiency-weather",
      excerpt: "Learn how weather conditions affect solar panel performance and what you can expect year-round.",
      content: `Many people assume that solar panels only work in sunny weather. However, modern solar technology is designed to generate electricity even on cloudy days, though efficiency is lower.

Weather Impact Overview:
- Sunny Days: 100% efficiency
- Cloudy Days: 25-50% efficiency
- Rainy Days: 15-25% efficiency

Even in less-than-ideal weather, your solar system continues to generate power. Modern inverters and battery storage systems help maximize the use of generated electricity.`,
      image: "/img/solar-weather.jpg",
      author: "Sarah Mitchell",
      category: "Technical Guide",
      readTime: 6,
      published: true,
    },
    {
      title: "Government Solar Rebates and Incentives in 2026",
      slug: "government-solar-rebates-2026",
      excerpt: "Complete guide to available government rebates, incentives, and tax breaks for solar panel installations.",
      content: `Installing solar panels is more affordable than ever thanks to various government incentives and rebate programs available to Australian homeowners and businesses.

Current Incentives Available:
1. Small-scale Technology Certificates (STCs)
2. Feed-in Tariffs
3. State-Based Incentives
4. Tax Benefits

The best time to install is now, as incentive values are declining annually.`,
      image: "/img/solar-rebates.jpg",
      author: "David Chen",
      category: "Financial Benefits",
      readTime: 7,
      published: true,
    },
  ];

  for (const blog of blogs) {
    await prisma.blog.create({ data: blog });
  }

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
