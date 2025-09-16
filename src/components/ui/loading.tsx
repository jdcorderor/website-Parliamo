import { useEffect, useState } from "react";

export default function Loading() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => setIsVisible(false), 2000);
      return () => clearTimeout(timer);
    }, []);

    return (
      <section aria-hidden={!isVisible} className={`fixed inset-0 flex items-center justify-center bg-white z-[9999] ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"} transition-opacity duration-500`}>
          <div className="dots-container-loading flex">
            <div className="dots-container-loading">
              <div className="dot-loading dot-green"></div>
              <div className="dot-loading dot-green"></div>
              <div className="dot-loading dot-white"></div>
              <div className="dot-loading dot-white"></div>
              <div className="dot-loading dot-red"></div>
              <div className="dot-loading dot-red"></div>
            </div>
          </div>
      </section>
    );
}