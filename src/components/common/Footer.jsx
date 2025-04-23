import React from "react";
import { useLocation, Link } from "react-router";
import logoimg from "../../assets/logo.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const location = useLocation();

  const footerLinks = [
    { path: "/", label: "Home" },
    { path: "/my-bookings", label: "My-Bookings" },
    { path: "/blogs", label: "Blogs" },
    { path: "/contactUs", label: "Contact Us" },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, url: "https://facebook.com" },
    { icon: <FaTwitter />, url: "https://twitter.com" },
    { icon: <FaInstagram />, url: "https://instagram.com" },
    { icon: <FaLinkedin />, url: "https://linkedin.com" },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <footer className="bg-gray-100 py-6 shadow-inner">
      <div className="container mx-auto px-4">
        {/* logo */}
        <div className="flex-shrink-0 flex items-center justify-center mb-4">
          <img src={logoimg} alt="HealthSync Logo" className="h-8 mr-2" />
          <h1 className="text-xl font-bold text-blue-600">HealthSync</h1>
        </div>

        {/* Footer Navigation */}
        <div className="flex justify-center mb-6">
          <ul className="flex space-x-8">
            {footerLinks.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`px-3 py-1 text-sm font-medium ${
                    isActive(item.path)
                      ? "text-blue-600 border-b border-blue-600"
                      : "text-gray-600 hover:text-blue-500"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Divider line */}
        <div className="border-t border-gray-300 w-3/4 mx-auto mb-6"></div>

        {/* Social Icons */}
        <div className="flex space-x-4 justify-center mb-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 text-lg"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Copyright and Social Links */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            <p className="text-gray-600 text-sm mt-1">
              Quality healthcare made simple
            </p>
          </div>
          <div className="text-gray-500 text-xs">
            © {new Date().getFullYear()} HealthSync. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
