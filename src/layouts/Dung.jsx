import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dung = () => {
  const navigate = useNavigate();
  const [seatType, setSeatType] = useState("bus");
  const seatTypeChangeHandle = (e) => setSeatType(e.target.value);

  const submitHandle = (e) => {
    e.preventDefault();
    console.log(seatType);
    navigate(`/tickets?seatType=${seatType}`);
  };

  return (
    <div className="container py-5">
      <form onSubmit={submitHandle}>
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
        <button type="submit" className="btn btn-primary my-4">
          Find
        </button>
      </form>
    </div>
  );
};

export default Dung;
