import React from "react";
import { useLoaderData } from "react-router";
import DoctorCards from "../../components/home/DoctorCards";

const DoctorDetailsPage = () => {
  const { doctors } = useLoaderData();
  console.log(doctors);
  return (
    <div>
      <DoctorCards doctors={doctors}></DoctorCards>
    </div>
  );
};

export default DoctorDetailsPage;
