import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Phuc = () => {
  const navigate = useNavigate();
  const [trainRideId, setTrainRideId] = useState();
  const trainRideIdChangeHandle = (e) => setTrainRideId(e.target.value);
  const submitHandle = (e) => {
    e.preventDefault();
    console.log(trainRideId);
    // navigate(`/tickets?trainRideId=${trainRideId}`);
  };
  return (
    <div className="container py-5">
      <form onSubmit={submitHandle}>
        <div className="form-outline">
          <label className="form-label" htmlFor="trainRideId">
            *Tra cứu những hành khách trên cùng chuyến tàu:
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
        <button type="submit" className="btn btn-primary my-4">
          Find
        </button>
      </form>
    </div>
  );
};

export default Phuc;
