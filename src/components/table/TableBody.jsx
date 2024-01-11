/* eslint-disable react/prop-types */
export default function TableBody({ tBodyData }) {
	return (
		<tbody>
			<tr className="bg-white/5">
				<td className="p-5 text-sm md:text-xl" colSpan={4}>
					Class One
				</td>
			</tr>
			{tBodyData?.map((student) => {
				if (student.class === "one") {
					return (
						<tr
							className="border-b border-[#7ECEB529]"
							key={student.id}
						>
							<td className="p-5 text-sm md:text-xl">
								{student.roll}
							</td>
							<td className="p-5 text-sm md:text-xl">
								<div className="flex space-x-3 items-center">
									<img
										className="w-8 h-8"
										src={student.avatar}
										width={32}
										height={32}
										alt="John Smith"
									/>
									<span className="whitespace-nowrap">
										{student.name}
									</span>
								</div>
							</td>
							<td className="p-5 text-sm md:text-xl text-center">
								{student.grade}
							</td>
							<td className="p-5 text-sm md:text-xl text-center">
								{student.percentage}
							</td>
						</tr>
					);
				}
			})}

			<tr className="bg-white/5">
				<td className="p-5 text-sm md:text-xl" colSpan={4}>
					Class Two
				</td>
			</tr>
			{tBodyData?.map((student) => {
				if (student.class === "two") {
					return (
						<tr
							className="border-b border-[#7ECEB529]"
							key={student.id}
						>
							<td className="p-5 text-sm md:text-xl">
								{student.roll}
							</td>
							<td className="p-5 text-sm md:text-xl">
								<div className="flex space-x-3 items-center">
									<img
										className="w-8 h-8"
										src={student.avatar}
										width={32}
										height={32}
										alt="John Smith"
									/>
									<span className="whitespace-nowrap">
										{student.name}
									</span>
								</div>
							</td>
							<td className="p-5 text-sm md:text-xl text-center">
								{student.grade}
							</td>
							<td className="p-5 text-sm md:text-xl text-center">
								{student.percentage}
							</td>
						</tr>
					);
				}
			})}
		</tbody>
	);
}
