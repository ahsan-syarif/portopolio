import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const contact = () => {
    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h2
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.5 }}
                    className="my-10 text-center text-4xl"
                    >
                        Get In Touch
                    </motion.h2>
                    <div className="text-center trakcing-tighter">
                        <motion.p
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -100 }}
                        transition={{ duration: 1 }}
                        className="my-4"
                        >
                            {CONTACT.phoneNo}
                        </motion.p>
                        <a href="" className="border-b">
                            {CONTACT.email}
                        </a>
            </div>
        </div>
    )
}