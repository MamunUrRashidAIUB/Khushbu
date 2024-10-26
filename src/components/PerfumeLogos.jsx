import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";

const PerfumeLogos = () => {
  const logos = [
    { id: 1, image: "/images/logo1.jpeg", name: "Brand 1" },
    { id: 2, image: "/images/logo2.jpeg", name: "Brand 2" },
    { id: 3, image: "/images/logo3.jpeg", name: "Brand 3" },
    { id: 4, image: "/images/logo4.jpeg", name: "Brand 4" },
    { id: 5, image: "/images/logo5.png", name: "Brand 5" },
    { id: 6, image: "/images/logo6.png", name: "Brand 6" },
    { id: 7, image: "/images/logo7.png", name: "Brand 7" },
    { id: 8, image: "/images/logo1.jpeg", name: "Brand 8" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? logos.length - 4 : prevIndex - 4
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 4 >= logos.length ? 0 : prevIndex + 4
    );
  };

  // Animate the logos on index change
  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current.children,
        { opacity: 0, x: currentIndex === 0 ? -50 : 50 }, // Starting state
        { opacity: 1, x: 0, stagger: 0.1, duration: 0.8, ease: "power3.out" } // Ending state
      );
    }
  }, [currentIndex]);

  return (
    <div className="flex items-center justify-center my-8">
      {/* Left Arrow */}
      <button onClick={handlePrevious} className="text-gray-800 mx-4">
        <FontAwesomeIcon icon={faChevronLeft} size="2x" />
      </button>

      {/* Logo Images with GSAP Animation */}
      <div
        className="flex flex-wrap justify-center items-center gap-4"
        ref={containerRef}
      >
        {logos.slice(currentIndex, currentIndex + 4).map((logo) => (
          <div key={logo.id} className="m-2">
            <img
              src={logo.image}
              alt={logo.name}
              className="h-24 w-auto hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button onClick={handleNext} className="text-gray-800 mx-4">
        <FontAwesomeIcon icon={faChevronRight} size="2x" />
      </button>
    </div>
  );
};

export default PerfumeLogos;
