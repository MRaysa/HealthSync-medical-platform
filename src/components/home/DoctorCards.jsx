import React, { useState } from "react";
import { useLoaderData, Link } from "react-router";

const DoctorCards = () => {
  const { doctors } = useLoaderData();
  const [showAll, setShowAll] = useState(false);

  const displayedDoctors = showAll ? doctors : doctors.slice(0, 6);

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Best Doctors
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience. Whether it's a
            routine checkup or urgent consultation, book appointments in minutes
            and receive quality care you can trust.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedDoctors.map((doctor) => (
            <div
              key={doctor.id}
              className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>

              {/* Doctor Image */}
              <div className="bg-gray-100 relative overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-[400px] object-cover p-4 rounded-3xl object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Doctor Info */}
              <div className="p-5 relative z-20">
                {/* Availability and Experience - side by side */}
                <div className="flex gap-4 items-center mb-3">
                  <div className="flex items-center bg-green-100 rounded-2xl p-2 border border-green-300 group-hover:bg-green-200 transition-colors duration-300">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 group-hover:animate-pulse"></span>
                    <span className="text-xs font-medium text-gray-600">
                      Available
                    </span>
                  </div>
                  <span className="text-xs font-medium text-blue-600 bg-blue-100 rounded-2xl p-2 border border-blue-300 group-hover:bg-blue-200 transition-colors duration-300">
                    {doctor.experience}+ Years Experience
                  </span>
                </div>

                {/* Doctor Name with hover effect */}
                <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-indigo-600 transition-colors duration-300">
                  {doctor.name}
                  <span className="block w-0 group-hover:w-full h-0.5 bg-indigo-600 transition-all duration-500 mt-1"></span>
                </h3>

                {/* Education */}
                <p className="text-sm text-gray-600 mb-2 group-hover:text-gray-800 transition-colors duration-300">
                  {doctor.education}
                </p>

                {/* Animated divider */}
                <div className="border-t border-gray-300 border-dashed my-4 relative overflow-hidden hover:border-gray-400">
                  <div className="absolute top-0 left-0 w-0 h-full bg-indigo-600 group-hover:w-full transition-all duration-500"></div>
                </div>

                {/* Registration */}
                <p className="text-xs text-gray-500 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                  <span className="text-xs">®</span> Reg No:{" "}
                  {doctor.registration}
                </p>

                {/* Animated View Details Button */}
                <Link
                  to={`/doctors/${doctor.id}`}
                  className="relative inline-flex items-center justify-center w-full px-12 py-3 overflow-hidden text-lg font-medium text-gray-900 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-transparent transition-all duration-300"
                >
                  <span className="absolute left-0 block w-0 h-full bg-indigo-600 opacity-100 group-hover:w-full transition-all duration-500 ease-in-out top-0"></span>
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
                  <span className="relative flex items-center">
                    View Details
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* View All/Less Button */}
        {doctors.length > 6 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="cursor-pointer relative inline-flex items-center px-12 py-3 overflow-hidden text-sm font-medium text-blue-600 border-2 border-blue-600 rounded-full hover:text-white group hover:bg-gray-50 transition-all duration-400"
            >
              <span className="absolute left-0 block w-full h-0 transition-all bg-blue-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
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
              <span className="relative">
                {showAll ? "Show Less" : "View All Doctors"}
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorCards;
