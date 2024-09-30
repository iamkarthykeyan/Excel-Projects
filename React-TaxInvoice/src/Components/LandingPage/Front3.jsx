import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@material-tailwind/react";

gsap.registerPlugin(ScrollTrigger);

const services = [
    { title: "Account Creation", content: "Easily create your account with our user-friendly registration process. Secure your personal information while signing up." },
    { title: "Update Your Info", content: "Keep your account details up to date. You can modify your personal or business information anytime." },
    { title: "Generate QR Code", content: "Instantly generate a QR code for your invoices and payments, making transactions seamless for you and your customers." },
    { title: "Download as PDF", content: "Download your invoices and transaction history as a PDF for your records or to share with your clients." },
    { title: "Access History", content: "View your full history of transactions, invoices, and account activity at any time for easy record-keeping and monitoring." },
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
