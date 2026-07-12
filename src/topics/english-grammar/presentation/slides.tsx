import { Fragment, Slide } from "@revealjs/react";
import {
  ArrowRight,
  BookOpen,
  Check,
  FileText,
  GitMerge,
  HelpCircle,
  Lightbulb,
  PenTool,
  RefreshCw,
  Scale,
  VolumeX,
  Zap,
} from "lucide-react";
import { PresentationDeck } from "@/shared/presentation-deck";

export function EnglishGrammarPresentation() {
  return (
    <PresentationDeck config={{ slideNumber: "c/t", transition: "slide" }}>
      {/* ═══════════════════ TITLE SLIDE ═══════════════════ */}
      <Slide
        backgroundImage="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1920&q=80"
        backgroundSize="cover"
        backgroundPosition="center"
        background="#000"
        backgroundOpacity={0.25}
      >
        <div className="flex flex-col items-center justify-center text-center h-full w-full max-w-5xl mx-auto px-8 py-12">
          <p className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white/80 text-sm font-semibold uppercase tracking-widest mb-8 border border-white/10 shadow-lg">
            English Grammar Course
          </p>
          <h1 className="text-6xl! font-bold leading-tight mb-4 text-white tracking-tight">
            Past Simple <span className="text-white/40 font-light">&</span>{" "}
            <span className="text-purple-400">Past Continuous</span>
          </h1>
          <div className="w-48 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-teal-500 mx-auto my-6 rounded-full" />
          <p className="text-xl text-white/60 font-light max-w-xl mx-auto mb-8">
            Mastering two essential tenses for storytelling and past events
          </p>
          <div className="flex gap-8 justify-center">
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
              <div className="w-3 h-3 rounded-full bg-purple-400 animate-pulse" />
              <span className="text-sm font-medium text-white/80">
                Past Simple
              </span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
              <div className="w-3 h-3 rounded-full bg-teal-400 animate-pulse" />
              <span className="text-sm font-medium text-white/80">
                Past Continuous
              </span>
            </div>
          </div>
        </div>
      </Slide>

      {/* ═══════════════════ AGENDA ═══════════════════ */}
      <Slide background="linear-gradient(135deg, #09090b 0%, #111827 50%, #1e1b4b 100%)">
        <div className="flex flex-col justify-center h-full w-full px-12 py-10 text-left">
          <div className="mb-8">
            <p className="grammar-badge grammar-badge-purple mb-3">Overview</p>
            <h2 className="text-5xl! font-semibold text-white tracking-tight">
              What We'll Cover
            </h2>
          </div>
          <div className="grid grid-cols-5 gap-6">
            {[
              {
                n: "1",
                t: "Past Simple",
                sub: "Formation & usage",
                icon: BookOpen,
                color: "#c084fc",
              },
              {
                n: "2",
                t: "Past Continuous",
                sub: "Formation & usage",
                icon: RefreshCw,
                color: "#2dd4bf",
              },
              {
                n: "3",
                t: "Key Differences",
                sub: "When to use each",
                icon: Scale,
                color: "#fbbf24",
              },
              {
                n: "4",
                t: "Signal Words",
                sub: "Clues for each tense",
                icon: Lightbulb,
                color: "#f472b6",
              },
              {
                n: "5",
                t: "Practice",
                sub: "Test yourself",
                icon: PenTool,
                color: "#60a5fa",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.n}
                  className="grammar-card flex flex-col justify-between h-full bg-white/3 border-white/8"
                >
                  <div>
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-white/5 border border-white/10"
                      style={{ color: item.color }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl! font-semibold text-white mb-2 leading-snug">
                      {item.t}
                    </h3>
                    <p className="text-sm text-gray-400 leading-normal">
                      {item.sub}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
                    <span className="text-xs text-white/30 uppercase tracking-widest">
                      Phase
                    </span>
                    <span className="text-sm font-semibold px-2 py-0.5 rounded bg-white/10 text-white/90">
                      0{item.n}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Slide>

      {/* ═══════════════════ PAST SIMPLE - OVERVIEW ═══════════════════ */}
      <Slide background="linear-gradient(135deg, #09090b 0%, #1e1b4b 100%)">
        <div className="grid grid-cols-12 gap-8 h-full w-full px-12 py-10 items-center text-left">
          <div className="col-span-7 flex flex-col justify-center">
            <p className="grammar-badge grammar-badge-purple mb-3 w-fit">
              Past Simple
            </p>
            <h2 className="text-5xl! font-bold text-white mb-6 tracking-tight">
              What is Past Simple?
            </h2>
            <div className="space-y-4 mb-8">
              {[
                "Completed actions in the past",
                "Actions at a specific time",
                "Sequence of completed events",
                "Past habits or states",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300 text-sm font-bold shadow-inner">
                    ✓
                  </div>
                  <span className="text-gray-300 text-lg">{item}</span>
                </div>
              ))}
            </div>
            <div className="grammar-card bg-purple-950/10 border-purple-500/20 max-w-xl">
              <p className="text-xs text-purple-400 uppercase tracking-wider mb-2 font-semibold flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" /> Structure
              </p>
              <p className="font-mono text-xl text-white">
                Subject +{" "}
                <span className="text-purple-300 font-bold underline decoration-purple-500 decoration-2">
                  Verb (past form)
                </span>{" "}
                + Object
              </p>
            </div>
          </div>
          <div className="col-span-5 h-full py-4 flex items-center">
            <div
              className="w-full h-4/5 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-cover bg-center transition duration-500 hover:scale-[1.02]"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1506784983877-45594efa4b9a?w=1200&q=80)",
              }}
            />
          </div>
        </div>
      </Slide>

      {/* ═══════════════════ PAST SIMPLE - AFFIRMATIVE ═══════════════════ */}
      <Slide background="linear-gradient(135deg, #09090b 0%, #1e1b4b 100%)">
        <div className="flex flex-col justify-center h-full w-full px-12 py-8 text-left">
          <p className="grammar-badge grammar-badge-purple mb-3 w-fit">
            Past Simple
          </p>
          <h2 className="text-5xl! font-bold text-white mb-6 tracking-tight">
            Affirmative Form
          </h2>
          <div className="grammar-card mb-6 text-center py-4 bg-white/5 border-white/10 shadow-lg">
            <p className="font-mono text-2xl text-white">
              Subject +{" "}
              <span className="text-purple-400 font-bold underline decoration-purple-500 decoration-2">
                V2 (past form)
              </span>
            </p>
          </div>
          <div className="grammar-two-col">
            <div className="grammar-card bg-white/3 border-white/8 hover:border-purple-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-2xl! font-semibold text-white">
                  Regular Verbs
                </h3>
              </div>
              <p className="text-gray-400 mb-4 text-base">
                Add{" "}
                <span className="font-mono font-bold text-purple-400 bg-purple-500/10 px-1.5 py-0.5 rounded border border-purple-500/20">
                  -ed
                </span>{" "}
                to base form
              </p>
              <div className="space-y-2">
                {[
                  ["work", "worked"],
                  ["play", "played"],
                  ["watch", "watched"],
                ].map(([base, past]) => (
                  <div
                    key={base}
                    className="flex justify-between items-center text-lg p-2.5 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition"
                  >
                    <span className="text-gray-400 font-medium">{base}</span>
                    <span className="font-mono font-semibold text-purple-300">
                      {past}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grammar-card bg-white/3 border-white/8 hover:border-amber-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-300">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-2xl! font-semibold text-white">
                  Irregular Verbs
                </h3>
              </div>
              <p className="text-gray-400 mb-4 text-base">
                Unique form, must be memorized
              </p>
              <div className="space-y-2">
                {[
                  ["go", "went"],
                  ["eat", "ate"],
                  ["see", "saw"],
                ].map(([base, past]) => (
                  <div
                    key={base}
                    className="flex justify-between items-center text-lg p-2.5 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition"
                  >
                    <span className="text-gray-400 font-medium">{base}</span>
                    <span className="font-mono font-semibold text-amber-400">
                      {past}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* ═══════════════════ PAST SIMPLE - NEGATIVE & QUESTIONS ═══════════════════ */}
      <Slide background="linear-gradient(135deg, #09090b 0%, #1e1b4b 100%)">
        <div className="flex flex-col justify-center h-full w-full px-12 py-10 text-left">
          <p className="grammar-badge grammar-badge-purple mb-3 w-fit">
            Past Simple
          </p>
          <h2 className="text-5xl! font-bold text-white mb-6 tracking-tight">
            Negative & Questions
          </h2>
          <div className="grammar-two-col gap-8">
            <div className="grammar-card bg-white/3 border-white/8 hover:border-purple-500/30">
              <h3 className="text-2xl! font-semibold text-purple-300 mb-4 flex items-center gap-2">
                <VolumeX className="w-6 h-6" /> Negative
              </h3>
              <div className="bg-purple-950/20 border border-purple-500/20 rounded-xl p-4 mb-6 text-center">
                <p className="font-mono text-xl text-white">
                  S +{" "}
                  <span className="text-purple-400 font-bold">
                    did not (didn't)
                  </span>{" "}
                  + V1
                </p>
              </div>
              <div className="space-y-3">
                <p className="text-lg text-gray-300 border-l-2 border-purple-500/50 pl-4 py-1">
                  I{" "}
                  <span className="font-mono font-bold text-purple-400 bg-purple-500/10 px-1 rounded border border-purple-500/20">
                    didn't go
                  </span>{" "}
                  to school yesterday.
                </p>
                <p className="text-lg text-gray-300 border-l-2 border-purple-500/50 pl-4 py-1">
                  She{" "}
                  <span className="font-mono font-bold text-purple-400 bg-purple-500/10 px-1 rounded border border-purple-500/20">
                    didn't eat
                  </span>{" "}
                  breakfast.
                </p>
              </div>
            </div>
            <div className="grammar-card bg-white/3 border-white/8 hover:border-purple-500/30">
              <h3 className="text-2xl! font-semibold text-purple-300 mb-4 flex items-center gap-2">
                <HelpCircle className="w-6 h-6" /> Questions
              </h3>
              <div className="bg-purple-950/20 border border-purple-500/20 rounded-xl p-4 mb-6 text-center">
                <p className="font-mono text-xl text-white">
                  <span className="text-purple-400 font-bold">Did</span> + S +
                  V1?
                </p>
              </div>
              <div className="space-y-3">
                <p className="text-lg text-gray-300 border-l-2 border-purple-500/50 pl-4 py-1">
                  <span className="font-mono font-bold text-purple-400 bg-purple-500/10 px-1 rounded border border-purple-500/20">
                    Did
                  </span>{" "}
                  you go to the party last night?
                </p>
                <p className="text-lg text-gray-300 border-l-2 border-purple-500/50 pl-4 py-1">
                  <span className="font-mono font-bold text-purple-400 bg-purple-500/10 px-1 rounded border border-purple-500/20">
                    Did
                  </span>{" "}
                  she call you?
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* ═══════════════════ PAST SIMPLE - EXAMPLES ═══════════════════ */}
      <Slide background="linear-gradient(135deg, #09090b 0%, #180828 100%)">
        <div className="grid grid-cols-12 gap-8 h-full w-full px-12 py-10 items-center text-left">
          <div className="col-span-7 flex flex-col justify-center">
            <p className="grammar-badge grammar-badge-purple mb-3 w-fit">
              Past Simple
            </p>
            <h2 className="text-5xl! font-bold text-white mb-6 tracking-tight">
              Examples in Context
            </h2>
            <div className="space-y-3">
              {[
                {
                  sentence: "I visited London last summer.",
                  note: "completed trip",
                },
                {
                  sentence: "She studied English for 5 years.",
                  note: "finished period",
                },
                {
                  sentence: "They bought a new car yesterday.",
                  note: "single event",
                },
                {
                  sentence: "We ate pizza and watched a movie.",
                  note: "sequence of actions",
                },
                {
                  sentence: "He worked at a bank in 2020.",
                  note: "past state",
                },
              ].map((item) => (
                <div
                  key={item.sentence}
                  className="grammar-example flex justify-between items-center bg-white/3 border border-white/5 hover:border-purple-500/20 rounded-xl px-4 py-3 hover:bg-white/5 transition"
                >
                  <span className="text-lg text-white font-medium">
                    {item.sentence}
                  </span>
                  <span className="text-sm text-purple-300 font-mono bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20 whitespace-nowrap">
                    {item.note}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-5 h-full py-4 flex items-center">
            <div
              className="w-full h-4/5 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-cover bg-center hover:scale-[1.02] transition duration-500"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80)",
              }}
            />
          </div>
        </div>
      </Slide>

      {/* ═══════════════════ PAST CONTINUOUS - OVERVIEW ═══════════════════ */}
      <Slide background="linear-gradient(135deg, #09090b 0%, #064e3b 100%)">
        <div className="grid grid-cols-12 gap-8 h-full w-full px-12 py-10 items-center text-left">
          <div className="col-span-7 flex flex-col justify-center">
            <p className="grammar-badge grammar-badge-teal mb-3 w-fit">
              Past Continuous
            </p>
            <h2 className="text-5xl! font-bold text-white mb-6 tracking-tight">
              What is Past Continuous?
            </h2>
            <div className="space-y-4 mb-8">
              {[
                "Ongoing actions at a specific moment",
                "Background situations in narratives",
                "Parallel actions happening together",
                "Interruption of a longer action",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-300 text-sm font-bold shadow-inner">
                    ✓
                  </div>
                  <span className="text-gray-300 text-lg">{item}</span>
                </div>
              ))}
            </div>
            <div className="grammar-card bg-teal-950/10 border-teal-500/20 max-w-xl">
              <p className="text-xs text-teal-400 uppercase tracking-wider mb-2 font-semibold flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" /> Structure
              </p>
              <p className="font-mono text-xl text-white">
                Subject +{" "}
                <span className="text-teal-300 font-bold underline decoration-teal-500 decoration-2">
                  was/were + Verb(-ing)
                </span>
              </p>
            </div>
          </div>
          <div className="col-span-5 h-full py-4 flex items-center">
            <div
              className="w-full h-4/5 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-cover bg-center hover:scale-[1.02] transition duration-500"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80)",
              }}
            />
          </div>
        </div>
      </Slide>

      {/* ═══════════════════ PAST CONTINUOUS - FORMATION ═══════════════════ */}
      <Slide background="linear-gradient(135deg, #09090b 0%, #022c22 100%)">
        <div className="flex flex-col justify-center h-full w-full px-12 py-8 text-left">
          <p className="grammar-badge grammar-badge-teal mb-3 w-fit">
            Past Continuous
          </p>
          <h2 className="text-5xl! font-bold text-white mb-6 tracking-tight">
            Formation
          </h2>
          <div className="grammar-card mb-6 text-center py-4 bg-white/5 border-white/10 shadow-lg">
            <p className="font-mono text-2xl text-white">
              Subject +{" "}
              <span className="text-teal-400 font-bold underline decoration-teal-500 decoration-2">
                was/were + V-ing
              </span>
            </p>
          </div>
          <div className="grammar-two-col gap-6">
            <div className="grammar-card-teal hover:border-teal-400/40">
              <h3 className="text-2xl! font-bold text-white mb-4">
                I / He / She / It
              </h3>
              <div className="bg-white/10 border border-white/10 rounded-xl p-4 mb-4 text-center">
                <p className="font-mono text-xl text-teal-200 font-bold">
                  was + V-ing
                </p>
              </div>
              <p className="text-lg text-teal-50 leading-relaxed border-l-2 border-teal-400/50 pl-4 py-1">
                I{" "}
                <span className="font-mono font-bold text-white bg-teal-400/20 px-1 rounded">
                  was reading
                </span>{" "}
                a book at 8 PM.
              </p>
            </div>
            <div className="grammar-card-teal hover:border-teal-400/40">
              <h3 className="text-2xl! font-bold text-white mb-4">
                You / We / They
              </h3>
              <div className="bg-white/10 border border-white/10 rounded-xl p-4 mb-4 text-center">
                <p className="font-mono text-xl text-teal-200 font-bold">
                  were + V-ing
                </p>
              </div>
              <p className="text-lg text-teal-50 leading-relaxed border-l-2 border-teal-400/50 pl-4 py-1">
                They{" "}
                <span className="font-mono font-bold text-white bg-teal-400/20 px-1 rounded">
                  were playing
                </span>{" "}
                football.
              </p>
            </div>
          </div>
        </div>
      </Slide>

      {/* ═══════════════════ PAST CONTINUOUS - NEGATIVE & QUESTIONS ═══════════════════ */}
      <Slide background="linear-gradient(135deg, #09090b 0%, #022c22 100%)">
        <div className="flex flex-col justify-center h-full w-full px-12 py-10 text-left">
          <p className="grammar-badge grammar-badge-teal mb-3 w-fit">
            Past Continuous
          </p>
          <h2 className="text-5xl! font-bold text-white mb-6 tracking-tight">
            Negative & Questions
          </h2>
          <div className="grammar-two-col gap-8">
            <div className="grammar-card bg-white/3 border-white/8 hover:border-teal-500/30">
              <h3 className="text-2xl! font-semibold text-teal-300 mb-4 flex items-center gap-2">
                <VolumeX className="w-6 h-6" /> Negative
              </h3>
              <div className="bg-teal-950/20 border border-teal-500/20 rounded-xl p-4 mb-6 text-center">
                <p className="font-mono text-xl text-white">
                  S +{" "}
                  <span className="text-teal-400 font-bold">
                    wasn't / weren't
                  </span>{" "}
                  + V-ing
                </p>
              </div>
              <div className="space-y-3">
                <p className="text-lg text-gray-300 border-l-2 border-teal-500/50 pl-4 py-1">
                  I{" "}
                  <span className="font-mono font-bold text-teal-400 bg-teal-500/10 px-1 rounded border border-teal-500/20">
                    wasn't sleeping
                  </span>{" "}
                  at 10 PM.
                </p>
                <p className="text-lg text-gray-300 border-l-2 border-teal-500/50 pl-4 py-1">
                  They{" "}
                  <span className="font-mono font-bold text-teal-400 bg-teal-500/10 px-1 rounded border border-teal-500/20">
                    weren't watching
                  </span>{" "}
                  TV.
                </p>
              </div>
            </div>
            <div className="grammar-card bg-white/3 border-white/8 hover:border-teal-500/30">
              <h3 className="text-2xl! font-semibold text-teal-300 mb-4 flex items-center gap-2">
                <HelpCircle className="w-6 h-6" /> Questions
              </h3>
              <div className="bg-teal-950/20 border border-teal-500/20 rounded-xl p-4 mb-6 text-center">
                <p className="font-mono text-xl text-white">
                  <span className="text-teal-400 font-bold">Was / Were</span> +
                  S + V-ing?
                </p>
              </div>
              <div className="space-y-3">
                <p className="text-lg text-gray-300 border-l-2 border-teal-500/50 pl-4 py-1">
                  <span className="font-mono font-bold text-teal-400 bg-teal-500/10 px-1 rounded border border-teal-500/20">
                    Were
                  </span>{" "}
                  you working yesterday?
                </p>
                <p className="text-lg text-gray-300 border-l-2 border-teal-500/50 pl-4 py-1">
                  <span className="font-mono font-bold text-teal-400 bg-teal-500/10 px-1 rounded border border-teal-500/20">
                    Was
                  </span>{" "}
                  he running in the park?
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* ═══════════════════ PAST CONTINUOUS - EXAMPLES ═══════════════════ */}
      <Slide background="linear-gradient(135deg, #09090b 0%, #064e3b 100%)">
        <div className="grid grid-cols-12 gap-8 h-full w-full px-12 py-10 items-center text-left">
          <div className="col-span-7 flex flex-col justify-center">
            <p className="grammar-badge grammar-badge-teal mb-3 w-fit">
              Past Continuous
            </p>
            <h2 className="text-5xl! font-bold text-white mb-6 tracking-tight">
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
                  note: "interrupted action",
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
                  className="grammar-example flex justify-between items-center bg-white/3 border border-white/5 hover:border-teal-500/20 rounded-xl px-4 py-3 hover:bg-white/5 transition"
                  style={{ borderLeftColor: "#2dd4bf" }}
                >
                  <span className="text-lg text-white font-medium">
                    {item.sentence}
                  </span>
                  <span className="text-sm text-teal-300 font-mono bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20 whitespace-nowrap">
                    {item.note}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-5 h-full py-4 flex items-center">
            <div
              className="w-full h-4/5 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-cover bg-center hover:scale-[1.02] transition duration-500"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80)",
              }}
            />
          </div>
        </div>
      </Slide>

      {/* ═══════════════════ KEY DIFFERENCES ═══════════════════ */}
      <Slide background="linear-gradient(135deg, #09090b 0%, #1e1b4b 50%, #022c22 100%)">
        <div className="flex flex-col justify-center h-full w-full px-12 py-8 text-left">
          <p className="grammar-badge grammar-badge-amber mb-3 w-fit">
            Comparison
          </p>
          <h2 className="text-5xl! font-bold text-white mb-6 tracking-tight">
            Key Differences
          </h2>
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-6 bg-white/3 border border-white/5 p-4 rounded-2xl shadow-xl">
              <div className="bg-purple-500/15 rounded-xl px-6 py-3 border border-purple-500/30 text-center">
                <p className="font-mono text-2xl font-bold text-purple-300">
                  V2
                </p>
                <p className="text-xs text-purple-400 font-semibold uppercase tracking-wider mt-1">
                  completed
                </p>
              </div>
              <ArrowRight className="text-gray-500 w-8 h-8" />
              <div className="bg-teal-500/15 rounded-xl px-6 py-3 border border-teal-500/30 text-center">
                <p className="font-mono text-2xl font-bold text-teal-300">
                  was/were + V-ing
                </p>
                <p className="text-xs text-teal-400 font-semibold uppercase tracking-wider mt-1">
                  in progress
                </p>
              </div>
            </div>
          </div>
          <table className="w-full text-white">
            <thead>
              <tr>
                <th className="text-left font-semibold uppercase tracking-wider text-sm! text-gray-300">
                  Aspect
                </th>
                <th
                  className="text-left font-bold"
                  style={{ color: "#c084fc" }}
                >
                  Past Simple
                </th>
                <th
                  className="text-left font-bold"
                  style={{ color: "#2dd4bf" }}
                >
                  Past Continuous
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Focus", "Completed action", "Action in progress"],
                ["Duration", "Finished", "Unfinished / ongoing"],
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
                        background: "rgba(167, 139, 250, 0.15)",
                        color: "#c084fc",
                        border: "1px solid rgba(167, 139, 250, 0.25)",
                      }}
                    >
                      read
                    </code>{" "}
                    the book yesterday.
                  </>,
                  <>
                    I{" "}
                    <code
                      style={{
                        background: "rgba(20, 184, 166, 0.15)",
                        color: "#2dd4bf",
                        border: "1px solid rgba(20, 184, 166, 0.25)",
                      }}
                    >
                      was reading
                    </code>{" "}
                    when you called.
                  </>,
                ],
              ].map(([aspect, past, continuous]) => (
                <tr key={String(aspect)}>
                  <td className="text-gray-400 font-semibold text-base">
                    {aspect}
                  </td>
                  <td className="text-base text-gray-200">{past}</td>
                  <td className="text-base text-gray-200">{continuous}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Slide>

      {/* ═══════════════════ COMBINED USAGE ═══════════════════ */}
      <Slide background="linear-gradient(135deg, #09090b 0%, #311c08 100%)">
        <div className="flex flex-col justify-center h-full w-full px-12 py-8 text-left">
          <p className="grammar-badge grammar-badge-amber mb-3 w-fit">
            Advanced
          </p>
          <h2 className="text-5xl! font-bold text-white mb-6 tracking-tight">
            Using Both Together
          </h2>
          <div className="space-y-6">
            <div className="grammar-card bg-white/3 border-white/8 hover:border-amber-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-300">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-2xl! font-bold text-white">
                  Interrupted Action
                </h3>
              </div>
              <div className="bg-white/5 border border-white/5 rounded-xl p-3.5 mb-4 text-center max-w-2xl">
                <p className="font-mono text-base text-gray-300">
                  Past Continuous +{" "}
                  <span className="text-amber-400 font-bold">when</span> + Past
                  Simple
                </p>
              </div>
              <div className="space-y-3">
                <p className="text-lg text-gray-300 border-l-2 border-teal-500/50 pl-4 py-1">
                  I{" "}
                  <span className="font-mono font-bold text-teal-300 bg-teal-500/10 px-1 rounded border border-teal-500/20">
                    was walking
                  </span>{" "}
                  home <span className="font-bold text-amber-400">when</span> it{" "}
                  <span className="font-mono font-bold text-purple-300 bg-purple-500/10 px-1 rounded border border-purple-500/20">
                    started
                  </span>{" "}
                  to rain.
                </p>
                <p className="text-lg text-gray-300 border-l-2 border-teal-500/50 pl-4 py-1">
                  She{" "}
                  <span className="font-mono font-bold text-teal-300 bg-teal-500/10 px-1 rounded border border-teal-500/20">
                    was cooking
                  </span>{" "}
                  <span className="font-bold text-amber-400">when</span> the
                  phone{" "}
                  <span className="font-mono font-bold text-purple-300 bg-purple-500/10 px-1 rounded border border-purple-500/20">
                    rang
                  </span>
                  .
                </p>
              </div>
            </div>
            <div className="grammar-card bg-white/3 border-white/8 hover:border-amber-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h3 className="text-2xl! font-bold text-white">
                  Parallel Actions
                </h3>
              </div>
              <div className="bg-white/5 border border-white/5 rounded-xl p-3.5 mb-4 text-center max-w-2xl">
                <p className="font-mono text-base text-gray-300">
                  <span className="text-amber-400 font-bold">While</span> + Past
                  Continuous, Past Continuous
                </p>
              </div>
              <p className="text-lg text-gray-300 border-l-2 border-teal-500/50 pl-4 py-1">
                <span className="font-bold text-amber-400">While</span> I{" "}
                <span className="font-mono font-bold text-teal-300 bg-teal-500/10 px-1 rounded border border-teal-500/20">
                  was studying
                </span>
                , my brother{" "}
                <span className="font-mono font-bold text-teal-300 bg-teal-500/10 px-1 rounded border border-teal-500/20">
                  was playing
                </span>{" "}
                games.
              </p>
            </div>
          </div>
        </div>
      </Slide>

      {/* ═══════════════════ SIGNAL WORDS ═══════════════════ */}
      <Slide background="linear-gradient(135deg, #09090b 0%, #1e1b4b 100%)">
        <div className="flex flex-col justify-center h-full w-full px-12 py-10 text-left">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-300 shadow-lg">
              <Lightbulb className="w-7 h-7" />
            </div>
            <div>
              <p className="grammar-badge grammar-badge-amber mb-1">
                Indicators
              </p>
              <h2 className="text-4xl! font-bold text-white tracking-tight">
                Signal Words
              </h2>
            </div>
          </div>
          <div className="grammar-two-col gap-8">
            <div className="grammar-card bg-white/3 border-white/8 hover:border-purple-500/30">
              <h3 className="text-2xl! font-semibold text-purple-300 mb-6 flex items-center gap-2">
                <BookOpen className="w-5 h-5" /> Past Simple Clues
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
                    className="flex items-center gap-3 p-3 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition"
                  >
                    <span
                      className="w-3.5 h-3.5 rounded-full flex-shrink-0"
                      style={{ background: "#c084fc" }}
                    />
                    <span className="text-lg text-gray-200 font-medium">
                      {word}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grammar-card bg-white/3 border-white/8 hover:border-teal-500/30">
              <h3 className="text-2xl! font-semibold text-teal-300 mb-6 flex items-center gap-2">
                <RefreshCw className="w-5 h-5" /> Past Continuous Clues
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
                    className="flex items-center gap-3 p-3 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition"
                  >
                    <span
                      className="w-3.5 h-3.5 rounded-full flex-shrink-0"
                      style={{ background: "#2dd4bf" }}
                    />
                    <span className="text-lg text-gray-200 font-medium">
                      {word}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* ═══════════════════ PRACTICE 1 ═══════════════════ */}
      <Slide background="linear-gradient(135deg, #09090b 0%, #1e1b4b 100%)">
        <div className="flex flex-col justify-center h-full w-full px-12 py-8 text-left">
          <p className="grammar-badge grammar-badge-purple mb-3 w-fit">
            Practice
          </p>
          <h2 className="text-5xl! font-bold text-white mb-6 tracking-tight">
            Choose the Correct Tense
          </h2>
          <div className="space-y-4 max-w-5xl">
            {[
              {
                q: "I ______ (walk) my dog when I ______ (see) an old friend.",
                a: "was walking / saw",
              },
              {
                q: "She ______ (go) to Paris last summer.",
                a: "went",
              },
              {
                q: "We ______ (watch) a movie while dinner ______ (cook).",
                a: "were watching / was cooking",
              },
            ].map((item, i) => (
              <Fragment key={item.q}>
                <div className="grammar-card bg-white/3 border-white/8 hover:border-purple-500/20 transition px-6 py-4 flex flex-col justify-between">
                  <p className="text-xl text-gray-200 font-normal">
                    <span className="font-bold text-purple-400 mr-3">
                      0{i + 1}.
                    </span>
                    {item.q}
                  </p>
                  <div className="fragment fade-up mt-3">
                    <div className="flex items-center gap-2 text-purple-300 font-mono font-bold bg-purple-500/10 border border-purple-500/20 px-3.5 py-1.5 rounded-lg w-fit text-base">
                      <Check className="w-4 h-4 text-purple-400" />
                      <span>{item.a}</span>
                    </div>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </Slide>

      {/* ═══════════════════ PRACTICE 2 ═══════════════════ */}
      <Slide background="linear-gradient(135deg, #09090b 0%, #022c22 100%)">
        <div className="flex flex-col justify-center h-full w-full px-12 py-8 text-left">
          <p className="grammar-badge grammar-badge-teal mb-3 w-fit">
            Practice
          </p>
          <h2 className="text-5xl! font-bold text-white mb-6 tracking-tight">
            More Practice
          </h2>
          <div className="space-y-4 max-w-5xl">
            {[
              {
                q: "They ______ (not/eat) anything because they ______ (not/be) hungry.",
                a: "didn't eat / weren't",
              },
              {
                q: "______ (you/enjoy) the concert last night?",
                a: "Did you enjoy",
              },
              {
                q: "At 3 PM yesterday, the children ______ (play) in the park while their parents ______ (talk).",
                a: "were playing / were talking",
              },
            ].map((item, i) => (
              <Fragment key={item.q}>
                <div className="grammar-card bg-white/3 border-white/8 hover:border-teal-500/20 transition px-6 py-4 flex flex-col justify-between">
                  <p className="text-xl text-gray-200 font-normal">
                    <span className="font-bold text-teal-400 mr-3">
                      0{i + 4}.
                    </span>
                    {item.q}
                  </p>
                  <div className="fragment fade-up mt-3">
                    <div className="flex items-center gap-2 text-teal-300 font-mono font-bold bg-teal-500/10 border border-teal-500/20 px-3.5 py-1.5 rounded-lg w-fit text-base">
                      <Check className="w-4 h-4 text-teal-400" />
                      <span>{item.a}</span>
                    </div>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </Slide>

      {/* ═══════════════════ SUMMARY ═══════════════════ */}
      <Slide background="linear-gradient(135deg, #09090b 0%, #1e1b4b 50%, #022c22 100%)">
        <div className="flex flex-col justify-center h-full w-full px-12 py-10 text-left">
          <p className="grammar-badge grammar-badge-purple mb-3 w-fit">
            Summary
          </p>
          <h2 className="text-5xl! font-bold text-white mb-8 tracking-tight">
            Key Takeaways
          </h2>
          <div className="grammar-three-col gap-6">
            <div className="grammar-card text-center bg-white/3 border-white/8 hover:border-purple-500/30 flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300 mb-4 shadow-lg">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="grammar-number grammar-number-purple mb-4">1</div>
              <h3 className="text-2xl! font-semibold text-white mb-2">
                Past Simple
              </h3>
              <p className="text-gray-400 text-base leading-relaxed">
                Use for completed actions with a clear beginning and end.
              </p>
            </div>
            <div className="grammar-card text-center bg-white/3 border-white/8 hover:border-teal-500/30 flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-300 mb-4 shadow-lg">
                <RefreshCw className="w-6 h-6" />
              </div>
              <div className="grammar-number grammar-number-teal mb-4">2</div>
              <h3 className="text-2xl! font-semibold text-white mb-2">
                Past Continuous
              </h3>
              <p className="text-gray-400 text-base leading-relaxed">
                Use for ongoing actions or background situations in the past.
              </p>
            </div>
            <div className="grammar-card text-center bg-white/3 border-white/8 hover:border-amber-500/30 flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-300 mb-4 shadow-lg">
                <GitMerge className="w-6 h-6" />
              </div>
              <div className="grammar-number mb-4 text-amber-300 bg-amber-500/20 border border-amber-500/30">
                3
              </div>
              <h3 className="text-2xl! font-semibold text-white mb-2">
                Combined
              </h3>
              <p className="text-gray-400 text-base leading-relaxed">
                Longer background action in continuous, sudden interruption in
                simple.
              </p>
            </div>
          </div>
        </div>
      </Slide>

      {/* ═══════════════════ THANKS ═══════════════════ */}
      <Slide
        backgroundImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80"
        backgroundSize="cover"
        backgroundPosition="center"
        background="#000"
        backgroundOpacity={0.25}
      >
        <div className="flex flex-col items-center justify-center text-center h-full w-full max-w-5xl mx-auto px-8 py-12">
          <h1 className="text-7xl! font-bold mb-4 text-white tracking-tight">
            <span className="text-purple-400">Thank</span> You!
          </h1>
          <div className="w-48 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-teal-500 mx-auto my-6 rounded-full" />
          <p className="text-2xl text-white/70 font-light mb-4">
            Are there any questions?
          </p>
          <div className="flex gap-4 mt-4">
            <span className="text-xs uppercase tracking-widest text-white/40 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Sistemas Distribuidos
            </span>
            <span className="text-xs uppercase tracking-widest text-white/40 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              UNSA 2026A
            </span>
          </div>
        </div>
      </Slide>
    </PresentationDeck>
  );
}
