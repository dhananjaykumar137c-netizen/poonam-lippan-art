import React, { useState } from 'react';
import video1 from '../videos/Product 1.mp4';
import video2 from '../videos/Product 2.mp4';
import video3 from '../videos/Product 3.mp4';
import video4 from '../videos/Product 4.mp4';
import video5 from '../videos/Product 5.mp4';
import image2 from '../images/2.png'
import image3 from '../images/3.jpeg'
import image4 from '../images/4.jpeg'
import image5 from '../images/5.jpeg'
import image6 from '../images/6.jpeg'
import image7 from '../images/7.jpeg'
import image8 from '../images/8.jpeg'
import image9 from '../images/9.jpeg'
import image10 from '../images/10.jpeg'
import image11 from '../images/11.jpeg'
import image12 from '../images/12.jpeg'
import image13 from '../images/13.png'
import image14 from '../images/14.png'
import image15 from '../images/15.jpeg'
import image16 from '../images/16.jpeg'
import image17 from '../images/17.jpeg'
import image18 from '../images/18.jpeg'
import image19 from '../images/19.jpeg'


const PRODUCTS = [
  {
    id: 1,
    title: "Pratima Minimalist White Lippan Medallion ",
    description: "A pristine all-white aesthetic crafted on an ivory-toned textured background, featuring dozens of concentric rings and masterful geometric complexity. Embellished with hundreds of premium mirrors. ",
    price: "₹1800",
    images: [
      video1, image6
    ],
    details: {
      shape: "Round",
      weight: "1.3kg",
      dimensions: "60cm",
      baseMaterial: "MDF Board (8mm)",
      clayType: "Fevicryl Mouldit Clay",
      mirrorsUsed: "Round, Diamond, Leaf, Triangle, Square, Teardrop"
    }
  },
  {
    id: 2,
    title: "Crimson Shanti Mega Mandala",
    description: "Large-scale radial complexity on a rich terracotta crimson backdrop mimicking traditional Gujarat clay walls. This high-density mirror piece features dozens of concentric rings radiating from a central medallion. ",
    price: "₹1800",
    images: [
      video2, image7
    ],
    details: {
      shape: "Round",
      weight: "1.3kg",
      dimensions: "60cm",
      baseMaterial: "MDF Board (8mm)",
      clayType: "Fevicryl Mouldit Clay",
      mirrorsUsed: "Round, Diamond, Leaf, Triangle, Square, Teardrop"
    }
  },
  {
    id: 3,
    title: "Dhyana Buddha Lippan Mandala",
    description: "Depicts a meditative Buddha against a warm, sun-like gradient halo, framed by a continuous chain of stylized green Bodhi leaves on a rustic dark brown backdrop.",
    price: "₹800",
    images: [
      video3, image12
    ],
    details: {
      shape: "Round",
      weight: "402g",
      dimensions: "40cm",
      baseMaterial: "MDF Board (6mm)",
      clayType: "Fevicryl Mouldit Clay",
      mirrorsUsed: "Round, Diamond, Leaf, Triangle, Square"
    }
  },
  {
    id: 4,
    title: "Vedic Omkar Lippan Mandala",
    description: "The core features a vermillion red 'Om' symbol against a marigold-yellow backdrop, surrounded by alternating pointed red petals and green motifs.",
    price: "₹600",
    images: [
      video4, image11
    ],
    details: {
      shape: "Round",
      weight: "433g",
      dimensions: "40cm",
      baseMaterial: "MDF Board (6mm)",
      clayType: "Fevicryl Mouldit Clay",
      mirrorsUsed: "Round, Diamond, Leaf, Square"
    }
  },
  {
    id: 5,
    title: "Mayur Shringar Mandala Mirror",
    description: "Layered lotus and peacock palette with a central mirror ringed by scalloped clay petals in emerald green, marigold yellow, and festive red. Features fine dot art borders and diamond-cut mirror tracing. ",
    price: "₹350",
    images: [
      video5, image5
    ],
    details: {
      shape: "Round",
      weight: "460g",
      dimensions: "40cm",
      baseMaterial: "MDF Board (4mm)",
      clayType: "Fevicryl Mouldit Clay",
      mirrorsUsed: "Round, Diamond, Leaf"
    }
  },
  {
    id: 6,
    title: "Mridang Lotus Lippan Jhumkar",
    description: "An earthy autumnal palette featuring a blooming floral mandala painted in organic terracotta brown, warm clay orange, mustard yellow, and deep olive green. It includes cascading beaded hangings with hand-painted clay leaves.",
    price: "₹700",
    images: [
      image2
    ],
    details: {
      shape: "Round",
      weight: "433g",
      dimensions: "40cm",
      baseMaterial: "MDF Board (6mm)",
      clayType: "Fevicryl Mouldit Clay",
      mirrorsUsed: "Round, Diamond, Leaf, Triangle, Square"
    }
  },
  {
    id: 7,
    title: "Mayur Chitra Mandala Mirror",
    description: "A peacock-inspired color palette featuring a central glass mirror enveloped by soft pink petals and larger teardrop frames in rich peacock blue. The piece is enclosed by a wide, striking turquoise-blue outer frame. ",
    price: "₹600",
    images: [
      image3
    ],
    details: {
      shape: "Round",
      weight: "505g",
      dimensions: "40cm",
      baseMaterial: "MDF Board (6mm)",
      clayType: "Fevicryl Mouldit Clay",
      mirrorsUsed: "Round, Diamond, Leaf, Triangle"
    }
  },
  {
    id: 8,
    title: "Muralidhar Krishna Lippan frame",
    description: "Features Lord Krishna in a seated posture, painted in sky-blue with a golden-yellow dhoti, set within a traditional white archway (Jharokha) against a festive crimson backdrop.",
    price: "₹450",
    images: [
      image8
    ],
    details: {
      shape: "rectangle",
      weight: "320g",
      dimensions: "30cm x 45cm",
      baseMaterial: "MDF Board (8mm)",
      clayType: "Fevicryl Mouldit Clay",
      mirrorsUsed: "Round, Diamond, Leaf"
    }
  },
  {
    id: 9,
    title: "Krishna Charan Jharokha Panel",
    description: "Devotional artwork featuring the sky-blue feet of Lord Krishna and sacred calligraphic inscriptions (Om and Shri Krishna), housed within a crisp white arched gateway. ",
    price: "₹450",
    images: [
      image9
    ],
    details: {
      shape: "Rectangle",
      weight: "320g",
      dimensions: "30cm x 45cm",
      baseMaterial: "MDF Board (8mm)",
      clayType: "Fevicryl Mouldit Clay",
      mirrorsUsed: "Round, Diamond"
    }
  },
  {
    id: 10,
    title: "Syama Monochrome Mandala",
    description: "A peacock-inspired color palette featuring a central glass mirror enveloped by soft pink petals and larger teardrop frames in rich peacock blue. The piece is enclosed by a wide, striking turquoise-blue outer frame. ",
    price: "₹600",
    images: [
      image10
    ],
    details: {
      shape: "Round",
      weight: "505g",
      dimensions: "40cm",
      baseMaterial: "MDF Board (6mm)",
      clayType: "Fevicryl Mouldit Clay",
      mirrorsUsed: "Round, Diamond, Leaf, Triangle"
    }
  },
  {
    id: 11,
    title: "Vedic Omkar Lippan Mandala",
    description: "A peacock-inspired color palette featuring a central glass mirror enveloped by soft pink petals and larger teardrop frames in rich peacock blue. The piece is enclosed by a wide, striking turquoise-blue outer frame. ",
    price: "₹800",
    images: [
      image11
    ],
    details: {
      shape: "Round",
      weight: "402g",
      dimensions: "40cm",
      baseMaterial: "MDF Board (6mm)",
      clayType: "Fevicryl Mouldit Clay",
      mirrorsUsed: "Round, Diamond, Leaf, Square"
    }
  },
  {
    id: 12,
    title: "Dhyana Buddha Lippan Mandala",
    description: "Depicts a meditative Buddha against a warm, sun-like gradient halo, framed by a continuous chain of stylized green Bodhi leaves on a rustic dark brown backdrop. ",
    price: "₹800",
    images: [
      image12
    ],
    details: {
      shape: "Round",
      weight: "402g",
      dimensions: "40cm",
      baseMaterial: "MDF Board (6mm)",
      clayType: "Fevicryl Mouldit Clay",
      mirrorsUsed: "Round, Diamond, Leaf, Triangle, Square"
    }
  },
  {
    id: 13,
    title: " Tirupati Balaji Divine Mandala",
    description: "The heart of the mandala features a sculpted face of Lord Balaji with metallic gold highlights, surrounded by a ring of stylized pink lotus petals and a mustard-yellow outer ring. ",
    price: "₹800",
    images: [
      image13
    ],
    details: {
      shape: "Round",
      weight: "403g",
      dimensions: "40cm",
      baseMaterial: "MDF Board (6mm)",
      clayType: "Fevicryl Mouldit Clay",
      mirrorsUsed: "Round, Diamond, Leaf, Triangle, Square, Teardrop"
    }
  },
  {
    id: 14,
    title: " Kalpavriksha Pastel Medallions (Set of 4)",
    description: "A modern set featuring mint aqua, lavender, dusty rose, and buttercup yellow. It showcases detailed tree structures with intricate clay roots and branches.",
    price: "₹1200",
    images: [
      image14
    ],
    details: {
      shape: "Round",
      weight: "200g",
      dimensions: "24cm",
      baseMaterial: "MDF Board (6mm)",
      clayType: "Fevicryl Mouldit Clay",
      mirrorsUsed: "Round, Diamond, Leaf, Square"
    }
  },
  {
    id: 15,
    title: " Surajmukhi Shringar Mirror",
    description: "Central focal mirror ringed by ten large sculpted sunflower petals in marigold yellow, offering a contemporary minimalist twist on traditional craftsmanship. ",
    price: "₹350",
    images: [
      image15
    ],
    details: {
      shape: "Round",
      weight: "230g",
      dimensions: "30cm",
      baseMaterial: "MDF Board (6mm)",
      clayType: "Fevicryl Mouldit Clay",
      mirrorsUsed: "Round, Diamond, Leaf, Square "
    }
  },
  {
    id: 16,
    title: " Shri Krishna Murli Lippan Panel",
    description: "Depicts sky-blue hands of Lord Krishna holding a dark wood flute with a vibrant peacock feather crown, framed within a pointed archway and a crimson border. ",
    price: "₹450",
    images: [
      image16
    ],
    details: {
      shape: "Rectangle",
      weight: "310g",
      dimensions: "30cm x 45cm",
      baseMaterial: "MDF Board (6mm)",
      clayType: "Fevicryl Mouldit Clay",
      mirrorsUsed: "Round, Diamond, Leaf"
    }
  },
  {
    id: 17,
    title: "Kamal Jharokha Panel ",
    description: "Features a vertical trio of rising magenta lotuses and green buds against a textured white background, encased in a cobalt blue frame with eye-shaped mirrors.",
    price: "₹350",
    images: [
      image17
    ],
    details: {
      shape: "Rectangle",
      weight: "180g",
      dimensions: "15cm x 45cm",
      baseMaterial: "MDF Board",
      clayType: "Fevicryl Mouldit Clay",
      mirrorsUsed: "Leaf"
    }
  },
  {
    id: 18,
    title: "Mayur Pankh Mandala Mirror",
    description: "A modernized mud-and-mirror technique using a bold crimson red backdrop accented with emerald green, mustard yellow, and white outlines.",
    price: "₹350",
    images: [
      image18
    ],
    details: {
      shape: "Round",
      weight: "200g",
      dimensions: "30cm",
      baseMaterial: "MDF Board (6mm)",
      clayType: "Fevicryl Mouldit Clay",
      mirrorsUsed: "Round, Diamond, Leaf, Triangle, Square, Teardrop"
    }
  },
  {
    id: 19,
    title: "Kutchi Choriya Panel ",
    description: "Traditional panel artwork featuring detailed clay relief work and a variety of geometric mirrors for authentic Kutchi aesthetics.",
    price: "₹350",
    images: [
      image19
    ],
    details: {
      shape: "Rectangle",
      weight: "220g",
      dimensions: "30cm x 12cm",
      baseMaterial: "MDF Board (6mm)",
      clayType: "Fevicryl Mouldit Clay",
      mirrorsUsed: "Diamond, Round, Triangle, Leaf"
    }
  }
];

