import logo from "/logo2.jpeg";
import { motion } from "framer-motion";
import TypeWriterText from "./TypeWriterText";
import SocialLinks from "./SocialLinks";
import { ChevronDown, Fullscreen } from "lucide-react";

import ReadMoreModal from "./ReadMoreModal";

export default function ProfileCard({ scrollToMap, setShowMap, showMap }) {
  return (
    <div className="  w-full max-w-2xl card min-h-screen       shadow-xl      ">
      <figure className="pt-4 pb-2 gap-4 flex flex-col">
        <div className="avatar ">
          <div className="w-24 rounded-full ring ring-gray-700 ring-offset-accent-content     ">
            <motion.div
              initial={{ opacity: 0, y: 8, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {/* avatar here */}
              <img src={logo} alt="Mohammad Mahdi Marvi" />
            </motion.div>
          </div>
        </div>
        <TypeWriterText
          delay={0.4}
          className=" text-white font-semibold tracking-[0.2rem]"
          text="Mohammad Mahdi Marvi"
        />
        <div className="text-white text-center   ">
          <h2>روانشناس بالینی , هیپنوتراپ</h2>

          <p>عضو انجمن جهانی هیپنوتیزم</p>
          <p>شماره پروانه تخصصی:29406</p>
        </div>
      </figure>

      <div className="card-body text-center   px-2 justify-end ">
        {/* Name */}

        <SocialLinks />

        <button
          disabled={showMap}
          onClick={() => {
            setShowMap(true);

            setTimeout(scrollToMap, 50);
          }}
          className="btn bg-transparent   w-full  text-white  "
        >
          <ChevronDown
            className={`${!showMap ? "animate-bounce" : ""}  `}
            size={18}
          />{" "}
          LOCATION ON MAP
        </button>
      </div>
    </div>
  );
}
