"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  images: string[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showIndicators?: boolean;
  showArrows?: boolean;
};

export default function Carousel({
  images,
  autoPlay = true,
  autoPlayInterval = 3000,
  showIndicators = true,
  showArrows = true,
}: Props) {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);
  const imageIndex = ((page % images.length) + images.length) % images.length;
  const timerRef = useRef<number | null>(null);

  // autoplay
  useEffect(() => {
    if (!autoPlay) return;
    timerRef.current = window.setInterval(() => {
      setPage(([p]) => [p + 1, 1]);
    }, autoPlayInterval);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [autoPlay, autoPlayInterval]);

  // drag swipe velocity threshold
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) =>
    Math.abs(offset) * velocity;

  function paginate(newDirection: number) {
    setPage(([p]) => [p + newDirection, newDirection]);
  }

  // draggable variants
  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      scale: 0.98,
    }),
    center: {
      x: 0,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 300 : -300,
      scale: 0.98,
    }),
  };

  // handle manual click -> reset autoplay timer
  function resetAutoPlay() {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (autoPlay) {
      timerRef.current = window.setInterval(() => {
        setPage(([p]) => [p + 1, 1]);
      }, autoPlayInterval);
    }
  }

  return (
    <div className="relative w-full select-none">
      {/* Slides container */}
      <div className="overflow-hidden rounded-lg">
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={page}
            className="h-[400px]"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragStart={() => {
              if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
              }
            }}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
              resetAutoPlay();
            }}
          >
            {/* image */}
            <div className="absolute inset-0">
              <Image
                src={images[imageIndex]}
                alt={`slide-${imageIndex}`}
                fill
                className="object-cover w-full h-full"
                priority={true}
              />
            </div>

            {/* overlay info placeholder (you can render captions here) */}
            <div className="relative z-10 w-full h-full flex items-end p-6">
              <div className="bg-black/40 backdrop-blur-sm rounded-md px-4 py-2 text-white text-sm max-w-[75%]">
                {/* optional caption */}
                Achievement {imageIndex + 1}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* arrows */}
      {showArrows && (
        <>
          <button
            aria-label="prev"
            onClick={() => {
              paginate(-1);
              resetAutoPlay();
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/50 text-white rounded-full w-9 h-9 flex items-center justify-center"
          >
            ‹
          </button>

          <button
            aria-label="next"
            onClick={() => {
              paginate(1);
              resetAutoPlay();
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/50 text-white rounded-full w-9 h-9 flex items-center justify-center"
          >
            ›
          </button>
        </>
      )}

      {/* indicators */}
      {showIndicators && (
        <div className="flex gap-2 absolute bottom-3 left-1/2 -translate-x-1/2 z-20">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setPage([i, i > imageIndex ? 1 : -1]);
                resetAutoPlay();
              }}
              className={`h-2 w-8 rounded-full transition-all ${
                i === imageIndex ? "bg-my-primary" : "bg-gray-600/60"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
