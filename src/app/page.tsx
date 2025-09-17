import NavBar from "@/app/components/NavBar";
import FeelingPage from "./feelingPage/page";
import WhyThinkful from "./whyThinkful/page";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <NavBar />
        <FeelingPage />
        <WhyThinkful />
      </main>
    </div>
  );
}
