import React from "react";
import bannerDoctor from "../../assets/banner-img-1.png";
import bannerMedical from "../../assets/banner-img-2.png";

const HeroBanner = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl overflow-hidden my-8 mx-4 md:mx-24 shadow-2xl border-2 border-white/30 backdrop-blur-sm">
      <div className="absolute inset-0 border-2 border-white/20 rounded-xl pointer-events-none"></div>

      {/* Main Content Container */}
      <div className="container mx-auto px-6 py-12 md:py-20">
        {/* Text Content */}
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Dependable Care, Backed by Trusted Professionals.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience. Whether it's a
            routine checkup or urgent consultation, book appointments in minutes
            and receive quality care you can trust.
          </p>

          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-md sm:max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search any doctor..."
              className="flex-grow px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-2xl transition-colors text-sm sm:text-base whitespace-nowrap">
              Search Now
            </button>
          </div>
        </div>

        {/* Images Container */}
        <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 px-4  md:pb-12 ">
          {/* Left Image */}
          <img
            src={bannerDoctor}
            alt="Doctor illustration"
            className="absolute left-2 md:left-36 bottom-0 h-full object-contain rounded-2xl"
            style={{ maxWidth: "45%" }}
          />

          {/* Right Image */}
          <img
            src={bannerMedical}
            alt="Medical illustration"
            className="absolute right-2 md:right-36 bottom-0 h-full object-contain rounded-2xl"
            style={{ maxWidth: "45%" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
