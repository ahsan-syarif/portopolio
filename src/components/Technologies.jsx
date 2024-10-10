import React from "react";
import { RiReactjsline } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { DiPhp } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa"
import { DiLogoAndroid } from "react-icons/bi";
import { animate, motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 1.5 }}
              className="my-20 text-center text-4xl"
            >
             Technologies
            </motion.h1>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              className="flex flex-warp items-center justify-center gap-4"
            >
            </motion.div>
            <motion.div
              variants={iconVariants(2.5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
            </motion.div>
        </div>
    )
}