import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import successDoctor from "../../assets/success-doctor.png";
import successPatients from "../../assets/success-patients.png";
import successReview from "../../assets/success-review.png";
import successStaffs from "../../assets/success-staffs.png";

const AnimatedStatCard = ({ icon, count, title, delay }) => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, delay * 300);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 text-center 
                hover:shadow-xl transition-all duration-500 hover:-translate-y-2
                border border-blue-100 relative overflow-hidden group"
      style={{
        opacity: startAnimation ? 1 : 0,
        transform: startAnimation ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease-out ${
          delay * 0.1
        }s, transform 0.5s ease-out ${delay * 0.1}s`,
      }}
    >
      {/* Decorative elements */}
      <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-100 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
      <div className="absolute -bottom-2 -left-4 w-12 h-12 bg-blue-200 rounded-full opacity-15 group-hover:opacity-25 transition-opacity"></div>

      <div className="relative z-10">
        <div className="flex justify-center mb-4">
          <img
            src={icon}
            alt={title}
            className="h-16 w-16 object-contain transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="text-4xl font-bold text-blue-600 mb-2">
          {startAnimation && (
            <CountUp
              end={count}
              duration={2}
              delay={delay * 0.2}
              separator=","
              suffix="+"
            />
          )}
        </div>

        <h3 className="text-lg font-medium text-gray-700">{title}</h3>
      </div>
    </div>
  );
};

const BestMedical = () => {
  const [isVisible, setIsVisible] = useState(false);
  const stats = [
    { id: 1, icon: successDoctor, count: 199, title: "Total Doctors" },
    { id: 2, icon: successReview, count: 467, title: "Total Reviews" },
    { id: 3, icon: successPatients, count: 1900, title: "Patients" },
    { id: 4, icon: successStaffs, count: 300, title: "Total Staffs" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("stats-section");
      if (element) {
        const top = element.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          setIsVisible(true);
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="stats-section"
      className="py-16 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <div
          className="text-center mb-16 transition-opacity duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              We Provide Best Medical Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Connecting you with{" "}
            <span className="font-medium text-blue-500">
              verified specialists
            </span>{" "}
            across various fields — healthcare made{" "}
            <span className="italic">simple</span> and{" "}
            <span className="font-semibold">accessible</span>.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:px-24">
          {stats.map((stat, index) => (
            <AnimatedStatCard
              key={stat.id}
              icon={stat.icon}
              count={stat.count}
              title={stat.title}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestMedical;
