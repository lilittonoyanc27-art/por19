import { CONJUGATIONS, VERB_COMPARISON_ARM, GENERAL_RULE_ARM } from "./data";
import { BookOpen, Hash, RefreshCw, LayoutGrid, Info } from "lucide-react";

export default function GrammarPanel() {
  return (
    <div className="space-y-6">
      {/* Short Summary Header */}
      <div className="flex items-center space-x-2 border-b pb-4 border-slate-100">
        <BookOpen className="h-5 w-5 text-teal-600" />
        <h2 className="font-display text-xl font-bold text-slate-800">
          Քերականություն (Grammar Guide)
        </h2>
      </div>

      {/* Basic Rule */}
      <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-4">
        <h3 className="font-display text-base font-bold text-teal-900 flex items-center gap-1.5">
          <Info className="h-4 w-4 text-teal-600 shrink-0" />
          Ի՞նչ է Pluscuamperfecto-ն
        </h3>
        <p className="text-sm text-slate-700 leading-relaxed">
          <strong>Pluscuamperfecto (արդեն արել էի / արել էր)</strong> օգտագործում ենք, երբ անցյալում մի գործողություն կատարվել էր ավելի շուտ, քան մեկ այլ անցյալ գործողություն։
        </p>

        {/* Visual Timeline/Formula */}
        <div className="rounded-xl bg-gradient-to-r from-teal-50 to-indigo-50 border border-teal-100/60 p-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-teal-800 mb-2">
            Կառուցվածքի բանաձևը՝
          </div>
          <div className="flex items-center gap-2 text-base font-mono">
            <span className="bg-white px-2.5 py-1.5 rounded-lg border border-teal-200 text-teal-700 font-bold shadow-xs">
              había, habías...
            </span>
            <span className="text-slate-500 font-sans font-bold">+</span>
            <span className="bg-white px-2.5 py-1.5 rounded-lg border border-indigo-200 text-indigo-700 font-bold shadow-xs">
              Participio
            </span>
            <span className="text-xs text-slate-600 font-sans ml-2">
              (-ado / -ido)
            </span>
          </div>

          <div className="mt-3 text-xs text-slate-600 leading-relaxed font-sans border-t border-slate-200/50 pt-2.5">
            <span className="font-semibold text-teal-700">Օրինակ՝</span>{" "}
            Cuando llegué, la película ya <strong>había empezado</strong>. <br />
            <span className="text-slate-500">
              (Երբ ես հասա, ֆիլմն արդեն սկսվել էր։)
            </span>
          </div>
        </div>
      </div>

      {/* Conjugation Grid */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
          Haber բայի խոնարհումը (Conjugations)
        </h3>
        <div className="overflow-hidden border border-slate-200 rounded-xl shadow-xs">
          <table className="w-full text-left border-collapse bg-white">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="p-3 text-xs font-bold text-slate-500">Դեմք / Անձ</th>
                <th className="p-3 text-xs font-bold text-teal-600">Auxiliary (Haber)</th>
                <th className="p-3 text-xs font-bold text-indigo-600">Participio (Անցյալ դերբայ)</th>
                <th className="p-3 text-xs font-bold text-slate-500">Թարգմանություն</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {CONJUGATIONS.map((conj, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-3 font-semibold text-slate-700">{conj.subject}</td>
                  <td className="p-3 font-mono text-teal-700 font-medium">{conj.auxiliary}</td>
                  <td className="p-3 font-mono text-indigo-700">{conj.participio}</td>
                  <td className="p-3 text-slate-600 italic">{conj.meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Comparing Past Tenses in dialogue */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
          <RefreshCw className="h-3.5 w-3.5" />
          Անցյալ ժամանակների տարբերությունը
        </h3>
        <div className="grid grid-cols-1 gap-3">
          {VERB_COMPARISON_ARM.map((comp, idx) => (
            <div
              key={idx}
              className="p-4 border rounded-xl bg-white border-slate-200/95 space-y-2 hover:border-slate-300 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-mono">
                  {comp.tense}
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-tight">
                <strong>Նշանակություն:</strong> {comp.focus}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 bg-slate-50 p-2 rounded-lg text-xs leading-relaxed">
                <div>
                  <span className="text-slate-400 font-medium mr-1">ESP:</span>
                  <span className="font-medium text-slate-800">{comp.exampleSp}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-medium mr-1">ARM:</span>
                  <span className="text-slate-700 italic">{comp.exampleArm}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
