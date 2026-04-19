import React, { useEffect, useRef, useMemo } from 'react';
import { motion } from 'motion/react';
import { Trophy, RotateCcw, AlertTriangle, CheckCircle, BookOpen, XCircle, Download, BarChart2 } from 'lucide-react';
import { Question, TestResult } from '../types';

interface ResultProps {
  questions: Question[];
  userAnswers: Record<number | string, 'A' | 'B' | 'C' | 'D'>;
  mode: 'daily' | 'mistakes';
  onRestart: () => void;
  setMistakes?: React.Dispatch<React.SetStateAction<Question[]>>;
}

export default function Result({ questions, userAnswers, mode, onRestart, setMistakes }: ResultProps) {
  const processedRef = useRef(false);

  const score = questions.reduce((acc, q) => {
    return userAnswers[q.id] === q.correctAnswer ? acc + 1 : acc;
  }, 0);

  const correctQuestionIds = questions
    .filter(q => userAnswers[q.id] === q.correctAnswer)
    .map(q => q.id);

  const incorrectQuestions = questions.filter(q => userAnswers[q.id] !== q.correctAnswer);

  const subjectScores = useMemo(() => {
    return questions.reduce((acc, q) => {
      if (!acc[q.subject]) acc[q.subject] = { correct: 0, total: 0 };
      acc[q.subject].total += 1;
      if (userAnswers[q.id] === q.correctAnswer) {
        acc[q.subject].correct += 1;
      }
      return acc;
    }, {} as Record<string, { correct: number; total: number }>);
  }, [questions, userAnswers]);

  useEffect(() => {
    if (processedRef.current) return;
    processedRef.current = true;

    // Save History
    const resultId = Math.random().toString(36).substring(7);
    const newResult: TestResult = {
      id: resultId,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      score,
      total: questions.length,
      correctQuestionIds,
      subjectScores,
      mode
    };

    try {
      const savedHistory = localStorage.getItem('inicet_history');
      let history: TestResult[] = savedHistory ? JSON.parse(savedHistory) : [];
      history = [...history, newResult].slice(-50); // keep last 50
      localStorage.setItem('inicet_history', JSON.stringify(history));
    } catch (e) {
      console.error("Failed to save history", e);
    }

    // Update Mistake Bank
    if (setMistakes) {
      setMistakes(prev => {
        let activeBank = [...prev];
        if (mode === 'daily') {
          // Add new wrong/unanswered ones, avoiding duplicates by id
          const incorrectMap = new Map(activeBank.map(q => [q.id, q]));
          incorrectQuestions.forEach(q => incorrectMap.set(q.id, q));
          const newBank = Array.from(incorrectMap.values());
          localStorage.setItem('inicet_mistakes', JSON.stringify(newBank));
          return newBank;
        } else if (mode === 'mistakes') {
          // Remove the ones they got right this time
          const correctIds = new Set(questions.filter(q => userAnswers[q.id] === q.correctAnswer).map(q => q.id));
          const newBank = activeBank.filter(q => !correctIds.has(q.id));
          localStorage.setItem('inicet_mistakes', JSON.stringify(newBank));
          return newBank;
        }
        return activeBank;
      });
    }
  }, [questions, userAnswers, score, mode, incorrectQuestions, setMistakes, subjectScores, correctQuestionIds]);

  const handleDownload = () => {
    let text = "INICET 2026 - Incorrect Answers Report\n";
    text += "======================================\n\n";

    incorrectQuestions.forEach((q, index) => {
      text += `Question ${questions.indexOf(q) + 1} (${q.subject}):\n`;
      text += `${q.text}\n\n`;
      const uAnswer = userAnswers[q.id];
      if (uAnswer) {
        text += `Your Answer: ${uAnswer} - ${q.options[uAnswer as 'A' | 'B' | 'C' | 'D']}\n`;
      } else {
        text += `Your Answer: Not Attempted\n`;
      }
      text += `Correct Answer: ${q.correctAnswer} - ${q.options[q.correctAnswer]}\n`;
      text += `Explanation: ${q.explanation}\n`;
      text += "\n" + "-".repeat(40) + "\n\n";
    });

    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'INICET_2026_Incorrect_Answers.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const percentage = Math.round((score / questions.length) * 100);

  // Find lowest performing subjects (less than 50% or the lowest ones)
  const sortedSubjects = Object.entries(subjectScores)
    .map(([sub, data]) => ({ sub, accuracy: data.correct / data.total }))
    .sort((a, b) => a.accuracy - b.accuracy);
  const missedTopics = sortedSubjects.filter(s => s.accuracy < 1).map(s => s.sub);

  return (
    <div className="flex-1 overflow-y-auto bg-bg-main p-4 sm:p-6 md:p-12">
      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 pb-12">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="quiz-card p-6 sm:p-10 text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-amber-100 p-4 rounded-full">
              <Trophy className="w-12 h-12 text-amber-500" />
            </div>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-2 text-text-main">
            {mode === 'mistakes' ? "Review Complete" : "Test Assessment Complete"}
          </h2>
          <p className="text-text-muted text-sm sm:text-base font-medium mb-8 sm:mb-10 tracking-tight">Final score analysis for INICET 2026</p>

          <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-md mx-auto mb-8 sm:mb-10 text-left">
            <div className="bg-bg-main p-4 sm:p-5 rounded-lg border border-border-main">
              <div className="text-2xl sm:text-3xl font-black text-primary-main mb-1">{score} <span className="text-sm sm:text-lg text-text-muted font-normal">/ {questions.length}</span></div>
              <div className="text-[10px] font-extrabold text-text-muted uppercase tracking-widest">Raw Score</div>
            </div>
            <div className="bg-bg-main p-4 sm:p-5 rounded-lg border border-border-main">
              <div className="text-2xl sm:text-3xl font-black text-success-main mb-1">{percentage}%</div>
              <div className="text-[10px] font-extrabold text-text-muted uppercase tracking-widest">Accuracy</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onRestart}
              className="btn btn-primary px-10 py-4 rounded-lg font-extrabold shadow-xl shadow-blue-500/20 active:scale-95 transition-transform max-w-sm"
            >
              <RotateCcw className="w-5 h-5 shrink-0" />
              BACK TO DASHBOARD
            </button>
            
            {incorrectQuestions.length > 0 && (
              <button
                onClick={handleDownload}
                className="btn bg-white border-2 border-primary-main text-primary-main hover:bg-primary-main/5 px-10 py-4 rounded-lg font-extrabold active:scale-95 transition-transform flex items-center justify-center gap-2 max-w-sm"
              >
                <Download className="w-5 h-5 shrink-0" />
                GET REPORT
              </button>
            )}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Subject Breakdown */}
          <div className="quiz-card p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 p-2 rounded">
                <BarChart2 className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="font-extrabold text-lg text-text-main uppercase tracking-tight">Subject Breakdown</h3>
            </div>
            <div className="space-y-5">
              {Object.entries(subjectScores).map(([sub, data]) => {
                const subPct = Math.round((data.correct / data.total) * 100);
                return (
                  <div key={sub}>
                    <div className="flex justify-between items-end mb-1">
                      <span className="text-sm font-bold text-text-main truncate pr-4">{sub}</span>
                      <span className="text-xs font-bold text-text-muted">{data.correct}/{data.total} ({subPct}%)</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${subPct >= 70 ? 'bg-success-main' : subPct >= 40 ? 'bg-warning-main' : 'bg-danger-main'}`}
                        style={{ width: `${Math.max(subPct, 5)}%` }} // ensure tiny bar is somewhat visible
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Focal Areas */}
          <div className="quiz-card p-6 sm:p-8 h-full flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-amber-100 p-2 rounded">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
              </div>
              <h3 className="font-extrabold text-lg text-text-main uppercase tracking-tight">Weakness Areas</h3>
            </div>
            
            {missedTopics.length > 0 ? (
              <div className="flex flex-wrap gap-2 mb-6">
                {missedTopics.slice(0, 6).map((topic, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded text-xs font-bold uppercase tracking-tight"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-text-muted text-sm italic mb-6">Perfect alignment with all tested domains.</p>
            )}
            
            <div className="pt-6 border-t border-border-main mt-auto">
              <div className="flex items-center gap-2 text-[10px] font-extrabold text-text-muted uppercase tracking-widest mb-3">
                <BookOpen className="w-4 h-4" />
                Specialist Counsel
              </div>
              <p className="text-sm text-text-main font-medium leading-relaxed">
                {missedTopics.length > 0 
                  ? `Prioritize revision in the domains of ${missedTopics.slice(0, 2).join(', ')} to consolidate your mastery. Questions you got wrong have automatically been saved to the Mistake Bank.`
                  : `Incredible performance. Maintain this routine to secure your top percentile ranking.`}
              </p>
            </div>
          </div>
        </div>

        {/* Incorrect Questions Review */}
        {incorrectQuestions.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 px-2">
              <div className="bg-red-100 p-2 rounded">
                <XCircle className="w-5 h-5 text-red-600" />
              </div>
              <h3 className="font-extrabold text-xl text-text-main uppercase tracking-tight">Review Incorrect Answers</h3>
            </div>

            <div className="grid gap-6">
              {incorrectQuestions.map((q, idx) => (
                  <div key={q.id} className="quiz-card p-5 sm:p-8 group transition-all hover:border-red-200">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="text-[10px] sm:text-xs font-extrabold text-primary-main uppercase tracking-widest bg-blue-50 px-2 py-1 rounded">
                        Q{questions.indexOf(q) + 1} • {q.subject}
                      </div>
                    </div>
                    
                    <h4 className="text-base sm:text-lg font-bold text-text-main mb-4 sm:mb-6 leading-relaxed">
                      {q.text}
                    </h4>

                    <div className="grid gap-2 sm:gap-3 mb-4 sm:mb-6">
                      {(['A', 'B', 'C', 'D'] as const).map(key => {
                        const isYourAnswer = userAnswers[q.id] === key;
                        const isCorrect = q.correctAnswer === key;
                        
                        return (
                          <div 
                            key={key}
                            className={`flex items-center p-3 rounded-md border text-sm font-medium ${
                              isCorrect 
                                ? "bg-emerald-50 border-emerald-200 text-emerald-800" 
                                : isYourAnswer 
                                  ? "bg-red-50 border-red-200 text-red-800" 
                                  : "bg-white border-slate-100 text-slate-500"
                            }`}
                          >
                            <span className={`w-6 h-6 rounded flex items-center justify-center text-[10px] font-black mr-3 ${
                              isCorrect 
                                ? "bg-emerald-500 text-white" 
                                : isYourAnswer 
                                  ? "bg-red-500 text-white" 
                                  : "bg-slate-100 text-slate-400"
                            }`}>
                              {key}
                            </span>
                            {q.options[key]}
                          </div>
                        );
                      })}
                      {!userAnswers[q.id] && (
                        <div className="text-red-500 font-bold text-sm mt-2">Not Attempted</div>
                      )}
                    </div>

                    <div className="p-5 bg-slate-50 rounded-lg border border-slate-100 transition-colors group-hover:bg-white group-hover:border-slate-200">
                      <div className="text-[10px] font-black text-primary-main uppercase tracking-[0.2em] mb-2">Explanatory Note</div>
                      <p className="text-sm text-text-muted leading-relaxed font-inter">
                        {q.explanation}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

