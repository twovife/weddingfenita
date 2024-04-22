import { useEffect, useState } from "react";
import Cover from "./components/Cover";
import Image from "next/image";
import CountdownTimer from "./components/CountdownTimer ";
import Link from "next/link";
import SaveTheDate from "./components/SaveTheDate";
import WeedingGift from "./components/WeedingGift";
import MempelaiWanita from "./components/MempelaiWanita";
import MempelaiPria from "./components/MempelaiPria";
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

const LandingPageTemplate = () => {
  const [hideCover, setHideCover] = useState<boolean>(false);

  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    const newAudio = new Audio("/lagu.mp3");
    newAudio.preload = "auto";
    newAudio.onloadeddata = () => {
      setAudio(newAudio);
    };
    return () => {
      if (audio) {
        audio.pause();
      }
    };
  }, []);

  const toggleAudio = () => {
    if (audio) {
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (audio) {
      if (isPlaying) {
        audio.play().catch((error) => {
          console.error("Autoplay prevented:", error);
        });
      } else {
        audio.pause();
      }
    }
  }, [audio, isPlaying]);

  return (
    <div className="antialiased relative z-10 w-full h-screen">
      <div className="max-w-lg mx-auto">
        <Cover
          hideCover={hideCover}
          setHideCover={setHideCover}
          setIsPlaying={setIsPlaying}
        />
      </div>
      {hideCover && (
        <div>
          <motion.div className="max-w-lg mx-auto">
            <div id="page1" className="min-h-screen relative z-10">
              <motion.div
                variants={container}
                initial="hide"
                whileInView="show"
                className="w-full absolute h-1/2 bg-gradient-to-b from-main via-main to-transparent z-30 text-xs md:text-base"
              >
                <motion.div
                  variants={childAnimated}
                  className="py-6 px-10 text-center font-semibold "
                >
                  “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
                  untukmu isteri-isteri dari jenismu sendiri, supaya kamu
                  cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya
                  diantaramu rasa kasih dan sayang. Sesungguhnya pada yang
                  demikian itu benar-benar terdapat tanda-tanda bagi kaum yang
                  berfikir.”
                </motion.div>
                <motion.div
                  variants={childAnimated}
                  className="flex flex-col items-center justify-center gap-2"
                >
                  <Image
                    alt="image"
                    src={"/Aset1/7a.png"}
                    width={75}
                    height={75}
                  />
                  <span>(Qs. Ar. Rum (30) : 21 )</span>
                  <Image
                    alt="image"
                    src={"/Aset1/7b.png"}
                    width={75}
                    height={75}
                  />
                </motion.div>
              </motion.div>
              <Image
                alt="image"
                src={"/Aset1/2.png"}
                width={500}
                height={500}
                className="w-full absolute z-20 bottom-0 left-0"
              />
              <Image
                alt="image"
                src={"/Aset1/6.png"}
                width={500}
                height={500}
                className="w-3/5 absolute z-20 bottom-0 left-0"
              />
            </div>
            <MempelaiWanita />
            <MempelaiPria />
          </motion.div>
          <SaveTheDate />
          <WeedingGift />
        </div>
      )}
    </div>
  );
};

export default LandingPageTemplate;
