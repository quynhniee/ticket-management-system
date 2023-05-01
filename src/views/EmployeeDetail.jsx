import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

const EmployeeDetail = () => {
	const { id } = useParams();

	const employee =
		id == "add"
			? {}
			: {
					// Get API
					e_id: "E001",
					FullName: "NGUYEN VAN A",
					Role: "E",
					phoneNumber: "0000000000",
			  };

	const [employeeId, setEmployeeId] = useState(employee.e_id);
	const [name, setName] = useState(employee.FullName);
	const [role, setRole] = useState(employee.Role);
	const [phone, setPhone] = useState(employee.phoneNumber);

	const employeeIdChangeHandle = (e) => setEmployeeId(e.target.value);
	const nameChangeHandle = (e) => setName(e.target.value);
	const roleChangeHandle = (e) => setRole(e.target.value);
	const phoneChangeHandle = (e) => setPhone(e.target.value);

	const submitHandle = (e) => {
		e.preventDefault();

		const newEmployee = {
			employeeId,
			name,
			role,
			phone,
		};

		console.log(newEmployee);
	};

	return (
		<div className="container my-5">
			<h1 className="text-center mb-5">Employee</h1>

			<form onSubmit={submitHandle}>
				<div className="row mb-4">
					<div className="col">
						<div className="form-outline">
							<label className="form-label" htmlFor="employeeId">
								Employee ID
							</label>
							<input
								type="text"
								id="employeeId"
								className="form-control"
								required
								value={employeeId}
								onChange={employeeIdChangeHandle}
							/>
						</div>
					</div>

					<div className="col">
						<div className="form-outline">
							<label className="form-label" htmlFor="name">
								Name
							</label>
							<input
								type="text"
								id="name"
								className="form-control"
								value={name}
								onChange={nameChangeHandle}
							/>
						</div>
					</div>
				</div>

				<div className="row mb-4">
					<div className="col">
						<div className="form-outline">
							<label className="form-label" htmlFor="role">
								Role
							</label>
							<select
								className="form-select"
								id="role"
								aria-label="Floating label select example"
								value={role}
								onChange={roleChangeHandle}
							>
								<option value="G">Giám đốc</option>
								<option value="Q">Quản lý</option>
								<option value="E">Employee</option>
							</select>
						</div>
					</div>
					<div className="col">
						<div className="form-outline">
							<label className="form-label" htmlFor="phone">
								Phone number
							</label>
							<input
								type="text"
								id="phone"
								className="form-control"
								required
								value={phone}
								onChange={phoneChangeHandle}
							/>
						</div>
					</div>
				</div>
				<hr />

				<div className="d-flex justify-content-end">
					<Link to="/" className="btn btn-outline-warning mr-4">
						Cancel
					</Link>
					<button type="submit" className="btn btn-outline-primary mb-4">
						Save
					</button>
				</div>
			</form>
		</div>
	);
};

export default EmployeeDetail;
