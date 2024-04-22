import Image from "next/image";
import React from "react";

import aset6 from "../../../public/Aset2/6.png";
import aset8 from "../../../public/Aset2/8.png";
import aset9 from "../../../public/Aset2/9.png";
import aset10 from "../../../public/Aset2/10.png";
import aset11 from "../../../public/Aset2/11.png";
import Templates from "./Templates";

const MempelaiWanita = () => {
  return (
    <Templates>
      <div className="w-full bg-white/50 relative z-30 rounded">
        <div className="w-full flex items-center justify-center flex-col py-6 gap-6">
          <Image
            alt="image"
            src={aset6}
            width={500}
            height={500}
            className="w-2/5"
          />
          <div className="text-center max-w-md font-semibold">
            Assalamualaikum Wr. Wb. Dengan memohon Rahmat & Ridho Allah SWT,
            kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara
            pernikahan putra-putri kami :
          </div>
          <Image
            alt="image"
            src={aset8}
            width={500}
            height={500}
            className="w-4/5"
          />
          <Image
            alt="image"
            src={aset9}
            width={500}
            height={500}
            className="w-2/3"
          />
          <Image
            alt="image"
            src={aset10}
            width={500}
            height={500}
            className="w-2/5"
          />
          <Image
            alt="image"
            src={aset11}
            width={300}
            height={300}
            className="w-1/6"
          />
        </div>
      </div>
    </Templates>
  );
};

export default MempelaiWanita;
