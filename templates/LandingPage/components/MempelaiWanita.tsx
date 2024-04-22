import Image from "next/image";
import React from "react";

import aset6 from "../../../public/Aset2/6.png";
import aset8 from "../../../public/Aset2/8.png";
import aset9 from "../../../public/Aset2/9.png";
import aset10 from "../../../public/Aset2/10.png";
import aset11 from "../../../public/Aset2/11.png";
import Templates from "./Templates";
import { motion } from "framer-motion";

const container = {
  hide: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.6,
    },
  },
};

const childAnimated = {
  hide: { y: 100, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
      stiffness: 100,
      damping: 25,
    },
  },
};

const MempelaiWanita = () => {
  return (
    <Templates>
      <div className="w-full bg-white/50 relative z-30 rounded">
        <div className="py-10"></div>
        <motion.div
          variants={container}
          initial="hide"
          whileInView="show"
          className="w-full flex items-center justify-center flex-col py-6 gap-6"
        >
          <motion.div variants={childAnimated} className="w-2/5">
            <Image alt="image" src={aset6} width={500} height={500} />
          </motion.div>
          <motion.div
            variants={childAnimated}
            className="text-center max-w-md font-semibold"
          >
            Assalamualaikum Wr. Wb. Dengan memohon Rahmat & Ridho Allah SWT,
            kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara
            pernikahan putra-putri kami :
          </motion.div>
          <motion.div variants={childAnimated} className="w-4/5">
            <Image alt="image" src={aset8} width={500} height={500} />
          </motion.div>
          <motion.div variants={childAnimated} className="w-2/3">
            <Image alt="image" src={aset9} width={500} height={500} />
          </motion.div>
          <motion.div variants={childAnimated} className="w-2/5">
            <Image alt="image" src={aset10} width={500} height={500} />
          </motion.div>
          <motion.div variants={childAnimated} className="w-1/6">
            <Image alt="image" src={aset11} width={300} height={300} />
          </motion.div>
          <motion.div variants={childAnimated}></motion.div>
        </motion.div>
      </div>
    </Templates>
  );
};

export default MempelaiWanita;
