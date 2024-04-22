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

const LandingPageTemplate = () => {
  const [hideCover, setHideCover] = useState<boolean>(false);

  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  useEffect(() => {
    const newAudio = new Audio("/songs.mp3");
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

  useEffect(() => {
    if (audio) {
      if (isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }, [audio, isPlaying]);

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="antialiased relative z-10 w-full h-screen">
      <motion.div className="max-w-lg mx-auto">
        <Cover hideCover={hideCover} setHideCover={setHideCover} />
        <div id="page1" className="min-h-screen relative z-10">
          <div className="w-full absolute h-1/2 bg-gradient-to-b from-main via-main to-transparent z-30 text-xs md:text-base">
            <div data-a className="py-6 px-10 text-center font-semibold ">
              “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
              untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung
              dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa
              kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar
              terdapat tanda-tanda bagi kaum yang berfikir.”
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <Image alt="image" src={"/Aset1/7a.png"} width={75} height={75} />
              <span>(Qs. Ar. Rum (30) : 21 )</span>
              <Image alt="image" src={"/Aset1/7b.png"} width={75} height={75} />
            </div>
          </div>
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
  );
};

export default LandingPageTemplate;