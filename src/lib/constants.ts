export const BUSINESS = {
  name: 'DD Catering Services',
  nameTamil: 'டி.டி கேட்டரிங் சேர்விசஸ்',
  tagline: 'Pure Veg Catering with Authentic Taste & Tradition',
  phone: '08939615333',
  phoneFormatted: '+91 89396 15333',
  whatsapp: '918939615333',
  address: '11/62 Periyar Nagar, Senneerkuppam, Poonamallee, Chennai, Tamil Nadu 600056',
  rating: 4.8,
  reviewCount: 68,
  category: 'Pure Vegetarian Catering Service',
  hours: '24 Hours, 7 Days',
  city: 'Chennai',
  state: 'Tamil Nadu',
  pincode: '600056',
  email: 'ddcateringservices@gmail.com',
  mapEmbedUrl:
    'https://maps.google.com/maps?q=Periyar+Nagar+Senneerkuppam+Poonamallee+Chennai+Tamil+Nadu+600056&t=&z=15&ie=UTF8&iwloc=&output=embed',
}

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/menu', label: 'Menu' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export const SERVICES = [
  {
    id: 'wedding',
    title: 'Wedding Catering',
    titleTamil: 'திருமண விருந்து',
    description:
      'Make your special day unforgettable with our authentic South Indian wedding feast. We handle everything from traditional appetizers to elaborate dessert spreads.',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80',
    features: [
      'Traditional Sadya Menu',
      'Custom Menu Planning',
      'Experienced Staff',
      'Elegant Presentation',
      'Timely Service',
    ],
    icon: '💍',
    guests: '100 – 5000+',
  },
  {
    id: 'engagement',
    title: 'Engagement Catering',
    titleTamil: 'நிச்சயதார்த்த விருந்து',
    description:
      'Celebrate your engagement with a delightful spread of traditional Tamil vegetarian delicacies prepared with love and care, creating sweet memories.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80',
    features: [
      'Curated Engagement Menu',
      'Variety of Sweets',
      'Live Cooking Stations',
      'Hygiene Certified Staff',
      'Beautiful Setup',
    ],
    icon: '💑',
    guests: '50 – 2000+',
  },
  {
    id: 'reception',
    title: 'Reception Catering',
    titleTamil: 'வரவேற்பு விருந்து',
    description:
      'An elegant reception deserves exceptional food. Our reception catering blends tradition with modern presentation to impress every guest.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
    features: [
      'Grand Buffet Setup',
      'Live Counter Options',
      'Multi-cuisine Veg Menu',
      'Professional Service',
      'Premium Crockery',
    ],
    icon: '🎊',
    guests: '100 – 3000+',
  },
  {
    id: 'housewarming',
    title: 'Housewarming Catering',
    titleTamil: 'கிரகப்பிரவேச விருந்து',
    description:
      'Bless your new home with the aroma of traditional Tamil cooking. Our housewarming catering brings warmth, joy, and authentic flavors to your celebration.',
    image: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&q=80',
    features: [
      'Traditional Recipes',
      'Home-style Cooking',
      'Puja Prasad Preparation',
      'Customizable Menu',
      'Clean & Tidy Service',
    ],
    icon: '🏠',
    guests: '50 – 1000+',
  },
  {
    id: 'corporate',
    title: 'Corporate Catering',
    titleTamil: 'நிறுவன விருந்து',
    description:
      'Professional catering for corporate events, team lunches, and office celebrations with healthy, delicious vegetarian options served on time.',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80',
    features: [
      'Healthy Options',
      'Punctual Delivery',
      'Bulk Orders Welcome',
      'Variety Menu',
      'Affordable Packages',
    ],
    icon: '🏢',
    guests: '20 – 500+',
  },
  {
    id: 'traditional',
    title: 'Traditional Functions',
    titleTamil: 'பாரம்பரிய விழாக்கள்',
    description:
      'From Seemantham to Sashtiabdapoothi, we specialize in all traditional Tamil functions with authentic flavors and sacred food preparations.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80',
    features: [
      'Seemantham',
      'Ear Piercing Ceremony',
      'Namakaranam',
      'Ayush Homam',
      'Sashtiabdapoothi',
    ],
    icon: '🪔',
    guests: '30 – 1000+',
  },
]

