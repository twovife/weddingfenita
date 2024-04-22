import React from "react";
import Templates from "./Templates";
import Image from "next/image";
import CountdownTimer from "./CountdownTimer ";
import Link from "next/link";

import aset6 from "../../../public/Aset3/6.png";
import aset7 from "../../../public/Aset3/7.png";
import aset8 from "../../../public/Aset3/8.png";
import aset9 from "../../../public/Aset3/9.png";
import aset10 from "../../../public/Aset3/10.png";
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
const MempelaiPria = () => {
  return (
    <Templates>
      <div className="w-full bg-white/50 relative z-30 rounded">
        <motion.div
          variants={container}
          initial="hide"
          whileInView="show"
          className="w-full flex items-center justify-center flex-col py-6 gap-6"
        >
          <motion.div variants={childAnimated} className="w-4/5">
            <Image alt="image" src={aset6} width={500} height={500} />
          </motion.div>
          <motion.div variants={childAnimated} className="w-2/3">
            <Image alt="image" src={aset7} width={500} height={500} />
          </motion.div>
          <motion.div variants={childAnimated} className="w-2/5">
            <Image alt="image" src={aset8} width={500} height={500} />
          </motion.div>
          <motion.div variants={childAnimated} className="w-3/5">
            <Image alt="image" src={aset9} width={500} height={500} />
          </motion.div>
          <motion.div variants={childAnimated} className="w-3/5">
            <Image alt="image" src={aset10} width={500} height={500} />
          </motion.div>
          <motion.div variants={childAnimated}>
            <CountdownTimer />
          </motion.div>
          <Link
            className="bg-gray-800 px-4 py-2 text-white rounded"
            target="blank"
            href={`https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20240427T170000Z%2F20240427T170000Z&details=%22Setiap%20senyuman%20dan%20tawa%20dari%20Bapak%2FIbu%2FSaudara%2Fi%20akan%20menjadi%20penyemangat%20bagi%20kami%20dalam%20membangun%20rumah%20tangga%20yang%20harmonis.%20Kami%20sangat%20berharap%20Bapak%2FIbu%2FSaudara%2Fi%20dapat%20hadir%20dan%20menjadi%20bagian%20dari%20momen%20spesial%20ini.%22&location=https%3A%2F%2Fmaps.app.goo.gl%2Fe9UkLcmyhrZR2uqMA&text=Wedding%20Fenita%20%26%20Candra`}
          >
            Save The Date
          </Link>
        </motion.div>
      </div>
    </Templates>
  );
};

export default MempelaiPria;
