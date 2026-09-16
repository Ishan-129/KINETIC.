export interface ServicePricingItem {
  id: string;
  category: string;
  title: string;
  description: string;
  price: string;
  pricePrefix?: string;
  currency?: string;
  billing: string;
  features: string[];
  cta: string;
  adSpendNote?: {
    title: string;
    description: string;
  };
}

export interface BundleFeatureGroup {
  title: string;
  subtitle?: string;
  features: string[];
}

export interface BundlePricingItem {
  id: string;
  name: string;
  price: string;
  currency?: string;
  billing: string;
  billingClarification?: string;
  description: string;
  setupNote?: string;
  featureGroups: BundleFeatureGroup[];
  includes?: string[];
  bestFor?: string;
  badge?: string;
  isPopular?: boolean;
  isHighlighted?: boolean;
  cta: string;
  adSpendNote?: {
    title: string;
    description: string;
  };
}

export interface PricingFAQItem {
  question: string;
  answer: string;
}

export const CORE_SERVICES: ServicePricingItem[] = [
  {
    id: 'service-website',
    category: 'WEBSITE',
    title: 'Complete Website Pack',
    description: 'A professionally designed website built once, launched for your business, and ready to turn visitors into enquiries.',
    currency: '₹',
    price: '7,999',
    billing: 'One-time',
    features: [
      'Professional website',
      '1–3 pages',
      'Responsive design',
      'WhatsApp integration',
      'Contact / enquiry form',
      'Google Maps',
      'Basic SEO',
      'Mobile optimization',
      'Fast-loading setup',
      'Basic analytics',
    ],
    cta: 'Build My Website',
  },
  {
    id: 'service-social',
    category: 'SOCIAL MEDIA',
    title: 'Full Social Media Management',
    description: 'We handle your content, posting and social presence so your business stays active, consistent and relevant.',
    pricePrefix: 'Starting at',
    currency: '₹',
    price: '5,999',
    billing: '/month',
    features: [
      'Social media management',
      'Content strategy',
      'Content calendar',
      'Creative posts',
      'Reels',
      'Captions & hashtags',
      'Posting & scheduling',
      'Basic community management',
      'Monthly analytics',
      'Competitor research',
    ],
    cta: 'Grow My Socials',
  },
  {
    id: 'service-leads',
    category: 'LEAD GENERATION',
    title: 'Marketing + Lead Ads',
    description: 'Turn your advertising budget into qualified enquiries through targeted campaigns across Meta and Google.',
    pricePrefix: 'Starting at',
    currency: '₹',
    price: '4,999',
    billing: '/month',
    features: [
      'Meta Ads management',
      'Campaign setup',
      'Audience research',
      'Ad creatives',
      'Lead forms',
      'WhatsApp lead integration',
      'Tracking',
      'Campaign optimization',
      'Retargeting',
      'Monthly reporting',
    ],
    adSpendNote: {
      title: 'Ad spend is separate.',
      description: 'Your advertising budget is paid directly to the advertising platform and is not included in our management fee.',
    },
    cta: 'Get More Leads',
  },
];

