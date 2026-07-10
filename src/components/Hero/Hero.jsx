import React from "react";
import homeImage from "../../assets/shoe.png";
import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";

const Hero = () => {
  return (
    <section className="relative bg-linear-to-br from-[#1a1a24] via-[#2d1b3d] to-[#1a1a24] flex items-center justify-center overflow-hidden py-10 px-35">
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{ background: "radial-gradient(circle at 20% 50%, rgba(255, 165, 0, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(138, 43, 226, 0.1) 0%, transparent 50%)" }}
      ></div>
      <div className="relative grid grid-cols-2 gap-20 items-center max-w-350 w-full z-10">
        <div className="animate-fade-in-up">
          
          <h1 className="text-[56px] font-extrabold text-white leading-15 mb-6 m-0">
            Find Your Perfect Pair to 
            <span className="bg-linear-to-tr from-[#e55b00] to-[#f87b22] bg-clip-text text-transparent"> Move</span> 
          </h1>
          <p className="text-[18px] text-[rgba(240,248,255,0.8)] leading-[1.8] mb-10 max-w-135 max-lg:text-[17px] max-md:max-w-full max-sm:text-[14px] m-0">
         Shop premium sneakers with exclusive deals, fast delivery, secure payments, and guaranteed quality. 
          </p>
          <div className="flex gap-5 mb-15 max-md:flex-col max-md:w-full max-md:max-w-100">
            <Link to="/shop" className="group inline-flex items-center justify-center gap-2.5 py-4 px-9 rounded-full text-[16px] font-semibold no-underline transition-all duration-300 cursor-pointer max-md:w-full bg-linear-to-br from-orange-500 to-[#ff6b00] text-white shadow-[0_10px_30px_rgba(255,165,0,0.3)] hover:-translate-y-0.75 hover:shadow-[0_15px_40px_rgba(255,165,0,0.4)]">
              Shop Now
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.25"
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
            <Link to="/about" className="inline-flex items-center justify-center gap-2.5 py-4 px-9 rounded-full text-[16px] font-semibold no-underline transition-all duration-300 cursor-pointer max-md:w-full bg-transparent text-white border-2 border-[rgba(240,248,255,0.3)] hover:bg-[rgba(240,248,255,0.1)] hover:border-white hover:-translate-y-0.75">
              Learn More
            </Link>
          </div>
          <div className="flex items-center gap-10 max-md:flex-wrap max-md:justify-center max-md:gap-7.5">
            <div className="text-center">
              <h3 className="m-0 text-[36px] font-extrabold text-orange-500 mb-2 max-md:text-[32px] max-sm:text-[28px]">500+</h3>
              <p className="m-0 text-[14px] text-[rgba(240,248,255,0.7)] uppercase tracking-[1px] max-sm:text-[12px]">Premium Products</p>
            </div>
            <div className="w-px h-12.5 bg-[rgba(240,248,255,0.2)] max-md:hidden"></div>
            <div className="text-center">
              <h3 className="m-0 text-[36px] font-extrabold text-orange-500 mb-2 max-md:text-[32px] max-sm:text-[28px]">50K+</h3>
              <p className="m-0 text-[14px] text-[rgba(240,248,255,0.7)] uppercase tracking-[1px] max-sm:text-[12px]">Happy Customers</p>
            </div>
            <div className="w-px h-12.5 bg-[rgba(240,248,255,0.2)] max-md:hidden"></div>
            <div className="text-center">
              <h3 className="m-0 text-[36px] font-extrabold text-orange-500 mb-2 max-md:text-[32px] max-sm:text-[28px]">4.8★</h3>
              <p className="m-0 text-[14px] text-[rgba(240,248,255,0.7)] uppercase tracking-[1px] max-sm:text-[12px]">Average Rating</p>
            </div>
          </div>
        </div>
        
        <div className="relative h-127 animate-fade-in-right perspective-[1000px] max-lg:h-125 max-md:h-100 max-md:w-full max-sm:h-87.5">
          <div className="absolute inset-0 bg-linear-to-br from-[rgba(255,165,0,0.2)] to-[rgba(138,43,226,0.2)] rounded-[30px] backdrop-blur-[15px] border border-[rgba(240,248,255,0.2)] shadow-[0_20px_60px_rgba(0,0,0,0.3)] transform-[translateZ(0)]"></div>

          <img
            src={homeImage}
            alt="Athletic Performance"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-8 scale-110 w-[75%] h-auto max-h-[90%] object-contain z-2 drop-shadow-[0_40px_80px_rgba(0,0,0,0.5)] transition-transform duration-500 hover:-rotate-5 hover:scale-[1.15]"
          />

          <div className="absolute top-[10%] right-[10%] bg-[rgba(26,26,36,0.95)] backdrop-blur-[20px] py-5 px-6 rounded-[20px] border border-[rgba(240,248,255,0.15)] flex items-center gap-3 shadow-[0_15px_50px_rgba(0,0,0,0.4)] animate-float z-10 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] hover:border-[rgba(255,165,0,0.3)] transform-[translateZ(50px)] hover:transform-[translateZ(50px)_translateY(-5px)] max-md:py-4 max-md:px-5 max-sm:py-3 max-sm:px-4">
            <span className="text-[28px] max-md:text-[24px]">🔥</span>
            <div className="text-left">
              <p className="text-[12px] text-[rgba(240,248,255,0.6)] uppercase tracking-[1px] mb-1 max-sm:text-[10px] m-0">Hot Deal</p>
              <p className="text-[16px] font-bold text-white max-md:text-[14px] max-sm:text-[12px] m-0">Up to 40% Off</p>
            </div>
          </div>
          <div className="absolute top-[50%] right-[5%] [animation-delay:1s] bg-[rgba(26,26,36,0.95)] backdrop-blur-[20px] py-5 px-6 rounded-[20px] border border-[rgba(240,248,255,0.15)] flex items-center gap-3 shadow-[0_15px_50px_rgba(0,0,0,0.4)] animate-float z-10 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] hover:border-[rgba(255,165,0,0.3)] transform-[translateZ(50px)] hover:transform-[translateZ(50px)_translateY(-5px)] max-md:py-4 max-md:px-5 max-sm:py-3 max-sm:px-4">
            <span className="text-[28px] max-md:text-[24px]">⚡</span>
            <div className="text-left">
              <p className="text-[12px] text-[rgba(240,248,255,0.6)] uppercase tracking-[1px] mb-1 max-sm:text-[10px] m-0">Fast Shipping</p>
              <p className="text-[16px] font-bold text-white max-md:text-[14px] max-sm:text-[12px] m-0">Free Delivery</p>
            </div>
          </div>
          <div className="absolute bottom-[15%] left-[10%] [animation-delay:2s] bg-[rgba(26,26,36,0.95)] backdrop-blur-[20px] py-5 px-6 rounded-[20px] border border-[rgba(240,248,255,0.15)] flex items-center gap-3 shadow-[0_15px_50px_rgba(0,0,0,0.4)] animate-float z-10 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] hover:border-[rgba(255,165,0,0.3)] transform-[translateZ(50px)] hover:transform-[translateZ(50px)_translateY(-5px)] max-md:py-4 max-md:px-5 max-sm:py-3 max-sm:px-4">
            <span className="text-[28px] max-md:text-[24px]">✓</span>
            <div className="text-left">
              <p className="text-[12px] text-[rgba(240,248,255,0.6)] uppercase tracking-[1px] mb-1 max-sm:text-[10px] m-0">Quality</p>
              <p className="text-[16px] font-bold text-white max-md:text-[14px] max-sm:text-[12px] m-0">100% Authentic</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-7.5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 text-[rgba(240,248,255,0.6)] text-[12px] uppercase tracking-[2px] animate-fade-in">
        <span>Scroll Down</span>
        <div className="w-6 h-6 border-r-2 border-b-2 border-[rgba(240,248,255,0.6)] rotate-45 animate-bounce"></div>
      </div>
    </section>
  );
};

export default Hero;
