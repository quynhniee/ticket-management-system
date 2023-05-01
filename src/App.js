import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";

const BookTicket = lazy(() => import("./views/BookTicket"));
const Employee = lazy(() => import("./views/Employee"));
const EmployeeDetail = lazy(() => import("./views/EmployeeDetail"));

function App() {
	return (
		<React.StrictMode>
			<Suspense fallback={<p>Loading...</p>}>
				<BrowserRouter>
					<Routes>
						<Route index path="/" element={<Home />} />
						<Route path="/book-ticket" element={<BookTicket />} />
						<Route path="/employee" element={<Employee />} />
						<Route
							path="/employee-detail/:id"
							element={<EmployeeDetail />}
						/>
					</Routes>
				</BrowserRouter>
			</Suspense>
		</React.StrictMode>
	);
}

export default App;
