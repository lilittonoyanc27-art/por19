import { useState, useEffect } from "react";
import { DialogueSegment } from "./types";
import { Sparkles, Volume2, ArrowRight, HelpCircle, CheckCircle2 } from "lucide-react";

interface SentenceExplanationProps {
  segment: DialogueSegment | null;
  speakerName?: "Gor" | "Gayane" | string;
}

export default function SentenceExplanation({
  segment,
  speakerName,
}: SentenceExplanationProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Stop speaking if segment changes
  useEffect(() => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
  }, [segment]);

  const speakSpanish = () => {
    if (!segment || !window.speechSynthesis) return;

    window.speechSynthesis.cancel(); // Stop playing anything else
    const utterance = new SpeechSynthesisUtterance(segment.spanishText);
    utterance.lang = "es-ES";
    utterance.rate = 0.85; // Slightly slower, easier to understand for learners

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    window.speechSynthesis.speak(utterance);
  };

  if (!segment) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center min-h-[280px] border border-dashed border-slate-200 rounded-2xl bg-slate-50/50 space-y-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 text-indigo-500 shadow-xs">
          <Sparkles className="h-6 w-6" />
        </div>
        <div className="space-y-1 max-w-sm">
          <h4 className="font-display font-medium text-slate-800 text-sm">
            Ընտրեք նախադասություն
          </h4>
          <p className="text-xs text-slate-500 leading-normal">
            Կտտացրեք ձախ կողմի երկխոսության ցանկացած նախադասության վրա՝ դրա իսպաներեն արտասանությունը, հայերեն թարգմանությունն ու քերականական բացատրությունը տեսնելու համար։
          </p>
        </div>
      </div>
    );
  }

  const isGor = speakerName === "Gor";

  return (
    <div className="bg-white border border-slate-200 shadow-sm rounded-2xl overflow-hidden self-start">
      {/* Speaker Tag on top */}
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className={`inline-block h-2 w-2 rounded-full ${
              isGor ? "bg-indigo-500" : "bg-teal-500"
            }`}
          />
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            {isGor ? "Գոռի խոսքից" : "Գայանեի խոսքից"}
          </span>
        </div>
        {window.speechSynthesis && (
          <button
            onClick={speakSpanish}
            disabled={isPlaying}
            className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
              isPlaying
                ? "bg-amber-100 text-amber-800 animate-pulse"
                : "bg-slate-200/60 hover:bg-indigo-50 text-slate-700 hover:text-indigo-700 active:scale-95"
            }`}
          >
            <Volume2 className="h-3.5 w-3.5 shrink-0" />
            {isPlaying ? "Արտասանվում է..." : "Լսել Իսպաներեն"}
          </button>
        )}
      </div>

      <div className="p-5 space-y-4">
        {/* Spanish text display */}
        <div className="space-y-1">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">
            Spanish (իսպաներեն)
          </div>
          <p className="text-lg font-bold text-indigo-950 font-sans leading-snug">
            {segment.spanishText}
          </p>
        </div>

        {/* Armenian translation */}
        <div className="space-y-1 bg-indigo-50/50 p-4 rounded-xl border border-indigo-100/40">
          <div className="text-xs font-bold text-indigo-900/40 uppercase tracking-widest font-mono">
            Հայերեն Թարգմանություն
          </div>
          <p className="text-sm font-medium text-slate-700 leading-normal">
            {segment.armenianTranslation}
          </p>
        </div>

        {/* Highlighted Verbs list */}
        {segment.highlightedSpanishVerbs.length > 0 && (
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-xs font-semibold text-slate-400 mr-1 uppercase tracking-wider font-mono">
              Բայի ձևեր:
            </span>
            {segment.highlightedSpanishVerbs.map((verb, idx) => (
              <span
                key={idx}
                className="text-xs font-semibold px-2.5 py-1 rounded bg-amber-50 text-amber-800 border border-amber-200 font-mono shadow-xs"
              >
                {verb}
              </span>
            ))}
          </div>
        )}

        {/* Grammatical Explanation */}
        <div className="space-y-2 border-t border-slate-100 pt-4">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1 font-mono">
            <HelpCircle className="h-3.5 w-3.5 text-teal-600" /> Քերականական Բացատրություն
          </div>

          <div className="text-sm text-slate-600 leading-relaxed font-sans space-y-3 whitespace-pre-line bg-teal-50/30 p-4 rounded-xl border border-teal-100/40">
            {segment.explanation}
          </div>
        </div>

        {/* Grammar Tip Footnote */}
        <div className="border-t border-slate-100 pt-3 flex items-start gap-2 text-xs text-slate-400 leading-normal">
          <CheckCircle2 className="h-3.5 w-3.5 text-slate-300 shrink-0 mt-0.5" />
          <span>
            Ուշադրություն դարձրեք <strong>Pluscuamperfecto (*había + participio*)</strong> ձևերին, որոնք ցույց են տալիս ավելի վաղ կատարված գործողություն անցյալում։
          </span>
        </div>
      </div>
    </div>
  );
}
