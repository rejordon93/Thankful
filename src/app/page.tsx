import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import FeelingPage from "./feelingPage/page";
import WhyThinkful from "./whyThinkful/page";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <main className="flex-1">
        <FeelingPage />
        <WhyThinkful />
      </main>

      <Footer />
    </div>
  );
}
