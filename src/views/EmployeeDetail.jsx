import React, { useState } from "react";
import { Link } from "react-router-dom";

const EmployeeDetail = () => {
  const [employeeId, setEmployeeId] = useState();
  const [name, setName] = useState();
  const [role, setRole] = useState("E");
  const [phone, setPhone] = useState();

  const employeeIdChangeHandle = (e) => setEmployeeId(e.target.value);
  const nameChangeHandle = (e) => setName(e.target.value);
  const roleChangeHandle = (e) => setRole(e.target.value);
  const phoneChangeHandle = (e) => setPhone(e.target.value);

  const submitHandle = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-5">Employee</h1>

      <form onSubmit={submitHandle}>
        <div className="row mb-4">
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
              <label className="form-label" htmlFor="role">
                Role
              </label>
              <select
                className="form-select"
                id="role"
                aria-label="Floating label select example"
                value={role}
                onChange={roleChangeHandle}
              >
                <option value="G">G</option>
                <option value="Q">Q</option>
                <option value="E">Employee</option>
              </select>
            </div>
          </div>
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
        </div>
        <hr />

        <div className="d-flex justify-content-end">
          <Link to="/" className="btn btn-outline-warning mr-4">
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

export default EmployeeDetail;