export const MENU_CATEGORIES = [
  {
    category: 'Breakfast',
    icon: '🌅',
    color: 'from-amber-50 to-orange-50',
    items: [
      { name: 'Idli', description: 'Soft steamed rice cakes with sambar & chutneys' },
      { name: 'Dosa', description: 'Crispy fermented crepe with potato masala' },
      { name: 'Pongal', description: 'Traditional rice & lentil comfort dish' },
      { name: 'Upma', description: 'Savory semolina porridge with vegetables' },
      { name: 'Vada', description: 'Crispy lentil fritters with coconut chutney' },
      { name: 'Poori', description: 'Fried wheat bread with potato curry' },
      { name: 'Kichadi', description: 'Spiced rice and lentil medley' },
      { name: 'Rava Dosa', description: 'Thin crispy semolina crepe' },
    ],
  },
  {
    category: 'Lunch',
    icon: '☀️',
    color: 'from-yellow-50 to-amber-50',
    items: [
      { name: 'Sambar Rice', description: 'Aromatic rice with spiced lentil vegetable stew' },
      { name: 'Rasam Rice', description: 'Tangy pepper-tamarind rice soup' },
      { name: 'Curd Rice', description: 'Cooling yogurt rice with tempering' },
      { name: 'Vegetable Biryani', description: 'Fragrant basmati with seasonal vegetables' },
      { name: 'Mixed Vegetable Curry', description: 'Assorted vegetables in rich gravy' },
      { name: 'Dal Tadka', description: 'Yellow lentils with ghee tempering' },
      { name: 'Kootu', description: 'Vegetable and lentil stir-fry with coconut' },
      { name: 'Aviyal', description: 'Mixed vegetables in coconut-yogurt gravy' },
    ],
  },
  {
    category: 'Dinner',
    icon: '🌙',
    color: 'from-indigo-50 to-blue-50',
    items: [
      { name: 'Chapati', description: 'Whole wheat flatbread with vegetable curry' },
      { name: 'Parotta', description: 'Layered Kerala-style bread with salna' },
      { name: 'Paneer Butter Masala', description: 'Cottage cheese in creamy tomato sauce' },
      { name: 'Mushroom Curry', description: 'Button mushrooms in spiced onion gravy' },
      { name: 'Mixed Dal', description: 'Trio of lentils with aromatic spices' },
      { name: 'Vegetable Fried Rice', description: 'Wok-tossed rice with fresh vegetables' },
      { name: 'Naan', description: 'Soft leavened flatbread with curry' },
      { name: 'Palak Paneer', description: 'Cottage cheese in spiced spinach gravy' },
    ],
  },
  {
    category: 'Sweets',
    icon: '🍮',
    color: 'from-pink-50 to-rose-50',
    items: [
      { name: 'Payasam', description: 'Traditional rice & jaggery kheer' },
      { name: 'Ladoo', description: 'Round sweet balls with besan & ghee' },
      { name: 'Halwa', description: 'Semolina dessert with saffron & nuts' },
      { name: 'Mysore Pak', description: 'Ghee-rich gram flour sweet' },
      { name: 'Kesari', description: 'Saffron semolina dessert with raisins' },
      { name: 'Palkova', description: 'Slow-cooked milk sweet with cardamom' },
      { name: 'Jangiri', description: 'Crispy fermented rice flour sweet' },
      { name: 'Badusha', description: 'Flaky deep-fried sweet with sugar syrup' },
    ],
  },
  {
    category: 'Snacks',
    icon: '🥨',
    color: 'from-orange-50 to-red-50',
    items: [
      { name: 'Samosa', description: 'Crispy pastry with spiced potato filling' },
      { name: 'Bonda', description: 'Golden fried potato dumplings' },
      { name: 'Pakoda', description: 'Assorted vegetable fritters' },
      { name: 'Murukku', description: 'Traditional spiral rice flour snack' },
      { name: 'Bread Pakoda', description: 'Bread slices stuffed & deep fried' },
      { name: 'Chaat', description: 'Tangy street-style savory snack' },
      { name: 'Aloo Tikki', description: 'Spiced potato patties with chutneys' },
      { name: 'Corn Sundal', description: 'Boiled corn with coconut and spices' },
    ],
  },
  {
    category: 'Traditional Specials',
    icon: '⭐',
    color: 'from-gold-50 to-yellow-50',
    items: [
      { name: 'Full Meals (Sadhya)', description: 'Complete traditional banana leaf meal' },
      { name: 'Pongal Kootu', description: 'Festival special with jaggery pongal' },
      { name: 'Kuzhi Paniyaram', description: 'Crispy fermented rice balls' },
      { name: 'Adai Avial', description: 'Lentil crepe with mixed vegetable stew' },
      { name: 'Puliyodarai', description: 'Tamarind spiced rice - festival special' },
      { name: 'Kozhukattai', description: 'Steamed rice dumplings - Vinayaka special' },
      { name: 'Elai Sapad', description: 'Grand banana leaf feast with all sides' },
      { name: 'Sundal Varieties', description: 'Navratri special boiled legume salads' },
    ],
  },
]

