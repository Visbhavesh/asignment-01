import React from "react";
import { motion, Variants } from "framer-motion";

const landscapes: string[] = [
    "https://i.ibb.co/s9mGVWv/billy-huynh-W8-KTS-mh-FUE-unsplash.jpg", 
    "https://i.ibb.co/s9mGVWv/billy-huynh-W8-KTS-mh-FUE-unsplash.jpg", 
    "https://i.ibb.co/LZNVFw9/robson-hatsukami-morgan-w-EFd-RCG4-IU-unsplash.jpg",
    "https://i.ibb.co/PzzF65j/zoltan-tasi-n8-HAQ26-Gn-Mc-unsplash.jpg",
    "https://i.ibb.co/s9mGVWv/billy-huynh-W8-KTS-mh-FUE-unsplash.jpg", 
    "https://i.ibb.co/s9mGVWv/billy-huynh-W8-KTS-mh-FUE-unsplash.jpg", 
    "https://i.ibb.co/LZNVFw9/robson-hatsukami-morgan-w-EFd-RCG4-IU-unsplash.jpg",
    "https://i.ibb.co/PzzF65j/zoltan-tasi-n8-HAQ26-Gn-Mc-unsplash.jpg",
    
];

const container: React.CSSProperties = {
    margin: "100px auto",
    paddingBottom: 100,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "0", 
    backgroundColor: "#121212", // Dark background color
};
const overlayStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Semi-transparent black overlay
    color: "white",
    textAlign: "center",
    padding: "20px",
};

const headingStyle: React.CSSProperties = {
    fontSize: "2rem",
    marginBottom: "1rem",
    fontWeight: "bold",
};

const textStyle: React.CSSProperties = {
    fontSize: "1rem",
    lineHeight: "1.5",
};

const cardContainer: React.CSSProperties = {
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginBottom: 0, // Removed extra margin between images
    width: "100%",
};

const card: React.CSSProperties = {
    width: "100%", // Full width
    height: "100vh", // Full viewport height
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    background: "#1c1c1c", // Dark background for card
    boxShadow:
        "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
    transformOrigin: "10% 60%",
};

const imageStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "20px",
};

/**
 * ==============   Components   ================
 */

export default function Image() {
    return (
        <div style={container}>
            {landscapes.map((url, i) => (
                <Card key={i} i={i} url={url} />
            ))}
        </div>
    );
}

interface CardProps {
    url: string;
    i: number;
}

function Card({ url, i }: CardProps) {
    return (
        <motion.div
            className={`card-container-${i}`}
            style={cardContainer}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.8 }}
        >
            <motion.div style={card} variants={cardVariants} className="card">
                <img src={url} alt={`Landscape ${i}`} style={imageStyle} />
                <div style={textOverlayStyle}>
                    <h2 style={headerStyle}>Image {i + 1}</h2>
                    <p style={paragraphStyle}>This is a description for the image.</p>
                </div>
            </motion.div>
        </motion.div>
    );
}

const textOverlayStyle: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#ffffff", // White text color
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
    padding: "20px",
    borderRadius: "10px",
};

const headerStyle: React.CSSProperties = {
    fontSize: "24px",
    fontWeight: "bold",
    margin: 0,
};

const paragraphStyle: React.CSSProperties = {
    fontSize: "16px",
    margin: 0,
};

const cardVariants: Variants = {
    offscreen: {
        y: 300,
    },
    onscreen: {
        y: 50, // Still animates vertically
        rotate: 0, // Remove tilt
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
};
