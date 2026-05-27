import { useState, useEffect } from "react";
import { DialogueTurn, DialogueSegment } from "./types";
import { MessageCircle, User, Award, HelpCircle, Eye } from "lucide-react";

interface DialogueViewProps {
  dialogue: DialogueTurn[];
  selectedSegmentId: string | null;
  onSelectSegment: (segment: DialogueSegment) => void;
  showAll: boolean;
}

export default function DialogueView({
  dialogue,
  selectedSegmentId,
  onSelectSegment,
  showAll,
}: DialogueViewProps) {
  const [revealedTurns, setRevealedTurns] = useState<Set<string>>(new Set());

  // Auto-reveal turn if its segment undergoes selection
  useEffect(() => {
    if (selectedSegmentId) {
      const turn = dialogue.find(t => t.segments.some(s => s.id === selectedSegmentId));
      if (turn) {
        setRevealedTurns(prev => {
          const next = new Set(prev);
          next.add(turn.id);
          return next;
        });
      }
    }
  }, [selectedSegmentId, dialogue]);

  const toggleRevealTurn = (turnId: string) => {
    setRevealedTurns(prev => {
      const next = new Set(prev);
      if (next.has(turnId)) {
        next.delete(turnId);
      } else {
        next.add(turnId);
      }
      return next;
    });
  };
  return (
    <div className="flex flex-col space-y-6">
      <div className="flex items-center justify-between border-b pb-4 border-slate-100">
        <div className="flex items-center space-y-1 gap-2">
          <MessageCircle className="h-5 w-5 text-indigo-600" />
          <h2 className="font-display text-xl font-bold text-slate-800">
            Երկխոսություն (Dialogue)
          </h2>
        </div>
        <span className="text-xs bg-indigo-50 text-indigo-700 font-medium px-2 py-1 rounded-full border border-indigo-100 flex items-center gap-1">
          <HelpCircle className="h-3 w-3" /> Կտտացրեք նախադասության դիտելու համար
        </span>
      </div>

      <div className="space-y-6">
        {dialogue.map((turn) => {
          const isGor = turn.speaker === "Gor";
          return (
            <div
              key={turn.id}
              className={`flex items-start gap-3 ${
                isGor ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Speaker Avatar */}
              <div
                className={`flex h-10 w-10 shrink-0 select-none items-center justify-center rounded-full font-bold shadow-sm border ${
                  isGor
                    ? "bg-gradient-to-tr from-indigo-500 to-indigo-600 text-white border-indigo-200"
                    : "bg-gradient-to-tr from-teal-500 to-teal-600 text-white border-teal-200"
                }`}
              >
                {turn.speaker[0]}
              </div>

              {/* Chat Bubble Column */}
              <div className="flex flex-col max-w-[82%] space-y-1">
                {/* Speaker Header */}
                <span
                  className={`text-xs font-semibold px-1 text-slate-500 ${
                    isGor ? "text-left" : "text-right"
                  }`}
                >
                  {turn.speaker === "Gor" ? "Գոռ (Gor)" : "Գայանե (Gayane)"}
                </span>

                {/* Main Speech Card */}
                <div
                  className={`rounded-2xl p-4 shadow-sm relative group transition-all duration-300 ${
                    isGor
                      ? "bg-white border border-slate-100 rounded-tl-none hover:shadow-md"
                      : "bg-slate-50 border border-slate-200 rounded-tr-none hover:shadow-md"
                  }`}
                >
                  {/* Clickable Spanish segments */}
                  <div className="text-base font-medium text-slate-800 leading-relaxed">
                    {turn.segments.map((seg, idx) => {
                      const isSelected = selectedSegmentId === seg.id;
                      return (
                        <span key={seg.id} className="inline-block mr-1">
                          <button
                            id={`btn_${seg.id}`}
                            onClick={() => onSelectSegment(seg)}
                            className={`text-left rounded-md px-1.5 py-1 leading-snug cursor-pointer transition-all duration-200 ${
                              isSelected
                                ? "bg-amber-100 text-slate-900 font-semibold shadow-xs border-b-2 border-amber-500 scale-[1.01]"
                                : "hover:bg-slate-200/50 hover:text-slate-900 border-b border-dashed border-slate-300"
                            }`}
                            title="Կտտացրեք՝ թարգմանությունը և բացատրությունը տեսնելու համար"
                          >
                            {seg.spanishText}
                          </button>
                          {idx < turn.segments.length - 1 && " "}
                        </span>
                      );
                    })}
                  </div>

                  {/* Context Armenian summary in speech bubble (revealed on click) */}
                  {showAll || revealedTurns.has(turn.id) || (selectedSegmentId && turn.segments.some(s => s.id === selectedSegmentId)) ? (
                    <div className="mt-3 pt-2.5 border-t border-slate-200 text-xs text-slate-600 italic bg-slate-100/35 -mx-4 -mb-4 px-4 py-2.5 rounded-b-2xl flex items-start gap-1.5 transition-all duration-300">
                      <span className="font-semibold text-slate-700 shrink-0">
                        🇦🇲 Հայ:
                      </span>
                      <span>{turn.fullArmenian}</span>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleRevealTurn(turn.id);
                      }}
                      className="mt-2.5 w-full pt-2 border-t border-dashed border-slate-200 text-left text-[11px] text-indigo-600 hover:text-indigo-700 font-semibold flex items-center gap-1.5 cursor-pointer transition-all"
                    >
                      <Eye className="h-3 w-3 inline shrink-0 text-indigo-400" />
                      <span>Տեսնել թարգմանությունը...</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
