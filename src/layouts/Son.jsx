import React from "react";
import { useNavigate } from "react-router-dom";

const Son = () => {
	const navigate = useNavigate();
	return (
		<div className="container py-5">
			<p className="mb-2">*Xem thông tin nhân viên tại đây</p>
			<button
				onClick={() => navigate("/employee")}
				className="btn btn-outline-success mb-4"
			>
				Xem
			</button>
		</div>
	);
};

export default Son;
