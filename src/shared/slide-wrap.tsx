import type { ReactNode } from "react";
import { palette } from "./palette";

export function SlideWrap({
  color = palette.purple.text,
  tag,
  className,
  variant = "default",
  children,
}: {
  color?: string;
  tag?: string;
  className?: string;
  variant?: "default" | "decorated";
  children: ReactNode;
}) {
  const isDecorated = variant === "decorated";

  return (
    <div className="size-full text-gray-900 flex flex-col justify-between items-center relative overflow-hidden py-4 gap-4">
      <div
        className="pointer-events-none h-px w-full relative z-10"
        style={{
          background: `linear-gradient(90deg, ${color}, transparent)`,
          ...(isDecorated
            ? { boxShadow: `0 0 8px ${color}30, 0 0 16px ${color}15` }
            : {}),
        }}
      />
      {isDecorated && (
        <>
          <div
            className="absolute top-5 left-5 w-1.5 h-1.5 rounded-full opacity-15"
            style={{ backgroundColor: color }}
          />
          <div
            className="absolute top-5 right-5 w-1.5 h-1.5 rounded-full opacity-15"
            style={{ backgroundColor: color }}
          />
          <div
            className="absolute bottom-20 left-5 w-1.5 h-1.5 rounded-full opacity-15"
            style={{ backgroundColor: color }}
          />
          <div
            className="absolute bottom-20 right-5 w-1.5 h-1.5 rounded-full opacity-15"
            style={{ backgroundColor: color }}
          />
        </>
      )}

      <div className="flex flex-col flex-1 w-full">
        <div
          className="mb-2 inline-block text-lg font-semibold uppercase tracking-[0.18em] relative z-10"
          style={{ color }}
        >
          {tag}
        </div>
        <div className={`flex-1 ${className} relative z-10`}>{children}</div>
      </div>
      <div
        className="pointer-events-none h-px w-full relative z-10"
        style={{
          background: `linear-gradient(90deg, ${color}, transparent)`,
          ...(isDecorated
            ? { boxShadow: `0 0 8px ${color}30, 0 0 16px ${color}15` }
            : {}),
        }}
      />
    </div>
  );
}
