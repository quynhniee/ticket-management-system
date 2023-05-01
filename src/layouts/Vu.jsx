import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Vu = () => {
  const navigate = useNavigate();
  const [customerId, setCustomerId] = useState();
  const [branchId, setBranchId] = useState("BHN001");

  const customerIdChangeHandle = (e) => setCustomerId(e.target.value);
  const branchIdChangeHandle = (e) => setBranchId(e.target.value);

  const submitHandle = (e) => {
    e.preventDefault();
    console.log(customerId, branchId);
    navigate(`/tickets?customerId=${customerId}&branchId=${branchId}`);
  };

  return (
    <div className="container py-5">
      <p>*Tra cứu những vé đã đặt của một khách hàng tại một chi nhánh:</p>
      <form onSubmit={submitHandle}>
        <div className="row ">
          <div className="col">
            <div className="form-outline">
              <label className="form-label" htmlFor="customerId">
                Customer ID
              </label>
              <input
                type="text"
                id="customerId"
                className="form-control"
                value={customerId}
                onChange={customerIdChangeHandle}
                required
              />
            </div>
          </div>
          <div className="col">
            <div className="form-outline">
              <label className="form-label" htmlFor="branch">
                Branch
              </label>
              <select
                className="form-select"
                id="branch"
                aria-label="Floating label select example"
                value={branchId}
                onChange={branchIdChangeHandle}
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
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary my-4">
          Find
        </button>
      </form>
    </div>
  );
};

export default Vu;
