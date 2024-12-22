import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({ email: "" });
  const [notification, setNotification] = useState({
    show: false,
    type: "",
    message: "",
  });

  // References for animation triggers
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Your existing useEffect for notification
  useEffect(() => {
    if (notification.show) {
      const timer = setTimeout(() => {
        setNotification((prev) => ({ ...prev, show: false }));
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification.show]);

  // Your existing functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return "Email is required";
    if (!emailRegex.test(email)) return "Please enter a valid email address";
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "email") {
      setErrors({ ...errors, email: validateEmail(value) });
    }
  };

  const showNotification = (type, message) => {
    setNotification({ show: true, type, message });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalFormData = {
      ...formData,
      name: formData.name.trim() || "Anonymous User",
    };

    const emailError = validateEmail(finalFormData.email);
    if (emailError) {
      setErrors({ ...errors, email: emailError });
      return;
    }

    emailjs
      .send(
        "service_744x8e1",
        "template_lv0ixfl",
        {
          to_name: "Sithila Nethmina",
          from_name: finalFormData.name,
          from_email: finalFormData.email,
          message: finalFormData.message,
        },
        "q5wvUjx_uWOS9-qci"
      )
      .then(() => {
        showNotification("success", "Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        showNotification(
          "error",
          "Failed to send the message. Please try again."
        );
        console.error("EmailJS Error:", error);
      });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-8 relative"
      ref={containerRef}
    >
      {/* Notification Toast */}
      {notification.show && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg ${
            notification.type === "success" ? "bg-green-500" : "bg-red-500"
          } text-white`}
        >
          <div className="flex items-center space-x-2">
            {notification.type === "success" ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
            <p className="font-medium">{notification.message}</p>
          </div>
        </motion.div>
      )}

      <motion.div
        className="max-w-6xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold mb-12 text-center md:text-left text-[#00ff95]"
        >
          Contact Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Form Section */}
          <motion.div
            variants={itemVariants}
            className="bg-[#111] p-8 rounded-2xl"
          >
            <form className="grid gap-6" onSubmit={handleSubmit}>
              <motion.div variants={itemVariants}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name (optional)"
                  className="w-full bg-[#1a1a1a] p-4 rounded-lg border border-[#333] focus:border-[#00ff95] transition-colors outline-none"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-2">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className={`w-full bg-[#1a1a1a] p-4 rounded-lg border transition-colors outline-none ${
                    errors.email
                      ? "border-red-500 focus:border-red-500"
                      : "border-[#333] focus:border-[#00ff95]"
                  }`}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}
              </motion.div>

              <motion.textarea
                variants={itemVariants}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                required
                className="bg-[#1a1a1a] p-4 rounded-lg border border-[#333] focus:border-[#00ff95] transition-colors outline-none h-40 resize-none"
              />

              <motion.button
                variants={itemVariants}
                type="submit"
                disabled={!!errors.email}
                className="bg-[#00ff95] text-black p-4 rounded-lg font-bold hover:bg-[#00cc78] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info Section */}
          <motion.div
            variants={itemVariants}
            className="bg-[#111] p-8 rounded-2xl text-center md:text-left"
          >
            <motion.h3
              variants={itemVariants}
              className="text-[#00ff95] text-2xl font-bold mb-8"
            >
              Get in Touch
            </motion.h3>

            <div className="grid gap-8">
              {/* Email Section */}
              <motion.div variants={itemVariants}>
                <h4 className="text-[#00ff95] text-lg font-semibold mb-3">
                  Email
                </h4>
                <a
                  href="mailto:kms123sithila@gmail.com"
                  className="block mb-2 hover:text-[#00ff95] transition-colors"
                >
                  kms123sithila@gmail.com
                </a>
              </motion.div>

              {/* Phone Section */}
              <motion.div variants={itemVariants}>
                <h4 className="text-[#00ff95] text-lg font-semibold mb-3">
                  Phone
                </h4>
                <p className="mb-2">
                  <a href="tel:+94715706416" className="hover:underline">
                    +94 71 5706 416 (Primary)
                  </a>
                </p>
                <p>
                  <a href="tel:+94756335168" className="hover:underline">
                    +94 75 6335 168 (Alternative)
                  </a>
                </p>
              </motion.div>

              {/* Social Media Section */}
              <motion.div variants={itemVariants}>
                <h4 className="text-[#00ff95] text-lg font-semibold mb-3">
                  Social Media
                </h4>
                <div className="grid gap-2">
                  <a
                    href="https://github.com/Sithila69"
                    className="hover:text-[#00ff95] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub: @Sithila69
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sithila-bandara-963063225/"
                    className="hover:text-[#00ff95] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn: /in/sithila-bandara-963063225
                  </a>
                  <a
                    href="https://x.com/KMSBandara42870"
                    className="hover:text-[#00ff95] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter: @KMSBandara42870
                  </a>
                </div>
              </motion.div>

              {/* Location Section */}
              <motion.div variants={itemVariants}>
                <h4 className="text-[#00ff95] text-lg font-semibold mb-3">
                  Location
                </h4>
                <p>Kandy, Sri Lanka</p>
                <p>Time Zone: (UTC+05:30)</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
