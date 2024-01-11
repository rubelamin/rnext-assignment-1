import sitelogo from "../assets/lws-logo-en.svg";
import Button from "./ui/Button";
import Logo from "./ui/Logo";

export default function SiteNav() {
	return (
		<nav className="py-6">
			<div className="container mx-auto flex items-center justify-between gap-x-6">
				{/* Logo */}
				<Logo imgLink={sitelogo} altText="LWS" />
				{/* Logo Ends */}
				<Button buttonText="Get Admission" />
			</div>
		</nav>
	);
}
