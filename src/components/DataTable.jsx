import React from "react";

const Ticket = ({ index, ticket }) => {
  const {
    id,
    ticketPrice,
    discount,
    seatType,
    IdCustomer,
    IdEmployee,
    IdTrainRide,
  } = ticket;
  return (
    <tr>
      <th scope="row">{index}</th>
      <td>{id}</td>
      <td>{seatType}</td>
      <td>{ticketPrice}</td>
      <td>{discount}</td>
      <td>{IdCustomer}</td>
      <td>{IdEmployee}</td>
      <td>{IdTrainRide}</td>
    </tr>
  );
};

const DataTable = ({ data, ths }) => {
  if (!data || !ths) return <p>Loading...</p>;
  return (
    <table className="table table-striped ">
      <thead>
        <tr>
          {ths.map((th) => (
            <th scope="col">{th}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((ticket, index) => (
          <Ticket index={index} ticket={ticket} />
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
