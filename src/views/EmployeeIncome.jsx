import React from "react";

const data = [
	{ id_e: "E010", FullName: "NGUYEN VAN A010", total_income: "10000" },
];

const EmployeeIncome = () => {
	return (
		<div className="container my-5">
			<h1 className="text-center mb-5">Employee Income</h1>
			<table className="table align-middle mb-0 bg-white">
				<thead className="bg-light">
					<tr>
						<th>Employee ID</th>
						<th>Name</th>
						<th>Income</th>
					</tr>
				</thead>
				<tbody>
					{data.map((employee) => (
						<tr key={employee.id_e}>
							<td>{employee.id_e}</td>
							<td>{employee.FullName}</td>
							<td>{employee.total_income}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default EmployeeIncome;
