import { AnimatePresence, motion } from "framer-motion";

export const SlideRight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <AnimatePresence>
      <motion.div
        className={className}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -90 }}
        transition={{ duration: 1 }}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export const SlideLeft = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <AnimatePresence>
      <motion.div
        className={className}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -90 }}
        transition={{ duration: 1 }}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
