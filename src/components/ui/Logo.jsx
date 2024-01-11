/* eslint-disable react/prop-types */

export default function Logo({ imgLink, altText }) {
	return (
		<a href="/">
			<img className="h-[40px]" src={imgLink} alt={altText} />
		</a>
	);
}
