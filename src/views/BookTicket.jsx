import React, { useState } from "react";

const BookTicket = () => {
  const [userId, setUserId] = useState();
  const [employeeId, setEmployeeId] = useState();
  const [trainRideId, setTrainRideId] = useState();
  const [seatType, setSeatType] = useState("bus");
  const [ticketPrice, setTicketPrice] = useState();
  const [discount, setDiscount] = useState(0);

  const userIdChangeHandle = (e) => setUserId(e.target.value);
  const employeeIdChangeHandle = (e) => setEmployeeId(e.target.value);
  const trainRideIdChangeHandle = (e) => setTrainRideId(e.target.value);
  const seatTypeChangeHandle = (e) => setSeatType(e);
  const ticketPriceChangeHandle = (e) => setTicketPrice(+e.target.value);
  const discountChangeHandle = (e) => setDiscount(+e.target.value);

  const submitHandle = (e) => {
    e.preventDefault();
    console.log(
      userId,
      employeeId,
      trainRideId,
      seatType,
      ticketPrice,
      discount
    );
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-5">Book Ticket</h1>
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
                value={userId}
                onChange={userIdChangeHandle}
              />
            </div>
          </div>
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
              <label className="form-label" htmlFor="trainRideId">
                Train ride ID
              </label>
              <input
                type="text"
                id="trainRideId"
                className="form-control"
                required
                value={trainRideId}
                onChange={trainRideIdChangeHandle}
              />
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col">
            <div className="form-outline">
              <label className="form-label" htmlFor="seatType">
                Seat type
              </label>
              <select
                className="form-select"
                id="seatType"
                aria-label="Floating label select example"
                value={seatType}
                onChange={seatTypeChangeHandle}
              >
                <option value="eco">Economy class</option>
                <option value="bus">Business class</option>
              </select>
            </div>
          </div>
          <div className="col">
            <div className="form-outline">
              <label className="form-label" htmlFor="price">
                Ticket price
              </label>
              <input
                type="number"
                step={1}
                id="price"
                className="form-control"
                required
                value={ticketPrice}
                onChange={ticketPriceChangeHandle}
              />
            </div>
          </div>
          <div className="col">
            <div className="form-outline">
              <label className="form-label" htmlFor="discount">
                Discount
              </label>
              <input
                type="number"
                min={0}
                max={1}
                step={0.01}
                id="discount"
                className="form-control"
                required
                value={discount}
                onChange={discountChangeHandle}
              />
            </div>
          </div>
        </div>
        <hr />

        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-outline-primary mb-4">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookTicket;
