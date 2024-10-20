// src/data/servicesData.js

import exteriorPic from '../assets/exterior.jpg';
import interiorPic from '../assets/interior.jpeg';
import fulldetailPic from '../assets/fulldetail.jpg';
import ceramiccoatingPic from '../assets/ceramiccoating.jpg';

const serviceData = [
  {
    id: 1,
    title: 'Exterior Detailing',
    shortDescription: 'Thorough cleaning and protection of your vehicle\'s exterior.',
    fullDescription: 'Our Exterior Detailing service includes thorough cleaning, polishing, and protecting all exterior surfaces of your vehicle. We remove contaminants, restore shine, and protect your paint.',
    image: exteriorPic,
    price: 150,
    features: [
      'Hand wash and dry',
      'Clay bar treatment',
      'Polishing and waxing',
      'Wheel and tire cleaning',
      'Exterior trim restoration',
    ],
    popular: true,
  },
  {
    id: 2,
    title: 'Interior Detailing',
    shortDescription: 'Deep cleaning and revitalization of your vehicle\'s interior.',
    fullDescription: 'Our Interior Detailing service ensures that every nook and cranny inside your vehicle is cleaned and refreshed. We meticulously clean upholstery, vacuum carpets, sanitize surfaces, and leave your interior looking and smelling like new.',
    image: interiorPic,
    price: 130,
    features: [
      'Vacuuming seats and carpets',
      'Steam cleaning upholstery',
      'Leather conditioning',
      'Dashboard and console cleaning',
      'Window cleaning',
    ],
    popular: false,
  },
  {
    id: 3,
    title: 'Full Detailing',
    shortDescription: 'Complete interior and exterior detailing for a showroom finish.',
    fullDescription: 'Our Full Detailing service combines both exterior and interior detailing for a complete transformation of your vehicle. Experience your car like it\'s brand new again with our comprehensive detailing package.',
    image: fulldetailPic,
    price: 250,
    features: [
      'Complete exterior and interior services',
      'Engine bay cleaning',
      'Odor elimination',
      'Protective coatings',
    ],
    popular: true,
  },
  {
    id: 4,
    title: 'Ceramic Coating',
    shortDescription: 'Advanced paint protection with a long-lasting ceramic coating.',
    fullDescription: 'Our Ceramic Coating service provides a durable layer of protection for your vehicle\'s paint. It offers superior resistance to scratches, chemicals, and environmental contaminants, keeping your car looking glossy and new for years.',
    image: ceramiccoatingPic,
    price: 500,
    features: [
      'Premium ceramic coating application',
      'Long-lasting paint protection',
      'Hydrophobic finish',
      'UV resistance',
      'Scratch resistance',
    ],
    popular: false,
  },
];

export default serviceData;
