import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-hot-toast";
import {
  getFromStoredDB,
  removeFromStoredDB,
} from "../../utilities/LocalStorage";
import AppointmentsChart from "../../components/doctors/appointmetsCharts";

const BookingPage = () => {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedAppointments = getFromStoredDB();
    setAppointments(savedAppointments);
  }, []);

  const handleCancel = (id) => {
    const success = removeFromStoredDB(id);
    if (success) {
      setAppointments((prev) => prev.filter((app) => app.id !== id));
      toast.success("Appointment cancelled successfully");
    } else {
      toast.error("Failed to cancel appointment");
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {appointments.length === 0 ? (
        <div className="text-center py-12">
          <h1 className="text-gray-900 text-3xl font-bold">
            You Have not Booked any appointment yet
          </h1>
          <p className="text-gray-600 mb-6 mt-6">
            Our platform connects you with verified, experienced doctors across
            various specialties -all at your convenience.
          </p>
          {/* <button
            onClick={() => navigate("/")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg"
          >
            Find Doctors
          </button> */}
          <button
            onClick={() => navigate("/")}
            className="cursor-pointer relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50 transition-all duration-300 ease-in-out"
          >
            <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="relative">Book an Appointment</span>
          </button>
        </div>
      ) : (
        <div>
          {/* Add the chart component here */}
          <AppointmentsChart appointments={appointments} />
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-3 mt-5">
              My Today Appointments
            </h1>
            <p className="text-gray-600 text-base">
              Our platform connects you with verified, experienced doctors
              across various specialties — all at your convenience.
            </p>
          </div>

          <div className="space-y-6">
            {appointments.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white rounded-lg shadow-sm border border-gray-100 p-6"
              >
                <div className="flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-xl font-bold text-gray-800 mb-1">
                        {doctor.name}
                      </h2>
                      <p className="text-gray-600 text-sm">
                        {doctor.education}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-500 font-medium">
                        Appointment Fee: {doctor.fee} Taka + Vat
                      </p>
                    </div>
                  </div>
                  <div className="border-t-2 border-dashed border-gray-400 my-4"></div>
                  {/* <button
                    onClick={() => handleCancel(doctor.id)}
                    className="mt-4 w-full bg-white hover:bg-gray-50 text-red-600 font-medium py-2 rounded-lg border border-red-200 transition-colors"
                  >
                    Cancel Appointment
                  </button> */}
                  <button
                    onClick={() => handleCancel(doctor.id)}
                    className="cursor-pointer relative inline-flex items-center justify-center w-full px-12 py-3 overflow-hidden text-lg font-medium text-red-600 border-2 border-red-600 rounded-full hover:text-white group hover:bg-gray-50 transition-colors mt-4"
                  >
                    <span className="absolute left-0 block w-full h-0 transition-all bg-red-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </span>
                    <span className="relative">Cancel Appointment</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingPage;
