const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Create admin user
  const hashedPassword = await bcrypt.hash('Admin@1234', 12);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@sagorahmed.com' },
    update: {},
    create: {
      email: 'admin@sagorahmed.com',
      password: hashedPassword,
      name: 'Md Sagor Ahmed',
      role: 'admin',
    },
  });
  console.log('✅ Admin user created:', admin.email);

  // Create sample projects
  const projects = [
    {
      title: 'E-Commerce WordPress Site',
      titleBn: 'ই-কমার্স ওয়ার্ডপ্রেস সাইট',
      description: 'A fully functional WooCommerce store with custom theme, payment gateway integration, and inventory management system.',
      descriptionBn: 'কাস্টম থিম, পেমেন্ট গেটওয়ে ইন্টিগ্রেশন এবং ইনভেন্টরি ম্যানেজমেন্ট সিস্টেম সহ একটি সম্পূর্ণ ই-কমার্স স্টোর।',
      image: '/images/project-1.jpg',
      liveUrl: 'https://example.com',
      technologies: JSON.stringify(['WordPress', 'WooCommerce', 'PHP', 'CSS']),
      category: 'E-Commerce',
      featured: true,
      order: 1,
    },
    {
      title: 'Corporate Business Website',
      titleBn: 'কর্পোরেট বিজনেস ওয়েবসাইট',
      description: 'A professional multi-page corporate website with SEO optimization, custom Gutenberg blocks, and contact form integration.',
      descriptionBn: 'SEO অপ্টিমাইজেশন, কাস্টম গুটেনবার্গ ব্লক এবং যোগাযোগ ফর্ম ইন্টিগ্রেশন সহ একটি পেশাদার কর্পোরেট ওয়েবসাইট।',
      image: '/images/project-2.jpg',
      liveUrl: 'https://example.com',
      technologies: JSON.stringify(['WordPress', 'Elementor', 'CSS', 'JavaScript']),
      category: 'Business',
      featured: true,
      order: 2,
    },
    {
      title: 'Portfolio Website',
      titleBn: 'পোর্টফোলিও ওয়েবসাইট',
      description: 'A clean and modern portfolio website for a photographer with gallery, lightbox, and online booking system.',
      descriptionBn: 'গ্যালারি, লাইটবক্স এবং অনলাইন বুকিং সিস্টেম সহ একজন ফটোগ্রাফারের জন্য একটি আধুনিক পোর্টফোলিও ওয়েবসাইট।',
      image: '/images/project-3.jpg',
      liveUrl: 'https://example.com',
      technologies: JSON.stringify(['WordPress', 'PHP', 'jQuery', 'CSS']),
      category: 'Portfolio',
      featured: true,
      order: 3,
    },
    {
      title: 'Real Estate Listing Site',
      titleBn: 'রিয়েল এস্টেট লিস্টিং সাইট',
      description: 'A property listing website with advanced search, map integration, and mortgage calculator.',
      descriptionBn: 'উন্নত অনুসন্ধান, মানচিত্র ইন্টিগ্রেশন এবং মর্টগেজ ক্যালকুলেটর সহ একটি প্রপার্টি লিস্টিং ওয়েবসাইট।',
      image: '/images/project-4.jpg',
      liveUrl: 'https://example.com',
      technologies: JSON.stringify(['WordPress', 'WP All Import', 'Elementor', 'JavaScript']),
      category: 'Real Estate',
      featured: false,
      order: 4,
    },
    {
      title: 'Restaurant Website',
      titleBn: 'রেস্টুরেন্ট ওয়েবসাইট',
      description: 'A restaurant website with online menu, table reservation system, and food delivery integration.',
      descriptionBn: 'অনলাইন মেনু, টেবিল রিজার্ভেশন সিস্টেম এবং ফুড ডেলিভারি ইন্টিগ্রেশন সহ একটি রেস্টুরেন্ট ওয়েবসাইট।',
      image: '/images/project-5.jpg',
      liveUrl: 'https://example.com',
      technologies: JSON.stringify(['WordPress', 'WooCommerce', 'CSS', 'PHP']),
      category: 'Restaurant',
      featured: false,
      order: 5,
    },
    {
      title: 'Blog & News Portal',
      titleBn: 'ব্লগ ও নিউজ পোর্টাল',
      description: 'A high-traffic news and blog portal with custom post types, categories, and performance optimization.',
      descriptionBn: 'কাস্টম পোস্ট টাইপ, ক্যাটাগরি এবং পারফরম্যান্স অপ্টিমাইজেশন সহ একটি উচ্চ-ট্র্যাফিক নিউজ পোর্টাল।',
      image: '/images/project-6.jpg',
      liveUrl: 'https://example.com',
      technologies: JSON.stringify(['WordPress', 'Yoast SEO', 'PHP', 'MySQL']),
      category: 'Blog',
      featured: false,
      order: 6,
    },
  ];

  for (const project of projects) {
    await prisma.project.upsert({
      where: { id: project.order },
      update: project,
      create: project,
    });
  }
  console.log('✅ Sample projects seeded');

  // Create sample blog posts
  const posts = [
    {
      title: 'How to Speed Up Your WordPress Website in 2024',
      titleBn: '২০২৪ সালে আপনার ওয়ার্ডপ্রেস ওয়েবসাইট কীভাবে দ্রুত করবেন',
      slug: 'how-to-speed-up-wordpress-2024',
      excerpt: 'Learn the top techniques to dramatically improve your WordPress website loading speed and performance.',
      excerptBn: 'আপনার ওয়ার্ডপ্রেস ওয়েবসাইটের লোডিং গতি এবং পারফরম্যান্স উন্নত করার শীর্ষ কৌশলগুলি জানুন।',
      content: `# How to Speed Up Your WordPress Website in 2024\n\nWebsite speed is crucial for user experience and SEO. Here are the top techniques...\n\n## 1. Use a Fast Hosting Provider\nChoose managed WordPress hosting for optimal performance.\n\n## 2. Optimize Images\nAlways compress images before uploading. Use WebP format when possible.\n\n## 3. Enable Caching\nUse caching plugins like WP Rocket or W3 Total Cache.\n\n## 4. Use a CDN\nContent Delivery Networks distribute your content globally for faster access.\n\n## 5. Minimize Plugins\nEvery plugin adds load time. Keep only what you need.`,
      contentBn: `# ২০২৪ সালে আপনার ওয়ার্ডপ্রেস ওয়েবসাইট কীভাবে দ্রুত করবেন\n\nওয়েবসাইটের গতি ব্যবহারকারীর অভিজ্ঞতা এবং SEO এর জন্য অত্যন্ত গুরুত্বপূর্ণ...`,
      image: '/images/blog-1.jpg',
      category: 'WordPress',
      tags: JSON.stringify(['WordPress', 'Performance', 'Speed Optimization']),
      published: true,
      views: 245,
    },
    {
      title: 'Top 5 WordPress Themes for 2024',
      titleBn: '২০২৪ সালের শীর্ষ ৫টি ওয়ার্ডপ্রেস থিম',
      slug: 'top-5-wordpress-themes-2024',
      excerpt: 'Discover the best WordPress themes that will make your website stand out in 2024.',
      excerptBn: '২০২৪ সালে আপনার ওয়েবসাইটকে আলাদা করে তুলবে এমন সেরা ওয়ার্ডপ্রেস থিমগুলি আবিষ্কার করুন।',
      content: `# Top 5 WordPress Themes for 2024\n\nChoosing the right theme is essential for your website success...\n\n## 1. Astra\nLightweight and highly customizable theme perfect for any type of website.\n\n## 2. OceanWP\nFeature-rich theme with excellent compatibility with popular plugins.\n\n## 3. GeneratePress\nFocused on speed and usability, ideal for performance-oriented sites.\n\n## 4. Divi\nPower visual builder with drag-and-drop functionality.\n\n## 5. Hello Elementor\nMinimal base theme designed specifically for Elementor page builder.`,
      contentBn: `# ২০২৪ সালের শীর্ষ ৫টি ওয়ার্ডপ্রেস থিম\n...`,
      image: '/images/blog-2.jpg',
      category: 'WordPress',
      tags: JSON.stringify(['WordPress', 'Themes', 'Design']),
      published: true,
      views: 189,
    },
    {
      title: 'WooCommerce vs Shopify: Which is Better for Your Business?',
      titleBn: 'WooCommerce বনাম Shopify: আপনার ব্যবসার জন্য কোনটি ভালো?',
      slug: 'woocommerce-vs-shopify',
      excerpt: 'A detailed comparison of WooCommerce and Shopify to help you choose the right platform.',
      excerptBn: 'সঠিক প্ল্যাটফর্ম বেছে নিতে WooCommerce এবং Shopify এর বিস্তারিত তুলনা।',
      content: `# WooCommerce vs Shopify: Which is Better?\n\nBoth platforms have their strengths and weaknesses...\n\n## WooCommerce Pros\n- Free and open-source\n- Full customization control\n- No transaction fees\n- Runs on WordPress\n\n## Shopify Pros\n- Hosted solution (no server management)\n- Easier to set up\n- 24/7 support\n- App ecosystem\n\n## Final Verdict\nChoose WooCommerce if you want control and flexibility. Choose Shopify for simplicity and managed hosting.`,
      contentBn: `# WooCommerce বনাম Shopify: কোনটি ভালো?\n...`,
      image: '/images/blog-3.jpg',
      category: 'E-Commerce',
      tags: JSON.stringify(['WooCommerce', 'Shopify', 'E-Commerce']),
      published: true,
      views: 312,
    },
  ];

  for (const post of posts) {
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: post,
      create: post,
    });
  }
  console.log('✅ Sample blog posts seeded');

  // Create site settings
  const settings = [
    { key: 'site_name', value: 'Md Sagor Ahmed' },
    { key: 'site_tagline', value: 'FullStack Developer & WordPress Developer' },
    { key: 'hero_title_en', value: 'Building Powerful WordPress Websites' },
    { key: 'hero_title_bn', value: 'শক্তিশালী ওয়ার্ডপ্রেস ওয়েবসাইট তৈরি করছি' },
    { key: 'hero_subtitle_en', value: 'I craft high-performance full-stack web applications and custom WordPress websites that convert visitors into clients.' },
    { key: 'hero_subtitle_bn', value: 'আপনার ব্যবসার ডিজিটাল রূপান্তরে আমি দিচ্ছি আধুনিক ফুলস্ট্যাক ডেভেলপমেন্ট এবং কাস্টম ওয়ার্ডপ্রেস সলিউশন—যা কেবল সুন্দরই নয়, বরং আপনার ব্যবসার সেলস বাড়াতেও সাহায্য করবে।' },
    { key: 'whatsapp', value: '+8801XXXXXXXXX' },
    { key: 'email', value: 'sagor@example.com' },
    { key: 'location', value: 'Dhaka, Bangladesh' },
    { key: 'years_experience', value: '5+' },
    { key: 'projects_completed', value: '100+' },
    { key: 'happy_clients', value: '80+' },
  ];

  for (const setting of settings) {
    await prisma.siteSettings.upsert({
      where: { key: setting.key },
      update: { value: setting.value },
      create: setting,
    });
  }
  console.log('✅ Site settings seeded');

  console.log('🎉 Database seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
