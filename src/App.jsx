import HeroSection from "./components/hero-section";
import IntroVideoSection from "./components/intro-video-section";
import Navbar from "./components/navbar";
import PriceSection from "./components/price-section";
import ServiceSection from "./components/service-section";
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
		</>
	);
}
