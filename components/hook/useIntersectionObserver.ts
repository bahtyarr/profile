import { useEffect, useRef } from "react";

const useIntersectionObserver = (setVisible: React.Dispatch<React.SetStateAction<boolean>>) => {
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting); // Set visibility based on intersection
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [setVisible]);

  return elementRef;
};

export default useIntersectionObserver;
