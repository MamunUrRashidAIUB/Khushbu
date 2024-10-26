import { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import newArrivals from "../Newarrivals.json"; // Adjust the path accordingly

const Hero = () => {
  const sliderRef = useRef(null);
  const currentSlide = useRef(0);
  const totalSlides = useRef(newArrivals.length);

  // Function to handle automatic slide transitions
  const autoSlide = useCallback(() => {
    currentSlide.current = (currentSlide.current + 1) % totalSlides.current;
    slideImages();
  }, []);

  // Function to slide images
  const slideImages = () => {
    gsap.to(sliderRef.current, {
      xPercent: -100 * currentSlide.current,
      duration: 1,
      ease: "power2.inOut",
    });
  };

  // Start the auto sliding effect
  useEffect(() => {
    const interval = setInterval(autoSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [autoSlide]); // Include autoSlide in the dependency array

  return (
    <div className="relative bg-white text-black h-screen flex items-center justify-center overflow-hidden">
      <div className="slider flex" ref={sliderRef}>
        {newArrivals.map((item) => (
          <div
            className="slide flex flex-col items-center justify-center min-w-full"
            key={item.id}
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-72 w-64 object-cover" // Adjusted class for sizing
            />
            <h2 className="text-3xl font-bold mt-4">{item.title}</h2>
            <p className="mt-2 text-lg">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => {
          currentSlide.current =
            (currentSlide.current - 1 + totalSlides.current) %
            totalSlides.current;
          slideImages();
        }}
        className="absolute left-4 top-1/2 text-white transform -translate-y-1/2 bg-gray-400 px-4 py-2 rounded hover:bg-gray-600 transition"
      >
        Prev
      </button>
      <button
        onClick={() => {
          currentSlide.current =
            (currentSlide.current + 1) % totalSlides.current;
          slideImages();
        }}
        className="absolute right-4 text-white top-1/2 transform -translate-y-1/2 bg-gray-400 px-4 py-2 rounded hover:bg-gray-600 transition"
      >
        Next
      </button>
    </div>
  );
};

export default Hero;
