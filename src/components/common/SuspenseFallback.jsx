import React from "react";
import { motion } from "framer-motion";

/**
 * Small reusable fallback for Suspense. Keep it light so it's used across the app.
 * (You can style .suspense-fallback in your App.css)
 */
export default function SuspenseFallback({ message = "Loading..." }) {
  return (
    <div className="suspense-fallback d-flex flex-column align-items-center justify-content-center p-4">
      <motion.div
        className="spinner-dot mb-3"
        animate={{ scale: [1, 1.25, 1] }}
        transition={{ repeat: Infinity, duration: 0.9 }}
      >
        <div style={{ width: 18, height: 18, borderRadius: 999 }} className="bg-primary" />
      </motion.div>
      <div className="text-muted small">{message}</div>
    </div>
  );
}
