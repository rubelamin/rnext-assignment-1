import BrandHero from "./components/BrandHero";
import FooterCopyright from "./components/FooterCopyright";
import SiteNav from "./components/SiteNav";
import StudentsTable from "./components/StudentsTable";

function App() {
	return (
		<>
			<SiteNav />
			<BrandHero />
			<StudentsTable />
			<FooterCopyright copyRightText="All rights reserved by Learn with Sumit" />
		</>
	);
}

export default App;
