import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BlogSection = () => {
  useEffect(() => {
    // Animation for the left section
    gsap.fromTo(
      ".fade-in-left",
      { x: -100, opacity: 0 }, // Start from left and transparent
      {
        x: 0, // End at original position
        opacity: 1, // Fully visible
        duration: 1.5,
        scrollTrigger: {
          trigger: ".fade-in-left", // Trigger animation on this element
          start: "top 80%", // Start the animation when the top of the element is 80% from the top of the viewport
          toggleActions: "play none none reverse", // Play on enter, reverse on leave
        },
      }
    );
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Section Title */}
      <h1 className="text-3xl font-bold mb-8">Latest articles</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-12 fade-in-left">
          {/* First Article */}
          <div className="flex space-x-6">
            <div className="w-1/3">
              <img
                src="https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fGFpfGVufDB8fDB8fHww"
                alt="Article 1"
                className="rounded-lg"
              />
            </div>
            <div className="w-2/3">
              <span className="text-sm font-bold uppercase text-gray-500">Technology</span>
              <h2 className="text-2xl font-semibold mt-2">AI-Powered Invoice Management</h2>
              <p className="text-gray-500 mt-3">
                Imagine your tax invoice application uses cutting-edge artificial intelligence to automatically categorize and verify invoices. This system could detect errors in real time, ensure compliance with local tax regulations, and even suggest optimizations for minimizing tax liabilities.
              </p>
              <div className="flex items-center mt-4 text-gray-500">
                <img
                  src="https://ik.imagekit.io/rxdxtxpigt/nib-removebg-preview.png?updatedAt=1727620962628"
                  alt="John Carter"
                  className="w-8 h-8 rounded-full"
                />
                <span className="ml-2">Invoicely Team</span>
                <span className="ml-4">•</span>
                <span className="ml-4">2024</span>
              </div>
            </div>
          </div>

          {/* Second Article */}
          <div className="flex space-x-6 fade-in-left">
            <div className="w-1/3">
              <img
                src="https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Article 2"
                className="rounded-lg"
              />
            </div>
            <div className="w-2/3">
              <span className="text-sm font-bold uppercase text-gray-500">Customers</span>
              <h2 className="text-2xl font-semibold mt-2">Seamless Global Compliance</h2>
              <p className="text-gray-500 mt-3">
                This means your software adapts to tax laws across different countries, making it easy for multinational businesses to manage invoices without worrying about varying tax regulations.
              </p>
              <div className="flex items-center mt-4 text-gray-500">
                <img
                  src="https://ik.imagekit.io/rxdxtxpigt/nib-removebg-preview.png?updatedAt=1727620962628"
                  alt="Sophie Moore"
                  className="w-8 h-8 rounded-full"
                />
                <span className="ml-2">Invoicely Team</span>
                <span className="ml-4">•</span>
                <span className="ml-4">2024</span>
              </div>
            </div>
          </div>

          <div className="flex space-x-6 fade-in-left">
            <div className="w-1/3">
              <img
                src="https://images.unsplash.com/photo-1632062549850-44a0a6eede16?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Article 3"
                className="rounded-lg"
              />
            </div>
            <div className="w-2/3">
              <span className="text-sm font-bold uppercase text-gray-500">Flexible</span>
              <h2 className="text-2xl font-semibold mt-2">Customizable Invoice Templates</h2>
              <p className="text-gray-500 mt-3">
                It could provide a library of customizable invoice templates, making it easy for businesses to create professional, branded invoices in seconds.
              </p>
              <div className="flex items-center mt-4 text-gray-500">
                <img
                  src="https://ik.imagekit.io/rxdxtxpigt/nib-removebg-preview.png?updatedAt=1727620962628"
                  alt="Sophie Moore"
                  className="w-8 h-8 rounded-full"
                />
                <span className="ml-2">Invoicely Team</span>
                <span className="ml-4">•</span>
                <span className="ml-4">2024</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-12">
          {/* Search Box */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Contact Invoicely <i className="fas fa-pen-nib"></i>
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We'd love to hear from you! If you have any questions, feedback, or inquiries about our tax invoice application, feel free to reach out.
            </p>
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Type your message"
                className="w-full p-4 pr-16 bg-white border border-gray-300 rounded-full transition-all duration-200 ease-in-out hover:border-black"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-gray-800 hover:shadow-xl transition-all duration-200 ease-in-out">
                Subscribe
              </button>
            </div>
          </div>
          {/* Tags */}
          <div className="flex space-x-3">
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm">Tips</button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm">Resources</button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm">Guides</button>
          </div>

          {/* Third Article */}
          <div className="relative w-full fade-in-left">
            <img
              src="https://images.unsplash.com/photo-1546430783-fe4b9c159e52?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Article 4"
              className="rounded-lg w-full"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <span className="text-sm font-bold uppercase">Quote</span>
              <h2 className="text-lg font-semibold mt-2">
                "Embrace the tax process—it’s a sign of your success and contribution to society!"
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
