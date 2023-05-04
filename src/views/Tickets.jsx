import React, { useState } from "react";
import { Link } from "react-router-dom";

const ths = [
	"#",
	"Ticket ID",
	"Price",
	"Discount",
	"Seat type",
	// "Customer ID",
	// "Employee ID",
	// "Train Ride ID",
	"Action",
];
const tmp = [
	{
		id: "TKBD031",
		ticketPrice: 1000,
		discount: 0.05,
		seatType: "eco",
		IdCustomer: "C001",
		IdEmployee: "E010",
		IdTrainRide: "TrRi001",
	},
	{
		id: "TKBD031",
		ticketPrice: 600,
		discount: 0.05,
		seatType: "eco",
		IdCustomer: "C002",
		IdEmployee: "E050",
		IdTrainRide: "TrRi001",
	},
	{
		id: "TKBD233",
		ticketPrice: 1020,
		discount: 0.05,
		seatType: "eco",
		IdCustomer: "C001",
		IdEmployee: "E0190",
		IdTrainRide: "TrRi001",
	},
];
// const Ticket = ({ index, ticket }) => {
// 	const {
// 		id,
// 		ticketPrice,
// 		discount,
// 		seatType,
// 		IdCustomer,
// 		IdEmployee,
// 		IdTrainRide,
// 	} = ticket;

// 	return (
// 		<tr>
// 			<th scope="row">{index}</th>
// 			<td>{id}</td>
// 			<td>{seatType}</td>
// 			<td>{ticketPrice}</td>
// 			<td>{discount}</td>
// 			<td>{IdCustomer}</td>
// 			<td>{IdEmployee}</td>
// 			<td>{IdTrainRide}</td>
// 			<td>
// 				<Link to={`/book-ticket?id=${id}`} className="">
// 					Edit
// 				</Link>
// 			</td>
// 		</tr>
// 	);
// };

const Tickets = () => {
	const urlParams = new URLSearchParams(window.location.search);
	const employeeId = urlParams.get("employeeId");
	const customerId = urlParams.get("customerId");

	const [data, setData] = useState(tmp);

	const deleteTicketHandle = (id) => {
		setData(data.filter((ticket) => ticket.id !== id));
	};

	return (
		<div className="container py-5">
			<h1 className="text-center mb-4">Tickets</h1>
			<table className="table table-striped ">
				<thead>
					<tr>
						{ths.map((th) => (
							<th scope="col" key={th}>
								{th}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((ticket, index) => {
						return (
							(!employeeId || ticket.IdEmployee === employeeId) &&
							(!customerId || ticket.IdCustomer === customerId) && (
								<tr key={ticket.id}>
									<th scope="row">{index}</th>
									<td>{ticket.id}</td>
									<td>{ticket.ticketPrice}</td>
									<td>{ticket.discount}</td>
									<td>{ticket.seatType}</td>
									{/* <td>{ticket.IdCustomer}</td> */}
									{/* <td>{ticket.IdEmployee}</td> */}
									{/* <td>{ticket.IdTrainRide}</td> */}
									<td>
										<Link
											to={`/book-ticket?ticketId=${ticket.id}`}
											className="btn btn-outline-warning"
										>
											Edit
										</Link>
										{/* <button
											className="btn btn-outline-danger ms-1"
											onClick={() => deleteTicketHandle(ticket.id)}
										>
											Delete
										</button> */}
									</td>
								</tr>
							)
						);
					})}
				</tbody>
			</table>

			<div className="d-flex justify-content-end">
				<Link to="/book-ticket" className="btn btn-primary">
					Book now
				</Link>
			</div>
		</div>
	);
};

export default Tickets;
