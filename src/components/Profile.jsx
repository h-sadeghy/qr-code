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
        backgroundImage: "URL(/bg.jpeg)",
      }}
      className="min-h-screen bg-cover bg-center w-full mx-auto   flex items-center justify-center       gap-4 flex-col font-serif "
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
                setTimeout(() => setShowMap(false), 200);
              }}
              className="flex items-center text-primary-content  btn bg-transparent  justify-center gap-1 "
            >
              <ChevronUp className="animate-bounce" size={18} />
              Close
            </button>

            <Map />
          </div>
        )}
      </div>
    </div>
  );
}
