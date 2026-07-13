import { Slide } from "@revealjs/react";
import { palette } from "./palette";
import { SlideWrap } from "./slide-wrap";

export function ThanksSlide({
  color = palette.purple.text,
  variant = "default",
}: {
  color?: string;
  variant?: "default" | "decorated";
}) {
  return (
    <Slide className="h-full">
      <SlideWrap
        color={color}
        tag=""
        variant={variant}
        className="justify-center items-center flex flex-col"
      >
        <h1
          className="text-8xl! font-light tracking-tight relative z-10 text-gray-900"
          style={
            variant === "decorated"
              ? { textShadow: `0 0 30px ${color}20, 0 0 60px ${color}10` }
              : {}
          }
        >
          <span style={{ color }}>Thank</span> You!
        </h1>
      </SlideWrap>
    </Slide>
  );
}
