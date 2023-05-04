import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Viet = () => {
	const navigate = useNavigate();

	const [employeeId, setEmployeeId] = useState();
	const [branchId, setBranchId] = useState();

	const employeeIdChangeHandle = (e) => setEmployeeId(e.target.value);
	const branchIdChangeHandle = (e) => setBranchId(e.target.value);

	const submitHandle = (e) => {
		e.preventDefault();
		navigate(`/employee/income?employeeId=${employeeId}`);
	};

	return (
		<div className="container py-5">
			<form onSubmit={submitHandle}>
				<label className="form-label" htmlFor="employeeId">
					*Tra cứu doanh số của nhân viên có ID:
				</label>
				<input
					type="text"
					id="employeeId"
					className="form-control"
					required
					value={employeeId}
					onChange={employeeIdChangeHandle}
				/>
				<button type="submit" className="btn btn-primary my-4">
					Find
				</button>
			</form>
			<form onSubmit={() => navigate(`/branch/income?branchId=${branchId}`)}>
				<label className="form-label" htmlFor="employeeId">
					*Tra cứu doanh số của branch có ID:
				</label>
				<input
					type="text"
					id="employeeId"
					className="form-control"
					required
					value={branchId}
					onChange={branchIdChangeHandle}
				/>
				<button type="submit" className="btn btn-primary my-4">
					Find
				</button>
			</form>
			<p className="mb-2">*Xem doanh số của tất cả branch tại đây</p>
			<button
				onClick={() => navigate("/branch/income")}
				className="btn btn-outline-success mb-4"
			>
				Show
			</button>
		</div>
	);
};

export default Viet;
