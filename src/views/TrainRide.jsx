import React from "react";
import { Link } from "react-router-dom";

const TrainRide = () => {
	// Get API
	const dataTrainRide = [
		{
			id: "TrRiHN001",
			DepatureTime: "2023-01-12 13:23:44",
			DepatureStation: "DHSta",
			Destination: "LCSta",
			IdTrain: "TrR001",
		},
		{
			id: "TrRiHN002",
			DepatureTime: "2023-01-12 13:23:44",
			DepatureStation: "DHSta",
			Destination: "LCSta",
			IdTrain: "TrR001",
		},
		{
			id: "TrRiHN003",
			DepatureTime: "2023-01-12 13:23:44",
			DepatureStation: "DHSta",
			Destination: "LCSta",
			IdTrain: "TrR001",
		},
		{
			id: "TrRiHN004",
			DepatureTime: "2023-01-12 13:23:44",
			DepatureStation: "DHSta",
			Destination: "LCSta",
			IdTrain: "TrR001",
		},
	];

	return (
		<div className="container my-5">
			<h1 className="text-center mb-5">TrainRide</h1>
			<table className="table align-middle mb-0 bg-white">
				<thead className="bg-light">
					<tr>
						<th>TrainRide ID</th>
						<th>Depature Time</th>
						<th>Depature Station </th>
						<th>Destination</th>
						<th>IdTrain</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{dataTrainRide.map((trainRide) => (
						<tr key={trainRide.id}>
							<td>{trainRide.id}</td>
							<td>{trainRide.DepatureTime}</td>
							<td>{trainRide.DepatureStation}</td>
							<td>{trainRide.Destination}</td>
							<td>{trainRide.IdTrain}</td>
							<td>
								<Link
									to={`${trainRide.id}`}
									type="button"
									className="btn btn-outline-primary"
									data-mdb-ripple-color="dark"
								>
									Edit
								</Link>
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

export default TrainRide;
