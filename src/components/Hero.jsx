import { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import newArrivals from "../Khushbu.json"; // Adjust the path accordingly

const Hero = () => {
  const sliderRef = useRef(null);
  const titleRef = useRef([]);
  const descriptionRef = useRef([]);
  const currentSlide = useRef(0);
  const totalSlides = useRef(newArrivals.length);

  // Function to handle automatic slide transitions
  const autoSlide = useCallback(() => {
    currentSlide.current = (currentSlide.current + 1) % totalSlides.current;
    slideImages();
  }, []);

  // Function to slide images and animate text
  const slideImages = () => {
    const currentItem = newArrivals[currentSlide.current];

    // Animate slide transition
    gsap.to(sliderRef.current, {
      xPercent: -100 * currentSlide.current,
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        // Reset title and description elements to be hidden before animating in
        titleRef.current.forEach((title) => {
          gsap.set(title, { opacity: 0, y: -50 });
        });
        descriptionRef.current.forEach((description) => {
          gsap.set(description, { opacity: 0, y: 20 });
        });

        // Update the title and description based on current item
        titleRef.current[currentSlide.current].innerText = currentItem.title;
        descriptionRef.current[currentSlide.current].innerText =
          currentItem.description;

        // Animate title and description after slide transition
        gsap.to(titleRef.current[currentSlide.current], {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          delay: 0.1,
        });

        gsap.to(descriptionRef.current[currentSlide.current], {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          delay: 0.3,
        });
      },
    });
  };

  // Start the auto sliding effect
  useEffect(() => {
    const interval = setInterval(autoSlide, 3000); // Change slide every 3 seconds
    slideImages(); // Call once to set initial state
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [autoSlide]);

  return (
    <div className="relative bg-white text-black h-screen flex items-center justify-center overflow-hidden">
      <div className="slider flex" ref={sliderRef}>
        {newArrivals.map((item, index) => (
          <div
            className="slide flex flex-col items-center justify-center min-w-full"
            key={item.id}
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-72 w-64 object-cover" // Adjusted class for sizing
            />
            {/* Animated Title */}
            <h2
              ref={(el) => (titleRef.current[index] = el)} // Assign each title to the array
              className="text-3xl font-bold mt-4"
              style={{ opacity: 0 }} // Start hidden
            ></h2>
            {/* Animated Description */}
            <p
              ref={(el) => (descriptionRef.current[index] = el)} // Assign each description to the array
              className="mt-2 text-lg"
              style={{ opacity: 0 }} // Start hidden
            ></p>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button className="absolute left-4 top-1/2 text-white transform -translate-y-1/2 bg-gray-400 px-4 py-2 rounded hover:bg-gray-600 transition">
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
