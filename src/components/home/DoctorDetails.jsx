import React, { useState, useEffect } from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router";
import { toast } from "react-hot-toast";
import { OctagonAlert } from "lucide-react";
import { addToStoredDB } from "../../utilities/LocalStorage";

const DoctorDetails = () => {
  const { id } = useParams();
  const { doctors } = useLoaderData();
  const navigate = useNavigate();
  const [hasBooked, setHasBooked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const doctor = doctors.find((doc) => doc.id === id);

  const handleAppointment = () => {
    if (hasBooked) {
      toast.error(`You already have an appointment with ${doctor.name}`);
      return;
    }

    setIsLoading(true);
    // Use the LocalStorage utility function
    const success = addToStoredDB(doctor);

    if (success) {
      setHasBooked(true);
      toast.success(`Appointment booked with ${doctor.name}!`);
      setTimeout(() => {
        setIsLoading(false);
        navigate("/my-bookings");
      }, 500);
    } else {
      toast.error(
        `Failed to book appointment with ${doctor.name}.You have already booked her appointment`
      );
      setIsLoading(false);
    }
  };

  if (!doctor) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8 text-center mt-16 mb-28">
        <h1 className="text-gray-700 text-3xl font-bold">No Doctor Found</h1>
        <h3 className="text-gray-400 mt-3">
          No Doctor Found with this registration No-{" "}
          <span className="font-bold text-gray-700">{id}</span>
        </h3>
        <Link to="/">
          <button className="cursor-pointer relative inline-flex items-center justify-center w-full md:w-auto px-12 py-3 overflow-hidden text-lg font-medium text-blue-600  border-2 border-blue-600 rounded-full hover:text-white group hover:bg-blue-700 transition-colors mt-4">
            <span className="absolute left-0 block w-full h-0 transition-all bg-blue-700 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
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
            <span className="relative">View All Doctors</span>
          </button>
        </Link>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* doctor details part */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Doctor's Profile Details
        </h1>
        <p className="text-gray-600 mb-6">{doctor.details}</p>
      </div>

      {/* Doctor's Profile Card */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Doctor Image */}
          <div className="w-full md:w-1/3">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-[400px] rounded-xl object-cover"
            />
          </div>

          {/* Doctor Info */}
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-bold text-gray-800 mb-1">
              {doctor.name}
            </h2>
            <p className="text-gray-600 mb-2">{doctor.education}</p>
            <p className="text-gray-600 mb-4">{doctor.speciality}</p>

            <div className="mb-4">
              <h3 className="font-semibold text-gray-800 mb-2">Working at:</h3>
              <p className="text-gray-900 font-bold">{doctor.workplace}</p>
            </div>

            {/* divider */}
            <div className="border-t-2 border-dashed border-gray-400 my-4"></div>

            <p className="text-gray-600 mb-4">Reg No: {doctor.registration}</p>

            {/* divider */}
            <div className="border-t-2 border-dashed border-gray-400 my-4"></div>

            <div className="mb-6">
              <h3 className="font-semibold text-gray-800">Availability:</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {doctor.availability.map((day) => (
                  <span
                    key={day}
                    className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm border border-amber-400"
                  >
                    {day}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-lg font-semibold text-gray-800">
              Consultation Fee:{" "}
              <span className="text-blue-500">${doctor.fee}</span> (incl. VAT){" "}
              <span className="text-blue-500">Per consultation</span>
            </p>
          </div>
        </div>
      </div>

      {/* Appointment Card */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
          Book an Appointment
        </h2>

        {/* Divider */}
        <div className="border-t-2 border-dashed border-gray-400 my-4"></div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium">Availability</span>
            <span className="text-green-600 font-sm bg-green-100 border border-green-400 px-3 py-1 rounded-full">
              Doctor Available Today
            </span>
          </div>

          {/* Divider */}
          <div className="border-t-2 border-dashed border-gray-400 my-4"></div>

          {/* Octagon Alert Component */}
          <div className="flex items-start gap-3 p-3 bg-amber-50 border border-amber-200 rounded-lg mb-4">
            <OctagonAlert className="flex-shrink-0 w-5 h-5 text-amber-500 mt-0.5" />
            <div className="text-sm text-amber-700">
              <p>
                Due to high patient volume, we are currently accepting
                appointments for today only. We appreciate your understanding
                and cooperation.
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={handleAppointment}
          disabled={isLoading}
          className={`cursor-pointer relative inline-flex items-center justify-center w-full px-12 py-3 overflow-hidden text-lg font-medium ${
            isLoading
              ? "bg-blue-400 border-blue-400"
              : "bg-white border-indigo-600 hover:text-white group hover:bg-gray-50"
          } border-2 rounded-full transition-colors`}
        >
          {isLoading ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Processing...
            </>
          ) : (
            <>
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
              <span className="relative text-indigo-600 group-hover:text-white">
                Book Appointment Now
              </span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default DoctorDetails;
