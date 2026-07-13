import { Slide } from "@revealjs/react";
import {
  ArrowRight,
  BookOpen,
  GitMerge,
  HelpCircle,
  Lightbulb,
  RefreshCw,
  Scale,
  VolumeX,
  Zap,
} from "lucide-react";
import { palette } from "@/shared/palette";
import { PresentationDeck } from "@/shared/presentation-deck";

const P = palette;

function Rings({ color }: { color: string }) {
  return (
    <svg
      className="geo-rings"
      viewBox="0 0 320 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="160" cy="160" r="60" stroke={color} strokeWidth="2" />
      <circle cx="160" cy="160" r="100" stroke={color} strokeWidth="1.5" />
      <circle cx="160" cy="160" r="140" stroke={color} strokeWidth="1" />
    </svg>
  );
}

export function EnglishGrammarPresentation() {
  return (
    <PresentationDeck config={{ slideNumber: "c/t", transition: "slide" }}>
      {/* ═══════════════════ TITLE — dot grid ═══════════════════ */}
      <Slide background={P.white}>
        <div className="relative size-full">
          <div className="geo-dot-grid" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 py-12 text-center max-w-5xl mx-auto">
            <p
              className="mb-8 inline-block rounded-full px-4 py-1.5 text-sm font-semibold uppercase tracking-widest"
              style={{
                backgroundColor: P.purple.base,
                color: P.purple.text,
                border: `1px solid ${P.purple.border}`,
              }}
            >
              English Grammar Course
            </p>
            <h1 className="mb-4 text-6xl! font-normal leading-tight tracking-tight text-gray-900">
              Past Simple <span className="font-light text-gray-300">&</span>{" "}
              <span style={{ color: P.purple.text }}>Past Continuous</span>
            </h1>
            <h2 className="text-3xl">
              Mariel Jara - Gustavo Sequeiros - Christian Mestas
            </h2>
            <div
              className="my-6 mx-auto h-0.5 w-48 rounded-full"
              style={{
                background: `linear-gradient(90deg, ${P.purple.text}, ${P.teal.text})`,
              }}
            />
            <p className="mb-8 max-w-xl text-xl font-light text-gray-400">
              Mastering{" "}
              <strong className="font-semibold text-gray-700">was</strong> and{" "}
              <strong className="font-semibold text-gray-700">were</strong> for
              storytelling and past events
            </p>
            <div className="flex justify-center gap-8">
              <div
                className="flex items-center gap-3 rounded-xl px-4 py-2"
                style={{
                  backgroundColor: P.purple.base,
                  border: `1px solid ${P.purple.border}`,
                }}
              >
                <div
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: P.purple.text }}
                />
                <span
                  className="text-sm font-medium"
                  style={{ color: P.purple.text }}
                >
                  Past Simple
                </span>
              </div>
              <div
                className="flex items-center gap-3 rounded-xl px-4 py-2"
                style={{
                  backgroundColor: P.teal.base,
                  border: `1px solid ${P.teal.border}`,
                }}
              >
                <div
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: P.teal.text }}
                />
                <span
                  className="text-sm font-medium"
                  style={{ color: P.teal.text }}
                >
                  Past Continuous
                </span>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* ═══════════════════ AGENDA — square grid ═══════════════════ */}
      <Slide background={P.white}>
        <div className="relative size-full">
          <div className="geo-square-grid" />
          <div className="relative z-10 flex h-full flex-col justify-center px-12 py-10 text-left">
            <div className="mb-8">
              <p className="grammar-badge grammar-badge-purple mb-3">
                Overview
              </p>
              <h2 className="text-5xl! font-normal tracking-tight text-gray-900">
                What We'll Cover
              </h2>
            </div>
            <div className="grid grid-cols-4 gap-6">
              {[
                {
                  n: "1",
                  t: "Past Simple",
                  sub: "Was & Were",
                  icon: BookOpen,
                  color: P.purple.text,
                  bg: P.purple.base,
                },
                {
                  n: "2",
                  t: "Past Continuous",
                  sub: "Was/Were + V-ing",
                  icon: RefreshCw,
                  color: P.teal.text,
                  bg: P.teal.base,
                },
                {
                  n: "3",
                  t: "Key Differences",
                  sub: "When to use each",
                  icon: Scale,
                  color: P.amber.text,
                  bg: P.amber.base,
                },
                {
                  n: "4",
                  t: "Signal Words",
                  sub: "Clues for each tense",
                  icon: Lightbulb,
                  color: P.rose.text,
                  bg: P.rose.base,
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.n}
                    className="grammar-card flex h-full flex-col justify-between"
                  >
                    <div>
                      <div
                        className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
                        style={{
                          backgroundColor: item.bg,
                          color: item.color,
                        }}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="mb-2 text-xl! font-normal leading-snug text-gray-900">
                        {item.t}
                      </h3>
                      <p className="text-sm leading-normal text-gray-400">
                        {item.sub}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
                      <span className="text-xs uppercase tracking-widest text-gray-400">
                        Phase
                      </span>
                      <span
                        className="rounded px-2 py-0.5 text-sm font-semibold"
                        style={{
                          backgroundColor: item.bg,
                          color: item.color,
                        }}
                      >
                        0{item.n}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Slide>

      {/* ═══════════════════ PAST SIMPLE — OVERVIEW — rings ═══════════════════ */}
      <Slide background={P.white}>
        <div className="relative size-full">
          <Rings color={P.purple.border} />
          <div className="relative z-10 grid h-full grid-cols-12 items-center gap-8 px-12 py-10 text-left">
            <div className="col-span-7 flex flex-col justify-center">
              <p className="grammar-badge grammar-badge-purple mb-3 w-fit">
                Past Simple
              </p>
              <h2 className="mb-6 text-5xl! font-normal tracking-tight text-gray-900">
                Was & Were
              </h2>
              <div className="mb-8 space-y-4">
                {[
                  "Describes completed states or conditions in the past",
                  "Was → I, he, she, it (singular)",
                  "Were → you, we, they (plural)",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div
                      className="flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold"
                      style={{
                        backgroundColor: P.purple.base,
                        color: P.purple.text,
                        border: `1px solid ${P.purple.border}`,
                      }}
                    >
                      ✓
                    </div>
                    <span className="text-lg text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
              <div
                className="max-w-xl rounded-xl p-5"
                style={{
                  backgroundColor: P.purple.base,
                  border: `1px solid ${P.purple.border}`,
                }}
              >
                <p
                  className="mb-2 text-xs font-semibold uppercase tracking-wider"
                  style={{ color: P.purple.text }}
                >
                  Structure
                </p>
                <p className="font-mono text-xl text-gray-800">
                  Subject +{" "}
                  <span
                    className="font-bold underline decoration-2"
                    style={{
                      color: P.purple.text,
                      textDecorationColor: P.purple.border,
                    }}
                  >
                    was / were
                  </span>{" "}
                  + complement
                </p>
              </div>
            </div>
            <div className="col-span-5 flex h-full items-center py-4">
              <img
                src="/english-grammar/was-were.png"
                alt="Was and Were"
                className="h-4/5 w-full rounded-2xl object-cover shadow-sm"
                style={{ border: `1px solid ${P.gray.border}` }}
              />
            </div>
          </div>
        </div>
      </Slide>

      {/* ═══════════════════ PAST SIMPLE — AFFIRMATIVE — diagonal ↗ ═══════════════════ */}
      <Slide background={P.white}>
        <div className="relative size-full">
          <div className="geo-lines-d" />
          <div className="relative z-10 flex h-full flex-col justify-center px-12 py-8 text-left">
            <p className="grammar-badge grammar-badge-purple mb-3 w-fit">
              Past Simple
            </p>
            <h2 className="mb-6 text-5xl! font-normal tracking-tight text-gray-900">
              Affirmative Form
            </h2>
            <div className="grammar-card mb-6 py-4 text-center">
              <p className="font-mono text-2xl text-gray-800">
                Subject +{" "}
                <span
                  className="font-bold underline decoration-2"
                  style={{
                    color: P.purple.text,
                    textDecorationColor: P.purple.border,
                  }}
                >
                  was / were
                </span>{" "}
                + complement
              </p>
            </div>
            <div className="grammar-two-col">
              <div className="grammar-card hover:shadow-md">
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-lg"
                    style={{
                      backgroundColor: P.purple.base,
                      color: P.purple.text,
                      border: `1px solid ${P.purple.border}`,
                    }}
                  >
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl! font-normal text-gray-900">
                    Was (singular)
                  </h3>
                </div>
                <p className="mb-4 text-base text-gray-400">
                  I / He / She / It
                </p>
                <div className="space-y-2">
                  {[
                    ["I was tired yesterday.", "state"],
                    ["She was a teacher.", "identity"],
                    ["He was at home.", "location"],
                  ].map(([sentence, label]) => (
                    <div
                      key={sentence}
                      className="flex items-center justify-between rounded-xl bg-gray-50 p-2.5 text-base"
                      style={{ border: `1px solid ${P.gray.border}` }}
                    >
                      <span className="font-medium text-gray-700">
                        {sentence}
                      </span>
                      <span
                        className="rounded px-2 py-0.5 font-mono text-xs font-semibold"
                        style={{
                          backgroundColor: P.purple.base,
                          color: P.purple.text,
                        }}
                      >
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grammar-card hover:shadow-md">
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-lg"
                    style={{
                      backgroundColor: P.teal.base,
                      color: P.teal.text,
                      border: `1px solid ${P.teal.border}`,
                    }}
                  >
                    <RefreshCw className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl! font-normal text-gray-900">
                    Were (plural)
                  </h3>
                </div>
                <p className="mb-4 text-base text-gray-400">You / We / They</p>
                <div className="space-y-2">
                  {[
                    ["We were happy.", "state"],
                    ["They were students.", "identity"],
                    ["You were late.", "condition"],
                  ].map(([sentence, label]) => (
                    <div
                      key={sentence}
                      className="flex items-center justify-between rounded-xl bg-gray-50 p-2.5 text-base"
                      style={{ border: `1px solid ${P.gray.border}` }}
                    >
                      <span className="font-medium text-gray-700">
                        {sentence}
                      </span>
                      <span
                        className="rounded px-2 py-0.5 font-mono text-xs font-semibold"
                        style={{
                          backgroundColor: P.teal.base,
                          color: P.teal.text,
                        }}
                      >
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* ═══════════════════ PAST SIMPLE — NEGATIVE — diagonal ↘ ═══════════════════ */}
      <Slide background={P.white}>
        <div className="relative size-full">
          <div className="geo-lines-d2" />
          <div className="relative z-10 flex h-full flex-col justify-center px-12 py-10 text-left">
            <p className="grammar-badge grammar-badge-purple mb-3 w-fit">
              Past Simple
            </p>
            <h2 className="mb-6 text-5xl! font-normal tracking-tight text-gray-900">
              Negative & Questions
            </h2>
            <div className="grammar-two-col gap-8">
              <div className="grammar-card hover:shadow-md">
                <h3
                  className="mb-4 flex items-center gap-2 text-2xl! font-normal"
                  style={{ color: P.purple.text }}
                >
                  <VolumeX className="h-6 w-6" /> Negative
                </h3>
                <div
                  className="mb-6 rounded-xl p-4 text-center"
                  style={{
                    backgroundColor: P.purple.base,
                    border: `1px solid ${P.purple.border}`,
                  }}
                >
                  <p className="font-mono text-xl text-gray-800">
                    S +{" "}
                    <span
                      className="font-bold"
                      style={{ color: P.purple.text }}
                    >
                      was not (wasn't)
                    </span>{" "}
                    /{" "}
                    <span
                      className="font-bold"
                      style={{ color: P.purple.text }}
                    >
                      were not (weren't)
                    </span>
                  </p>
                </div>
                <div className="space-y-3">
                  <p
                    className="py-1 pl-4 text-lg text-gray-600"
                    style={{ borderLeft: `2px solid ${P.purple.border}` }}
                  >
                    I{" "}
                    <span
                      className="rounded px-1 font-bold font-mono"
                      style={{
                        backgroundColor: P.purple.base,
                        color: P.purple.text,
                        border: `1px solid ${P.purple.border}`,
                      }}
                    >
                      wasn't
                    </span>{" "}
                    at school yesterday.
                  </p>
                  <p
                    className="py-1 pl-4 text-lg text-gray-600"
                    style={{ borderLeft: `2px solid ${P.purple.border}` }}
                  >
                    They{" "}
                    <span
                      className="rounded px-1 font-bold font-mono"
                      style={{
                        backgroundColor: P.purple.base,
                        color: P.purple.text,
                        border: `1px solid ${P.purple.border}`,
                      }}
                    >
                      weren't
                    </span>{" "}
                    ready.
                  </p>
                </div>
              </div>
              <div className="grammar-card hover:shadow-md">
                <h3
                  className="mb-4 flex items-center gap-2 text-2xl! font-normal"
                  style={{ color: P.purple.text }}
                >
                  <HelpCircle className="h-6 w-6" /> Questions
                </h3>
                <div
                  className="mb-6 rounded-xl p-4 text-center"
                  style={{
                    backgroundColor: P.purple.base,
                    border: `1px solid ${P.purple.border}`,
                  }}
                >
                  <p className="font-mono text-xl text-gray-800">
                    <span
                      className="font-bold"
                      style={{ color: P.purple.text }}
                    >
                      Was / Were
                    </span>{" "}
                    + S + complement?
                  </p>
                </div>
                <div className="space-y-3">
                  <p
                    className="py-1 pl-4 text-lg text-gray-600"
                    style={{ borderLeft: `2px solid ${P.purple.border}` }}
                  >
                    <span
                      className="rounded px-1 font-bold font-mono"
                      style={{
                        backgroundColor: P.purple.base,
                        color: P.purple.text,
                        border: `1px solid ${P.purple.border}`,
                      }}
                    >
                      Was
                    </span>{" "}
                    she at the party last night?
                  </p>
                  <p
                    className="py-1 pl-4 text-lg text-gray-600"
                    style={{ borderLeft: `2px solid ${P.purple.border}` }}
                  >
                    <span
                      className="rounded px-1 font-bold font-mono"
                      style={{
                        backgroundColor: P.purple.base,
                        color: P.purple.text,
                        border: `1px solid ${P.purple.border}`,
                      }}
                    >
                      Were
                    </span>{" "}
                    you happy with the result?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* ═══════════════════ PAST SIMPLE — EXAMPLES — horizontal lines ═══════════════════ */}
      <Slide background={P.white}>
        <div className="relative size-full">
          <div className="geo-lines-h" />
          <div className="relative z-10 grid h-full grid-cols-12 items-center gap-8 px-12 py-10 text-left">
            <div className="col-span-7 flex flex-col justify-center">
              <p className="grammar-badge grammar-badge-purple mb-3 w-fit">
                Past Simple
              </p>
              <h2 className="mb-6 text-5xl! font-normal tracking-tight text-gray-900">
                Examples in Context
              </h2>
              <div className="space-y-3">
                {[
                  {
                    sentence: "I was nervous before the exam.",
                    note: "feeling",
                  },
                  {
                    sentence: "She was a doctor in 2019.",
                    note: "past identity",
                  },
                  { sentence: "We were at the concert.", note: "location" },
                  { sentence: "They weren't at home.", note: "negative" },
                  { sentence: "Was he your teacher?", note: "question" },
                ].map((item) => (
                  <div
                    key={item.sentence}
                    className="grammar-example flex items-center justify-between rounded-xl px-4 py-3"
                  >
                    <span className="text-lg font-medium text-gray-800">
                      {item.sentence}
                    </span>
                    <span
                      className="whitespace-nowrap rounded px-2 py-0.5 font-mono text-sm"
                      style={{
                        backgroundColor: P.purple.base,
                        color: P.purple.text,
                        border: `1px solid ${P.purple.border}`,
                      }}
                    >
                      {item.note}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-5 flex h-full flex-col items-center justify-center gap-4 py-4">
              <img
                src="/english-grammar/use-cases-past-simple.png"
                alt="Use cases Past Simple"
                className="w-xs rounded-2xl object-cover shadow-sm"
                style={{ border: `1px solid ${P.gray.border}` }}
              />
              <img
                src="/english-grammar/uses-cases-2-past-simple.png"
                alt="More use cases Past Simple"
                className="w-sm rounded-2xl object-cover shadow-sm"
                style={{ border: `1px solid ${P.gray.border}` }}
              />
            </div>
          </div>
        </div>
      </Slide>

      {/* ═══════════════════ PAST CONTINUOUS — OVERVIEW — rings teal ═══════════════════ */}
      <Slide background={P.white}>
        <div className="relative size-full">
          <Rings color={P.teal.border} />
          <div className="relative z-10 grid h-full grid-cols-12 items-center gap-8 px-12 py-10 text-left">
            <div className="col-span-7 flex flex-col justify-center">
              <p className="grammar-badge grammar-badge-teal mb-3 w-fit">
                Past Continuous
              </p>
              <h2 className="mb-6 text-5xl! font-normal tracking-tight text-gray-900">
                What is Past Continuous?
              </h2>
              <div className="mb-8 space-y-4">
                {[
                  "Ongoing actions at a specific moment in the past",
                  "Background situations in narratives",
                  "Actions interrupted by another event",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div
                      className="flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold"
                      style={{
                        backgroundColor: P.teal.base,
                        color: P.teal.text,
                        border: `1px solid ${P.teal.border}`,
                      }}
                    >
                      ✓
                    </div>
                    <span className="text-lg text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
              <div
                className="max-w-xl rounded-xl p-5"
                style={{
                  backgroundColor: P.teal.base,
                  border: `1px solid ${P.teal.border}`,
                }}
              >
                <p
                  className="mb-2 text-xs font-semibold uppercase tracking-wider"
                  style={{ color: P.teal.text }}
                >
                  Structure
                </p>
                <p className="font-mono text-xl text-gray-800">
                  Subject +{" "}
                  <span
                    className="font-bold underline decoration-2"
                    style={{
                      color: P.teal.text,
                      textDecorationColor: P.teal.border,
                    }}
                  >
                    was/were + V-ing
                  </span>
                </p>
              </div>
            </div>
            <div className="col-span-5 flex h-full items-center py-4">
              <img
                src="/english-grammar/continuous.png"
                alt="Past Continuous"
                className="h-4/5 w-full rounded-2xl object-cover shadow-sm"
                style={{ border: `1px solid ${P.gray.border}` }}
              />
            </div>
          </div>
        </div>
      </Slide>

      {/* ═══════════════════ PAST CONTINUOUS — FORMATION — vertical lines ═══════════════════ */}
      <Slide background={P.white}>
        <div className="relative size-full">
          <div className="geo-lines-v" />
          <div className="relative z-10 flex h-full flex-col justify-center px-12 py-8 text-left">
            <p className="grammar-badge grammar-badge-teal mb-3 w-fit">
              Past Continuous
            </p>
            <h2 className="mb-6 text-5xl! font-normal tracking-tight text-gray-900">
              Formation
            </h2>
            <div className="grammar-card mb-6 py-4 text-center">
              <p className="font-mono text-2xl text-gray-800">
                Subject +{" "}
                <span
                  className="font-bold underline decoration-2"
                  style={{
                    color: P.teal.text,
                    textDecorationColor: P.teal.border,
                  }}
                >
                  was/were + V-ing
                </span>
              </p>
            </div>
            <div className="grammar-two-col gap-6">
              <div
                className="grammar-card-accent hover:shadow-md"
                style={{
                  backgroundColor: P.teal.base,
                  border: `1px solid ${P.teal.border}`,
                }}
              >
                <h3 className="mb-4 text-2xl! font-bold text-gray-900">
                  I / He / She / It
                </h3>
                <div
                  className="mb-4 rounded-xl bg-white p-4 text-center"
                  style={{ border: `1px solid ${P.teal.border}` }}
                >
                  <p
                    className="font-mono text-xl font-bold"
                    style={{ color: P.teal.text }}
                  >
                    was + V-ing
                  </p>
                </div>
                <p
                  className="py-1 pl-4 text-lg leading-relaxed text-gray-600"
                  style={{ borderLeft: `2px solid ${P.teal.border}` }}
                >
                  I{" "}
                  <span
                    className="rounded px-1 font-bold font-mono"
                    style={{
                      backgroundColor: `${P.teal.base}99`,
                      color: P.teal.text,
                    }}
                  >
                    was reading
                  </span>{" "}
                  at 8 PM.
                </p>
              </div>
              <div
                className="grammar-card-accent hover:shadow-md"
                style={{
                  backgroundColor: P.teal.base,
                  border: `1px solid ${P.teal.border}`,
                }}
              >
                <h3 className="mb-4 text-2xl! font-bold text-gray-900">
                  You / We / They
                </h3>
                <div
                  className="mb-4 rounded-xl bg-white p-4 text-center"
                  style={{ border: `1px solid ${P.teal.border}` }}
                >
                  <p
                    className="font-mono text-xl font-bold"
                    style={{ color: P.teal.text }}
                  >
                    were + V-ing
                  </p>
                </div>
                <p
                  className="py-1 pl-4 text-lg leading-relaxed text-gray-600"
                  style={{ borderLeft: `2px solid ${P.teal.border}` }}
                >
                  They{" "}
                  <span
                    className="rounded px-1 font-bold font-mono"
                    style={{
                      backgroundColor: `${P.teal.base}99`,
                      color: P.teal.text,
                    }}
                  >
                    were playing
                  </span>{" "}
                  football.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* ═══════════════════ PAST CONTINUOUS — NEGATIVE — crosshatch ═══════════════════ */}
      <Slide background={P.white}>
        <div className="relative size-full">
          <div className="geo-crosshatch" />
          <div className="relative z-10 flex h-full flex-col justify-center px-12 py-10 text-left">
            <p className="grammar-badge grammar-badge-teal mb-3 w-fit">
              Past Continuous
            </p>
            <h2 className="mb-6 text-5xl! font-normal tracking-tight text-gray-900">
              Negative & Questions
            </h2>
            <div className="grammar-two-col gap-8">
              <div className="grammar-card hover:shadow-md">
                <h3
                  className="mb-4 flex items-center gap-2 text-2xl! font-normal"
                  style={{ color: P.teal.text }}
                >
                  <VolumeX className="h-6 w-6" /> Negative
                </h3>
                <div
                  className="mb-6 rounded-xl p-4 text-center"
                  style={{
                    backgroundColor: P.teal.base,
                    border: `1px solid ${P.teal.border}`,
                  }}
                >
                  <p className="font-mono text-xl text-gray-800">
                    S +{" "}
                    <span className="font-bold" style={{ color: P.teal.text }}>
                      wasn't / weren't
                    </span>{" "}
                    + V-ing
                  </p>
                </div>
                <div className="space-y-3">
                  <p
                    className="py-1 pl-4 text-lg text-gray-600"
                    style={{ borderLeft: `2px solid ${P.teal.border}` }}
                  >
                    I{" "}
                    <span
                      className="rounded px-1 font-bold font-mono"
                      style={{
                        backgroundColor: P.teal.base,
                        color: P.teal.text,
                        border: `1px solid ${P.teal.border}`,
                      }}
                    >
                      wasn't sleeping
                    </span>{" "}
                    at 10 PM.
                  </p>
                  <p
                    className="py-1 pl-4 text-lg text-gray-600"
                    style={{ borderLeft: `2px solid ${P.teal.border}` }}
                  >
                    They{" "}
                    <span
                      className="rounded px-1 font-bold font-mono"
                      style={{
                        backgroundColor: P.teal.base,
                        color: P.teal.text,
                        border: `1px solid ${P.teal.border}`,
                      }}
                    >
                      weren't watching
                    </span>{" "}
                    TV.
                  </p>
                </div>
              </div>
              <div className="grammar-card hover:shadow-md">
                <h3
                  className="mb-4 flex items-center gap-2 text-2xl! font-normal"
                  style={{ color: P.teal.text }}
                >
                  <HelpCircle className="h-6 w-6" /> Questions
                </h3>
                <div
                  className="mb-6 rounded-xl p-4 text-center"
                  style={{
                    backgroundColor: P.teal.base,
                    border: `1px solid ${P.teal.border}`,
                  }}
                >
                  <p className="font-mono text-xl text-gray-800">
                    <span className="font-bold" style={{ color: P.teal.text }}>
                      Was / Were
                    </span>{" "}
                    + S + V-ing?
                  </p>
                </div>
                <div className="space-y-3">
                  <p
                    className="py-1 pl-4 text-lg text-gray-600"
                    style={{ borderLeft: `2px solid ${P.teal.border}` }}
                  >
                    <span
                      className="rounded px-1 font-bold font-mono"
                      style={{
                        backgroundColor: P.teal.base,
                        color: P.teal.text,
                        border: `1px solid ${P.teal.border}`,
                      }}
                    >
                      Were
                    </span>{" "}
                    you working yesterday?
                  </p>
                  <p
                    className="py-1 pl-4 text-lg text-gray-600"
                    style={{ borderLeft: `2px solid ${P.teal.border}` }}
                  >
                    <span
                      className="rounded px-1 font-bold font-mono"
                      style={{
                        backgroundColor: P.teal.base,
                        color: P.teal.text,
                        border: `1px solid ${P.teal.border}`,
                      }}
                    >
                      Was
                    </span>{" "}
                    he running in the park?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* ═══════════════════ PAST CONTINUOUS — EXAMPLES — dot grid teal ═══════════════════ */}
      <Slide background={P.white}>
        <div className="relative size-full">
          <div
            className="geo-dot-grid"
            style={{
              backgroundImage: `radial-gradient(circle, ${P.teal.border} 1.2px, transparent 1.2px)`,
            }}
          />
          <div className="relative z-10 grid h-full grid-cols-12 items-center gap-8 px-12 py-10 text-left">
            <div className="col-span-7 flex flex-col justify-center">
              <p className="grammar-badge grammar-badge-teal mb-3 w-fit">
                Past Continuous
              </p>
              <h2 className="mb-6 text-5xl! font-normal tracking-tight text-gray-900">
                Examples in Context
              </h2>
              <div className="space-y-3">
                {[
                  {
                    sentence: "I was reading at 8 PM last night.",
                    note: "ongoing action",
                  },
                  {
                    sentence: "She was cooking when I arrived.",
                    note: "interrupted",
                  },
                  {
                    sentence: "They were playing soccer all afternoon.",
                    note: "extended action",
                  },
                  {
                    sentence: "The sun was shining and birds were singing.",
                    note: "background detail",
                  },
                  {
                    sentence: "We were studying while they were sleeping.",
                    note: "parallel actions",
                  },
                ].map((item) => (
                  <div
                    key={item.sentence}
                    className="grammar-example flex items-center justify-between rounded-xl px-4 py-3"
                    style={{ borderLeftColor: P.teal.text }}
                  >
                    <span className="text-lg font-medium text-gray-800">
                      {item.sentence}
                    </span>
                    <span
                      className="whitespace-nowrap rounded px-2 py-0.5 font-mono text-sm"
                      style={{
                        backgroundColor: P.teal.base,
                        color: P.teal.text,
                        border: `1px solid ${P.teal.border}`,
                      }}
                    >
                      {item.note}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-5 flex h-full flex-col items-center justify-center gap-4 py-4">
              <img
                src="/english-grammar/uses-cases-past-continuous.png"
                alt="Use cases Past Continuous"
                className="w-full rounded-2xl object-cover shadow-sm"
                style={{ border: `1px solid ${P.gray.border}` }}
              />
            </div>
          </div>
        </div>
      </Slide>

      {/* ═══════════════════ KEY DIFFERENCES — square grid ═══════════════════ */}
      <Slide background={P.white}>
        <div className="relative size-full">
          <div className="geo-square-grid" />
          <div className="relative z-10 flex h-full flex-col justify-center px-12 py-8 text-left">
            <p className="grammar-badge grammar-badge-amber mb-3 w-fit">
              Comparison
            </p>
            <h2 className="mb-6 text-5xl! font-normal tracking-tight text-gray-900">
              Key Differences
            </h2>
            <div className="mb-6 flex justify-center">
              <div
                className="flex items-center gap-6 rounded-2xl bg-gray-50 p-4"
                style={{ border: `1px solid ${P.gray.border}` }}
              >
                <div
                  className="rounded-xl px-6 py-3 text-center"
                  style={{
                    backgroundColor: P.purple.base,
                    border: `1px solid ${P.purple.border}`,
                  }}
                >
                  <p
                    className="font-mono text-2xl font-bold"
                    style={{ color: P.purple.text }}
                  >
                    was/were
                  </p>
                  <p
                    className="mt-1 text-xs font-semibold uppercase tracking-wider"
                    style={{ color: P.purple.text }}
                  >
                    completed
                  </p>
                </div>
                <ArrowRight className="h-8 w-8 text-gray-300" />
                <div
                  className="rounded-xl px-6 py-3 text-center"
                  style={{
                    backgroundColor: P.teal.base,
                    border: `1px solid ${P.teal.border}`,
                  }}
                >
                  <p
                    className="font-mono text-2xl font-bold"
                    style={{ color: P.teal.text }}
                  >
                    was/were + V-ing
                  </p>
                  <p
                    className="mt-1 text-xs font-semibold uppercase tracking-wider"
                    style={{ color: P.teal.text }}
                  >
                    in progress
                  </p>
                </div>
              </div>
            </div>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left text-sm! font-semibold uppercase tracking-wider text-gray-400">
                    Aspect
                  </th>
                  <th
                    className="text-left font-bold"
                    style={{ color: P.purple.text }}
                  >
                    Past Simple
                  </th>
                  <th
                    className="text-left font-bold"
                    style={{ color: P.teal.text }}
                  >
                    Past Continuous
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Focus", "Completed state", "Action in progress"],
                  ["Duration", "Finished", "Ongoing / unfinished"],
                  [
                    "Time ref.",
                    "Specific point (yesterday, in 2020)",
                    "Period / moment in past",
                  ],
                  [
                    "Example",
                    <>
                      I{" "}
                      <code
                        style={{
                          backgroundColor: P.purple.base,
                          color: P.purple.text,
                          border: `1px solid ${P.purple.border}`,
                        }}
                      >
                        was
                      </code>{" "}
                      at home.
                    </>,
                    <>
                      I{" "}
                      <code
                        style={{
                          backgroundColor: P.teal.base,
                          color: P.teal.text,
                          border: `1px solid ${P.teal.border}`,
                        }}
                      >
                        was reading
                      </code>{" "}
                      when you called.
                    </>,
                  ],
                ].map(([aspect, past, continuous]) => (
                  <tr key={String(aspect)}>
                    <td className="text-base font-semibold text-gray-400">
                      {aspect}
                    </td>
                    <td className="text-base text-gray-600">{past}</td>
                    <td className="text-base text-gray-600">{continuous}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Slide>

      {/* ═══════════════════ COMBINED USAGE — diagonal ↗ ═══════════════════ */}
      <Slide background={P.white}>
        <div className="relative size-full">
          <div className="geo-lines-d" />
          <div className="relative z-10 flex h-full flex-col justify-center px-12 py-8 text-left">
            <p className="grammar-badge grammar-badge-amber mb-3 w-fit">
              Advanced
            </p>
            <h2 className="mb-6 text-5xl! font-normal tracking-tight text-gray-900">
              Using Both Together
            </h2>
            <div className="space-y-6">
              <div className="grammar-card hover:shadow-md">
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-lg"
                    style={{
                      backgroundColor: P.amber.base,
                      color: P.amber.text,
                      border: `1px solid ${P.amber.border}`,
                    }}
                  >
                    <Zap className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl! font-bold text-gray-900">
                    Interrupted Action
                  </h3>
                </div>
                <div
                  className="mb-4 max-w-2xl rounded-xl bg-gray-50 p-3.5 text-center"
                  style={{ border: `1px solid ${P.gray.border}` }}
                >
                  <p className="font-mono text-base text-gray-500">
                    Past Continuous +{" "}
                    <span className="font-bold" style={{ color: P.amber.text }}>
                      when
                    </span>{" "}
                    + Past Simple
                  </p>
                </div>
                <div className="space-y-3">
                  <p
                    className="py-1 pl-4 text-lg text-gray-600"
                    style={{ borderLeft: `2px solid ${P.teal.border}` }}
                  >
                    I{" "}
                    <span
                      className="rounded px-1 font-bold font-mono"
                      style={{
                        backgroundColor: P.teal.base,
                        color: P.teal.text,
                        border: `1px solid ${P.teal.border}`,
                      }}
                    >
                      was walking
                    </span>{" "}
                    home{" "}
                    <span className="font-bold" style={{ color: P.amber.text }}>
                      when
                    </span>{" "}
                    it{" "}
                    <span
                      className="rounded px-1 font-bold font-mono"
                      style={{
                        backgroundColor: P.purple.base,
                        color: P.purple.text,
                        border: `1px solid ${P.purple.border}`,
                      }}
                    >
                      started
                    </span>{" "}
                    to rain.
                  </p>
                  <p
                    className="py-1 pl-4 text-lg text-gray-600"
                    style={{ borderLeft: `2px solid ${P.teal.border}` }}
                  >
                    She{" "}
                    <span
                      className="rounded px-1 font-bold font-mono"
                      style={{
                        backgroundColor: P.teal.base,
                        color: P.teal.text,
                        border: `1px solid ${P.teal.border}`,
                      }}
                    >
                      was cooking
                    </span>{" "}
                    <span className="font-bold" style={{ color: P.amber.text }}>
                      when
                    </span>{" "}
                    the phone{" "}
                    <span
                      className="rounded px-1 font-bold font-mono"
                      style={{
                        backgroundColor: P.purple.base,
                        color: P.purple.text,
                        border: `1px solid ${P.purple.border}`,
                      }}
                    >
                      rang
                    </span>
                    .
                  </p>
                </div>
              </div>
              <div className="grammar-card hover:shadow-md">
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-lg"
                    style={{
                      backgroundColor: P.purple.base,
                      color: P.purple.text,
                      border: `1px solid ${P.purple.border}`,
                    }}
                  >
                    <RefreshCw className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl! font-bold text-gray-900">
                    Parallel Actions
                  </h3>
                </div>
                <div
                  className="mb-4 max-w-2xl rounded-xl bg-gray-50 p-3.5 text-center"
                  style={{ border: `1px solid ${P.gray.border}` }}
                >
                  <p className="font-mono text-base text-gray-500">
                    <span className="font-bold" style={{ color: P.amber.text }}>
                      While
                    </span>{" "}
                    + Past Continuous, Past Continuous
                  </p>
                </div>
                <p
                  className="py-1 pl-4 text-lg text-gray-600"
                  style={{ borderLeft: `2px solid ${P.teal.border}` }}
                >
                  <span className="font-bold" style={{ color: P.amber.text }}>
                    While
                  </span>{" "}
                  I{" "}
                  <span
                    className="rounded px-1 font-bold font-mono"
                    style={{
                      backgroundColor: P.teal.base,
                      color: P.teal.text,
                      border: `1px solid ${P.teal.border}`,
                    }}
                  >
                    was studying
                  </span>
                  , my brother{" "}
                  <span
                    className="rounded px-1 font-bold font-mono"
                    style={{
                      backgroundColor: P.teal.base,
                      color: P.teal.text,
                      border: `1px solid ${P.teal.border}`,
                    }}
                  >
                    was playing
                  </span>{" "}
                  games.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* ═══════════════════ SIGNAL WORDS — horizontal lines ═══════════════════ */}
      <Slide background={P.white}>
        <div className="relative size-full">
          <div className="geo-lines-h" />
          <div className="relative z-10 flex h-full flex-col justify-center px-12 py-10 text-left">
            <div className="mb-8 flex items-center gap-4">
              <div
                className="flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm"
                style={{
                  backgroundColor: P.rose.base,
                  color: P.rose.text,
                  border: `1px solid ${P.rose.border}`,
                }}
              >
                <Lightbulb className="h-7 w-7" />
              </div>
              <div>
                <p className="grammar-badge grammar-badge-amber mb-1">
                  Indicators
                </p>
                <h2 className="text-4xl! font-normal tracking-tight text-gray-900">
                  Signal Words
                </h2>
              </div>
            </div>
            <div className="grammar-two-col gap-8">
              <div className="grammar-card hover:shadow-md">
                <h3
                  className="mb-6 flex items-center gap-2 text-2xl! font-normal"
                  style={{ color: P.purple.text }}
                >
                  <BookOpen className="h-5 w-5" /> Past Simple Clues
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    "yesterday",
                    "last week / month / year",
                    "ago (e.g. 3 days ago)",
                    "in 2020 / in the 19th century",
                    "when I was a child",
                  ].map((word) => (
                    <div
                      key={word}
                      className="flex items-center gap-3 rounded-xl bg-gray-50 p-3"
                      style={{ border: `1px solid ${P.gray.border}` }}
                    >
                      <span
                        className="h-2.5 w-2.5 shrink-0 rounded-full"
                        style={{ backgroundColor: P.purple.text }}
                      />
                      <span className="text-lg font-medium text-gray-700">
                        {word}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grammar-card hover:shadow-md">
                <h3
                  className="mb-6 flex items-center gap-2 text-2xl! font-normal"
                  style={{ color: P.teal.text }}
                >
                  <RefreshCw className="h-5 w-5" /> Past Continuous Clues
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    "while / as",
                    "when (introducing an interruption)",
                    "at that moment / back then",
                    "at 8 PM yesterday",
                    "all day long / all morning",
                  ].map((word) => (
                    <div
                      key={word}
                      className="flex items-center gap-3 rounded-xl bg-gray-50 p-3"
                      style={{ border: `1px solid ${P.gray.border}` }}
                    >
                      <span
                        className="h-2.5 w-2.5 shrink-0 rounded-full"
                        style={{ backgroundColor: P.teal.text }}
                      />
                      <span className="text-lg font-medium text-gray-700">
                        {word}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* ═══════════════════ SUMMARY — crosshatch ═══════════════════ */}
      <Slide background={P.white}>
        <div className="relative size-full">
          <div className="geo-crosshatch" />
          <div className="relative z-10 flex h-full flex-col justify-center px-12 py-10 text-left">
            <p className="grammar-badge grammar-badge-purple mb-3 w-fit">
              Summary
            </p>
            <h2 className="mb-8 text-5xl! font-normal tracking-tight text-gray-900">
              Key Takeaways
            </h2>
            <div className="grammar-three-col gap-6">
              <div className="grammar-card flex flex-col items-center text-center hover:shadow-md">
                <div
                  className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm"
                  style={{
                    backgroundColor: P.purple.base,
                    color: P.purple.text,
                    border: `1px solid ${P.purple.border}`,
                  }}
                >
                  <BookOpen className="h-6 w-6" />
                </div>
                <div className="grammar-number grammar-number-purple mb-4">
                  1
                </div>
                <h3 className="mb-2 text-2xl! font-normal text-gray-900">
                  Past Simple
                </h3>
                <p className="text-base leading-relaxed text-gray-500">
                  Use <strong className="text-gray-700">was</strong> /{" "}
                  <strong className="text-gray-700">were</strong> for completed
                  states or conditions in the past.
                </p>
              </div>
              <div className="grammar-card flex flex-col items-center text-center hover:shadow-md">
                <div
                  className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm"
                  style={{
                    backgroundColor: P.teal.base,
                    color: P.teal.text,
                    border: `1px solid ${P.teal.border}`,
                  }}
                >
                  <RefreshCw className="h-6 w-6" />
                </div>
                <div className="grammar-number grammar-number-teal mb-4">2</div>
                <h3 className="mb-2 text-2xl! font-normal text-gray-900">
                  Past Continuous
                </h3>
                <p className="text-base leading-relaxed text-gray-500">
                  Use{" "}
                  <strong className="text-gray-700">was/were + V-ing</strong>{" "}
                  for ongoing actions or background situations.
                </p>
              </div>
              <div className="grammar-card flex flex-col items-center text-center hover:shadow-md">
                <div
                  className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm"
                  style={{
                    backgroundColor: P.amber.base,
                    color: P.amber.text,
                    border: `1px solid ${P.amber.border}`,
                  }}
                >
                  <GitMerge className="h-6 w-6" />
                </div>
                <div className="grammar-number grammar-number-amber mb-4">
                  3
                </div>
                <h3 className="mb-2 text-2xl! font-normal text-gray-900">
                  Combined
                </h3>
                <p className="text-base leading-relaxed text-gray-500">
                  Longer background action in continuous, sudden interruption in
                  simple.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* ═══════════════════ LET'S PRACTICE — diagonal ↗ ═══════════════════ */}
      <Slide background={P.white}>
        <div className="relative size-full">
          <div className="geo-lines-d" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 py-12 text-center">
            <p
              className="mb-6 inline-block rounded-full px-4 py-1.5 text-sm font-semibold uppercase tracking-widest"
              style={{
                backgroundColor: P.purple.base,
                color: P.purple.text,
                border: `1px solid ${P.purple.border}`,
              }}
            >
              Ready?
            </p>
            <h1 className="mb-6 text-7xl! font-normal tracking-tight text-gray-900">
              Let's Go <span style={{ color: P.purple.text }}>Practice!</span>
            </h1>
            <div
              className="my-6 mx-auto h-0.5 w-48 rounded-full"
              style={{
                background: `linear-gradient(90deg, ${P.purple.text}, ${P.teal.text})`,
              }}
            />
            <p className="text-2xl font-light text-gray-400 max-w-lg">
              "The more you practice, the more confident you become."
            </p>
          </div>
        </div>
      </Slide>

      {/* ═══════════════════ THANKS — dot grid ═══════════════════ */}
      <Slide background={P.white}>
        <div className="relative size-full">
          <div
            className="geo-dot-grid"
            style={{
              opacity: 0.1,
              backgroundImage: `radial-gradient(circle, ${P.purple.text} 1.2px, transparent 1.2px)`,
            }}
          />
          <div className="relative z-10 flex h-full max-w-5xl flex-col items-center justify-center px-8 py-12 text-center mx-auto">
            <h1 className="mb-4 text-7xl! font-normal tracking-tight text-gray-900">
              <span style={{ color: P.purple.text }}>Thank</span> You!
            </h1>
            <div
              className="my-6 mx-auto h-0.5 w-48 rounded-full"
              style={{
                background: `linear-gradient(90deg, ${P.purple.text}, ${P.teal.text})`,
              }}
            />
            <p className="mb-4 text-2xl font-light text-gray-400">
              Are there any questions?
            </p>
            <div className="mt-4 flex gap-4">
              <span
                className="rounded-full px-3 py-1 text-xs uppercase tracking-widest text-gray-400"
                style={{
                  backgroundColor: P.gray.base,
                  border: `1px solid ${P.gray.border}`,
                }}
              >
                Sistemas Distribuidos
              </span>
              <span
                className="rounded-full px-3 py-1 text-xs uppercase tracking-widest text-gray-400"
                style={{
                  backgroundColor: P.gray.base,
                  border: `1px solid ${P.gray.border}`,
                }}
              >
                UNSA 2026A
              </span>
            </div>
          </div>
        </div>
      </Slide>
    </PresentationDeck>
  );
}
