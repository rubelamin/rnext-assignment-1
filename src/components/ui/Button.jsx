/* eslint-disable react/prop-types */
export default function Button({
	cssClass = "px-5 py-2 bg-[#172227] rounded-[44px]",
	buttonText,
	buttonClick = () => null,
}) {
	return (
		<button className={cssClass} onClick={buttonClick}>
			{buttonText}
		</button>
	);
}
