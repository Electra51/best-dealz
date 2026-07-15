import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useCountdown } from '../../../hooks/useCountdown';

const DealsHero = () => {
  // Set target to 24 hours from now for demo
  const targetDate = useMemo(() => new Date().getTime() + 24 * 60 * 60 * 1000, []);
  const { hours, minutes, seconds } = useCountdown(targetDate);

  const TimeBox = ({ val, label }) => (
    <div className="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-xl p-3 min-w-24 border border-white/20">
      <span className="text-3xl font-black text-white">{String(val).padStart(2, '0')}</span>
      <span className="text-xs text-white/70 uppercase tracking-wider">{label}</span>
    </div>
  );

  return (
    <section className="relative bg-linear-to-br from-[#1a1a24] via-[#2d1b3d] to-[#1a1a24]  text-white py-20 overflow-hidden">
      {/* Background Pattern */}
    <div 
        className="absolute inset-0 pointer-events-none" 
        style={{ background: "radial-gradient(circle at 20% 50%, rgba(255, 165, 0, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(138, 43, 226, 0.1) 0%, transparent 50%)" }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 text-start grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0 justify-between">
     

       <div>
         <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.1 }} 
          className="text-4xl md:text-6xl font-black mb-6 leading-tight"
        >
          Up to <span className="text-orange-500">70% OFF</span>
        </motion.h1>

        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
          Don't miss out on our biggest sale of the year. Premium sneakers and gear at unbeatable prices.
        </p>
          <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/30">
          Shop Flash Deals
        </button>
       </div>
        
      <div>
          <div className="flex justify-start md:justify-end gap-4 mb-10">
          <TimeBox val={hours} label="Hours" />
          <TimeBox val={minutes} label="Mins" />
          <TimeBox val={seconds} label="Secs" />
        </div>

      
      </div>
      </div>
    </section>
  );
};

export default DealsHero;