
import React from "react";
import { motion, Variants } from "framer-motion";

export default function Rotate() {
    return (
        <motion.div
            style={box}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity }} // Infinite loop to keep rotating
        />
    );
}

const box = {
    width: 100,
    height: 100,
    backgroundColor: "#ff0088",
    borderRadius: 5,
};
