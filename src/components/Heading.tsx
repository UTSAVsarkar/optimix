import * as React from "react";
import { motion } from "framer-motion";

export default function Heading() {
  return (
    <>
      <style>
        {`
          .heading-container {
            text-align: left;
            padding: 0 20px;
          }

          .heading-title {
            font-size: 3.5rem;
            font-weight: 700;
            background: linear-gradient(to right, #ffffff, #d0d0d0);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 20px;
          }

          .heading-sub {
            font-size: 1.25rem;
            font-weight: 400;
            color: #f0f0f0;
            line-height: 1.6;
            max-width: 700px;
          }

          @media (max-width: 768px) {
            .heading-container {
              text-align: center;
              padding: 0 15px;
            }

            .heading-title {
              font-size: 2.2rem;
            }

            .heading-sub {
              font-size: 1rem;
            }
          }
        `}
      </style>

      <div className="heading-container">
        <motion.h1
          className="heading-title"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Optimizing Resources. Maximizing Profit.
        </motion.h1>

        <motion.p
          className="heading-sub"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <i>Unlock operational efficiency and drive profitability.</i>
        </motion.p>

        <motion.p
          className="heading-sub"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <i>Powered by data, discipline, and expert-led consulting at every step.</i>
        </motion.p>
      </div>
    </>
  );
}
