import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";

const BookTicket = lazy(() => import("./views/BookTicket"));
const Employee = lazy(() => import("./views/Employee"));
const EmployeeDetail = lazy(() => import("./views/EmployeeDetail"));
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
            <Route path="/employee-detail" element={<EmployeeDetail />} />
            <Route path="/employee-detail/:id" element={<EmployeeDetail />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </React.StrictMode>
  );
}

export default App;
