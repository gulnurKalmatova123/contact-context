import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AddContactPage from "../pages/AddContactPage";
import EditContactPage from "../pages/EditContactPage";
import MainLayout from "../layouts/MainLayout";

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddContactPage />} />
        <Route path="/edit/:id" element={<EditContactPage />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
