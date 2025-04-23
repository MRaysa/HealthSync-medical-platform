import React, { useState, useEffect } from "react";
import HeroBanner from "../../components/home/HeroBanner";
import DoctorDetailsPage from "../DoctorDetailsPage/DoctorDetailsPage";
import BestMedicalServicesPages from "../BestMedicalServicesPages/BestMedicalServicesPages";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  // loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading medical services...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fadeIn">
      <HeroBanner />
      <DoctorDetailsPage />
      <BestMedicalServicesPages />
    </div>
  );
};

export default HomePage;