export const BUNDLE_PACKAGES: BundlePricingItem[] = [
  {
    id: 'bundle-get-online',
    name: 'Get Online',
    price: '9,999',
    currency: '₹',
    billing: 'One-time',
    billingClarification: 'One-time website setup',
    description: 'Get your business online with a professional website built and launched for you.',
    featureGroups: [
      {
        title: 'ONE-TIME WEBSITE SETUP',
        features: [
          'Professional website',
          'Up to 3 pages',
          'Responsive design',
          'WhatsApp integration',
          'Google Maps',
          'Contact / enquiry form',
          'Basic SEO',
          'Mobile optimization',
          'Basic analytics',
        ],
      },
    ],
    bestFor: 'Businesses getting online for the first time',
    cta: 'Get Online',
  },
  {
    id: 'bundle-get-noticed',
    name: 'Get Noticed',
    price: '14,999',
    currency: '₹',
    billing: '/ month',
    billingClarification: 'Initial website setup + monthly social media management',
    description: 'A professional website setup plus ongoing social media management to keep your business visible.',
    badge: 'POPULAR',
    isPopular: true,
    setupNote: 'Website is built and launched during initial setup. Monthly fee covers ongoing social media management and digital support.',
    featureGroups: [
      {
        title: 'ONE-TIME SETUP',
        subtitle: 'Professional Website',
        features: [
          'Website setup',
          'Up to 5 pages',
          'Responsive design',
          'WhatsApp integration',
          'Contact / enquiry form',
          'Google Maps',
          'Basic SEO',
        ],
      },
      {
        title: 'MONTHLY MANAGEMENT',
        subtitle: 'Social Media Management',
        features: [
          '12 posts / month',
          '8 reels / month',
          'Content strategy',
          'Content calendar',
          'Captions & hashtags',
          'Posting & scheduling',
          'Monthly analytics',
          'Competitor research',
        ],
      },
    ],
    bestFor: 'Businesses ready to build a consistent digital presence',
    cta: 'Get Noticed',
  },
  {
    id: 'bundle-get-leads',
    name: 'Get Leads',
    price: '19,999',
    currency: '₹',
    billing: '/ month',
    billingClarification: 'Initial website setup + monthly social media + lead generation',
    description: 'Website setup, social media and ongoing paid campaigns designed to turn attention into enquiries.',
    badge: 'MOST POPULAR',
    isPopular: true,
    isHighlighted: true,
    setupNote: 'Website is a one-time setup included with the package. Social media and lead generation are ongoing monthly services.',
    featureGroups: [
      {
        title: 'ONE-TIME WEBSITE SETUP',
        features: [
          'Professional website',
          'Up to 5 pages',
          'Responsive design',
          'WhatsApp integration',
          'Contact / enquiry form',
          'Google Maps',
          'Basic SEO',
          'Conversion-focused structure',
        ],
      },
      {
        title: 'MONTHLY SOCIAL MEDIA',
        features: [
          '12 posts / month',
          '8 reels / month',
          'Social media management',
          'Content strategy',
          'Content calendar',
          'Captions & hashtags',
          'Posting & scheduling',
          'Monthly analytics',
        ],
      },
      {
        title: 'MONTHLY LEAD GENERATION',
        features: [
          'Meta Ads management',
          'Lead generation campaigns',
          'Audience research',
          'Ad creatives',
          'Lead forms',
          'WhatsApp lead integration',
          'Tracking & analytics',
          'Retargeting',
          'Campaign optimization',
          'Monthly reporting',
        ],
      },
    ],
    adSpendNote: {
      title: 'Ad spend is separate.',
      description: 'Your advertising budget is paid directly to the advertising platform and is not included in our management fee.',
    },
    bestFor: 'Businesses focused on generating enquiries and customers',
    cta: 'Get More Leads',
  },
  {
    id: 'bundle-growth-partner',
    name: 'Growth Partner',
    price: '29,999',
    currency: '₹',
    billing: '/ month',
    billingClarification: 'Complete digital growth team: one-time website setup + ongoing full management',
    description: 'Your complete digital growth team — from initial website setup to ongoing content, advertising and optimization.',
    badge: 'FULL GROWTH',
    setupNote: 'Website is built and launched during the initial setup. The monthly plan covers ongoing marketing, content, optimization and support.',
    featureGroups: [
      {
        title: 'ONE-TIME WEBSITE SETUP',
        features: [
          'Professional website',
          'Up to 8 pages',
          'Responsive design',
          'WhatsApp integration',
          'Contact / enquiry forms',
          'Google Maps',
          'Basic SEO',
          'Conversion optimization',
        ],
      },
      {
        title: 'MONTHLY SOCIAL MEDIA',
        features: [
          'Full social media management',
          '20 posts / month',
          '12 reels / month',
          'Content strategy',
          'Content calendar',
          'Captions & hashtags',
          'Posting & scheduling',
          'Community management',
          'Monthly analytics',
          'Competitor research',
        ],
      },
      {
        title: 'MONTHLY PAID MARKETING',
        features: [
          'Meta Ads management',
          'Google Ads management',
          'Lead generation',
          'Audience research',
          'Ad creatives',
          'Retargeting',
          'Conversion tracking',
          'Campaign optimization',
          'Performance reporting',
        ],
      },
      {
        title: 'MONTHLY STRATEGY & SUPPORT',
        features: [
          'Monthly strategy meeting',
          'Conversion optimization',
          'Priority support',
        ],
      },
    ],
    adSpendNote: {
      title: 'Ad spend is separate.',
      description: 'Your advertising budget is paid directly to the advertising platform and is not included in our agency fee.',
    },
    bestFor: 'Businesses looking for an ongoing digital growth partner',
    cta: 'Become A Growth Partner',
  },
];

export const PRICING_FAQS: PricingFAQItem[] = [
  {
    question: 'Is the website delivered every month?',
    answer: 'No. Your website is a one-time build and launch. Monthly packages include the initial website setup where specified, while the recurring fee covers ongoing marketing, social media, advertising, strategy and support.',
  },
  {
    question: 'What happens after my website is launched?',
    answer: 'Your website remains live while our monthly services focus on growing your online presence, generating enquiries and optimizing your marketing performance. Additional website updates or development work can be quoted separately when required.',
  },
  {
    question: 'Is ad spend included?',
    answer: 'No. Advertising spend is separate from our management fee. Your advertising budget is paid directly to the advertising platform (Meta, Google, etc.).',
  },
  {
    question: 'How does website setup work in monthly packages?',
    answer: 'Website setup is completed during the initial onboarding phase. Once your website is designed, developed and launched, the monthly investment is dedicated entirely to active marketing, content creation, ad management, and conversion optimization.',
  },
  {
    question: 'Can I start with just one service?',
    answer: 'Yes. You can start with an individual service (such as the Complete Website Pack, Social Media, or Lead Generation) and upgrade to a comprehensive monthly growth package anytime as your business expands.',
  },
  {
    question: 'Can I customize a package?',
    answer: 'Yes. We can tailor service combinations and deliverable volumes based on your unique business goals and requirements.',
  },
  {
    question: 'Do you provide website maintenance?',
    answer: 'Additional website updates or development work beyond the initial launch can be quoted separately when required, ensuring you only pay for what you need rather than an expensive or forced monthly retainer.',
  },
  {
    question: 'Can I upgrade later?',
    answer: 'Absolutely. Upgrading is seamless—you can move from single services or starter packages to comprehensive growth partner plans without any disruption.',
  },
];
