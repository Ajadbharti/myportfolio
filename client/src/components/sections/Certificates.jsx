import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

import {
  FaTimes,
  FaCertificate,
  FaExternalLinkAlt,
} from "react-icons/fa";

import { FaJava } from "react-icons/fa6";

import {
  SiReact,
  SiCplusplus,
  SiPython,
  SiCss,
  SiMysql,
} from "react-icons/si";

import { MdSecurity } from "react-icons/md";

// ========================================
// CERTIFICATE DATA
// ========================================

const certificates = [
  {
    id: 1,
    title: "React.js",
    subtitle: "15+ Hours MOOC",
    issuer: "Tech Veda",
    date: "22 Mar 2025",
    category: "Frontend",
    description:
      "Completed a 15+ hours MOOC on React.js, including a comprehensive proctored examination.",
    file: "/certificates/react.png",
    type: "image",
    icon: SiReact,
    iconColor: "#61DAFB",
  },

  {
    id: 2,
    title: "Database Management System",
    subtitle: "Part - 1",
    issuer: "Infosys Springboard",
    date: "23 Jul 2026",
    category: "Database",
    description:
      "Successfully completed the Database Management System Part - 1 course.",
    file: "/certificates/dbms.pdf",
    type: "pdf",
    icon: SiMysql,
    iconColor: "#4479A1",
  },

  {
    id: 3,
    title: "Programming Using C++",
    subtitle: "Course Completion",
    issuer: "Infosys Springboard",
    date: "20 Aug 2025",
    category: "Programming",
    description:
      "Successfully completed the Programming Using C++ course.",
    file: "/certificates/cpp.pdf",
    type: "pdf",
    icon: SiCplusplus,
    iconColor: "#00599C",
  },

  {
    id: 4,
    title: "Programming in JAVA",
    subtitle: "Course Completion",
    issuer: "NEO Colab",
    date: "21 May 2026",
    category: "Programming",
    description:
      "Successfully completed the Programming in JAVA course with dedication and consistency.",
    file: "/certificates/java.pdf",
    type: "pdf",
    icon: FaJava,
    iconColor: "#F89820",
  },

  {
    id: 5,
    title: "CyberSmart Awareness",
    subtitle: "CSR Project Internship",
    issuer: "WNS Cares Foundation",
    date: "12 Sep 2025",
    category: "Internship",
    description:
      "Completed the CyberSmart Awareness CSR Project internship with WNS Cares Foundation.",
    file: "/certificates/cybersmart.pdf",
    type: "pdf",
    icon: MdSecurity,
    iconColor: "#22C55E",
  },

  {
    id: 6,
    title: "CSS",
    subtitle: "Basic Skill Certification",
    issuer: "HackerRank",
    date: "15 Nov 2024",
    category: "Frontend",
    description:
      "Successfully passed the HackerRank CSS Basic skill certification test.",
    file: "/certificates/css.pdf",
    type: "pdf",
    icon: SiCss,
    iconColor: "#1572B6",
  },

  {
    id: 7,
    title: "Python",
    subtitle: "Basic Skill Certification",
    issuer: "HackerRank",
    date: "15 Nov 2024",
    category: "Programming",
    description:
      "Successfully passed the HackerRank Python Basic skill certification test.",
    file: "/certificates/python.pdf",
    type: "pdf",
    icon: SiPython,
    iconColor: "#3776AB",
  },
];

// ========================================
// CERTIFICATE CARD
// ========================================

