import React from "react";
import logo from "../../assets/images/Logo.svg";

const Footer = () => {
  return (
    <div>
      {/* Footer Section */}
      <footer className="bg-[#1a1a2e] text-[#e0e0e0] pt-[60px] px-[20px] pb-[30px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] max-md:grid-cols-1 gap-[40px] max-md:gap-[35px] mb-[40px]">
            {/* Company Info */}
            <div className="animate-fade-in-up">
              <div className="mb-[15px]">
                <img src={logo} alt="Dealora Logo" className="h-[50px] max-md:h-[40px] max-sm:h-[35px] w-auto" />
              </div>
              <p className="text-[#b0b0b0] leading-[1.6] text-[14px] mb-[20px]">
                Your trusted online shopping destination for quality products at
                amazing prices. Shop with confidence and style.
              </p>
              <div className="mt-[20px]">
                <span className="block text-[#e0e0e0] text-[13px] mb-[12px] font-medium">We Accept:</span>
                <div className="flex gap-[10px] flex-wrap max-md:justify-start">
                  <div className="py-[8px] px-[12px] bg-white/10 rounded-[6px] text-[11px] font-semibold text-white transition-all duration-300 hover:bg-[#ff6b35]/20 hover:-translate-y-[2px] cursor-pointer">VISA</div>
                  <div className="py-[8px] px-[12px] bg-white/10 rounded-[6px] text-[11px] font-semibold text-white transition-all duration-300 hover:bg-[#ff6b35]/20 hover:-translate-y-[2px] cursor-pointer">MC</div>
                  <div className="py-[8px] px-[12px] bg-white/10 rounded-[6px] text-[11px] font-semibold text-white transition-all duration-300 hover:bg-[#ff6b35]/20 hover:-translate-y-[2px] cursor-pointer">AMEX</div>
                  <div className="py-[8px] px-[12px] bg-white/10 rounded-[6px] text-[11px] font-semibold text-white transition-all duration-300 hover:bg-[#ff6b35]/20 hover:-translate-y-[2px] cursor-pointer">PayPal</div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="animate-fade-in-up">
              <h4 className="text-white text-[18px] mb-[20px] font-semibold relative pb-[10px] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[40px] after:h-[2px] after:bg-[#ff6b35]">Quick Links</h4>
              <ul className="list-none p-0 m-0">
                <li className="mb-[12px]">
                  <a href="#about" className="text-[#b0b0b0] no-underline text-[14px] transition-all duration-300 inline-block hover:text-[#ff6b35] hover:pl-[5px]">About Us</a>
                </li>
                <li className="mb-[12px]">
                  <a href="#contact" className="text-[#b0b0b0] no-underline text-[14px] transition-all duration-300 inline-block hover:text-[#ff6b35] hover:pl-[5px]">Contact</a>
                </li>
                <li className="mb-[12px]">
                  <a href="#faq" className="text-[#b0b0b0] no-underline text-[14px] transition-all duration-300 inline-block hover:text-[#ff6b35] hover:pl-[5px]">FAQs</a>
                </li>
                <li className="mb-[12px]">
                  <a href="#careers" className="text-[#b0b0b0] no-underline text-[14px] transition-all duration-300 inline-block hover:text-[#ff6b35] hover:pl-[5px]">Careers</a>
                </li>
                <li className="mb-[12px]">
                  <a href="#blog" className="text-[#b0b0b0] no-underline text-[14px] transition-all duration-300 inline-block hover:text-[#ff6b35] hover:pl-[5px]">Blog</a>
                </li>
              </ul>
            </div>

            {/* Customer Service */}
            <div className="animate-fade-in-up">
              <h4 className="text-white text-[18px] mb-[20px] font-semibold relative pb-[10px] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[40px] after:h-[2px] after:bg-[#ff6b35]">Customer Service</h4>
              <ul className="list-none p-0 m-0">
                <li className="mb-[12px]">
                  <a href="#returns" className="text-[#b0b0b0] no-underline text-[14px] transition-all duration-300 inline-block hover:text-[#ff6b35] hover:pl-[5px]">Return Policy</a>
                </li>
                <li className="mb-[12px]">
                  <a href="#shipping" className="text-[#b0b0b0] no-underline text-[14px] transition-all duration-300 inline-block hover:text-[#ff6b35] hover:pl-[5px]">Shipping Info</a>
                </li>
                <li className="mb-[12px]">
                  <a href="#track" className="text-[#b0b0b0] no-underline text-[14px] transition-all duration-300 inline-block hover:text-[#ff6b35] hover:pl-[5px]">Track Order</a>
                </li>
                <li className="mb-[12px]">
                  <a href="#size" className="text-[#b0b0b0] no-underline text-[14px] transition-all duration-300 inline-block hover:text-[#ff6b35] hover:pl-[5px]">Size Guide</a>
                </li>
                <li className="mb-[12px]">
                  <a href="#terms" className="text-[#b0b0b0] no-underline text-[14px] transition-all duration-300 inline-block hover:text-[#ff6b35] hover:pl-[5px]">Terms & Conditions</a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="animate-fade-in-up">
              <h4 className="text-white text-[18px] mb-[20px] font-semibold relative pb-[10px] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[40px] after:h-[2px] after:bg-[#ff6b35]">Get In Touch</h4>
              <ul className="list-none p-0 m-0">
                <li className="flex items-start gap-[12px] mb-[15px] text-[#b0b0b0] text-[14px] leading-[1.6]">
                  <span className="text-[18px] shrink-0">📍</span>
                  <span>123 Shopping Street, NY 10001</span>
                </li>
                <li className="flex items-start gap-[12px] mb-[15px] text-[#b0b0b0] text-[14px] leading-[1.6]">
                  <span className="text-[18px] shrink-0">📞</span>
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-start gap-[12px] mb-[15px] text-[#b0b0b0] text-[14px] leading-[1.6]">
                  <span className="text-[18px] shrink-0">✉️</span>
                  <span>support@dealora.com</span>
                </li>
                <li className="flex items-start gap-[12px] mb-[15px] text-[#b0b0b0] text-[14px] leading-[1.6]">
                  <span className="text-[18px] shrink-0">🕒</span>
                  <span>Mon - Fri: 9AM - 6PM</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-[25px] flex justify-between items-center flex-wrap gap-[20px] max-md:flex-col max-md:text-center">
            <p className="text-[#888] text-[14px] m-0">
              © 2024 Dealora. All rights reserved. Made with ❤️ by Developer
            </p>
            <div className="flex gap-[20px]">
              <a href="#" aria-label="Facebook" className="text-[#b0b0b0] no-underline text-[14px] transition-all duration-300 hover:text-[#ff6b35]">
                Facebook
              </a>
              <a href="#" aria-label="Twitter" className="text-[#b0b0b0] no-underline text-[14px] transition-all duration-300 hover:text-[#ff6b35]">
                Twitter
              </a>
              <a href="#" aria-label="Instagram" className="text-[#b0b0b0] no-underline text-[14px] transition-all duration-300 hover:text-[#ff6b35]">
                Instagram
              </a>
              <a href="#" aria-label="LinkedIn" className="text-[#b0b0b0] no-underline text-[14px] transition-all duration-300 hover:text-[#ff6b35]">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
