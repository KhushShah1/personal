import { useEffect } from "react";

type DrawerAccent = "sky" | "orange";

const accentClass = {
  sky: {
    border: "border-sky-950/10",
    button: "border-sky-200 text-sky-800 hover:bg-sky-100 focus-visible:ring-sky-200",
  },
  orange: {
    border: "border-orange-950/10",
    button:
      "border-orange-200 text-orange-800 hover:bg-orange-100 focus-visible:ring-orange-200",
  },
};

interface DetailDrawerProps {
  open: boolean;
  ariaLabel: string;
  accent: DrawerAccent;
  closeLabel: string;
  onClose: () => void;
  children: React.ReactNode;
}

export default function DetailDrawer({
  open,
  ariaLabel,
  accent,
  closeLabel,
  onClose,
  children,
}: DetailDrawerProps) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40">
      <button
        type="button"
        aria-label={closeLabel}
        onClick={onClose}
        className="absolute inset-0 bg-warm-900/30 backdrop-blur-sm"
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
        className={`absolute top-0 right-0 flex h-full w-full max-w-xl animate-[drawerIn_260ms_ease_forwards] flex-col overflow-y-auto border-l ${accentClass[accent].border} bg-warm-50 p-8 shadow-2xl sm:p-10`}
      >
        <button
          type="button"
          onClick={onClose}
          className={`mb-10 w-fit rounded-full border px-4 py-2 text-sm tracking-tight transition focus-visible:outline-none focus-visible:ring-4 ${accentClass[accent].button}`}
        >
          Close
        </button>
        {children}
      </aside>
    </div>
  );
}
