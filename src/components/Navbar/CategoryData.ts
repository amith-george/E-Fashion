// components/Navbar/CategoryData.ts

export type CategoryKey = "MEN" | "WOMEN" | "KIDS" | "HOME" | "BEAUTY";

// theme colors per category
export const categoryColors: Record<CategoryKey, string> = {
  MEN: "#0071e3",    // blue
  WOMEN: "#e91e63",  // pink
  KIDS: "#ff9800",   // orange
  HOME: "#fdd835",   // yellow
  BEAUTY: "#f44336", // red
};

type CategorySection = {
  heading: string;
  items: string[];
};

export const categoryDropdowns: Record<CategoryKey, CategorySection[][]> = {
  MEN: [
    [
      {
        heading: 'Topwear',
        items: [
          'T-Shirts',
          'Casual Shirts',
          'Formal Shirts',
          'Sweatshirts',
          'Sweaters',
          'Jackets',
          'Blazers & Coats',
          'Suits',
          'Rain Jackets',
        ],
      },
      {
        heading: 'Indian & Festive Wear',
        items: ['Kurtas & Kurta Sets', 'Sherwanis', 'Nehru Jackets', 'Dhotis'],
      },
    ],
    [
      {
        heading: 'Bottomwear',
        items: [
          'Jeans',
          'Casual Trousers',
          'Formal Trousers',
          'Shorts',
          'Track Pants & Joggers',
        ],
      },
      {
        heading: 'Innerwear & Sleepwear',
        items: [
          'Briefs & Trunks',
          'Boxers',
          'Vests',
          'Sleepwear & Loungewear',
          'Thermals',
        ],
      },
      {
        heading: 'Plus Size',
        items: [],
      },
    ],
    [
      {
        heading: 'Footwear',
        items: [
          'Casual Shoes',
          'Sports Shoes',
          'Formal Shoes',
          'Sneakers',
          'Sandals & Floaters',
          'Flip Flops',
          'Socks',
        ],
      },
      { heading: 'Personal Care & Grooming', items: [] },
      { heading: 'Sunglasses & Frames', items: [] },
      { heading: 'Watches', items: [] },
    ],
    [
      {
        heading: 'Sports & Active Wear',
        items: [
          'Sports Shoes',
          'Sports Sandals',
          'Active T-Shirts',
          'Track Pants & Shorts',
          'Tracksuits',
          'Jackets & Sweatshirts',
          'Sports Accessories',
          'Swimwear',
        ],
      },
      {
        heading: 'Gadgets',
        items: ['Smart Wearables', 'Fitness Gadgets', 'Headphones', 'Speakers'],
      },
    ],
    [
      {
        heading: 'Fashion Accessories',
        items: [
          'Wallets',
          'Belts',
          'Perfumes & Body Mists',
          'Trimmers',
          'Deodorants',
          'Ties Cufflinks & Pocket Squares',
          'Accessory Gift Sets',
          'Caps & Hats',
          'Mufflers Scarves & Gloves',
          'Phone Cases',
          'Rings & Wristwear',
          'Helmets',
        ],
      },
      { heading: 'Bags & Backpacks', items: [] },
      { heading: 'Luggages & Trolleys', items: [] },
    ],
  ],

  WOMEN: [
    [
      {
        heading: 'Indian & Fusion Wear',
        items: [
          'Kurtas & Suits',
          'Kurtis Tunics & Tops',
          'Sarees',
          'Ethnic Wear',
          'Leggings Salwars & Churidars',
          'Skirts & Palazzos',
          'Dress Materials',
          'Lehenga Cholis',
          'Dupattas & Shawls',
          'Jackets',
        ],
      },
      {
        heading: 'Belts, Scarves & More',
        items: [],
      },
      {
        heading: 'Watches & Wearables',
        items: [],
      },
    ],
    [
      {
        heading: 'Western Wear',
        items: [
          'Dresses',
          'Tops',
          'Tshirts',
          'Jeans',
          'Trousers & Capris',
          'Shorts & Skirts',
          'Co-ords',
          'Playsuits',
          'Jumpsuits',
          'Shrugs',
          'Sweaters & Sweatshirts',
          'Jackets & Coats',
          'Blazers & Waistcoats',
        ],
      },
      {
        heading: 'Plus Size',
        items: [],
      },
    ],
    [
      {
        heading: 'Maternity',
        items: [],
      },
      {
        heading: 'Sunglasses & Frames',
        items: [],
      },
      {
        heading: 'Footwear',
        items: ['Flats', 'Casual Shoes', 'Heels', 'Boots', 'Sports Shoes & Floaters'],
      },
      {
        heading: 'Sports & Active Wear',
        items: ['Clothing', 'Footwear', 'Sports Accessories', 'Sports Equipment'],
      },
    ],
    [
      {
        heading: 'Lingerie & Sleepwear',
        items: ['Bra', 'Briefs', 'Shapewear', 'Sleepwear & Loungewear', 'Swimwear', 'Camisoles & Thermals'],
      },
      {
        heading: 'Beauty & Personal Care',
        items: ['Makeup', 'Skincare', 'Premium Beauty', 'Lipsticks', 'Fragrances'],
      },
    ],
    [
      {
        heading: 'Gadgets',
        items: ['Smart Wearables', 'Fitness Gadgets', 'Headphones', 'Speakers'],
      },
      {
        heading: 'Jewellery',
        items: ['Fashion Jewellery', 'Fine Jewellery', 'Earrings'],
      },
      {
        heading: 'Backpacks',
        items: [],
      },
      {
        heading: 'Handbags, Bags & Wallets',
        items: [],
      },
      {
        heading: 'Luggages & Trolleys',
        items: [],
      },
    ],
  ],

  KIDS: [
    [
      {
        heading: 'Boys Clothing',
        items: [
          'T-Shirts',
          'Shirts',
          'Shorts',
          'Jeans',
          'Trousers',
          'Clothing Sets',
          'Ethnic Wear',
          'Track Pants & Pyjamas',
          'Jacket Sweater & Sweatshirts',
          'Party Wear',
          'Innerwear & Thermals',
          'Nightwear & Loungewear',
          'Value Packs',
        ],
      },
    ],
    [
      {
        heading: 'Girls Clothing',
        items: [
          'Dresses',
          'Tops',
          'Tshirts',
          'Clothing Sets',
          'Lehenga choli',
          'Kurta Sets',
          'Party wear',
          'Dungarees & Jumpsuits',
          'Skirts & shorts',
          'Tights & Leggings',
          'Jeans Trousers & Capris',
          'Jacket Sweater & Sweatshirts',
          'Innerwear & Thermals',
          'Nightwear & Loungewear',
          'Value Packs',
        ],
      },
    ],
    [
      {
        heading: 'Footwear',
        items: [
          'Casual Shoes',
          'Flipflops',
          'Sports Shoes',
          'Flats',
          'Sandals',
          'Heels',
          'School Shoes',
          'Socks',
        ],
      },
      {
        heading: 'Toys & Games',
        items: ['Learning & Development', 'Activity Toys', 'Soft Toys', 'Action Figure / Play set'],
      },
    ],
    [
      {
        heading: 'Infants',
        items: [
          'Bodysuits',
          'Rompers & Sleepsuits',
          'Clothing Sets',
          'Tshirts & Tops',
          'Dresses',
          'Bottom wear',
          'Winter Wear',
          'Innerwear & Sleepwear',
          'Infant Care',
        ],
      },
      {
        heading: 'Home & Bath',
        items: [],
      },
      {
        heading: 'Personal Care',
        items: [],
      },
    ],
    [
      {
        heading: 'Kids Accessories',
        items: [
          'Bags & Backpacks',
          'Watches',
          'Jewellery & Hair accessory',
          'Sunglasses',
          'Masks & Protective Gears',
          'Caps & Hats',
        ],
      },
      {
        heading: 'Brands',
        items: [
          'H&M',
          'Max Kids',
          'Pantaloons',
          'United Colors Of Benetton Kids',
          'YK',
          'U.S. Polo Assn. Kids',
          'Mothercare',
          'HRX',
        ],
      },
    ],
  ],

  HOME: [
    [
      {
        heading: 'Bed Linen & Furnishing',
        items: [
          'Bed Runners',
          'Mattress Protectors',
          'Bedsheets',
          'Bedding Sets',
          'Blankets Quilts & Dohars',
          'Pillows & Pillow Covers',
          'Bed Covers',
          'Diwan Sets',
          'Chair Pads & Covers',
          'Sofa Covers',
        ],
      },
      {
        heading: 'Flooring',
        items: ['Floor Runners', 'Carpets', 'Floor Mats & Dhurries', 'Door Mats'],
      },
    ],
    [
      {
        heading: 'Bath',
        items: [
          'Bath Towels',
          'Hand & Face Towels',
          'Beach Towels',
          'Towels Set',
          'Bath Rugs',
          'Bath Robes',
          'Bathroom Accessories',
          'Shower Curtains',
        ],
      },
      {
        heading: 'Lamps & Lighting',
        items: [
            'Floor Lamps',
            'Ceiling Lamps',
            'Table Lamps',
            'Wall Lamps',
            'Outdoor Lamps',
            'String Lights',
          ],
        },
      ],
      [
        {
          heading: 'Home Décor',
          items: [
            'Plants & Planters',
            'Aromas & Candles',
            'Clocks',
            'Mirrors',
            'Wall Décor',
            'Festive Decor',
            'Pooja Essentials',
            'Wall Shelves',
            'Fountains',
            'Showpieces & Vases',
            'Ottoman',
          ],
        },
        {
          heading: 'Cushions & Cushion Covers',
          items: [],
        },
        {
          heading: 'Curtains',
          items: [],
        },
      ],
      [
        {
          heading: 'Furniture',
          items: [],
        },
        {
          heading: 'Home Gift Sets',
          items: [],
        },
        {
          heading: 'Kitchen & Table',
          items: [
            'Table Runners',
            'Dinnerware & Serveware',
            'Cups and Mugs',
            'Bakeware & Cookware',
            'Kitchen Storage & Tools',
            'Bar & Drinkware',
            'Table Covers & Furnishings',
          ],
        },
      ],
      [
        {
          heading: 'Storage',
          items: ['Bins', 'Hangers', 'Organisers', 'Hooks & Holders', 'Laundry Bags'],
        },
      ],
    ],
  
    BEAUTY: [
      [
        {
          heading: 'Makeup',
          items: [
            'Lipstick',
            'Lip Gloss',
            'Lip Liner',
            'Mascara',
            'Eyeliner',
            'Kajal',
            'Eyeshadow',
            'Foundation',
            'Primer',
            'Concealer',
            'Compact',
            'Nail Polish',
          ],
        },
      ],
      [
        {
          heading: 'Skincare, Bath & Body',
          items: [
            'Face Moisturiser',
            'Cleanser',
            'Masks & Peel',
            'Sunscreen',
            'Serum',
            'Face Wash',
            'Eye Cream',
            'Lip Balm',
            'Body Lotion',
            'Body Wash',
            'Body Scrub',
            'Hand Cream',
          ],
        },
        {
          heading: 'Baby Care',
          items: [],
        },
        {
          heading: 'Masks',
          items: [],
        },
      ],
      [
        {
          heading: 'Haircare',
          items: [
            'Shampoo',
            'Conditioner',
            'Hair Cream',
            'Hair Oil',
            'Hair Gel',
            'Hair Color',
            'Hair Serum',
            'Hair Accessory',
          ],
        },
        {
          heading: 'Fragrances',
          items: ['Perfume', 'Deodorant', 'Body Mist'],
        },
      ],
      [
        {
          heading: 'Appliances',
          items: ['Hair Straightener', 'Hair Dryer', 'Epilator'],
        },
        {
          heading: "Men's Grooming",
          items: ['Trimmers', 'Beard Oil', 'Hair Wax'],
        },
        {
          heading: 'Beauty Gift & Makeup Set',
          items: ['Beauty Gift', 'Makeup Kit'],
        },
        {
          heading: 'Premium Beauty',
          items: [],
        },
        {
          heading: 'Wellness & Hygiene',
          items: [],
        },
      ],
      [
        {
          heading: 'Top Brands',
          items: [
            'Lakme',
            'Maybelline',
            'LOreal',
            'Philips',
            'Bath & Body Works',
            'THE BODY SHOP',
            'Biotique',
            'Mamaearth',
            'MCaffeine',
            'Nivea',
            'Lotus Herbals',
            'LOreal Professionnel',
            'KAMA AYURVEDA',
            'M.A.C',
            'Forest Essentials',
          ],
        },
      ],
    ],
  };
