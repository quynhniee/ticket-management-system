import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Huong = () => {
  const navigate = useNavigate();
  const [branchId, setBranchId] = useState("BHN001");
  const branchIdChangeHandle = (e) => setBranchId(e.target.value);

  const submitHandle = (e) => {
    e.preventDefault();
    console.log(branchId);
    navigate(`/tickets?branchId=${branchId}`);
  };

  return (
    <div className="container py-5">
      <form onSubmit={submitHandle}>
        <label className="form-label" htmlFor="branch">
          Branch
        </label>
        <select
          className="form-select"
          id="branch"
          aria-label="Floating label select example"
          value={branchId}
          onChange={branchIdChangeHandle}
          required
        >
          <option value="BHN001">Ha Noi</option>
          <option value="BNB009">Ninh Binh</option>
          <option value="BHP003">Hai Phong</option>
          <option value="BHT004">Ha Tinh</option>
          <option value="BHY007">Hung Yen</option>
          <option value="BDB005">Dien Bien</option>
          <option value="BPT008">Phu Tho</option>
          <option value="BTB006">Thai Binh</option>
          <option value="BND002">Nam Dinh</option>
        </select>
        <button type="submit" className="btn btn-primary my-4">
          Find
        </button>
      </form>
    </div>
  );
};

export default Huong;
