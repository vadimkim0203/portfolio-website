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

const TRANSITION = {
  duration: 0.3,
};

const UNIQLO_IMAGES = [
  '/images/uniqlo1.jpeg',
  '/images/uniqlo2.jpeg',
  '/images/uniqlo3.jpeg',
  '/images/uniqlo4.jpeg',
  '/images/uniqlo5.jpeg',
];

export default function UniqloActivity() {
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
            Uniqlo Manager Candidate Program Photo Shoot
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Took part in a photoshoot for the Uniqlo Manager Candidate Program,
            an experience that offered a behind-the-scenes look at the company's
            leadership development initiative.
          </p>
        </div>
      </motion.div>

      {/* Gallery */}
      <motion.div variants={VARIANTS_ITEM} transition={TRANSITION}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {UNIQLO_IMAGES.map((image, idx) => (
            <div
              key={idx}
              className="relative aspect-square rounded-xl overflow-hidden bg-zinc-200 dark:bg-zinc-800 group"
            >
              <Image
                src={image}
                alt={`Uniqlo photo shoot ${idx + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </motion.main>
  );
}
