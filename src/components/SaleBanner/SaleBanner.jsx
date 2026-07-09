import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SaleBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Set countdown end date (7 days from now)
    const countdownDate = new Date();
    countdownDate.setDate(countdownDate.getDate() + 7);
    countdownDate.setHours(23, 59, 59, 999);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const closeBanner = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="relative py-[60px] px-[140px] bg-gradient-to-br from-[#1a1a24] via-[#2d1b3d] to-[#1a1a24] overflow-hidden min-h-[300px] flex items-center max-lg:px-[60px] max-lg:py-[50px] max-md:py-[40px] max-md:px-[20px] max-md:min-h-auto max-sm:px-[15px] max-sm:py-[30px]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,165,0,0.15)_0%,transparent_50%),radial-gradient(circle_at_80%_50%,rgba(255,69,0,0.15)_0%,transparent_50%)] animate-gradient-shift"></div>
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_35px,rgba(255,255,255,0.02)_35px,rgba(255,255,255,0.02)_70px)]"></div>
      </div>

      <button
        className="absolute top-[20px] right-[20px] w-[36px] h-[36px] rounded-full bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.2)] flex items-center justify-center cursor-pointer transition-all duration-300 z-10 hover:bg-[rgba(255,255,255,0.2)] hover:rotate-90 max-sm:top-[15px] max-sm:right-[15px] max-sm:w-[32px] max-sm:h-[32px]"
        onClick={closeBanner}
        aria-label="Close banner">
        <svg className="w-[18px] h-[18px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div className="relative z-[2] grid grid-cols-2 gap-[80px] items-center max-w-[1400px] w-full mx-auto max-lg:gap-[60px] max-md:grid-cols-1 max-md:gap-[40px] max-md:text-center">
        <div className="flex flex-col gap-[20px] max-md:items-center">
          <div className="inline-flex items-center gap-[8px] py-[10px] px-[20px] bg-gradient-to-br from-[rgba(255,69,0,0.3)] to-[rgba(255,165,0,0.3)] border-2 border-[rgba(255,165,0,0.5)] rounded-full w-fit animate-pulse-shadow max-sm:py-[8px] max-sm:px-[16px]">
            <svg className="w-[20px] h-[20px] text-orange-500 animate-flash" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-white text-[14px] font-bold uppercase tracking-[1px] max-sm:text-[12px]">Limited Time Offer</span>
          </div>
          <h2 className="flex flex-col gap-[8px] m-0">
            <span className="text-[48px] font-extrabold text-white leading-tight max-lg:text-[40px] max-md:text-[32px] max-sm:text-[28px]">Mega Winter Sale</span>
            <span className="text-[56px] font-black bg-gradient-to-br from-orange-500 via-[#ffd700] to-[#ff6b00] bg-clip-text text-transparent leading-tight animate-shimmer [background-size:200%_200%] max-lg:text-[48px] max-md:text-[40px] max-sm:text-[36px]">Up to 50% OFF</span>
          </h2>
          <p className="text-[18px] text-[rgba(255,255,255,0.8)] leading-[1.6] m-0 max-md:text-[16px] max-sm:text-[14px]">
            Premium shoes, bags, and accessories at unbeatable prices
          </p>
          <Link to="/shop" className="group inline-flex items-center gap-[10px] py-[16px] px-[40px] bg-gradient-to-br from-orange-500 to-[#ff6b00] text-white no-underline rounded-full text-[16px] font-bold w-fit transition-all duration-300 shadow-[0_10px_30px_rgba(255,165,0,0.4)] hover:-translate-y-[3px] hover:shadow-[0_15px_40px_rgba(255,165,0,0.5)] max-sm:py-[14px] max-sm:px-[32px] max-sm:text-[14px]">
            <span>Shop Now</span>
            <svg
              className="w-[20px] h-[20px] transition-transform duration-300 group-hover:translate-x-[5px]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>

        <div className="flex flex-col items-center gap-[20px]">
          <p className="text-[16px] text-[rgba(255,255,255,0.9)] font-semibold uppercase tracking-[2px] max-sm:text-[14px] m-0">Hurry! Sale Ends In:</p>
          <div className="flex gap-[12px] items-center max-md:gap-[8px] max-sm:gap-[6px]">
            <div className="flex flex-col items-center gap-[8px] py-[20px] px-[16px] bg-[rgba(255,255,255,0.1)] backdrop-blur-[20px] border border-[rgba(255,255,255,0.2)] rounded-[16px] min-w-[80px] shadow-[0_8px_32px_rgba(0,0,0,0.2)] max-lg:min-w-[70px] max-lg:py-[16px] max-lg:px-[12px] max-md:min-w-[60px] max-md:py-[14px] max-md:px-[10px] max-sm:min-w-[55px] max-sm:py-[12px] max-sm:px-[8px]">
              <div className="text-[36px] font-black text-white leading-none font-mono drop-shadow-[0_2px_10px_rgba(255,165,0,0.5)] max-lg:text-[32px] max-md:text-[28px] max-sm:text-[24px]">
                {String(timeLeft.days).padStart(2, "0")}
              </div>
              <div className="text-[12px] text-[rgba(255,255,255,0.7)] uppercase tracking-[1px] font-semibold max-md:text-[10px] max-sm:text-[9px]">Days</div>
            </div>
            <div className="text-[32px] font-bold text-orange-500 mx-[4px] animate-blink max-md:text-[24px] max-md:mx-[2px] max-sm:text-[20px]">:</div>
            <div className="flex flex-col items-center gap-[8px] py-[20px] px-[16px] bg-[rgba(255,255,255,0.1)] backdrop-blur-[20px] border border-[rgba(255,255,255,0.2)] rounded-[16px] min-w-[80px] shadow-[0_8px_32px_rgba(0,0,0,0.2)] max-lg:min-w-[70px] max-lg:py-[16px] max-lg:px-[12px] max-md:min-w-[60px] max-md:py-[14px] max-md:px-[10px] max-sm:min-w-[55px] max-sm:py-[12px] max-sm:px-[8px]">
              <div className="text-[36px] font-black text-white leading-none font-mono drop-shadow-[0_2px_10px_rgba(255,165,0,0.5)] max-lg:text-[32px] max-md:text-[28px] max-sm:text-[24px]">
                {String(timeLeft.hours).padStart(2, "0")}
              </div>
              <div className="text-[12px] text-[rgba(255,255,255,0.7)] uppercase tracking-[1px] font-semibold max-md:text-[10px] max-sm:text-[9px]">Hours</div>
            </div>
            <div className="text-[32px] font-bold text-orange-500 mx-[4px] animate-blink max-md:text-[24px] max-md:mx-[2px] max-sm:text-[20px]">:</div>
            <div className="flex flex-col items-center gap-[8px] py-[20px] px-[16px] bg-[rgba(255,255,255,0.1)] backdrop-blur-[20px] border border-[rgba(255,255,255,0.2)] rounded-[16px] min-w-[80px] shadow-[0_8px_32px_rgba(0,0,0,0.2)] max-lg:min-w-[70px] max-lg:py-[16px] max-lg:px-[12px] max-md:min-w-[60px] max-md:py-[14px] max-md:px-[10px] max-sm:min-w-[55px] max-sm:py-[12px] max-sm:px-[8px]">
              <div className="text-[36px] font-black text-white leading-none font-mono drop-shadow-[0_2px_10px_rgba(255,165,0,0.5)] max-lg:text-[32px] max-md:text-[28px] max-sm:text-[24px]">
                {String(timeLeft.minutes).padStart(2, "0")}
              </div>
              <div className="text-[12px] text-[rgba(255,255,255,0.7)] uppercase tracking-[1px] font-semibold max-md:text-[10px] max-sm:text-[9px]">Minutes</div>
            </div>
            <div className="text-[32px] font-bold text-orange-500 mx-[4px] animate-blink max-md:text-[24px] max-md:mx-[2px] max-sm:text-[20px]">:</div>
            <div className="flex flex-col items-center gap-[8px] py-[20px] px-[16px] bg-[rgba(255,255,255,0.1)] backdrop-blur-[20px] border border-[rgba(255,255,255,0.2)] rounded-[16px] min-w-[80px] shadow-[0_8px_32px_rgba(0,0,0,0.2)] max-lg:min-w-[70px] max-lg:py-[16px] max-lg:px-[12px] max-md:min-w-[60px] max-md:py-[14px] max-md:px-[10px] max-sm:min-w-[55px] max-sm:py-[12px] max-sm:px-[8px]">
              <div className="text-[36px] font-black text-white leading-none font-mono drop-shadow-[0_2px_10px_rgba(255,165,0,0.5)] max-lg:text-[32px] max-md:text-[28px] max-sm:text-[24px]">
                {String(timeLeft.seconds).padStart(2, "0")}
              </div>
              <div className="text-[12px] text-[rgba(255,255,255,0.7)] uppercase tracking-[1px] font-semibold max-md:text-[10px] max-sm:text-[9px]">Seconds</div>
            </div>
          </div>
          <div className="flex gap-[16px] flex-wrap justify-center max-md:flex-col max-md:w-full mt-[10px]">
            <span className="flex items-center justify-center gap-[6px] py-[8px] px-[16px] bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.2)] rounded-full text-white text-[13px] font-semibold max-md:justify-center">
              <svg
                className="w-[16px] h-[16px] text-[#4caf50]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Free Shipping
            </span>
            <span className="flex items-center justify-center gap-[6px] py-[8px] px-[16px] bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.2)] rounded-full text-white text-[13px] font-semibold max-md:justify-center">
              <svg
                className="w-[16px] h-[16px] text-[#4caf50]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Easy Returns
            </span>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
        <span className="absolute text-[24px] opacity-60 animate-float top-[20%] left-[10%] [animation-delay:0s]">✨</span>
        <span className="absolute text-[24px] opacity-60 animate-float top-[60%] left-[20%] [animation-delay:1s]">⭐</span>
        <span className="absolute text-[24px] opacity-60 animate-float top-[30%] right-[15%] [animation-delay:2s]">💫</span>
        <span className="absolute text-[24px] opacity-60 animate-float bottom-[30%] right-[25%] [animation-delay:1.5s]">✨</span>
        <span className="absolute text-[24px] opacity-60 animate-float top-[70%] left-[70%] [animation-delay:0.5s]">⭐</span>
        <span className="absolute text-[24px] opacity-60 animate-float bottom-[20%] left-[40%] [animation-delay:2.5s]">💫</span>
      </div>
    </div>
  );
};

export default SaleBanner;
