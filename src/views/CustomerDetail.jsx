import React, { useState } from "react";
import { Link } from "react-router-dom";

const CustomerDetail = () => {
	const urlParams = new URLSearchParams(window.location.search);

	let customerId = urlParams.get("customerId");

	const title = !customerId ? "Add Customer" : "Customer Detail";

	const customer = !customerId
		? {}
		: {
				// Get API
				id: "CHN001",
				Name: "NGUYEN VAN A",
				phoneNumber: "0000000000",
				Address: "Mộ Lao-Hà Đông-Hà Nội",
		  };

	const [id, setId] = useState(customer.id);
	const [name, setName] = useState(customer.Name);
	const [phone, setPhone] = useState(customer.phoneNumber);
	const [address, setAddress] = useState(customer.Address);

	const idChangeHandle = (e) => setId(e.target.value);
	const nameChangeHandle = (e) => setName(e.target.value);
	const phoneChangeHandle = (e) => setPhone(e.target.value);
	const addressChangeHandle = (e) => setAddress(e.target.value);
	const submitHandle = (e) => {
		e.preventDefault();
		const newCustomer = {
			id,
			Name: name,
			phoneNumber: phone,
			Address: address,
		};
		console.log(newCustomer);
	};

	return (
		<div className="container my-5">
			<h1 className="text-center mb-5">{title}</h1>

			<form onSubmit={submitHandle}>
				<div className="row mb-4">
					<div className="col">
						<div className="form-outline">
							<label className="form-label" htmlFor="customerId">
								Customer ID
							</label>
							<input
								type="text"
								id="customerId"
								className="form-control"
								required
								value={id}
								onChange={idChangeHandle}
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
					<div className="col">
						<div className="form-outline">
							<label className="form-label" htmlFor="name">
								Address
							</label>
							<input
								type="text"
								id="name"
								className="form-control"
								value={address}
								onChange={addressChangeHandle}
							/>
						</div>
					</div>
				</div>
				<hr />

				<div className="d-flex justify-content-end">
					<Link to="/" className="btn btn-outline-warning mb-4 mx-3">
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

export default CustomerDetail;
