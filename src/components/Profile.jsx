import { useRef, useState } from "react";
import Map from "./Map";
import ProfileCard from "./ProfileCard";
import { ChevronUp } from "lucide-react";

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
      style={{
        backgroundImage: "URL(/bg2.jpeg)",
      }}
      className="min-h-screen   w-full  mx-auto   flex items-center justify-center  bg-center bg-cover bg-fixed   overflow-x-hidden  gap-2 flex-col font-mono "
    >
      <ProfileCard
        showMap={showMap}
        setShowMap={setShowMap}
        scrollToMap={scrollToMap}
      />
      <div ref={mapRef} className="w-full max-w-sm   ">
        {showMap && (
          <div className="w-full max-w-sm flex flex-col gap-2">
            <button
              onClick={() => {
                topRef.current?.scrollIntoView({ behavior: "smooth" });
                setTimeout(() => setShowMap(false), 200);
              }}
              className="flex items-center text-primary-content  btn bg-transparent  justify-center gap-1 w-2xs rounded-2xl mx-auto "
            >
              <ChevronUp className="animate-bounce " size={18} />
              Click to Close Map
            </button>

            <Map />
          </div>
        )}
      </div>
    </div>
  );
}
