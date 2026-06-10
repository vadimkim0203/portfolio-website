'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

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

export default function SupabaseActivity() {
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
            Supabase Launch Week 15
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
            Participated in Supabase Launch Week 15, an exciting event showcasing the latest features and innovations in the Supabase ecosystem.
          </p>
          <Link
            href="https://www.linkedin.com/posts/florianldt_yesterday-i-had-a-pleasure-to-be-part-of-activity-7356881878588534784-WByQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEkDHSIB85vpEyzTFWg-51yFPPnfjrAHbys"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            View on LinkedIn
            <span>→</span>
          </Link>
        </div>
      </motion.div>
    </motion.main>
  );
}
