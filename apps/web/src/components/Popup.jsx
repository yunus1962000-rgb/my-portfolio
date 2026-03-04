import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";

const Popup = ({ show, message, type = "success", position = "bottom" }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className={`
            fixed z-50 px-6 py-3 rounded-xl shadow-lg flex items-center gap-2
            ${position === "bottom" ? "bottom-6 right-6" : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"}
            ${type === "success" ? "bg-green-600 text-white" : "bg-red-600 text-white"}
          `}
        >
          {type === "success" ? (
            <CheckCircle className="w-5 h-5" />
          ) : (
            <XCircle className="w-5 h-5" />
          )}
          <span>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popup;