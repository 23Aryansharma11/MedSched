import CategorySection from "@/components/Home/CategorySection";
import HeroSection from "@/components/Home/HeroSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col ">
      <HeroSection />
      <CategorySection />
    </div>
  );
}
