import avatar from "/avatar3.jpeg";
import { motion } from "framer-motion";
import TypeWriterText from "./TypeWriterText";
import SocialLinks from "./SocialLinks";
import { ChevronDown, Fullscreen, MapPin } from "lucide-react";

import ReadMoreModal from "./ReadMoreModal";

export default function ProfileCard({ scrollToMap, setShowMap, showMap }) {
  return (
    <div className="  w-full max-w-2xl card h-screen       shadow-xl      ">
      <figure className="pt-4 pb-2 gap-2 flex flex-col">
        <div className="avatar ">
          <div className="w-32 rounded-full ring-4 ring-white ring-offset-accent-content ">
            <motion.div
              initial={{ opacity: 0, y: 8, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {/* avatar here */}
              <img
                src={avatar}
                alt="Mohammad Mahdi Marvi"
                className="w-full h-full bg-black/20  "
              />
            </motion.div>
          </div>
        </div>
        <span dir="rtl" style={{ unicodeBidi: "isolate" }}>
          <TypeWriterText
            delay={0.4}
            className=" text-white font-extrabold   text-2xl  text-shadow-lg/40"
            text="محمد مهدی مروی"
          />
        </span>
        <div className="text-white text-center font-bold text-shadow-lg/40 ">
          <h2>روانشناس بالینی | هیپنوتراپ</h2>

          {/* <p>عضو انجمن جهانی هیپنوتیزم</p>
          <p>شماره پروانه تخصصی:29406</p> */}
        </div>
      </figure>

      <div className="card-body text-center   px-2 justify-end  ">
        {/* Name */}

        <SocialLinks />

        <button
          disabled={showMap}
          onClick={() => {
            setShowMap(true);

            setTimeout(scrollToMap, 50);
          }}
          className="btn bg-transparent  items-center   w-xs rounded-2xl mx-auto  text-white  "
        >
          <MapPin />
          <span className="flex items-center pl-2 ">Location</span>
        </button>
      </div>
    </div>
  );
}
