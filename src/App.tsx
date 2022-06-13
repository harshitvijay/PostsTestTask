import React from "react";
import Home from "./routes/Home/Home.routes";
import Comments from "./routes/Comments/Comments.routes";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/comment/:postid" element={<Comments />} />
    </Routes>
  );
};

export default App;
