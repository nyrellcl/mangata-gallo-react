import ring from "./assets/pexels-pixabay-266621.jpg"
import earrings from "./assets/pexels-the-glorious-studio-10983783.jpg"
import necklace from "./assets/pexels-lena-shekhovtsova-4019460.jpg"

export const homeObjOne = {
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    headline: "Treasure unremarkable moments of your life",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab aperiam nobis magni expedita, quod numquam doloribus officia excepturi consectetur facere voluptate sed, deserunt, dignissimos alias. Dolorum pariatur modi aspernatur laborum.",
    buttonLabel: "Our Products"
}

export const productObjOne = {
    productName: "Rings & Bracelets",
    productDesc: "We pride ourselves on comfortability and luxury. Our hand jewelry will seamlessly provide you the same experience when wearing our products. Explore our elegant and timeless collection of hand jewelry that will satisfy any special occasion",
    productDirect: true,
    pic: ring,
    alt: 'Photo by Pixabay',
    buttonLabel: 'Explore Products',
    heading2: true,
}

export const productObjTwo = {
    productName: "Earrings",
    productDirect: false,
    productDesc: "We provide the most gorgeous collection of earrings diligently crafted to perfection. Browse our stunning collection that complements your lifestyle.",
    pic: earrings,
    alt: 'Photo by The Glorious  Studio : https://www.pexels.com/photo/close-up-shot-of-a-pair-of-earrings-10983783/',
    buttonLabel: 'Explore Products',
    heading2: false
}

export const productObjThree = {
    productName: "Necklaces",
    productDirect: true,
    productDesc: "Our collection of necklaces offers you a variety of beautifully crafted accessories that will certainly bring elegance and joy to life's special moments",
    buttonLabel: "Explore Products",
    heading2: false,
    pic: necklace,
    alt: "Photo by Lena Shekhovtsova: https://www.pexels.com/photo/silver-necklace-on-white-surface-with-shadow-4019460/"
}

