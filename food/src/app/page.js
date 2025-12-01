import { Header } from "./_componant/header";
import { HeroSection } from "./_componant/hero";
import { PageMenu } from "./_componant/pageMenu";

export default function Home() {
  return (
    <div className=" h-screen w-full bg-gray-700 flex flex-col gap-10">
      <Header />
      <HeroSection />
      <PageMenu />
    </div>
  );
}
