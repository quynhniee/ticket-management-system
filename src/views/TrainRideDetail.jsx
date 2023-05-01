import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

const TrainRideDetail = () => {
	const { id } = useParams();

	const title = id === "add" ? "Add TrainRide" : "TrainRide Detail";

	const trainRide =
		id === "add"
			? {}
			: {
					id: "TrRiHN001",
					DepatureTime: "2023-01-12 13:23:44",
					DepatureStation: "DHSta",
					Destination: "LCSta",
					IdTrain: "TrR001",
			  };

	const [time, setTime] = useState(trainRide.DepatureTime);

	const timeChangeHandle = (e) => setTime(e.target.value);
	const submitHandle = (e) => {
		e.preventDefault();
	};

	return (
		<div className="container my-5">
			<h1 className="text-center mb-5">{title}</h1>

			<form onSubmit={submitHandle}>
				<div className="row mb-4">
					<div className="col">
						<div className="form-outline">
							<label className="form-label" htmlFor="trainRideId">
								TrainRide ID
							</label>
							<input
								type="text"
								id="trainRideId"
								className="form-control"
								value={trainRide.id}
								readOnly={id !== "add"}
							/>
						</div>
					</div>

					<div className="col">
						<div className="form-outline">
							<label className="form-label" htmlFor="time">
								Depature Time
							</label>
							<input
								type="text"
								id="time"
								className="form-control"
								value={time}
								onChange={timeChangeHandle}
							/>
						</div>
					</div>
				</div>

				<div className="row mb-4">
					<div className="col">
						<div className="form-outline">
							<label className="form-label" htmlFor="depatureStation">
								Depature Station
							</label>
							<input
								type="text"
								id="depatureStation"
								className="form-control"
								readOnly={id !== "add"}
								value={trainRide.DepatureStation}
							/>
						</div>
					</div>
					<div className="col">
						<div className="form-outline">
							<label className="form-label" htmlFor="destination">
								Destination
							</label>
							<input
								type="text"
								id="destination"
								className="form-control"
								value={trainRide.Destination}
								readOnly={id !== "add"}
							/>
						</div>
					</div>
				</div>
				<div className="row mb-4">
					<div className="form-outline">
						<label className="form-label" htmlFor="depatureStation">
							Train ID
						</label>
						<input
							type="text"
							id="depatureStation"
							className="form-control"
							readOnly={id !== "add"}
							value={trainRide.IdTrain}
						/>
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

export default TrainRideDetail;
