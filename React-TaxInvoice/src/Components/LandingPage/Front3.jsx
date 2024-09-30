import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@material-tailwind/react";

gsap.registerPlugin(ScrollTrigger);

const services = [
    { 
      title: "Account Creation", 
      content: "Our platform offers a seamless account creation process that allows users to register quickly and easily. You will be guided through a series of steps to ensure your account is set up securely. We prioritize the protection of your personal information, implementing the latest security measures to keep your data safe. Enjoy features in your account is created!" 
    },
    { 
      title: "Update Your Info", 
      content: "Keeping your information current is crucial, and our system makes it incredibly easy to update your personal or business details. Whether you need to change your email address, phone number, or any other information, you can do it with just a few clicks. This ensures that you receive important updates and notifications without interruption. Your account remains fully customized to meet your needs at all times." 
    },
    { 
      title: "Generate QR Code", 
      content: "Our QR code generation feature allows you to create unique QR codes for your invoices and payment requests in an instant. This modern approach to payments enhances the customer experience by enabling quick and contactless transactions. Simply input the necessary details, and our system will generate a QR code that can be scanned by your clients, simplifying the payment process for everyone involved." 
    },
    { 
      title: "Download as PDF", 
      content: "Easily download your invoices and transaction history as high-quality PDF files, making it convenient for record-keeping or sharing with clients. This feature allows you to maintain accurate records of all your transactions and invoices in a professional format. Whether you need these documents for tax purposes, financial reviews, or client communication, our PDF download feature has you covered, ensuring you have the necessary documentation at your fingertips." 
    },
    { 
      title: "Access History", 
      content: "Stay organized by accessing your complete transaction history with just a click. Our platform provides a comprehensive view of all your past invoices, payments, and account activities. This feature is designed to help you monitor your financial interactions and keep track of your spending effortlessly. Whether for personal use or business management, you will always have a detailed overview of your activities to help you make informed decisions." 
    },
  ];
  
  

const Front3 = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const contentRefs = useRef([]); // Ref array to store refs for each collapsible section

    useEffect(() => {
        if (openIndex !== null) {
            gsap.to(contentRefs.current[openIndex], {
                height: "auto",
                opacity: 1,
                duration: 0.6,
                ease: "power2.out",
            });
        }
    }, [openIndex]);

    const toggleSection = (index) => {
        if (openIndex === index) {
            gsap.to(contentRefs.current[index], {
                height: 0,
                opacity: 0,
                duration: 0.5,
                ease: "power2.out",
            });
            setOpenIndex(null);
        } else {
            gsap.to(contentRefs.current[index], {
                height: "auto",
                opacity: 1,
                duration: 0.6,
                ease: "power2.out",
            });
            if (openIndex !== null) {
                gsap.to(contentRefs.current[openIndex], {
                    height: 0,
                    opacity: 0,
                    duration: 0.5,
                    ease: "power2.out",
                });
            }
            setOpenIndex(index);
        }
    };

    return (
        <div className=" text-white min-h-screen flex flex-col items-center py-10 bg-black">
            <h1 className="text-3xl font-bold text-gray-500 mb-20">Guidelines | How to Use?</h1>

            <div className="w-full max-w-full px-4 md:px-16">
                {services.map((service, index) => (
                    <div key={index} className="mb-4">
                        <button
                            onClick={() => toggleSection(index)}
                            className="flex justify-between items-center w-full px-6 py-4 bg-black text-left text-2xl font-semibold rounded-lg"
                        >
                            <span className="mr-4 text-gray-500">{`${index + 1}`.padStart(2, '0')}</span>
                            <span>{service.title}</span>
                            <span>{openIndex === index ? "–" : "+"}</span>
                        </button>

                        <div
                            ref={(el) => (contentRefs.current[index] = el)}
                            className="overflow-hidden px-6 py-0 mt-2 rounded-md text-white"
                            style={{ height: 0, opacity: 0 }}
                        >
                            <p className="text-2xl py-4 text-gray-500 text-center">{service.content}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Button className="flex items-center justify-center gap-2 mt-5 bg-white text-black font-bold py-3 px-6 rounded-full shadow-lg hover:bg-grey-700 transition-all duration-300">
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
    );
};
export default Front3;
