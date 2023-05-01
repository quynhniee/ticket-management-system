import React from "react";
import { Link } from "react-router-dom";
import DataTable from "../components/DataTable";

const ths = [
  "#",
  "Ticket ID",
  "Seat type",
  "Price",
  "Discount",
  "Customer ID",
  "Employee ID",
  "Train Ride ID",
];
const data = [
  {
    id: 1,
    ticketPrice: 1000,
    discount: 0.05,
    seatType: "eco",
    IdCustomer: "#C001",
    IdEmployee: "#E010",
    IdTrainRide: "#TrRi001",
  },
  {
    id: 3,
    ticketPrice: 600,
    discount: 0.05,
    seatType: "eco",
    IdCustomer: "#C002",
    IdEmployee: "#E050",
    IdTrainRide: "#TrRi001",
  },
  {
    id: 4,
    ticketPrice: 1020,
    discount: 0.05,
    seatType: "eco",
    IdCustomer: "#C001",
    IdEmployee: "#E0190",
    IdTrainRide: "#TrRi001",
  },
];

const Tickets = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Tickets</h1>
      <DataTable ths={ths} data={data} />

      <div className="d-flex justify-content-end">
        <Link to="/book-ticket" className="btn btn-primary">
          Book now
        </Link>
      </div>
    </div>
  );
};

export default Tickets;
