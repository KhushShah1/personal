interface CarouselButtonProps {
  direction: "prev" | "next";
  onClick: () => void;
}

export default function CarouselButton({ direction, onClick }: CarouselButtonProps) {
  const isPrev = direction === "prev";
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isPrev ? "Previous item" : "Next item"}
      className={`absolute ${isPrev ? "left-0" : "right-0"} top-1/2 z-10 -translate-y-1/2 rounded text-warm-900/25 transition-colors hover:text-warm-900/60 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200`}
    >
      <svg
        className="h-10 w-10 sm:h-14 sm:w-14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d={isPrev ? "M15 18 9 12l6-6" : "m9 18 6-6-6-6"} />
      </svg>
    </button>
  );
}
