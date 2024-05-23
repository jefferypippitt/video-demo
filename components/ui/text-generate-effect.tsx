'use client';
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 2,
      },
      {
        duration: 3,
        delay: stagger(0.1),
      }
    );
  }, [animate]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          const isHighlighted = word.includes("lightning-fast");
          return (
            <motion.span
              key={word + idx}
              className="opacity-0"
            >
              <span className={isHighlighted ? "text-yellow-300" : ""}>
                {word}{" "}
              </span>
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="text-2xl leading-snug tracking-wide text-white">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
