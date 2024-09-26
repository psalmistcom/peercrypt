import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Path from "./Paths";

const Guest = () => {
  return (
    <>
      <Routes>
        <Route path={Path.HOME} element={<Navigate />} />
      </Routes>
    </>
  );
};

export default Guest;
