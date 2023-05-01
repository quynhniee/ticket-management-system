import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";

const BookTicket = lazy(() => import("./views/BookTicket"));
const Employee = lazy(() => import("./views/Employee"));
const EmployeeDetail = lazy(() => import("./views/EmployeeDetail"));
const Customer = lazy(() => import("./views/Customer"));
const CustomerDetail = lazy(() => import("./views/CustomerDetail"));
const TrainRide = lazy(() => import("./views/TrainRide"));
const TrainRideDetail = lazy(() => import("./views/TrainRideDetail"));
const Tickets = lazy(() => import("./views/Tickets"));
const Quynh = lazy(() => import("./layouts/Quynh"));
const Vu = lazy(() => import("./layouts/Vu"));

function App() {
	return (
		<React.StrictMode>
			<Suspense fallback={<p>Loading...</p>}>
				<BrowserRouter>
					<Routes>
						<Route index path="/" element={<Home />} />
						<Route path="/quynhnn" element={<Quynh />} />
						<Route path="/vuna" element={<Vu />} />
						<Route path="/tickets" element={<Tickets />} />
						<Route path="/book-ticket" element={<BookTicket />} />
						<Route path="/employee" element={<Employee />} />
						<Route path="/employee/:id" element={<EmployeeDetail />} />
						<Route path="/customer" element={<Customer />} />
						<Route path="/customer/:id" element={<CustomerDetail />} />
						<Route path="/train-ride" element={<TrainRide />} />
						<Route path="/train-ride/:id" element={<TrainRideDetail />} />
					</Routes>
				</BrowserRouter>
			</Suspense>
		</React.StrictMode>
	);
}

export default App;
