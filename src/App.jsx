import FAQSection from "./components/faq-section";
import FeaturesSection from "./components/features-section";
import Footer from "./components/footer";
import HeroSection from "./components/hero-section";
import IntroVideoSection from "./components/intro-video-section";
import Navbar from "./components/navbar";
import PriceSection from "./components/price-section";
import ServiceSection from "./components/service-section";
import TeamSection from "./components/team-section";
import VideoCallSection from "./components/video-call-section";

export default function App() {
	return (
		<>
			<Navbar />
			<HeroSection />
			<ServiceSection />
			<VideoCallSection />
			<PriceSection />
			<IntroVideoSection />
			<FeaturesSection />
			<FAQSection />
			<TeamSection />
			<Footer />
		</>
	);
}
