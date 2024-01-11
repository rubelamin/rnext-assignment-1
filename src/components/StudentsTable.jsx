import SearchBox from "./ui/SearchBox";

import students from "../assets/students.json";
import Table from "./table/Table";
import TableBody from "./table/TableBody";
import TableHead from "./table/TableHead";

export default function StudentsTable() {
	const filteredStudents = students.allStudents.filter(
		(s, index) =>
			students.allStudents.findIndex((item) => item.name === s.name) ===
			index
	);

	return (
		<section className="py-24 lg:pt-[120px] lg:pb-28">
			<div className="container">
				<div className="mb-16 flex flex-col items-center">
					<h2 className="text-3xl lg:text-[40px] mb-9 font-bold">
						<span className="text-[#00CC8C]">Students</span> of the
						Year
					</h2>
					{/* Search Box */}
					<SearchBox placeholderText="Search by Student" />
					{/* Search Box Ends */}
				</div>
				<div className="max-w-[848px] mx-auto overflow-auto">
					<Table>
						<TableHead />
						<TableBody tBodyData={filteredStudents} />
					</Table>
				</div>
			</div>
		</section>
	);
}
