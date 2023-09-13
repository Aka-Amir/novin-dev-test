import { motion } from "framer-motion";
import { AnimatedComponentProps } from "../../@types/props/animatedComponent.propsType";

export default function FadeUp(props: AnimatedComponentProps) {
  return (
    <motion.div
      initial={{
        y: 10,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        delay: props.delay || 0,
        duration: props.duration || 0.25,
      }}
    >
      {props.children}
    </motion.div>
  );
}
