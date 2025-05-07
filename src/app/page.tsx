
import Navbar from "@/components/navbar/NavBar";
import HeroCarousel from "./components/HeroCarousel";
import Footer from "./components/Footer";
import CarrouselGlasses from "./components/home/carrouselGlasses";
import SunglassesGrid from "./components/home/sunglassesGrid";

export default function Home() {
  const sunglasses = [
    {
      id: 1,
      name: "Sunglasses 1",
      price: 100,
      image: "/sunglasses/1.webp",
    },
    {
      id: 2,
      name: "Sunglasses 2",
      price: 150,
      image: "/sunglasses/2.webp",
    },
    {
      id: 3,
      name: "Sunglasses 3",
      price: 200,
      image: "/sunglasses/3.webp",
    },
    {
      id: 4,
      name: "Sunglasses 4",
      price: 250,
      image: "/sunglasses/4.webp",
    },
    {
      id: 5,
      name: "Sunglasses 5",
      price: 300,
      image: "/sunglasses/5.webp",
    },
  ];

  return (
    <div className="homePage">
      <Navbar />
      <HeroCarousel />
      <CarrouselGlasses />
      <SunglassesGrid sunglasses={sunglasses} />
      <Footer />
    </div>
  );
}
