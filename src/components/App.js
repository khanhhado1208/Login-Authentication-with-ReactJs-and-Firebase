import React from "react";
import Layout from "./Layout";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Signup from "./Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";

/* 
* BrowserRouter is a component that you wrap around your entire React application - enables navigation between views from different components in a React application
* Routes is a component provided by react-router-dom that serves as a container for defining your application's routes
* Route is a component that represents a specific route within your application
<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
</Routes>
*/
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route exact path="/" element={<Layout />}>
            <Route index element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
