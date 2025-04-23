import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router";
import FooterPage from "../FooterPage/FooterPage";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <FooterPage />
      <Toaster
        position="top-right"
        gutter={12}
        containerStyle={{ margin: "12px" }}
        toastOptions={{
          duration: 4000,
          style: {
            background: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(8px)",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            padding: "16px 24px",
            fontSize: "14px",
            fontWeight: "500",
            color: "#1a1a1a",
            border: "1px solid rgba(0, 0, 0, 0.05)",
          },
          success: {
            iconTheme: {
              primary: "#10B981",
              secondary: "white",
            },
          },
          error: {
            iconTheme: {
              primary: "#EF4444",
              secondary: "white",
            },
          },
        }}
      />
    </div>
  );
};

export default Root;
