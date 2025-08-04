import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RomanticEnvelope from './RomanticEnvelop';
import { confession } from '@/Constant/UIDatas';
const RomanticEnvelopeWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50 px-4">
      <div className="relative w-full max-w-md sm:max-w-lg">

        {/* Envelope */}
        {!isOpen && (
          <div
            onClick={() => setIsOpen(true)}
            className="cursor-pointer relative w-full h-48 sm:h-56 bg-pink-200 border border-pink-300 rounded-lg shadow-lg overflow-hidden flex items-end justify-center"
          >
            {/* Flap */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 
              border-l-[150px] sm:border-l-[180px] border-l-transparent 
              border-r-[150px] sm:border-r-[180px] border-r-transparent 
              border-b-[60px] sm:border-b-[70px] border-b-pink-300" />

            <p className="mb-6 text-pink-800 font-bold text-lg">Click to Open 💌</p>
          </div>
        )}

        {/* Letter Animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="letter"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-4"
            >
              <RomanticEnvelope
                greeting="Dear Baktykan,"
                body={confession}
                farewell="A random someone who will always be greateful for having known you"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default RomanticEnvelopeWrapper;
