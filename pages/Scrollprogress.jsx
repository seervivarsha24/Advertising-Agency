import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop / docHeight) * 100;
      setProgress(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px", width: "50px", height: "50px" }} className="cursor-pointer block z-[10000]">
      <CircularProgressbar
        value={progress}
        text={"↑"}
        styles={buildStyles({
          textColor: "#007bff",
          pathColor: "#007bff",
          trailColor: "#e0e0e0",
        })}
      />
    </div>
  );
};

export default ScrollProgress;

