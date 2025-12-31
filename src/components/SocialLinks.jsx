import { messages } from "../assets/utils/messages";
import { useState } from "react";
import ReadMoreSidebar from "./ReadMoreModal";
import { Instagram, Send } from "lucide-react";
const text = `    روان‌شناس بالینی نوجوان ، هیپنوتراپ متخصص اضطراب و استرس کودکان
                روان شناس و مشاور رسمی آموزش و پرورش برای والدینی که رشد و
                آرامش واقعی فرزندشان برایشان اهمیت دارد با بیش از یک دهه تجربه
                بالینی و پژوهشی، در کنار والدین هستم تا فرزندانشان:
                 • اضطراب و
                استرس کمتری را تجربه کنند • اعتماد به نفس و مهارت‌های
                اجتماعی‌شان تقویت شود • در خانواده‌ای سالم و پر از اعتماد رشد
                کنند برخی از تجربیات و دستاوردهای حرفه‌ای: • نگارش و چاپ بیش از
                ۱۰ مقاله بین‌المللی در حوزه اضطراب و افسردگی نوجوانان (انگلستان،
                آلمان، استرالیا، ایتالیا، بلژیک، هلند) • کسب عنوان مقاله برتر در
                سومین کنفرانس علوم ورزشی و پژوهش‌های نوین روان‌شناسی،
                انگلستان،لندن • برگزاری بیش از ۵۰ کارگاه آموزشی فرزندپروری و
                مشاوره والدین • مدرس و روان‌درمانگر اولین دوره نوروکمپ در ایران،
                دانشگاه فردوسی مشهد • گذراندن دوره بین المللی هیپنوتیزم بالینی
                ،آلمان 💡 این دانش و تجربه بین‌المللی، همراه با رویکرد عملی و
                علمی، مسیر رشد، آرامش و موفقیت کودک شما را هموار می‌کند
            `;

export default function SocialLinks() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className=" flex flex-col gap-1 ">
        <div className="grid  w-full">
          <ReadMoreSidebar
            text={text}
            open={showModal}
            onClose={() => setShowModal(false)}
          />
        </div>
        <div className="flex flex-col gap-1 justify-center mx-auto ">
          <a
            target="_blank"
            href="https://www.instagram.com/mahdi_marvi14"
            rel="noopener noreferrer"
            className="btn rounded-2xl w-2xs justify-center  bg-transparent flex items-center  text-primary-content "
          >
            <span className="  flex items-center  ">
              <Instagram />
            </span>
            <span className="">Instagram</span>
          </a>
          <a
            href={`https://t.me/mahdi_mrv?text=${messages.telegram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn rounded-2xl w-2xs justify-center  bg-transparent flex items-center  text-primary-content "
          >
            <span className="items-center flex      ">
              <Send />
              <span className="pl-2 tracking-wider">Telegram</span>
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
