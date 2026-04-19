import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, CheckCircle2, XCircle, Info, AlertTriangle, LayoutGrid, X } from 'lucide-react';
import { Question } from '../types';

interface QuizProps {
  questions: Question[];
  currentIdx: number;
  userAnswers: Record<string | number, 'A' | 'B' | 'C' | 'D'>;
  markedForReview: (number | string)[];
  onAnswer: (questionId: number | string, answer: 'A' | 'B' | 'C' | 'D') => void;
  onToggleMark: (questionId: number | string) => void;
  onJump: (index: number) => void;
  onNext: () => void;
  onPrev: () => void;
  onFinish: () => void;
}

export default function Quiz({ 
  questions, 
  currentIdx, 
  userAnswers, 
  markedForReview,
  onAnswer, 
  onToggleMark,
  onJump,
  onNext, 
  onPrev, 
  onFinish 
}: QuizProps) {
  const currentQuestion = questions[currentIdx];
  const userAnswer = userAnswers[currentQuestion.id];
  const isMarked = markedForReview.includes(currentQuestion.id);
  const [showExplanation, setShowExplanation] = useState(!!userAnswer);
  const [showMobileGrid, setShowMobileGrid] = useState(false);

  // Sync explanation visibility when userAnswer state changes (e.g. navigation)
  useEffect(() => {
    setShowExplanation(!!userAnswer);
  }, [userAnswer, currentIdx]);

  const handleOptionClick = (option: 'A' | 'B' | 'C' | 'D') => {
    if (userAnswer) return; 
    onAnswer(currentQuestion.id, option);
    setShowExplanation(true);
  };

  const answeredCount = Object.keys(userAnswers).length;

  return (
    <div className="flex-1 flex flex-col h-full bg-white overflow-hidden">
      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Left Side: Question Area */}
        <section className="flex-1 p-4 sm:p-6 md:p-12 overflow-y-auto">
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            <div className="flex justify-between items-center border-b-2 border-slate-50 pb-4">
              <span className="text-primary-main font-bold tracking-widest text-xs sm:text-sm uppercase">
                Q {currentIdx + 1} <span className="text-text-muted">/ {questions.length}</span>
              </span>
              <button 
                onClick={() => setShowMobileGrid(!showMobileGrid)}
                className="lg:hidden flex items-center justify-center p-2 bg-slate-100 rounded-md text-slate-600 hover:bg-slate-200 transition-colors"
                aria-label="Toggle Question Grid"
              >
                {showMobileGrid ? <X className="w-4 h-4" /> : <LayoutGrid className="w-4 h-4" />}
              </button>
              <span className="text-secondary-main font-bold text-[10px] sm:text-xs uppercase tracking-tighter">
                {currentQuestion.subject}
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="text-lg sm:text-xl md:text-2xl font-semibold leading-relaxed text-text-main">
                  {currentQuestion.text}
                </div>

                <div className="grid gap-4">
                  {(['A', 'B', 'C', 'D'] as const).map((key) => {
                    const isSelected = userAnswer === key;
                    const isCorrect = currentQuestion.correctAnswer === key;
                    const isIncorrect = isSelected && !isCorrect;
                    
                    let buttonClass = "option-btn";
                    if (isSelected) buttonClass += " selected";
                    if (userAnswer) {
                      if (isCorrect) buttonClass += " correct";
                      else if (isIncorrect) buttonClass += " incorrect";
                    }

                    return (
                      <button
                        key={key}
                        onClick={() => handleOptionClick(key)}
                        disabled={!!userAnswer}
                        className={buttonClass}
                      >
                        <div className="option-letter">
                          {key}
                        </div>
                        <span className="flex-1 font-medium text-sm sm:text-base text-left">{currentQuestion.options[key]}</span>
                        {userAnswer && isCorrect && (
                          <CheckCircle2 className="w-5 h-5 text-success-main ml-4" />
                        )}
                        {userAnswer && isIncorrect && (
                          <XCircle className="w-5 h-5 text-danger-main ml-4" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {showExplanation && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-6 bg-slate-50 rounded-lg border border-border-main"
                  >
                    <div className="flex items-center gap-2 text-primary-main font-bold mb-3 uppercase text-xs tracking-widest">
                      <Info className="w-4 h-4" />
                      Explanation
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      {currentQuestion.explanation}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Mobile Sidebar Overlay */}
        <AnimatePresence>
          {showMobileGrid && (
            <motion.aside 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute inset-y-0 right-0 w-[280px] sm:w-[320px] bg-bg-panel border-l border-border-main p-6 flex flex-col gap-8 overflow-y-auto lg:hidden shadow-2xl z-40"
            >
              <div>
                <div className="text-[11px] font-extrabold text-text-muted uppercase tracking-widest mb-4">
                  Exam Summary
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white p-3 rounded-md border border-border-main flex items-center gap-2 shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-success-main"></div>
                    <div className="text-xs font-semibold">{answeredCount} Answered</div>
                  </div>
                  <div className="bg-white p-3 rounded-md border border-border-main flex items-center gap-2 shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-border-main border border-slate-300"></div>
                    <div className="text-xs font-semibold">{questions.length - answeredCount} Pending</div>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-[11px] font-extrabold text-text-muted uppercase tracking-widest mb-4">
                  Jump to Question
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {questions.map((_, i) => {
                    const qNum = i + 1;
                    const isCurrent = currentIdx === i;
                    const i_id = questions[i].id;
                    const isAnswered = !!userAnswers[i_id];
                    const i_isMarked = markedForReview.includes(i_id);
                    
                    let gridClass = "h-9 flex items-center justify-center text-xs font-bold rounded cursor-pointer border transition-all hover:scale-105 active:scale-95";
                    if (isCurrent) gridClass += " bg-primary-main text-white border-primary-main shadow-md ring-2 ring-primary-main ring-offset-1 z-10";
                    else if (i_isMarked) gridClass += " bg-warning-main text-white border-warning-main";
                    else if (isAnswered) gridClass += " bg-success-main text-white border-success-main";
                    else gridClass += " bg-white text-text-muted border-border-main";

                    return (
                      <button 
                        key={i} 
                        onClick={() => {
                          onJump(i);
                          setShowMobileGrid(false);
                        }}
                        className={gridClass}
                      >
                        {qNum}
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Desktop Sidebar Navigation */}
        <aside className="w-[300px] bg-bg-main border-l border-border-main p-6 hidden lg:flex flex-col gap-8 overflow-y-auto">
          <div>
            <div className="text-[11px] font-extrabold text-text-muted uppercase tracking-widest mb-4">
              Exam Summary
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white p-3 rounded-md border border-border-main flex items-center gap-2 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-success-main"></div>
                <div className="text-xs font-semibold">{answeredCount} Answered</div>
              </div>
              <div className="bg-white p-3 rounded-md border border-border-main flex items-center gap-2 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-border-main border border-slate-300"></div>
                <div className="text-xs font-semibold">{questions.length - answeredCount} Pending</div>
              </div>
            </div>
          </div>

          <div>
            <div className="text-[11px] font-extrabold text-text-muted uppercase tracking-widest mb-4">
              Jump to Question
            </div>
            <div className="grid grid-cols-5 gap-2">
              {questions.map((_, i) => {
                const qNum = i + 1;
                const isCurrent = currentIdx === i;
                const i_id = questions[i].id;
                const isAnswered = !!userAnswers[i_id];
                const i_isMarked = markedForReview.includes(i_id);
                
                let gridClass = "h-9 flex items-center justify-center text-xs font-bold rounded cursor-pointer border transition-all hover:scale-105 active:scale-95";
                if (isCurrent) gridClass += " bg-primary-main text-white border-primary-main shadow-md ring-2 ring-primary-main ring-offset-1 z-10";
                else if (i_isMarked) gridClass += " bg-warning-main text-white border-warning-main";
                else if (isAnswered) gridClass += " bg-success-main text-white border-success-main";
                else gridClass += " bg-white text-text-muted border-border-main";

                return (
                  <button 
                    key={i} 
                    onClick={() => onJump(i)}
                    className={gridClass}
                  >
                    {qNum}
                  </button>
                );
              })}
            </div>
          </div>
        </aside>
      </div>

      {/* Footer Navigation */}
      <footer className="bg-white border-t border-border-main p-3 sm:px-6 sm:h-20 shrink-0 flex flex-wrap gap-3 items-center justify-between">
        <div className="w-full sm:w-auto flex justify-between gap-2 order-1 sm:order-none">
          <button 
            onClick={() => onToggleMark(currentQuestion.id)}
            className={`btn border-2 transition-all flex-1 sm:flex-none justify-center ${
              isMarked 
                ? "bg-warning-main text-white border-warning-main shadow-lg shadow-orange-500/20" 
                : "bg-white text-text-muted border-border-main hover:border-warning-main"
            }`}
          >
            {isMarked ? (
              <>
                <AlertTriangle className="w-4 h-4 fill-current shrink-0" />
                <span className="truncate">Marked</span>
              </>
            ) : (
              <>
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span className="truncate">Mark for Review</span>
              </>
            )}
          </button>
        </div>
        <div className="w-full sm:w-auto flex gap-2 sm:gap-4 items-center justify-between sm:justify-end order-2 sm:order-none">
          <button
            onClick={onPrev}
            disabled={currentIdx === 0}
            className="btn btn-outline disabled:opacity-30 justify-center flex-1 sm:flex-none"
          >
            <ChevronLeft className="w-4 h-4 shrink-0" />
            <span className="hidden sm:inline">Previous</span>
          </button>

          {currentIdx < questions.length - 1 ? (
            <button
              onClick={() => {
                onNext();
                setShowExplanation(false);
              }}
              disabled={!userAnswer}
              className="btn btn-primary shadow-lg shadow-blue-500/20 disabled:scale-100 disabled:opacity-50 justify-center flex-[2] sm:flex-none"
            >
              <span>Save & Next</span>
              <ChevronRight className="w-4 h-4 shrink-0" />
            </button>
          ) : (
            <button
              onClick={onFinish}
              disabled={!userAnswer}
              className="btn bg-danger-main text-white shadow-lg shadow-red-500/20 disabled:opacity-50 justify-center flex-[2] sm:flex-none"
            >
              <span>Submit Test</span>
              <CheckCircle2 className="w-4 h-4 shrink-0" />
            </button>
          )}
        </div>
      </footer>
    </div>
  );
}

