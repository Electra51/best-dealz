import React, { useState, useEffect, useRef, Suspense } from "react";

const LazySection = ({ children, fallback = null, rootMargin = "200px 0px" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [rootMargin]);

  return (
    <div ref={sectionRef}>
      {isVisible ? <Suspense fallback={fallback}>{children}</Suspense> : <div style={{ minHeight: "200px" }} />}
    </div>
  );
};

export default LazySection;
