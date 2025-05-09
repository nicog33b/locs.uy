import Navbar from "@/components/navbar/NavBar";
import HeroCarousel from "./components/HeroCarousel";
import Footer from "./components/Footer";
import CarrouselGlasses from "./components/home/carrouselGlasses";
import SunglassesGridComponent from "./components/home/sunglassesGrid";

export default function Home() {
  const sunglasses = [
    {
      id: 1,
      name: "Sunglasses 1",
      price: 100,
      originalPrice: 150,
      image: "/sunglasses/1.webp",
      isNew: true,
      tags: ["Polarizados", "Sport"],

    },
    {
      id: 2,
      name: "Sunglasses 2",
      price: 150,
      originalPrice: 200,
      image: "/sunglasses/2.webp",
      isNew: true,
      tags: ["Polarizados", "Sport"],
    },
    {
      id: 3,
      name: "Sunglasses 3",
      price: 200,
      originalPrice: 250,
      image: "/sunglasses/3.webp",
      isNew: true,
      tags: ["Polarizados", "Sport"],
    },
    {
      id: 4,
      name: "Sunglasses 4",
      price: 250,
      originalPrice: 300,
      image: "/sunglasses/4.webp",
      isNew: true,
      tags: ["Polarizados", "Hip Hop"],
    },
    {
      id: 5,
      name: "Sunglasses 5",
      price: 300,
      originalPrice: 350,
      image: "/sunglasses/5.webp",
      isNew: true,
      tags: ["Polarizados", "Hip Hop"],
    },
  ];

  return (
    <div className="homePage">
      <Navbar />
      <HeroCarousel />
      <CarrouselGlasses />
      <SunglassesGridComponent sunglasses={sunglasses} />
      <Footer />
    </div>
  );
}
