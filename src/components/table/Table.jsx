/* eslint-disable react/prop-types */
export default function Table({ children, cssClass = "w-full" }) {
	return <table className={cssClass}>{children}</table>;
}
