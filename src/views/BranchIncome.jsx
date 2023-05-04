import React from "react";

const data = [
	{ id_branch: "BHP003", address: "Hải Phòng", total_income: "10000" },
	{ id_branch: "BHN003", address: "Hà Nội", total_income: "20000" },
];

const BranchIncome = () => {
	const urlParams = new URLSearchParams(window.location.search);

	const branchId = urlParams.get("branchId");
	return (
		<div className="container my-5">
			<h1 className="text-center mb-5">Branch Income</h1>
			<table className="table align-middle mb-0 bg-white">
				<thead className="bg-light">
					<tr>
						<th>Branch ID</th>
						<th>Address</th>
						<th>Income</th>
					</tr>
				</thead>
				<tbody>
					{data.map(
						(branch) =>
							(!branchId || branchId === branch.id_branch) && (
								<tr key={branch.id_branch}>
									<td>{branch.id_branch}</td>
									<td>{branch.address}</td>
									<td>{branch.total_income}</td>
								</tr>
							)
					)}
				</tbody>
			</table>
		</div>
	);
};

export default BranchIncome;