export const REVIEWS = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Wedding Host',
    rating: 5,
    text: 'One of the best pure veg catering service in poonamallee circle. Very tasty and hygienic. Highly recommend for any function.',
    avatar: 'RK',
  },
  {
    id: 2,
    name: 'Priya Sundaram',
    role: 'Engagement Function',
    rating: 5,
    text: 'Really impressed about their food and hospitality. The staff was very professional and the food quality was exceptional. Will book again!',
    avatar: 'PS',
  },
  {
    id: 3,
    name: 'Venkatesh Murali',
    role: 'Housewarming Host',
    rating: 5,
    text: 'The food is outstanding — exceptional flavors and presentation. Each dish was carefully prepared with love and tradition. Thank you DD Catering!',
    avatar: 'VM',
  },
  {
    id: 4,
    name: 'Meera Krishnan',
    role: 'Reception Event',
    rating: 5,
    text: 'Variety of sweets were too good. Everyone loved the food at our reception. The staff was neat, clean and very hospitable throughout.',
    avatar: 'MK',
  },
  {
    id: 5,
    name: 'Suresh Babu',
    role: 'Corporate Event',
    rating: 5,
    text: 'Excellent catering service. Clean, timely, and absolutely delicious food. The sambar and rasam were as authentic as home cooking.',
    avatar: 'SB',
  },
  {
    id: 6,
    name: 'Lakshmi Devi',
    role: 'Traditional Function',
    rating: 5,
    text: 'DD Catering made our seemantham feast truly memorable. Traditional Tamil recipes cooked to perfection. The guests were all full of praise!',
    avatar: 'LD',
  },
]

export const WHY_CHOOSE_US = [
  {
    icon: '🌿',
    title: 'Pure Vegetarian',
    description:
      '100% vegetarian menu with strict no cross-contamination policy. FSSAI compliant veg-only kitchen.',
  },
  {
    icon: '🧼',
    title: 'Hygienic Preparation',
    description:
      'Sanitized kitchens, gloved staff, and fresh ingredients ensure the highest standards of food hygiene always.',
  },
  {
    icon: '👨‍🍳',
    title: 'Expert Tamil Chefs',
    description:
      'Experienced chefs with decades of expertise in authentic Tamil Nadu traditional and modern vegetarian cuisine.',
  },
  {
    icon: '⏰',
    title: 'Available 24 Hours',
    description:
      'Round-the-clock availability for inquiries and bookings. We ensure food is served fresh and perfectly on schedule.',
  },
  {
    icon: '💰',
    title: 'Competitive Pricing',
    description:
      'Premium quality catering at fair and transparent pricing. Flexible customizable packages for every budget.',
  },
  {
    icon: '❤️',
    title: 'Made with Love',
    description:
      'Every dish is prepared with genuine care, using traditional family recipes passed through generations.',
  },
  {
    icon: '🌟',
    title: '4.8★ Rated Service',
    description:
      'Consistently rated 4.8 out of 5 by 68+ happy clients. Our reputation speaks through our food and service.',
  },
  {
    icon: '🎪',
    title: 'All Event Types',
    description:
      'From intimate housewarmings to grand weddings — we expertly cater to all scales and types of celebrations.',
  },
]

