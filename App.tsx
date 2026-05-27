import { useState } from "react";
import { DIALOGUE } from "./data";
import { DialogueSegment } from "./types";
import DialogueView from "./DialogueView";
import GrammarPanel from "./GrammarPanel";
import SentenceExplanation from "./SentenceExplanation";
import {
  Sparkles,
  BookOpen,
  MessageCircle,
  HelpCircle,
  X,
  Book,
  Globe,
} from "lucide-react";

export default function App() {
  const [selectedSegment, setSelectedSegment] = useState<DialogueSegment | null>(null);
  const [mobileTab, setMobileTab] = useState<"chat" | "grammar">("chat");
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [showInlineTranslations, setShowInlineTranslations] = useState(false);

  // Helper to determine who spoke the chosen segment
  const getSpeakerOfSegment = (segment: DialogueSegment | null) => {
    if (!segment) return undefined;
    const turn = DIALOGUE.find((t) =>
      t.segments.some((s) => s.id === segment.id)
    );
    return turn ? turn.speaker : undefined;
  };

  const handleSelectSegment = (segment: DialogueSegment) => {
    setSelectedSegment(segment);
    setIsMobileDrawerOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans tracking-normal pb-12 antialiased">
      {/* Professional Polish Header Section */}
      <header className="sticky top-0 z-30 bg-indigo-700 text-white flex flex-col md:flex-row items-stretch md:items-center justify-between px-6 md:px-8 py-4 md:h-20 shadow-md shrink-0">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight uppercase font-display flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-indigo-300 animate-pulse shrink-0" />
            Aprendizaje de Idiomas
          </h1>
          <p className="text-indigo-100 text-xs sm:text-sm">
            Երկխոսություն՝ Գոռ և Գայանե — Pluscuamperfecto
          </p>
        </div>
        
        <div className="flex items-center gap-4 mt-3 md:mt-0 justify-between md:justify-end">
          <button
            onClick={() => setShowInlineTranslations(!showInlineTranslations)}
            className={`px-3 py-1.5 rounded-lg text-[11px] font-bold flex items-center gap-1.5 transition-all border ${
              showInlineTranslations
                ? "bg-white text-indigo-700 border-white hover:bg-indigo-50"
                : "bg-indigo-600 border-indigo-500 text-white hover:bg-indigo-500/80"
            }`}
          >
            <Globe className="h-3.5 w-3.5 shrink-0" />
            {showInlineTranslations ? "Թաքցնել թարգմանությունը" : "Ամբողջ թարգմանությունը"}
          </button>
          
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <span className="block text-[10px] text-indigo-300 uppercase font-semibold">TEMA GRAMATICAL</span>
              <span className="font-mono text-xs bg-indigo-800/80 px-2 py-0.5 rounded text-indigo-100 font-bold border border-indigo-600/60">
                había + participio
              </span>
            </div>
            <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-indigo-500 border border-indigo-400 flex items-center justify-center font-bold shadow-inner shrink-0 text-sm">
              ES
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        {/* Toggleable Tabs for Mobile Screen Sizes */}
        <div className="flex lg:hidden bg-slate-200 p-1 rounded-xl mb-4 border border-slate-200/60 shadow-inner">
          <button
            onClick={() => setMobileTab("chat")}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-bold transition-all ${
              mobileTab === "chat"
                ? "bg-white text-indigo-700 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <MessageCircle className="h-4 w-4" />
            Երկխոսություն
          </button>
          <button
            onClick={() => setMobileTab("grammar")}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-bold transition-all ${
              mobileTab === "grammar"
                ? "bg-white text-teal-700 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <BookOpen className="h-4 w-4" />
            Քերականական Ուղեցույց
          </button>
        </div>

        {/* Dashboard Grid - Double Column on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Column One: Interactive Chat (Dialogue) */}
          <div
            className={`lg:col-span-7 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm ${
              mobileTab === "chat" ? "block" : "hidden lg:block"
            }`}
          >
            <DialogueView
              dialogue={DIALOGUE}
              selectedSegmentId={selectedSegment ? selectedSegment.id : null}
              onSelectSegment={handleSelectSegment}
              showAll={showInlineTranslations}
            />

            {/* Hint Card at bottom of Dialogue view */}
            <div className="mt-6 p-4 rounded-xl bg-indigo-50/50 border border-indigo-100/60 flex items-start gap-3">
              <HelpCircle className="h-4 w-4 text-indigo-600 shrink-0 mt-0.5" />
              <div className="text-xs text-indigo-950/70 leading-relaxed">
                <strong>Օգտակար խորհուրդ՝</strong> Կառույցն ավելի լավ հասկանալու համար կտտացրեք յուրաքանչյուր նախադասության վրա։ Կտեսնեք, թե ինչպես են անցյալի տարբեր ժամանակաձևերը (Indefinido, Imperfecto և Pluscuamperfecto) փոխկապակցված։
              </div>
            </div>
          </div>

          {/* Column Two: Dynamic Grammar Panel / Sentence Analyzer (Desktop View) */}
          <div
            className={`lg:col-span-5 space-y-6 ${
              mobileTab === "grammar" ? "block" : "hidden lg:block"
            }`}
          >
            {/* Sentence Breakdown & Armenian Grammar Explanations */}
            <div className="hidden lg:block">
              <SentenceExplanation
                segment={selectedSegment}
                speakerName={getSpeakerOfSegment(selectedSegment)}
              />
            </div>

            {/* Permanent Grammar Cheat-sheet */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
              <GrammarPanel />
            </div>
          </div>
        </div>

        {/* Global Inline Armenian Translation Panel (Toggleable below dialogue) */}
        {showInlineTranslations && (
          <div className="mt-8 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm max-w-4xl mx-auto space-y-4">
            <h3 className="font-display text-base font-bold text-slate-800 flex items-center gap-2 border-b pb-3 border-slate-100">
              <span className="p-1 rounded-md bg-indigo-50 text-indigo-700">
                🇦🇲
              </span>
              Ամբողջական երկխոսությունը հայերենով (Full armenian text)
            </h3>
            <div className="space-y-4 text-sm leading-relaxed text-slate-700">
              {DIALOGUE.map((turn, idx) => (
                <div key={idx} className="flex gap-2">
                  <span className="font-bold text-slate-800 shrink-0">
                    {turn.speaker === "Gor" ? "Գոռ" : "Գայանե"}:
                  </span>
                  <span className="italic">{turn.fullArmenian}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* MOBILE SCREEN BOTTOM DRAWER / INTERACTIVE OVERLAY */}
      {isMobileDrawerOpen && selectedSegment && (
        <div className="lg:hidden fixed inset-0 z-50 flex items-end justify-center">
          {/* Black shade over dialogue background */}
          <div
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-xs"
            onClick={() => setIsMobileDrawerOpen(false)}
          />

          {/* Drawer Tray Content */}
          <div className="relative w-full max-h-[85vh] bg-white rounded-t-3xl shadow-2xl overflow-y-auto border-t border-slate-200/70 p-5 space-y-4 transition-all">
            <div className="flex items-center justify-between border-b pb-2 border-slate-100">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">
                Մանրամասն Վերլուծություն
              </span>
              <button
                onClick={() => setIsMobileDrawerOpen(false)}
                className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <SentenceExplanation
              segment={selectedSegment}
              speakerName={getSpeakerOfSegment(selectedSegment)}
            />

            <button
              onClick={() => setIsMobileDrawerOpen(false)}
              className="w-full py-3 bg-indigo-600 text-white text-xs font-bold rounded-xl shadow-xs hover:bg-indigo-700 transition active:scale-95"
            >
              Պարզ է, վերադառնալ երկխոսությանը
            </button>
          </div>
        </div>
      )}

      {/* Professional Polish Footer Legend */}
      <footer className="mt-16 bg-white border-t border-slate-200 px-6 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-7xl mx-auto rounded-2xl shadow-sm border">
        <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Pluscuamperfecto (Ավելի վաղ անցյալ)
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-slate-400"></div>
            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Indefinido (Կոնկրետ ավարտված)
            </span>
          </div>
        </div>
        <p className="text-xs text-slate-400 italic">
          Interactive Learning Module v1.2 • Gor y Gayane
        </p>
      </footer>
    </div>
  );
}
