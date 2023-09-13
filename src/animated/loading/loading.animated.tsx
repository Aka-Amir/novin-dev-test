import { motion } from "framer-motion";
import { ComponentProps } from "../../@types";

export default function Loading(props: ComponentProps) {
  return (
    <motion.div
      initial={{
        borderRadius: "10%",
        rotate: 0,
      }}
      animate={{
        borderRadius: ["10%", "50%", "10%"],
        rotate: [0, 180, 360],
      }}
      transition={{
        repeat: Infinity,
        duration: 1,
      }}
      className={props.className}
    ></motion.div>
  );
}
