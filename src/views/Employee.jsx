import React from "react";
import { Link } from "react-router-dom";

const Employee = () => {
	// Get API
	const dataEmployee = [
		{
			id_e: "E001",
			FullName: "Nguyễn Văn A001",
			Role: "E",
			phoneNumber: "0000000000",
		},
		{
			id_e: "E002",
			FullName: "Nguyễn Văn A002",
			Role: "E",
			phoneNumber: "0000000000",
		},
		{
			id_e: "E003",
			FullName: "Nguyễn Văn A003",
			Role: "G",
			phoneNumber: "0000000000",
		},
		{
			id_e: "E004",
			FullName: "Nguyễn Văn A004",
			Role: "Q",
			phoneNumber: "0000000000",
		},
	];

	return (
		<div className="container my-5">
			<h1 className="text-center mb-5">Employee</h1>
			<table className="table align-middle mb-0 bg-white">
				<thead className="bg-light">
					<tr>
						<th>Empoyee ID</th>
						<th>Name</th>
						<th>Role</th>
						<th>Phone number</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{dataEmployee.map((employee) => (
						<tr key={employee.id_e}>
							<td>{employee.id_e}</td>
							<td>{employee.FullName}</td>
							<td>
								{employee.Role === "E"
									? "Nhân viên"
									: employee.Role === "G"
									? "Giám đốc"
									: "Quản lí"}
							</td>
							<td>{employee.phoneNumber}</td>
							<td>
								<Link
									to={`${employee.id_e}`}
									type="button"
									className="btn btn-outline-primary"
									data-mdb-ripple-color="dark"
								>
									Edit
								</Link>
								<button
									type="button"
									className="btn btn-outline-success mx-3"
									data-mdb-ripple-color="dark"
								>
									Show Tickets
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<div className="d-grid gap-2 mt-5">
				<Link to="add" className="btn btn-success">
					Thêm mới
				</Link>
			</div>
		</div>
	);
};

export default Employee;
