import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import EmployeeIncome from "./views/EmployeeIncome";
import BranchIncome from "./views/BranchIncome";

const BookTicket = lazy(() => import("./views/BookTicket"));
const Employee = lazy(() => import("./views/Employee"));
const EmployeeDetail = lazy(() => import("./views/EmployeeDetail"));
const Customer = lazy(() => import("./views/Customer"));
const CustomerDetail = lazy(() => import("./views/CustomerDetail"));
const Tickets = lazy(() => import("./views/Tickets"));
const Son = lazy(() => import("./layouts/Son"));
const Chinh = lazy(() => import("./layouts/Chinh"));
const Hoang = lazy(() => import("./layouts/Hoang"));
const Nhi = lazy(() => import("./layouts/Nhi"));
const Viet = lazy(() => import("./layouts/Viet"));
const Quynh = lazy(() => import("./layouts/Quynh"));
const Vu = lazy(() => import("./layouts/Vu"));
const Huong = lazy(() => import("./layouts/Huong"));
const Phuc = lazy(() => import("./layouts/Phuc"));
const Dung = lazy(() => import("./layouts/Dung"));

function App() {
	return (
		<React.StrictMode>
			<Suspense fallback={<p>Loading...</p>}>
				<BrowserRouter>
					<Routes>
						<Route index path="/" element={<Home />} />
						<Route path="/sonbh" element={<Son />} />
						<Route path="/chinhnm" element={<Chinh />} />
						<Route path="/hoangvm" element={<Hoang />} />
						<Route path="/nhidn" element={<Nhi />} />
						<Route path="/vietpq" element={<Viet />} />
						<Route path="/quynhnn" element={<Quynh />} />
						<Route path="/vuna" element={<Vu />} />
						<Route path="/huongtt" element={<Huong />} />
						<Route path="/phucht" element={<Phuc />} />
						<Route path="/dungpt" element={<Dung />} />
						<Route path="/tickets" element={<Tickets />} />
						<Route path="/book-ticket" element={<BookTicket />} />
						<Route path="/employee" element={<Employee />} />
						<Route path="/employee/:id" element={<EmployeeDetail />} />
						<Route path="/employee/income" element={<EmployeeIncome />} />
						<Route path="/branch/income" element={<BranchIncome />} />
						<Route path="/customer" element={<Customer />} />
						<Route path="/customer-detail" element={<CustomerDetail />} />
					</Routes>
				</BrowserRouter>
			</Suspense>
		</React.StrictMode>
	);
}

export default App;
