import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import PromoBanner from "../components/PromoBanner";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-white min-h-screen text-zinc-900 overflow-hidden">
      <Navbar />
      <HeroSection />
      <Categories />
      <FeaturedProducts />
      <PromoBanner />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
