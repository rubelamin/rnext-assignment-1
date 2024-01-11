/* eslint-disable react/prop-types */
export default function FooterCopyright({
	copyRightText = "All rights reserved by Learn with Sumit",
}) {
	const currentYear = new Date();
	return (
		<footer className="py-6 md:py-8">
			<div className="container mx-auto">
				<p className="text-center text-base text-gray-500">
					Copyright ©{currentYear.getFullYear()} | {copyRightText}
				</p>
			</div>
		</footer>
	);
}
