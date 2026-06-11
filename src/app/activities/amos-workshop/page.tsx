'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const VARIANTS_ITEM = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
};

const VARIANTS_SUBSECTION = {
  hidden: { opacity: 0, x: -20, filter: 'blur(8px)' },
  visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
};

const TRANSITION = {
  duration: 0.3,
};

const TRANSITION_SUBSECTION = {
  duration: 0.3,
  delay: 0.1,
};

export default function AmosWorkshopActivity() {
  return (
    <motion.main
      className="space-y-12"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div variants={VARIANTS_ITEM} transition={TRANSITION}>
        <Link
          href="/activities"
          className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors mb-8"
        >
          <span>←</span>
          <span>Back to activities</span>
        </Link>
        
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Amos Professional Workshop
          </h1>
          <div className="space-y-4">
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Participated in Amos Professional Workshop where we discussed comprehensive development plans for the next fiscal year.
            </p>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">Strategic Marketing Plans</h3>
                <p className="text-zinc-600 dark:text-zinc-400">Developed comprehensive marketing strategies for product launches and brand positioning in key markets.</p>
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">New Markets Discoveries</h3>
                <p className="text-zinc-600 dark:text-zinc-400">Identified and analyzed emerging market opportunities in European and Asian regions for potential business expansion.</p>
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">Budget Planning</h3>
                <p className="text-zinc-600 dark:text-zinc-400">Collaborated on optimizing budget allocation across regions to maximize ROI and support strategic expansion initiatives.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Image */}
      <motion.div variants={VARIANTS_ITEM} transition={TRANSITION}>
        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-zinc-200 dark:bg-zinc-800">
          <Image
            src="/images/amosWorkshop.png"
            alt="Amos Workshop"
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </motion.div>
    </motion.main>
  );
}
