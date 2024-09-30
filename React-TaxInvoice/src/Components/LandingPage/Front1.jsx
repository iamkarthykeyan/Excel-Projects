import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@material-tailwind/react";

const Front1 = () => {
  const cardRef = useRef(null);
  const tipRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );

    tipRefs.current.forEach((tip, index) => {
      gsap.fromTo(
        tip,
        { opacity: 0, x: 100 }, // Start off to the right
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: index * 0.3, // Delay each card's appearance
          ease: "power3.out",
          onComplete: () => {
            // Apply a smooth bottom shadow animation
            gsap.to(tip, {
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)", // Box shadow at the bottom
              duration: 0.5,
              ease: "power2.out",
            });
          },
        }
      );
    });
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-12 p-8 max-w-6xl mx-auto mt-12 items-center">
      {/* Left Section - Main Card */}
      <div
        ref={cardRef}
        className="bg-white p-8 rounded-lg shadow-lg lg:w-2/3 transform hover:scale-105 transition-transform duration-500 ease-in-out"
      >
        <div className="relative mb-6">
          <img
            src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your image URL
            alt="Laptop"
            className="w-full h-72 object-cover rounded-lg"
          />
          <div className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-bold uppercase text-gray-800 rounded-lg shadow-sm">
            Tax Invoice
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-4 text-gray-900 leading-snug">
          Effortless Invoicing, Seamless Tax Management
        </h2>

        <div className="flex items-center space-x-2 text-gray-600 text-sm mb-5">
          <img
            src="https://ik.imagekit.io/rxdxtxpigt/nib-removebg-preview.png?updatedAt=1727620962628" // Replace with author image
            alt="Author"
            className="w-8 h-8 rounded-full"
          />
          <span>Invoicely Team</span>
          <span>•</span>
          <span>2024</span>
        </div>
        <p>Simplify your invoicing with our intuitive Tax Invoice Application. Designed for ease and efficiency, it streamlines your tax processes, allowing you to focus on what truly matters your business. Transform the way you manage your finances today!</p>
        <Button className="flex items-center justify-center gap-2 mt-5 bg-black text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-grey-700 transition-all duration-300">
          GET STARTED
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </Button>

      </div>

      {/* Right Section - Tips and Resources with box shadow effect */}
      <div className="lg:w-1/3 space-y-8">
        {/* Right-side card 1 */}
        <div
          ref={(el) => (tipRefs.current[0] = el)}
          className="p-6 bg-white rounded-lg shadow-none" // Start with no shadow
        >
          <div className="mb-4">
            <img
              src="https://images.unsplash.com/photo-1705544363568-425eabe4de51?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your image URL
              alt="Image 1"
              className="w-full h-40 object-cover rounded-lg shadow-none" // Start with no shadow
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">
            Instant Access with QR Code
          </h3>
          <p className="text-gray-500 mt-3">
            "Scan for Instant Access! Your Tax Invoice is Just a Click Away!"
          </p>
        </div>

        {/* Right-side card 2 */}
        <div
          ref={(el) => (tipRefs.current[1] = el)}
          className="p-6 bg-white rounded-lg shadow-none"
        >
          <div className="mb-4">
            <img
              src="https://images.unsplash.com/photo-1707761918029-1295034aa31e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your image URL
              alt="Image 2"
              className="w-full h-40 object-cover rounded-lg shadow-none"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">
            Seamless Tax Calculations
          </h3>
          <p className="text-gray-500 mt-3">
          "Say Goodbye to Tax Time Stress! Experience Seamless Calculations Today!"</p>
        </div>
      </div>
    </div>
  );
};

export default Front1;
