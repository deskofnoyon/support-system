import HeroSection from "./components/hero-section";
import Navbar from "./components/navbar";
import PriceSection from "./components/price-section";
import ServiceSection from "./components/service-section";
import VideoCallSection from "./components/vide-call-section";

export default function App() {
	return (
		<>
			<Navbar />
			<HeroSection />
			<ServiceSection />
			<VideoCallSection />
			<PriceSection />
		</>
	);
}