function CertificateCard({
  certificate,
  index,
  dark,
  onView,
}) {
  const Icon = certificate.icon;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -7,
      }}
      className={`group relative overflow-hidden rounded-3xl border transition-all duration-300 ${
        dark
          ? "border-white/10 bg-white/[0.025] hover:border-violet-400/30"
          : "border-slate-200 bg-white hover:border-violet-300 hover:shadow-xl"
      }`}
    >
      {/* ==================================
          CERTIFICATE PREVIEW
      ================================== */}

      <button
        type="button"
        onClick={() => onView(certificate)}
        className={`relative block h-56 w-full overflow-hidden ${
          dark ? "bg-[#0b0c12]" : "bg-slate-100"
        }`}
      >
        {certificate.type === "image" ? (
          <img
            src={certificate.file}
            alt={`${certificate.title} certificate`}
            className="h-full w-full object-contain p-3 transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center">
            <FaCertificate
              size={55}
              style={{
                color: certificate.iconColor,
              }}
              className="mb-4"
            />

            <span
              className={`text-sm font-medium ${
                dark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Certificate PDF
            </span>

            <span className="mt-1 text-xs text-violet-500">
              Click to preview
            </span>
          </div>
        )}

        {/* Dark Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/40">
          <span className="translate-y-3 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            View Certificate
          </span>
        </div>

        {/* Category */}
        <div className="absolute left-4 top-4">
          <span className="rounded-full border border-white/20 bg-black/50 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
            {certificate.category}
          </span>
        </div>

        {/* Number */}
        <div className="absolute right-4 top-4">
          <span className="text-sm font-bold text-white/60">
            0{certificate.id}
          </span>
        </div>
      </button>

      {/* ==================================
          CARD CONTENT
      ================================== */}

      <div className="p-6">
        {/* Icon + Title */}
        <div className="mb-4 flex items-start gap-4">
          <div
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
              dark
                ? "bg-white/[0.05]"
                : "bg-slate-100"
            }`}
          >
            <Icon
              size={22}
              style={{
                color: certificate.iconColor,
              }}
            />
          </div>

          <div className="min-w-0">
            <h3
              className={`text-lg font-bold ${
                dark
                  ? "text-white"
                  : "text-slate-900"
              }`}
            >
              {certificate.title}
            </h3>

            <p
              className={`mt-1 text-sm ${
                dark
                  ? "text-violet-400"
                  : "text-violet-600"
              }`}
            >
              {certificate.subtitle}
            </p>
          </div>
        </div>

        {/* Description */}
        <p
          className={`mb-5 line-clamp-2 text-sm leading-6 ${
            dark
              ? "text-slate-400"
              : "text-slate-600"
          }`}
        >
          {certificate.description}
        </p>

        {/* Divider */}
        <div
          className={`mb-4 h-px ${
            dark
              ? "bg-white/10"
              : "bg-slate-200"
          }`}
        />

        {/* Issuer + Date */}
        <div className="flex items-center justify-between gap-3">
          <div>
            <p
              className={`text-xs ${
                dark
                  ? "text-slate-500"
                  : "text-slate-500"
              }`}
            >
              Issued by
            </p>

            <p
              className={`mt-1 text-sm font-semibold ${
                dark
                  ? "text-slate-300"
                  : "text-slate-700"
              }`}
            >
              {certificate.issuer}
            </p>
          </div>

          <span
            className={`text-xs ${
              dark
                ? "text-slate-500"
                : "text-slate-500"
            }`}
          >
            {certificate.date}
          </span>
        </div>

        {/* View Button */}
        <button
          type="button"
          onClick={() => onView(certificate)}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition-all duration-300 hover:scale-[1.01]"
        >
          <FaExternalLinkAlt size={13} />
          View Certificate
        </button>
      </div>
    </motion.article>
  );
}

// ========================================
// CERTIFICATE MODAL
// ========================================

