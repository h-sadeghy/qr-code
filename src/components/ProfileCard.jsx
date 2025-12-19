import { motion } from "framer-motion";
import TypeWriterText from "./TypeWriterText";
import avatar from "../assets/avatar.jpg";
import SocialLinks from "./SocialLinks";
import { ChevronDown } from "lucide-react";

export default function ProfileCard() {
  return (
    <div className="card w-full max-w-sm bg-base-300 shadow-xl">
      <figure className="pt-4 pb-2">
        <div className="avatar">
          <div className="w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4">
            <motion.div
              initial={{ opacity: 0, y: 8, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* avatar here */}
              <img src={avatar} alt="Mohammad Mahdi Marvi" />
            </motion.div>
          </div>
        </div>
      </figure>

      <div className="card-body text-center gap-2 ">
        {/* Name */}
        <h1 className="text-xl font-extrabold text-primary ">
          <TypeWriterText text="Mohammad Mahdi Marvi" />
        </h1>

        {/* Main title (Persian) */}
        <h2 className="text-md opacity-80 font-mono font-extrabold text-secondary">
          <TypeWriterText
            text="عضو انجمن علمی هیپنوتیزم بالینی ایران"
            delay={0.6}
          />
        </h2>

        <h2 className="text-sm opacity-80 font-mono text-secondary  font-extrabold">
          <TypeWriterText text="عضو سازمان نظام روان‌شناسی ایران" delay={0.6} />
        </h2>
        <h2 className="text-sm opacity-80 font-mono text-secondary  font-extrabold">
          <TypeWriterText text="عضو انجمن جهانی هیپنوتیزم" delay={0.2} />
        </h2>

        {/* Role */}
        <p className=" mt-2  font-mono text-xl font-bold">
          <TypeWriterText text="روان‌درمانگر کودک و نوجوان" delay={1.2} />
        </p>

        <SocialLinks />
      </div>
    </div>
  );
}
