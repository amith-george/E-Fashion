export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  images: {
    [key: string]: string; // e.g. front, side, top, back, closeup, etc.
  };
}

export const trendingProducts: Product[] = [
  {
    id: "nike-airforce1",
    name: "Nike Air Force 1",
    category: "Men's Shoes",
    price: "₹ 13,995",
    images: {
      front: "/assets/trending/shoes/front.png",
      side: "/assets/trending/shoes/side.png",
      top: "/assets/trending/shoes/top.png",
      soles: "/assets/trending/shoes/soles.png",
    },
  },
  {
    id: "zne-hooded-jacket",
    name: "Z.N.E. Hoodie",
    category: "Men's Sportwear",
    price: "₹ 6,999",
    images: {
      front: "/assets/trending/hoodie/front.png",
      back: "/assets/trending/hoodie/back.png",
      opened: "/assets/trending/hoodie/opened.png",
      hoodie: "/assets/trending/hoodie/hoodie.png",
    },
  },
  {
    id: "wedding-three-piece-suit",
    name: "Two-Piece Tuxedo",
    category: "Men's Tailored-Fit Suit",
    price: "₹ 9,599",
    images: {
      front: "/assets/trending/suit/front.png",
      back: "/assets/trending/suit/back.png",
      inner: "/assets/trending/suit/inner.png",
      closeup: "/assets/trending/suit/closeup.png",
    },
  },
  {
    id: "embellished-party-wear",
    name: "Net-Embellished",
    category: "Women's Party Wear",
    price: "₹ 1,299",
    images: {
      front: "/assets/trending/saree/front.png",
      back: "/assets/trending/saree/back.png",
      side: "/assets/trending/saree/side.png",
      front1: "/assets/trending/saree/front1.png",
    },
  },
  {
    id: "indo-era-kurta",
    name: "Indo Era",
    category: "Women's Kurta",
    price: "₹7,999",
    images: {
      front: "/assets/trending/kurta/front.png",
      back: "/assets/trending/kurta/back.png",
      front1: "/assets/trending/kurta/front1.png",
      closeup: "/assets/trending/kurta/closeup.png",
    },
  },
  {
    id: "titan-timeless-analog",
    name: "Timeless Analog",
    category: "Men's Watch",
    price: "₹3,376",
    images: {
      front: "/assets/trending/watch/front.png",
      back: "/assets/trending/watch/back.png",
      side: "/assets/trending/watch/side.png",
      closeup: "/assets/trending/watch/closeup.png",
    },
  },
  {
    id: "here-now-kurta",
    name: "Here & Now",
    category: "Men's Kurta",
    price: "₹2,499",
    images: {
      front: "/assets/trending/kurtamen/front.png",
      back: "/assets/trending/kurtamen/back.png",
      front1: "/assets/trending/kurtamen/front1.png",
      closeup: "/assets/trending/kurtamen/closeup.png",
    },
  },
  {
    id: "rayban-sunglasses",
    name: "Ray-Ban",
    category: "Men's Sunglasses",
    price: "₹4,374",
    images: {
      front: "/assets/trending/glasses/front.png",
      back: "/assets/trending/glasses/side.png",
      front1: "/assets/trending/glasses/front1.png",
      closeup: "/assets/trending/glasses/side1.png",
    },
  },
  {
    id: "polo-tshirt",
    name: "Polo T Shirt",
    category: "Men's T-Shirt",
    price: "₹449",
    images: {
      front: "/assets/trending/shirt/front.png",
      back: "/assets/trending/shirt/back.png",
      closeup: "/assets/trending/shirt/closeup.png",
    },
  },
];