function CertificateModal({
  certificate,
  dark,
  onClose,
}) {
  if (!certificate) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
          y: 20,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          scale: 0.9,
          y: 20,
        }}
        transition={{
          duration: 0.25,
        }}
        onClick={(event) =>
          event.stopPropagation()
        }
        className={`relative flex max-h-[95vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border ${
          dark
            ? "border-white/10 bg-[#0b0c12]"
            : "border-slate-200 bg-white"
        }`}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition hover:bg-black/80"
        >
          <FaTimes size={17} />
        </button>

        {/* Modal Header */}
        <div
          className={`flex items-center gap-4 border-b px-6 py-4 ${
            dark
              ? "border-white/10"
              : "border-slate-200"
          }`}
        >
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-xl ${
              dark
                ? "bg-violet-500/10"
                : "bg-violet-50"
            }`}
          >
            <FaCertificate className="text-violet-500" />
          </div>

          <div>
            <h3
              className={`font-bold ${
                dark
                  ? "text-white"
                  : "text-slate-900"
              }`}
            >
              {certificate.title}
            </h3>

            <p
              className={`text-sm ${
                dark
                  ? "text-slate-400"
                  : "text-slate-500"
              }`}
            >
              {certificate.issuer}
            </p>
          </div>
        </div>

        {/* Certificate */}
        <div className="flex min-h-0 flex-1 items-center justify-center overflow-auto p-4 sm:p-8">
          {certificate.type === "image" ? (
            <img
              src={certificate.file}
              alt={`${certificate.title} certificate`}
              className="max-h-[75vh] max-w-full rounded-lg object-contain shadow-2xl"
            />
          ) : (
            <iframe
              src={certificate.file}
              title={`${certificate.title} certificate`}
              className="h-[75vh] w-full rounded-lg border-0"
            />
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

// ========================================
// MAIN COMPONENT
// ========================================

function Certificates() {
  const { dark } = useTheme();

  const [selectedCertificate, setSelectedCertificate] =
    useState(null);

  return (
    <section
      id="certificates"
      className={`relative overflow-hidden py-24 transition-colors duration-300 ${
        dark
          ? "bg-[#05060a] text-white"
          : "bg-white text-slate-900"
      }`}
    >
      {/* Background Glow */}
      {dark && (
        <>
          <div className="pointer-events-none absolute left-1/4 top-10 h-96 w-96 rounded-full bg-violet-700/10 blur-[130px]" />

          <div className="pointer-events-none absolute bottom-10 right-1/4 h-96 w-96 rounded-full bg-fuchsia-600/10 blur-[130px]" />

          <div className="pointer-events-none absolute left-[8%] top-[25%] h-1.5 w-1.5 rounded-full bg-violet-400/60" />

          <div className="pointer-events-none absolute right-[10%] top-[45%] h-2 w-2 rounded-full bg-fuchsia-400/50" />
        </>
      )}

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.4,
            }}
            className="mb-4 inline-flex items-center gap-2"
          >
            <span className="h-px w-8 bg-violet-500" />

            <span className="text-sm font-bold uppercase tracking-[0.25em] text-violet-500">
              Certifications
            </span>

            <span className="h-px w-8 bg-violet-500" />
          </motion.div>

          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
            className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Credentials &{" "}
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Achievements
            </span>
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            className={`mx-auto mt-5 max-w-2xl text-base leading-7 sm:text-lg ${
              dark
                ? "text-slate-400"
                : "text-slate-600"
            }`}
          >
            Certifications and achievements that reflect my
            continuous learning, technical growth, and
            commitment to developing new skills.
          </motion.p>
        </div>

        {/* Certificate Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map(
            (certificate, index) => (
              <CertificateCard
                key={certificate.id}
                certificate={certificate}
                index={index}
                dark={dark}
                onView={
                  setSelectedCertificate
                }
              />
            )
          )}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className={`mx-auto mt-14 flex max-w-xl items-center justify-center gap-8 rounded-2xl border px-6 py-5 ${
            dark
              ? "border-white/10 bg-white/[0.02]"
              : "border-slate-200 bg-slate-50"
          }`}
        >
          <div className="text-center">
            <p className="text-2xl font-bold text-violet-500">
              7+
            </p>

            <p
              className={`mt-1 text-xs ${
                dark
                  ? "text-slate-500"
                  : "text-slate-500"
              }`}
            >
              Certifications
            </p>
          </div>

          <div
            className={`h-10 w-px ${
              dark
                ? "bg-white/10"
                : "bg-slate-200"
            }`}
          />

          <div className="text-center">
            <p className="text-2xl font-bold text-violet-500">
              3+
            </p>

            <p
              className={`mt-1 text-xs ${
                dark
                  ? "text-slate-500"
                  : "text-slate-500"
              }`}
            >
              Domains
            </p>
          </div>

          <div
            className={`h-10 w-px ${
              dark
                ? "bg-white/10"
                : "bg-slate-200"
            }`}
          />

          <div className="text-center">
            <p className="text-2xl font-bold text-violet-500">
              ∞
            </p>

            <p
              className={`mt-1 text-xs ${
                dark
                  ? "text-slate-500"
                  : "text-slate-500"
              }`}
            >
              Learning
            </p>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <CertificateModal
            certificate={
              selectedCertificate
            }
            dark={dark}
            onClose={() =>
              setSelectedCertificate(null)
            }
          />
        )}
      </AnimatePresence>
    </section>
  );
}

export default Certificates;