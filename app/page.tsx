import HeroSlider from "@/components/home/HeroSlider";
import SearchBar from "@/components/home/SearchBar";
import QuickCategories from "@/components/home/QuickCategories";
import FeaturedProperties from "@/components/home/FeaturedProperties";

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <SearchBar />
      <QuickCategories />
      <FeaturedProperties />
    </main>
  );
}
