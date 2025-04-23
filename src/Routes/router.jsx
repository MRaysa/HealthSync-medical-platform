import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomePage from "../pages/HomePage/HomePage";
import BookingPage from "../pages/BookingPage/BookingPage";
import BlogsPage from "../pages/BlogsPage/BlogsPage";
import ContactUs from "../components/ContactUs/ContactUs";
import DoctorDetails from "../components/home/DoctorDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        Component: HomePage,
        loader: () => fetch("/doctors.json"),
      },
      {
        path: "/my-bookings",
        Component: BookingPage,
      },
      {
        path: "/doctors/:id",
        Component: DoctorDetails,
        loader: () => fetch("/doctors.json"),
      },
      {
        path: "/blogs",
        Component: BlogsPage,
        loader: () => fetch("/blogs.json"),
      },
    ],
  },
]);

export default router;