function ProductRow({ product }: { product: typeof PRODUCTS[0] }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const handleShopNow = () => {
    alert(`Proceeding to checkout for ${product.title}`);
  };

  const handleAddToCart = () => {
    alert(`${product.title} added to cart!`);
  };

  return (
    <div className="product-row-hover bg-surface-container-lowest rounded-[24px] overflow-hidden custom-shadow transition-all duration-500 flex flex-col md:flex-row h-auto md:h-[512px]">
      {/* Media Left (Vertical 9:16 aspect ratio) */}
      <div className="w-full aspect-[9/16] md:aspect-auto md:w-[288px] shrink-0 overflow-hidden bg-surface-variant/20 relative">
        <div className="relative group h-full w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out h-full w-full"
            style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
          >
            {product.images.map((mediaSrc, idx) => {
              const isVideo = mediaSrc.match(/\.(mp4|webm|ogg|mov)$/i) || mediaSrc.includes('video');
              return (
                <div key={idx} className="w-full h-full shrink-0 flex items-center justify-center bg-black">
                  {isVideo ? (
                    <video
                      src={mediaSrc}
                      className="w-full h-full object-contain"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  ) : (
                    <img
                      alt={`${product.title} - ${idx + 1}`}
                      className="w-full h-full object-contain"
                      src={mediaSrc}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {product.images.length > 1 && (
            <>
              <button
                onClick={handlePrevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-surface/80 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>

              <button
                onClick={handleNextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-surface/80 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {product.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === currentImageIndex ? 'bg-primary' : 'bg-on-surface/50'}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Content Middle */}
      <div className="flex-grow p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-outline-variant/30">
        <h3 className="font-headline-md text-headline-md text-on-surface mb-2">{product.title}</h3>
        <p className="font-body-md text-body-md text-on-surface-variant mb-4 italic line-clamp-2 md:line-clamp-none">{product.description}</p>

        {/* Product Details Boxes */}
        {product.details && (
          <div className="flex flex-wrap gap-2 mb-6">
            {product.details.shape && (
              <span className="px-3 py-1.5 text-[11px] font-semibold bg-surface-container-low text-on-surface-variant rounded-xl border border-outline-variant/40 shadow-[0_1px_2px_rgba(0,0,0,0.02)] tracking-wide">
                {product.details.shape}
              </span>
            )}
            {product.details.weight && (
              <span className="px-3 py-1.5 text-[11px] font-semibold bg-surface-container-low text-on-surface-variant rounded-xl border border-outline-variant/40 shadow-[0_1px_2px_rgba(0,0,0,0.02)] tracking-wide">
                {product.details.weight}
              </span>
            )}
            {product.details.dimensions && (
              <span className="px-3 py-1.5 text-[11px] font-semibold bg-surface-container-low text-on-surface-variant rounded-xl border border-outline-variant/40 shadow-[0_1px_2px_rgba(0,0,0,0.02)] tracking-wide">
                {product.details.dimensions}
              </span>
            )}
            {product.details.baseMaterial && (
              <span className="px-3 py-1.5 text-[11px] font-semibold bg-surface-container-low text-on-surface-variant rounded-xl border border-outline-variant/40 shadow-[0_1px_2px_rgba(0,0,0,0.02)] tracking-wide">
                {product.details.baseMaterial}
              </span>
            )}
            {product.details.clayType && (
              <span className="px-3 py-1.5 text-[11px] font-semibold bg-surface-container-low text-on-surface-variant rounded-xl border border-outline-variant/40 shadow-[0_1px_2px_rgba(0,0,0,0.02)] tracking-wide">
                {product.details.clayType}
              </span>
            )}
            {product.details.mirrorsUsed && (
              <span className="px-3 py-1.5 text-[11px] font-semibold bg-surface-container-low text-on-surface-variant rounded-xl border border-outline-variant/40 shadow-[0_1px_2px_rgba(0,0,0,0.02)] tracking-wide">
                {product.details.mirrorsUsed}
              </span>
            )}
          </div>
        )}

        <div className="text-primary font-bold text-lg">{product.price}</div>
      </div>

      {/* Buttons Right */}
      <div className="w-full md:w-[200px] p-8 flex flex-col justify-center gap-3 bg-surface-container-low/50">
        <button
          onClick={handleShopNow}
          className="w-full bg-primary text-on-primary px-6 py-3 rounded-xl font-label-md text-label-md hover:brightness-110 transition-all cursor-pointer"
        >
          Shop Now
        </button>
        <button
          onClick={handleAddToCart}
          className="w-full bg-surface-container-highest text-on-surface-variant px-6 py-3 rounded-xl font-label-md text-label-md hover:bg-secondary-container transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span> Add to Cart
        </button>
      </div>
    </div>
  );
}

export default function Shop() {
  return (
    <main className="pt-32 pb-stack-lg max-w-container-max mx-auto px-margin-desktop">
      {/* Hero Header */}
      <header className="mb-stack-lg max-w-3xl">
        <h1 className="font-display-lg text-display-lg text-on-surface mb-stack-sm">The Poonam Collection</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Explore the rhythmic symmetry of Kutch, where hand-molded clay meets reflective glass in a dance of ancient tradition and modern grace.
        </p>
      </header>

      {/* Vertical Stack of Horizontal Rows */}
      <div className="flex flex-col gap-8">
        {PRODUCTS.map(product => (
          <ProductRow key={product.id} product={product} />
        ))}
      </div>


    </main>
  );
}
