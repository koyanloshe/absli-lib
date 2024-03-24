import { useState, useEffect, useRef } from "react";

const useLazyLoad = (src) => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  const options = {
    root: null,
    threshold: 0.8, // Image considered visible when 50% in viewport
  };

  const handleIntersection = (entries, observer) => {
    const [entry] = entries;

    if (entry.isIntersecting) {
      setIsVisible(true);
      observer.unobserve(imageRef.current); // Stop observing after visibility
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      handleIntersection,
      options,
    );

    if (imageRef.current)
      observer.observe(imageRef.current);

    return () => {
      if (observer) observer.disconnect(); // Cleanup on unmount
    };
  }, [imageRef.current]);

  return {
    src: isVisible ? src : null, // Only render image if visible
    ref: imageRef,
  };
};

export default useLazyLoad;
