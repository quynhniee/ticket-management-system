import React from "react";
import { Link } from "react-router-dom";

const Customer = () => {
	// Get API
	const dataCustomer = [
		{
			id: "C001",
			Name: "Nguyễn Văn A001",
			phoneNumber: "0000000000",
			Address: "Mộ Lao-Hà Đông-Hà Nội",
		},
		{
			id: "CHN002",
			Name: "Nguyễn Văn A002",
			phoneNumber: "0000000000",
			Address: "Mộ Lao-Hà Đông-Hà Nội",
		},
		{
			id: "CHN003",
			Name: "Nguyễn Văn A003",
			phoneNumber: "0000000000",
			Address: "Mộ Lao-Hà Đông-Hà Nội",
		},
		{
			id: "CHN004",
			Name: "Nguyễn Văn A004",
			phoneNumber: "0000000000",
			Address: "Mộ Lao-Hà Đông-Hà Nội",
		},
	];

	return (
		<div className="container my-5">
			<h1 className="text-center mb-5">Customer</h1>
			<table className="table align-middle mb-0 bg-white">
				<thead className="bg-light">
					<tr>
						<th>Customer ID</th>
						<th>Name</th>
						<th>Phone number</th>
						<th>Address</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{dataCustomer.map((customer) => (
						<tr key={customer.id}>
							<td>{customer.id}</td>
							<td>{customer.Name}</td>
							<td>{customer.phoneNumber}</td>
							<td>{customer.Address}</td>
							<td>
								<Link
									to={`/customer-detail?customerId=${customer.id}`}
									type="button"
									className="btn btn-outline-warning"
									data-mdb-ripple-color="dark"
								>
									Edit
								</Link>
								<Link
									to={`/tickets?customerId=${customer.id}`}
									type="button"
									className="btn btn-outline-primary mx-2"
									data-mdb-ripple-color="dark"
								>
									Show
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<div className="d-grid gap-2 mt-5">
				<Link to="/customer-detail" className="btn btn-success">
					Thêm mới
				</Link>
			</div>
		</div>
	);
};

export default Customer;
