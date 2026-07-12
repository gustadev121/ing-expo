import { Fragment, Slide } from "@revealjs/react";
import { PresentationDeck } from "@/shared/presentation-deck";

const purple = "#6366f1";
const teal = "#14b8a6";

export function EnglishGrammarPresentation() {
  return (
    <PresentationDeck config={{ slideNumber: "c/t", transition: "slide" }}>
      {/* ═══════════════════ TITLE SLIDE ═══════════════════ */}
      <Slide
        backgroundImage="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1920&q=80"
        backgroundSize="cover"
        backgroundPosition="center"
        background="#000"
        backgroundOpacity={0.15}
      >
        <div className="flex flex-col items-center justify-center text-center my-auto">
          <p className="inline-block px-4 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white/80 text-sm font-semibold uppercase tracking-widest mb-6 border border-white/20">
            English Grammar
          </p>
          <h1 className="text-6xl! leading-tight mb-2 text-white">
            Past Simple <span className="text-white/50 font-light">&</span>{" "}
            <span className="text-purple-300">Past Continuous</span>
          </h1>
          <div className="w-40 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto my-6 rounded-full" />
          <p className="text-xl text-white/70 font-light max-w-xl mx-auto">
            Understanding two essential past tenses in English
          </p>
          <div className="flex gap-6 mt-8 justify-center">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-400" />
              <span className="text-sm text-white/60">Past Simple</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-teal-400" />
              <span className="text-sm text-white/60">Past Continuous</span>
            </div>
          </div>
        </div>
      </Slide>

      {/* ═══════════════════ AGENDA ═══════════════════ */}
      <Slide>
        <div
          className="h-full w-full"
          style={{
            background: "linear-gradient(135deg, #ede9fe, #e0e7ff, #f0fdfa)",
          }}
        >
          <p className="grammar-badge grammar-badge-purple mb-4">Overview</p>
          <h2 className="text-4xl! mb-8">What We'll Cover</h2>
          <div className="grid grid-cols-5 gap-4">
            {[
              {
                n: "1",
                t: "Past Simple",
                sub: "Formation & usage",
                icon: "📝",
              },
              {
                n: "2",
                t: "Past Continuous",
                sub: "Formation & usage",
                icon: "🔄",
              },
              {
                n: "3",
                t: "Key Differences",
                sub: "When to use each",
                icon: "⚖️",
              },
              {
                n: "4",
                t: "Signal Words",
                sub: "Clues for each tense",
                icon: "💡",
              },
              { n: "5", t: "Practice", sub: "Test yourself", icon: "✏️" },
            ].map((item) => (
              <div key={item.n} className="grammar-card text-center">
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="grammar-number grammar-number-purple mx-auto mb-3">
                  {item.n}
                </div>
                <h3 className="text-lg! font-semibold text-gray-800 mb-1">
                  {item.t}
                </h3>
                <p className="text-sm text-gray-500">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </Slide>

      {/* ═══════════════════ PAST SIMPLE - OVERVIEW ═══════════════════ */}
      <Slide className="image-slide">
        <div
          className="grammar-image-side"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1506784983877-45594efa4b9a?w=1200&q=80)",
          }}
        />
        <div className="max-w-3xl">
          <p className="grammar-badge grammar-badge-purple mb-3">Past Simple</p>
          <h2 className="text-4xl! mb-6">What is Past Simple?</h2>
          <div className="space-y-3 mb-6">
            {[
              "Completed actions in the past",
              "Actions at a specific time",
              "Sequence of completed events",
              "Past habits or states",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="grammar-number grammar-number-purple text-sm!">
                  ✓
                </span>
                <span className="text-gray-700 text-lg">{item}</span>
              </div>
            ))}
          </div>
          <div className="grammar-card">
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-2 font-semibold">
              Structure
            </p>
            <p className="font-mono text-xl" style={{ color: purple }}>
              Subject + Verb (past form) + Object
            </p>
          </div>
        </div>
      </Slide>

      {/* ═══════════════════ PAST SIMPLE - AFFIRMATIVE ═══════════════════ */}
      <Slide>
        <div>
          <p className="grammar-badge grammar-badge-purple mb-3">Past Simple</p>
          <h2 className="text-4xl! mb-6">Affirmative Form</h2>
          <div className="grammar-card mb-6 text-center">
            <p className="font-mono text-xl" style={{ color: purple }}>
              Subject + V2 (past form)
            </p>
          </div>
          <div className="grammar-two-col">
            <div className="grammar-card">
              <div className="text-4xl mb-3">📝</div>
              <h3 className="text-xl! font-semibold mb-2">Regular Verbs</h3>
              <p className="text-gray-600 mb-4">
                Add{" "}
                <span
                  className="font-mono font-semibold"
                  style={{ color: purple }}
                >
                  -ed
                </span>
              </p>
              <div className="space-y-2">
                {[
                  ["work", "worked"],
                  ["play", "played"],
                  ["watch", "watched"],
                ].map(([base, past]) => (
                  <div
                    key={base}
                    className="flex justify-between items-center text-lg p-2 bg-gray-50 rounded-lg"
                  >
                    <span className="text-gray-500">{base}</span>
                    <span
                      className="font-mono font-semibold"
                      style={{ color: purple }}
                    >
                      {past}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grammar-card">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-xl! font-semibold mb-2">Irregular Verbs</h3>
              <p className="text-gray-600 mb-4">Unique forms to memorize</p>
              <div className="space-y-2">
                {[
                  ["go", "went"],
                  ["eat", "ate"],
                  ["see", "saw"],
                ].map(([base, past]) => (
                  <div
                    key={base}
                    className="flex justify-between items-center text-lg p-2 bg-gray-50 rounded-lg"
                  >
                    <span className="text-gray-500">{base}</span>
                    <span
                      className="font-mono font-semibold"
                      style={{ color: "#d97706" }}
                    >
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
      <Slide>
        <div>
          <p className="grammar-badge grammar-badge-purple mb-3">Past Simple</p>
          <h2 className="text-4xl! mb-6">Negative & Questions</h2>
          <div className="grammar-two-col">
            <div className="grammar-card">
              <h3
                className="text-xl! font-semibold mb-4"
                style={{ color: purple }}
              >
                Negative
              </h3>
              <div className="bg-gray-50 rounded-lg p-3 mb-4 text-center">
                <p className="font-mono text-lg">
                  S + <span className="font-semibold">did not</span> + V1
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-lg text-gray-700">
                  I{" "}
                  <span
                    className="font-mono font-semibold"
                    style={{ color: purple }}
                  >
                    didn't go
                  </span>{" "}
                  to school.
                </p>
                <p className="text-lg text-gray-700">
                  She{" "}
                  <span
                    className="font-mono font-semibold"
                    style={{ color: purple }}
                  >
                    didn't eat
                  </span>{" "}
                  breakfast.
                </p>
              </div>
            </div>
            <div className="grammar-card">
              <h3
                className="text-xl! font-semibold mb-4"
                style={{ color: purple }}
              >
                Questions
              </h3>
              <div className="bg-gray-50 rounded-lg p-3 mb-4 text-center">
                <p className="font-mono text-lg">
                  <span className="font-semibold">Did</span> + S + V1?
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-lg text-gray-700">
                  <span
                    className="font-mono font-semibold"
                    style={{ color: purple }}
                  >
                    Did
                  </span>{" "}
                  you go to the party?
                </p>
                <p className="text-lg text-gray-700">
                  <span
                    className="font-mono font-semibold"
                    style={{ color: purple }}
                  >
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
      <Slide className="image-slide">
        <div
          className="grammar-image-side"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80)",
          }}
        />
        <div className="max-w-3xl">
          <p className="grammar-badge grammar-badge-purple mb-3">Past Simple</p>
          <h2 className="text-4xl! mb-6">Examples in Context</h2>
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
                note: "sequence",
              },
              { sentence: "He worked at a bank in 2020.", note: "past state" },
            ].map((item) => (
              <div
                key={item.sentence}
                className="grammar-example flex justify-between items-center"
              >
                <span className="text-lg text-gray-800">{item.sentence}</span>
                <span className="text-sm text-gray-400 italic ml-4 whitespace-nowrap">
                  ({item.note})
                </span>
              </div>
            ))}
          </div>
        </div>
      </Slide>

      {/* ═══════════════════ PAST CONTINUOUS - OVERVIEW ═══════════════════ */}
      <Slide>
        <div
          className="h-full w-full"
          style={{
            background: "linear-gradient(135deg, #ccfbf1, #e0f2fe, #faf5ff)",
          }}
        >
          <p className="grammar-badge grammar-badge-teal mb-3">
            Past Continuous
          </p>
          <h2 className="text-4xl! mb-6">What is Past Continuous?</h2>
          <div className="grammar-two-col">
            <div>
              <div className="space-y-3 mb-6">
                {[
                  "Ongoing actions at a specific moment",
                  "Background situations in narratives",
                  "Parallel actions happening together",
                  "Interruption of a longer action",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="grammar-number grammar-number-teal text-sm!">
                      ✓
                    </span>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </div>
                ))}
              </div>
              <div className="grammar-card">
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-2 font-semibold">
                  Structure
                </p>
                <p className="font-mono text-xl" style={{ color: teal }}>
                  Subject + was/were + Verb(-ing)
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <img
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80"
                alt="Continuous landscape"
                className="rounded-2xl shadow-lg w-full max-w-sm"
              />
            </div>
          </div>
        </div>
      </Slide>

      {/* ═══════════════════ PAST CONTINUOUS - FORMATION ═══════════════════ */}
      <Slide>
        <div>
          <p className="grammar-badge grammar-badge-teal mb-3">
            Past Continuous
          </p>
          <h2 className="text-4xl! mb-6">Formation</h2>
          <div className="grammar-card mb-6 text-center">
            <p className="font-mono text-xl" style={{ color: teal }}>
              Subject + was/were + V-ing
            </p>
          </div>
          <div className="grammar-two-col">
            <div className="grammar-card-teal rounded-xl p-6">
              <h3 className="text-xl! font-semibold mb-3">I / He / She / It</h3>
              <div className="bg-white/20 rounded-lg p-3 mb-3 text-center">
                <p className="font-mono text-lg">was + V-ing</p>
              </div>
              <p className="text-lg">
                I <span className="font-mono font-semibold">was reading</span> a
                book.
              </p>
            </div>
            <div className="grammar-card-teal rounded-xl p-6">
              <h3 className="text-xl! font-semibold mb-3">You / We / They</h3>
              <div className="bg-white/20 rounded-lg p-3 mb-3 text-center">
                <p className="font-mono text-lg">were + V-ing</p>
              </div>
              <p className="text-lg">
                They{" "}
                <span className="font-mono font-semibold">were playing</span>{" "}
                football.
              </p>
            </div>
          </div>
        </div>
      </Slide>

      {/* ═══════════════════ PAST CONTINUOUS - NEGATIVE & QUESTIONS ═══════════════════ */}
      <Slide>
        <div>
          <p className="grammar-badge grammar-badge-teal mb-3">
            Past Continuous
          </p>
          <h2 className="text-4xl! mb-6">Negative & Questions</h2>
          <div className="grammar-two-col">
            <div className="grammar-card">
              <h3
                className="text-xl! font-semibold mb-4"
                style={{ color: teal }}
              >
                Negative
              </h3>
              <div className="bg-gray-50 rounded-lg p-3 mb-4 text-center">
                <p className="font-mono text-lg">S + wasn't/weren't + V-ing</p>
              </div>
              <div className="space-y-2">
                <p className="text-lg text-gray-700">
                  I{" "}
                  <span
                    className="font-mono font-semibold"
                    style={{ color: teal }}
                  >
                    wasn't sleeping
                  </span>{" "}
                  at 10 PM.
                </p>
                <p className="text-lg text-gray-700">
                  They{" "}
                  <span
                    className="font-mono font-semibold"
                    style={{ color: teal }}
                  >
                    weren't watching
                  </span>{" "}
                  TV.
                </p>
              </div>
            </div>
            <div className="grammar-card">
              <h3
                className="text-xl! font-semibold mb-4"
                style={{ color: teal }}
              >
                Questions
              </h3>
              <div className="bg-gray-50 rounded-lg p-3 mb-4 text-center">
                <p className="font-mono text-lg">Was/Were + S + V-ing?</p>
              </div>
              <div className="space-y-2">
                <p className="text-lg text-gray-700">
                  <span
                    className="font-mono font-semibold"
                    style={{ color: teal }}
                  >
                    Were
                  </span>{" "}
                  you working yesterday?
                </p>
                <p className="text-lg text-gray-700">
                  <span
                    className="font-mono font-semibold"
                    style={{ color: teal }}
                  >
                    Was
                  </span>{" "}
                  he running?
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* ═══════════════════ PAST CONTINUOUS - EXAMPLES ═══════════════════ */}
      <Slide className="image-slide">
        <div
          className="grammar-image-side"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80)",
          }}
        />
        <div className="max-w-3xl">
          <p className="grammar-badge grammar-badge-teal mb-3">
            Past Continuous
          </p>
          <h2 className="text-4xl! mb-6">Examples in Context</h2>
          <div className="space-y-3">
            {[
              {
                sentence: "I was reading at 8 PM last night.",
                note: "ongoing at time",
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
                note: "background",
              },
              {
                sentence: "We were studying while they were sleeping.",
                note: "parallel",
              },
            ].map((item) => (
              <div
                key={item.sentence}
                className="grammar-example flex justify-between items-center"
                style={{ borderLeftColor: teal }}
              >
                <span className="text-lg text-gray-800">{item.sentence}</span>
                <span className="text-sm text-gray-400 italic ml-4 whitespace-nowrap">
                  ({item.note})
                </span>
              </div>
            ))}
          </div>
        </div>
      </Slide>

      {/* ═══════════════════ KEY DIFFERENCES ═══════════════════ */}
      <Slide>
        <div
          className="h-full w-full p-10"
          style={{
            background: "linear-gradient(135deg, #fef3c7, #fed7aa, #fce7f3)",
          }}
        >
          <p className="grammar-badge grammar-badge-purple mb-3">Comparison</p>
          <h2 className="text-4xl! mb-6">Key Differences</h2>
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-6">
              <div
                className="bg-white rounded-xl p-4 shadow-md border-2"
                style={{ borderColor: purple }}
              >
                <p
                  className="font-mono text-2xl font-bold"
                  style={{ color: purple }}
                >
                  V2
                </p>
                <p className="text-sm text-gray-500">completed</p>
              </div>
              <div className="text-3xl text-gray-300">→</div>
              <div
                className="bg-white rounded-xl p-4 shadow-md border-2"
                style={{ borderColor: teal }}
              >
                <p
                  className="font-mono text-lg font-bold"
                  style={{ color: teal }}
                >
                  was/were
                </p>
                <p className="font-mono text-sm" style={{ color: teal }}>
                  + V-ing
                </p>
              </div>
            </div>
          </div>
          <table className="w-full">
            <thead>
              <tr>
                <th
                  className="text-left"
                  style={{ background: "#f1f5f9", color: "#475569" }}
                >
                  Aspect
                </th>
                <th
                  className="text-left"
                  style={{ background: purple, color: "white" }}
                >
                  Past Simple
                </th>
                <th
                  className="text-left"
                  style={{ background: teal, color: "white" }}
                >
                  Past Continuous
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Focus", "Completed action", "Action in progress"],
                ["Duration", "Finished", "Unfinished / ongoing"],
                ["Time ref.", "Specific point", "Period / moment"],
                [
                  "Example",
                  <>
                    I{" "}
                    <code style={{ background: "#ede9fe", color: purple }}>
                      read
                    </code>{" "}
                    the book.
                  </>,
                  <>
                    I{" "}
                    <code style={{ background: "#ccfbf1", color: teal }}>
                      was reading
                    </code>{" "}
                    the book.
                  </>,
                ],
              ].map(([aspect, past, continuous]) => (
                <tr key={String(aspect)}>
                  <td className="text-gray-500 font-medium">{aspect}</td>
                  <td>{past}</td>
                  <td>{continuous}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Slide>

      {/* ═══════════════════ COMBINED USAGE ═══════════════════ */}
      <Slide>
        <div>
          <p className="grammar-badge grammar-badge-amber mb-3">Advanced</p>
          <h2 className="text-4xl! mb-6">Using Both Together</h2>
          <div className="space-y-5">
            <div className="grammar-card">
              <div className="flex items-center gap-3 mb-3">
                <div className="grammar-icon grammar-icon-amber">⚡</div>
                <h3 className="text-xl! font-semibold">Interrupted Action</h3>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 mb-4 text-center">
                <p className="font-mono text-sm">
                  Past Continuous + <span className="font-semibold">when</span>{" "}
                  + Past Simple
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-lg text-gray-700">
                  I{" "}
                  <span
                    className="font-mono font-semibold"
                    style={{ color: teal }}
                  >
                    was walking
                  </span>{" "}
                  home <span className="font-semibold">when</span> it{" "}
                  <span
                    className="font-mono font-semibold"
                    style={{ color: purple }}
                  >
                    started
                  </span>{" "}
                  to rain.
                </p>
                <p className="text-lg text-gray-700">
                  She{" "}
                  <span
                    className="font-mono font-semibold"
                    style={{ color: teal }}
                  >
                    was cooking
                  </span>{" "}
                  <span className="font-semibold">when</span> the phone{" "}
                  <span
                    className="font-mono font-semibold"
                    style={{ color: purple }}
                  >
                    rang
                  </span>
                  .
                </p>
              </div>
            </div>
            <div className="grammar-card">
              <div className="flex items-center gap-3 mb-3">
                <div className="grammar-icon grammar-icon-purple">🔄</div>
                <h3 className="text-xl! font-semibold">Parallel Actions</h3>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 mb-4 text-center">
                <p className="font-mono text-sm">
                  <span className="font-semibold">While</span> + Past
                  Continuous, Past Continuous
                </p>
              </div>
              <p className="text-lg text-gray-700">
                <span className="font-semibold">While</span> I{" "}
                <span
                  className="font-mono font-semibold"
                  style={{ color: teal }}
                >
                  was studying
                </span>
                , my brother{" "}
                <span
                  className="font-mono font-semibold"
                  style={{ color: teal }}
                >
                  was playing
                </span>{" "}
                games.
              </p>
            </div>
          </div>
        </div>
      </Slide>

      {/* ═══════════════════ SIGNAL WORDS ═══════════════════ */}
      <Slide>
        <div
          className="h-full w-full"
          style={{
            background: "linear-gradient(135deg, #ede9fe, #e0e7ff, #f0fdfa)",
          }}
        >
          <div className="flex justify-center mb-4">
            <div className="text-6xl">💡</div>
          </div>
          <h2 className="text-4xl! mb-6 text-center">Signal Words</h2>
          <div className="grammar-two-col">
            <div className="grammar-card">
              <h3
                className="text-xl! font-semibold mb-4"
                style={{ color: purple }}
              >
                Past Simple Indicators
              </h3>
              <div className="space-y-3">
                {[
                  "yesterday",
                  "last week / month / year",
                  "ago (2 days ago)",
                  "in 2020",
                  "when I was young",
                ].map((word) => (
                  <div
                    key={word}
                    className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg"
                  >
                    <span
                      className="w-3 h-3 rounded-full flex-shrink-0"
                      style={{ background: purple }}
                    />
                    <span className="text-lg text-gray-700">{word}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grammar-card">
              <h3
                className="text-xl! font-semibold mb-4"
                style={{ color: teal }}
              >
                Past Continuous Indicators
              </h3>
              <div className="space-y-3">
                {[
                  "while",
                  "when (interruption)",
                  "at that moment",
                  "at 8 PM yesterday",
                  "all day long",
                ].map((word) => (
                  <div
                    key={word}
                    className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg"
                  >
                    <span
                      className="w-3 h-3 rounded-full flex-shrink-0"
                      style={{ background: teal }}
                    />
                    <span className="text-lg text-gray-700">{word}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* ═══════════════════ PRACTICE 1 ═══════════════════ */}
      <Slide>
        <div
          className="h-full w-full"
          style={{
            background: "linear-gradient(135deg, #ccfbf1, #e0f2fe, #faf5ff)",
          }}
        >
          <p className="grammar-badge grammar-badge-purple mb-3">Practice</p>
          <h2 className="text-4xl! mb-6">Choose the Correct Tense</h2>
          <div className="space-y-4">
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
              <Fragment key={i}>
                <div className="grammar-card">
                  <p className="text-lg text-gray-700 mb-2">
                    <span className="font-semibold text-gray-400 mr-2">
                      {i + 1}.
                    </span>
                    {item.q}
                  </p>
                  <div className="fragment fade-up">
                    <p
                      className="text-lg font-mono font-semibold"
                      style={{ color: purple }}
                    >
                      → {item.a}
                    </p>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </Slide>

      {/* ═══════════════════ PRACTICE 2 ═══════════════════ */}
      <Slide>
        <div
          className="h-full w-full"
          style={{
            background: "linear-gradient(135deg, #ede9fe, #e0e7ff, #f0fdfa)",
          }}
        >
          <p className="grammar-badge grammar-badge-purple mb-3">Practice</p>
          <h2 className="text-4xl! mb-6">More Practice</h2>
          <div className="space-y-4">
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
              <Fragment key={i}>
                <div className="grammar-card">
                  <p className="text-lg text-gray-700 mb-2">
                    <span className="font-semibold text-gray-400 mr-2">
                      {i + 4}.
                    </span>
                    {item.q}
                  </p>
                  <div className="fragment fade-up">
                    <p
                      className="text-lg font-mono font-semibold"
                      style={{ color: teal }}
                    >
                      → {item.a}
                    </p>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </Slide>

      {/* ═══════════════════ SUMMARY ═══════════════════ */}
      <Slide>
        <div
          className="h-full w-full"
          style={{
            background: "linear-gradient(135deg, #fef3c7, #fed7aa, #fce7f3)",
          }}
        >
          <p className="grammar-badge grammar-badge-purple mb-3">Summary</p>
          <h2 className="text-4xl! mb-8">Key Takeaways</h2>
          <div className="grammar-three-col">
            <div className="grammar-card text-center">
              <div className="text-4xl mb-3">📝</div>
              <div className="grammar-number grammar-number-purple mx-auto mb-3">
                1
              </div>
              <h3 className="text-lg! font-semibold mb-2">Past Simple</h3>
              <p className="text-gray-600">
                Use for completed actions with a clear beginning and end.
              </p>
            </div>
            <div className="grammar-card text-center">
              <div className="text-4xl mb-3">🔄</div>
              <div className="grammar-number grammar-number-teal mx-auto mb-3">
                2
              </div>
              <h3 className="text-lg! font-semibold mb-2">Past Continuous</h3>
              <p className="text-gray-600">
                Use for ongoing actions or background situations.
              </p>
            </div>
            <div className="grammar-card text-center">
              <div className="text-4xl mb-3">🔗</div>
              <div
                className="grammar-number mx-auto mb-3"
                style={{ background: "#fef3c7", color: "#d97706" }}
              >
                3
              </div>
              <h3 className="text-lg! font-semibold mb-2">Combined</h3>
              <p className="text-gray-600">
                Longer action in continuous, interruption in simple.
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
        backgroundOpacity={0.15}
      >
        <div className="flex flex-col items-center justify-center text-center my-auto">
          <h1 className="text-7xl! font-bold mb-4 text-white">
            <span className="text-purple-300">Thank</span> You!
          </h1>
          <div className="w-40 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto my-6 rounded-full" />
          <p className="text-2xl text-white/60">Questions?</p>
        </div>
      </Slide>
    </PresentationDeck>
  );
}