export const EVENT_TYPES = [
  { name: 'Weddings', icon: '💍', desc: 'Grand traditional wedding feasts' },
  { name: 'Engagements', icon: '💑', desc: 'Sweet and savory spreads' },
  { name: 'Receptions', icon: '🎊', desc: 'Elegant reception buffets' },
  { name: 'Housewarming', icon: '🏠', desc: 'Grihapravesh catering' },
  { name: 'Birthday Parties', icon: '🎂', desc: 'Joyful birthday feasts' },
  { name: 'Corporate Events', icon: '🏢', desc: 'Professional office catering' },
  { name: 'Seemantham', icon: '🤱', desc: 'Baby shower ceremony' },
  { name: 'Sashtiabdapoothi', icon: '🙏', desc: '60th birthday celebration' },
]

export const GALLERY_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80',
    alt: 'Traditional South Indian feast spread',
    category: 'Food',
  },
  {
    src: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80',
    alt: 'Colorful vegetarian dishes',
    category: 'Food',
  },
  {
    src: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&q=80',
    alt: 'Variety of Indian sweets',
    category: 'Sweets',
  },
  {
    src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
    alt: 'Elaborate food presentation',
    category: 'Events',
  },
  {
    src: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=600&q=80',
    alt: 'Buffet setup at event',
    category: 'Events',
  },
  {
    src: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80',
    alt: 'Traditional Tamil function setup',
    category: 'Decor',
  },
  {
    src: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80',
    alt: 'Indian rice and curry dish',
    category: 'Food',
  },
  {
    src: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80',
    alt: 'South Indian dosa breakfast',
    category: 'Food',
  },
  {
    src: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=600&q=80',
    alt: 'Indian sweet desserts',
    category: 'Sweets',
  },
  {
    src: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&q=80',
    alt: 'Wedding banquet hall setup',
    category: 'Events',
  },
  {
    src: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80',
    alt: 'Indian spices and ingredients',
    category: 'Food',
  },
  {
    src: 'https://images.unsplash.com/photo-1567337710282-00832b415979?w=600&q=80',
    alt: 'Banana leaf meal service',
    category: 'Events',
  },
]

export const FAQS = [
  {
    q: 'What type of events do you cater?',
    a: 'We cater for weddings, engagements, receptions, housewarmings, corporate events, birthday parties, and all traditional Tamil functions including Seemantham, Namakaranam, and Sashtiabdapoothi.',
  },
  {
    q: 'Are you available 24 hours?',
    a: 'Yes! DD Catering Services is available 24 hours a day, 7 days a week. You can call or WhatsApp us at any time for inquiries, quotes, or urgent bookings.',
  },
  {
    q: 'What is the minimum guest count you serve?',
    a: 'We can accommodate functions starting from 50 guests up to 5000+ guests. Contact us for customized packages based on your guest count and requirements.',
  },
  {
    q: 'Do you provide serving staff and equipment?',
    a: 'Yes, we provide well-trained, neatly uniformed serving staff who maintain high standards of hygiene and hospitality. We also provide all necessary crockery, serving equipment, and setup.',
  },
  {
    q: 'Can I customize the menu?',
    a: 'Absolutely! We work closely with you to create a custom menu matching your preferences, regional tastes, dietary requirements, and budget. Trial tasting sessions are available.',
  },
  {
    q: 'What areas in Chennai do you serve?',
    a: 'We serve all of Chennai and surrounding areas including Poonamallee, Porur, Avadi, Ambattur, Koyambedu, Maduravoyal, Vanagaram, Nerkundram, and nearby districts up to 60 km.',
  },
  {
    q: 'How far in advance should I book?',
    a: 'We recommend booking at least 2–4 weeks in advance for large events (500+ guests) and 1–2 weeks for smaller functions. However, we also accommodate last-minute bookings based on availability.',
  },
  {
    q: 'Do you offer a tasting session before booking?',
    a: 'Yes! We offer complimentary tasting sessions for confirmed bookings above 200 guests. For smaller events, a nominal tasting fee applies, which is adjusted in your final bill.',
  },
]
