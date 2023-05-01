import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Quynh = () => {
  const navigate = useNavigate();
  const [employeeId, setEmployeeId] = useState();
  const employeeIdChangeHandle = (e) => setEmployeeId(e.target.value);

  const submitHandle = (e) => {
    e.preventDefault();
    console.log(employeeId);
    navigate("/tickets");
  };
  return (
    <div className="container py-5">
      <p className="mb-2">*Đặt vé tại đây</p>
      <button
        onClick={() => navigate("/book-ticket")}
        className="btn btn-outline-success mb-4"
      >
        Book Ticket
      </button>
      <form onSubmit={submitHandle}>
        <label className="form-label" htmlFor="employeeId">
          *Tra cứu những vé đã đặt qua nhân viên có ID:
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
    </div>
  );
};

export default Quynh;
