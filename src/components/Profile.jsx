import { useRef, useState } from "react";
import Map from "./Map";
import ProfileCard from "./ProfileCard";
import ThemeToggle from "./ThemeToggle";
import { ChevronUp } from "lucide-react";
import BottomMenu from "./BottomMenu";
export default function Profile() {
  const mapRef = useRef(null);
  const [showMap, setShowMap] = useState(false);
  const topRef = useRef(null);

  const scrollToMap = () => {
    mapRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      ref={topRef}
      className="min-h-screen bg-base-300 flex items-center justify-center p-4  gap-4 flex-col"
    >
      <ProfileCard
        showMap={showMap}
        setShowMap={setShowMap}
        scrollToMap={scrollToMap}
      />
      <div ref={mapRef} className="w-full max-w-sm  ">
        {showMap && (
          <div className="w-full max-w-sm flex flex-col gap-2">
            <button
              onClick={() => {
                topRef.current?.scrollIntoView({ behavior: "smooth" });
                setTimeout(() => setShowMap(false), 400);
              }}
              className="btn btn-ghost flex items-center justify-center gap-2"
            >
              <ChevronUp className="animate-bounce" size={18} />
              بازگشت
            </button>

            <Map />
          </div>
        )}
      </div>
    </div>
  );
}
