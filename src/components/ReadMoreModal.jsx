import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, UserRound, X } from "lucide-react";

export default function ReadMoreSidebar({ text }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Sidebar button */}
      <div className="">
        <button
          onClick={() => setOpen(true)}
          className="  w-xs rounded-2xl  text-white items-center       btn bg-transparent   flex mx-auto  "
        >
          <span className="pr-2 items-center justify-around  ">
            <UserRound />
          </span>
          <span className="tracking-widest">Resume</span>
        </button>
      </div>

      {/* Sidebar / Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)} // click outside to close
          >
            <motion.div
              className="fixed  top-0 right-0 h-full w-82 bg-gray-100 shadow-xl overflow-auto px-2 py-8 rounded-tl-2xl rounded-bl-2xl  "
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
            >
              <button
                onClick={() => setOpen(false)}
                className="text-blue-600 cursor-pointer font-bold mb-4 hover:underline"
              >
                <X />
              </button>
              <div
                dir="rtl"
                className="leading-8 font-serif text-right font-normal text-md "
              >
                روان‌شناس بالینی نوجوان ، هیپنوتراپ متخصص اضطراب و استرس کودکان
                روان شناس و مشاور رسمی آموزش و پرورش برای والدینی که رشد و آرامش
                واقعی فرزندشان برایشان اهمیت دارد با بیش از یک دهه تجربه بالینی
                و پژوهشی، در کنار والدین هستم تا فرزندانشان:
                <br />
                اضطراب و استرس کمتری را تجربه کنند
                <br />
                • اعتماد به نفس و مهارت‌های اجتماعی‌شان تقویت شود
                <br />
                • در خانواده‌ای سالم و پر از اعتماد رشد کنند
                <br />
                <span className="font-bold ">
                  برخی از تجربیات و دستاوردهای حرفه‌ای:
                </span>
                <br />• نگارش و چاپ بیش از ۱۰ مقاله بین‌المللی در حوزه اضطراب و
                افسردگی نوجوانان (انگلستان، آلمان، استرالیا، ایتالیا، بلژیک،
                هلند)
                <br /> • کسب عنوان مقاله برتر در سومین کنفرانس علوم ورزشی و
                پژوهش‌های نوین روان‌شناسی، انگلستان،لندن
                <br />• برگزاری بیش از ۵۰ کارگاه آموزشی فرزندپروری و مشاوره
                والدین
                <br />• مدرس و روان‌درمانگر اولین دوره نوروکمپ در ایران، دانشگاه
                فردوسی مشهد
                <br />• گذراندن دوره بین المللی هیپنوتیزم بالینی آلمان
                <br />
                این دانش و تجربه بین‌المللی، همراه با رویکرد عملی و علمی، مسیر
                رشد، آرامش و موفقیت کودک شما را هموار می‌کند
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
