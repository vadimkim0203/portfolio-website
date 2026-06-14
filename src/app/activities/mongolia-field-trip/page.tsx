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

const MONGOLIA_IMAGES = [
  '/images/Mongolia1.jpg',
  '/images/Mongolia2.jpg',
  '/images/Mongolia3.jpg',
  '/images/Mongolia4.jpg',
];

export default function MongoliaFieldTripActivity() {
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

        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            Field Trip with Mongolian Partners to Amorepacific Factory and
            Botanical Garden
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Coordinated and participated in a field trip with Mongolian business
            partners to visit Amorepacific headquarters, factory operations, and
            botanical gardens in Asan City. Together, we explored the production
            facilities, discussed potential partnership opportunities, and
            learned about the company's commitment to natural ingredients,
            innovation, and sustainable practices.
          </p>
          <Link
            href="https://www.instagram.com/p/DXUS0O5zV4Q/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            View on Instagram
            <span>→</span>
          </Link>
        </div>
      </motion.div>

      {/* Gallery */}
      <motion.div variants={VARIANTS_ITEM} transition={TRANSITION}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {MONGOLIA_IMAGES.map((image, idx) => (
            <div
              key={idx}
              className="relative aspect-square rounded-xl overflow-hidden bg-zinc-200 dark:bg-zinc-800 group"
            >
              <Image
                src={image}
                alt={`Mongolia field trip ${idx + 1}`}
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
