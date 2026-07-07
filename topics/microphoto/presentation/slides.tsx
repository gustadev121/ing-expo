import { PresentationDeck } from "@/shared/presentation-deck";
import { SlideWrap } from "@/shared/slide-wrap";

export function MicrophotoPresentation() {
  return (
    <PresentationDeck config={{ slideNumber: "c/t", transition: "slide" }}>
      <SlideWrap>
        <h1>Microphoto</h1>
        <p>Exploring the world of microphotography</p>
      </SlideWrap>
      <SlideWrap>
        <h2>What is Microphotography?</h2>
        <p>
          Microphotography is the art and science of capturing images of small
          objects or details that are not visible to the naked eye.
        </p>
      </SlideWrap>
      <SlideWrap>
        <h2>Applications</h2>
        <ul>
          <li>Scientific research</li>
          <li>Medical imaging</li>
          <li>Art and design</li>
          <li>Forensics</li>
        </ul>
      </SlideWrap>
      <SlideWrap>
        <h2>Techniques</h2>
        <ul>
          <li>Light microscopy</li>
          <li>Electron microscopy</li>
          <li>Confocal microscopy</li>
          <li>Fluorescence microscopy</li>
        </ul>
      </SlideWrap>
    </PresentationDeck>
  );
}
