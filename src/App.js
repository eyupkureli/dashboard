import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/userform" element={<UserForm />} />
      </Routes>
    </Router>
  );
}

export default App;
