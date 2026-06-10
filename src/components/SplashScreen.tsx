import { motion } from 'framer-motion';

export default function SplashScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2.2, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-dark flex items-center justify-center pointer-events-none"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <img 
          src="/logo original.png" 
          alt="Tiago Sales Advocacia" 
          className="w-64 md:w-96 lg:w-[32rem] object-contain"
        />
      </motion.div>
    </motion.div>
  );
}
