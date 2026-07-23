import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Bell } from "lucide-react";

interface GHLWaitingListModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseTitle?: string;
}

export default function GHLWaitingListModal({ isOpen, onClose, courseTitle }: GHLWaitingListModalProps) {
  useEffect(() => {
    if (isOpen) {
      const scriptId = "ghl-form-embed-script";
      if (!document.getElementById(scriptId)) {
        const script = document.createElement("script");
        script.id = scriptId;
        script.src = "https://link.msgsndr.com/js/form_embed.js";
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/75 backdrop-blur-xs z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 12 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 12 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white border border-gray-200 rounded-3xl w-full max-w-xl shadow-2xl overflow-hidden relative my-auto flex flex-col max-h-[92vh]"
          >
            {/* Modal Header */}
            <div className="p-5 sm:p-6 bg-gradient-to-r from-neutral-900 via-black to-neutral-900 text-white relative flex items-start justify-between border-b border-neutral-800 shrink-0">
              <div className="space-y-1.5 pr-8 text-left">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[10px] font-mono font-bold uppercase tracking-wider">
                  <Bell className="w-3 h-3 text-emerald-400" />
                  Course Waiting List
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight">
                  Get Notified When Enrollment Opens
                </h3>
                {courseTitle && (
                  <p className="text-xs text-gray-300 line-clamp-1">
                    Course: <strong className="text-emerald-400 font-semibold">{courseTitle}</strong>
                  </p>
                )}
              </div>

              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-neutral-700 text-gray-300 hover:text-white flex items-center justify-center transition-colors shrink-0 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body with GHL Form Iframe */}
            <div className="p-2 sm:p-4 overflow-y-auto flex-1 min-h-[500px] bg-white flex flex-col items-center justify-center">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/1ZmwU9M0TFkZqW3WNI4W"
                style={{ width: "100%", minHeight: "520px", height: "100%", border: "none", borderRadius: "8px" }}
                id="inline-1ZmwU9M0TFkZqW3WNI4W"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Course Waiting List"
                data-height="undefined"
                data-layout-iframe-id="inline-1ZmwU9M0TFkZqW3WNI4W"
                data-form-id="1ZmwU9M0TFkZqW3WNI4W"
                title="Course Waiting List"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
