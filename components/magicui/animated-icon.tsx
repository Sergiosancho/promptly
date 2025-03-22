import { motion } from "framer-motion";
import Image from "next/image";

interface AnimatedIconProps {
  src: string;
  alt: string;
  size?: number;
  className?: string;
}

export function AnimatedIcon({ src, alt, size = 24, className = "" }: AnimatedIconProps) {
  return (
    <motion.div
      className={className}
      animate={{
        rotate: [0, 10, -10, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="object-contain"
      />
    </motion.div>
  );
}
