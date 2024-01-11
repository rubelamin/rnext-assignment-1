export default function TableHead() {
	const headElm = ["ID", "Name", "Scores", "Percentage"];
	return (
		<thead>
			<tr className="border-b border-[#FFFFFF0D]">
				{headElm.map((h, index) => {
					if (h == "ID") {
						return (
							<th
								className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left"
								key={h + index}
							>
								{h}
							</th>
						);
					} else if (h == "Name") {
						return (
							<th
								className="p-5 text-sm md:text-xl font-semibold text-left"
								key={h + index}
							>
								{h}
							</th>
						);
					} else {
						return (
							<th
								className="p-5 text-sm md:text-xl font-semibold"
								key={h + index}
							>
								{h}
							</th>
						);
					}
				})}
			</tr>
		</thead>
	);
}
