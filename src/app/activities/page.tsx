'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { AnimatedBackground } from '@/components/ui/animated-background';
import { PUBLICATION_LIST } from '@/app/data';

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
};

const TRANSITION_SECTION = {
  duration: 0.3,
};

export default function Activities() {
  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-3 text-lg font-medium pt-6">Activities</h3>
        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
            {PUBLICATION_LIST.map((publication) => (
              <Link
                target="_blank"
                rel="noopener noreferrer"
                key={publication.uid}
                className="-mx-3 rounded-xl px-3 py-3"
                href={publication.link}
                data-id={publication.uid}
              >
                <div className="flex flex-col space-y-1">
                  <h4 className="font-normal dark:text-zinc-100">
                    {publication.title
                      .split(/(K\. Vadim)/)
                      .map((part, index) =>
                        part === 'K. Vadim' ? (
                          <strong key={index}>{part}</strong>
                        ) : (
                          part
                        ),
                      )}
                  </h4>
                </div>
              </Link>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section>
    </motion.main>
  );
}
