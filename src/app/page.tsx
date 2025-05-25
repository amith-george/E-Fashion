import Banner from "@/components/Banner/FinalBanner";
import Brands from "@/components/Brand/Brands";
import Trending from "@/components/Trending/Trending";
import Category from "@/components/Category/Category";

export default function Home() {
  return (
    <main>
      <Banner />
      <Brands />
      <Trending /> 
      <Category />
    </main>
  );
}
