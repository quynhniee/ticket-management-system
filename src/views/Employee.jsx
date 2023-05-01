import React from "react";
import { Link } from "react-router-dom";

const Employee = () => {
	const dataEmpoyee = [
		{
			id_e: "E001",
			Salary: 10000000,
			FullName: "Nguyễn Văn A001",
			Role: "E",
			phoneNumber: "0000000000",
		},
		{
			id_e: "E002",
			Salary: 20000000,
			FullName: "Nguyễn Văn A002",
			Role: "E",
			phoneNumber: "0000000000",
		},
		{
			id_e: "E003",
			Salary: 40000000,
			FullName: "Nguyễn Văn A003",
			Role: "G",
			phoneNumber: "0000000000",
		},
		{
			id_e: "E004",
			Salary: 30000000,
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
					{dataEmpoyee.map((employee) => (
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
									to={`/employee-detail/${employee.id_e}`}
									type="button"
									className="btn btn-primary btn-rounded"
								>
									Edit
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<div className="d-grid gap-2 mt-5">
				<Link to="/employee-detail/add" className="btn btn-success">
					Thêm mới
				</Link>
			</div>
		</div>
	);
};

export default Employee;
