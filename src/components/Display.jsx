import { useEffect, useRef } from "react";

export default function Display({ value }) {
  const displayRef = useRef(null);

  useEffect(() => {
    if (displayRef.current) {
      displayRef.current.scrollLeft = displayRef.current.scrollWidth;
    }
  }, [value]);

  return (
    <div className="mb-6 rounded-xl bg-bg-screen p-6 text-right">
      <p
        ref={displayRef}
        className="overflow-x-auto whitespace-nowrap text-5xl font-bold text-text"
      >
        {value || "\u00A0"}
      </p>
    </div>
  );
}
