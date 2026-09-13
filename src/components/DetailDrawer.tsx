import { useEffect, useRef } from "react";

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
  onClose: () => void;
  children: React.ReactNode;
}

// Scroll lock is in globals.css.
export default function DetailDrawer({ open, ariaLabel, accent, onClose, children }: DetailDrawerProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    else if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      aria-label={ariaLabel}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      className="fixed inset-0 m-0 h-full max-h-none w-full max-w-none bg-transparent p-0 text-warm-900 backdrop:bg-warm-900/30 backdrop:backdrop-blur-sm"
    >
      {open && (
        <div
          className={`absolute top-0 right-0 flex h-full w-full max-w-xl animate-[drawerIn_260ms_ease_forwards] flex-col overflow-y-auto border-l ${accentClass[accent].border} bg-warm-50 p-8 shadow-2xl sm:p-10`}
        >
          <button
            type="button"
            onClick={onClose}
            className={`mb-10 w-fit cursor-pointer rounded-full border px-4 py-2 text-sm tracking-tight transition focus-visible:outline-none focus-visible:ring-4 ${accentClass[accent].button}`}
          >
            Close
          </button>
          {children}
        </div>
      )}
    </dialog>
  );
}
