import React from "react";
import Header from "./components/Header";

import "./App.css";
import UserList from "./components/UserList";

function App() {
  return (
    <div>
      <Header/>
      <UserList></UserList>
    </div>
  );
}

export default App;
