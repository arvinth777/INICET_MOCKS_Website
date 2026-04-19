import React, { useRef, useState, useEffect, lazy, Suspense } from 'react';
import { motion } from 'motion/react';
import { Play, Sparkles, BookCheck, Clock, Upload, Trash2, LineChart as LineChartIcon } from 'lucide-react';
import { Question, TestResult } from '../types';

const HistoryChart = lazy(() => import('./HistoryChart'));

interface LandingProps {
  onStartDaily: () => void;
  onStartMistakes: () => void;
  onUpload: (questions: Question[]) => void;
  onClearMistakes: () => void;
  dailyCount: number;
  mistakesCount: number;
}

export default function Landing({ 
  onStartDaily, 
  onStartMistakes, 
  onUpload, 
  onClearMistakes,
  dailyCount, 
  mistakesCount 
}: LandingProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [history, setHistory] = useState<TestResult[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('inicet_history');
    if (saved) {
      try {
        setHistory(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load history", e);
      }
    }
  }, []);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        const json = JSON.parse(content);
        if (Array.isArray(json) && json.length > 0 && json[0].text) {
          onUpload(json as Question[]);
          alert(`Successfully loaded ${json.length} questions!`);
        } else {
          alert('Invalid JSON format. Expected an array of Question objects.');
        }
      } catch (err) {
        alert('Failed to parse JSON file.');
      }
    };
    reader.readAsText(file);
    
    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const chartData = history.filter(h => h.mode === 'daily').map(h => ({
    date: h.date,
    score: h.score,
    percentage: Math.round((h.score / h.total) * 100)
  })).slice(-14); // Only show last 14 regular tests

  const latestResult = history[history.length - 1];
  const latestCorrectCount = latestResult?.correctQuestionIds?.length ?? latestResult?.score ?? 0;
  const latestAccuracy = latestResult
    ? Math.round((latestResult.score / latestResult.total) * 100)
    : 0;

  return (
    <div className="flex flex-col items-center flex-1 bg-bg-main p-4 sm:p-6 md:p-12 overflow-y-auto">
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-4 sm:gap-8">
        
        {/* Main Actions Column */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-bg-panel border border-border-main rounded-xl p-5 sm:p-8 shadow-xl"
          >
            <div className="flex justify-between items-start mb-4 sm:mb-6">
              <div className="bg-primary-main/10 p-3 sm:p-4 rounded-xl border border-primary-main/20">
                <BookCheck className="w-6 h-6 sm:w-8 sm:h-8 text-primary-main" />
              </div>
              <input 
                type="file" 
                accept=".json" 
                className="hidden" 
                ref={fileInputRef} 
                onChange={handleFileUpload} 
              />
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="text-xs font-bold text-primary-main flex items-center gap-2 hover:bg-primary-main/5 px-3 py-2 rounded-md transition-colors border border-transparent hover:border-primary-main/20"
              >
                <Upload className="w-4 h-4" />
                Upload Daily JSON
              </button>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-text-main mb-2 tracking-tight">
              Daily Master Test
            </h1>
            <p className="text-text-muted text-xs sm:text-sm mb-6 sm:mb-8 leading-relaxed font-medium">
              Currently loaded with {dailyCount} strictly curated high-yield questions.
            </p>

            <button
              onClick={onStartDaily}
              className="w-full btn btn-primary py-4 rounded-lg text-lg font-extrabold shadow-xl shadow-blue-500/20 active:scale-95 transition-transform"
            >
              <Play className="w-5 h-5 fill-current" />
              START DAILY PAPER
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-bg-panel border border-border-main rounded-xl p-5 sm:p-8 shadow-lg"
          >
            <div className="flex justify-between items-start mb-3 sm:mb-4">
              <div className="bg-warning-main/10 p-2 sm:p-3 rounded-lg border border-warning-main/20">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-warning-main" />
              </div>
              {mistakesCount > 0 && (
                <button 
                  onClick={onClearMistakes}
                  className="text-xs text-text-muted hover:text-danger-main flex items-center gap-1 transition-colors"
                >
                  <Trash2 className="w-3 h-3" />
                  Clear
                </button>
              )}
            </div>
            
            <h2 className="text-lg sm:text-xl font-extrabold text-text-main mb-1 sm:mb-2">Mistake Bank</h2>
            <p className="text-text-muted text-xs sm:text-sm mb-5 sm:mb-6">
              You have {mistakesCount} questions saved for spaced repetition.
            </p>

            <button
              onClick={onStartMistakes}
              disabled={mistakesCount === 0}
              className="w-full btn bg-warning-main hover:bg-orange-600 text-white py-3 rounded-lg font-extrabold shadow-lg shadow-orange-500/20 active:scale-95 transition-transform disabled:opacity-50 disabled:active:scale-100"
            >
              <Sparkles className="w-5 h-5" />
              REVIEW MISTAKES
            </button>
          </motion.div>
        </div>

        {/* Analytics Column */}
        <div className="space-y-6">
          {latestResult && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="bg-bg-panel border border-border-main rounded-xl p-5 sm:p-8 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-lg border border-blue-200">
                  <BookCheck className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-xl font-extrabold text-text-main">Last Saved Attempt</h2>
              </div>

              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-bg-main p-3 rounded-lg border border-border-main">
                  <div className="text-lg sm:text-xl font-black text-primary-main">{latestResult.score}/{latestResult.total}</div>
                  <div className="text-[10px] font-extrabold text-text-muted uppercase tracking-widest">Score</div>
                </div>
                <div className="bg-bg-main p-3 rounded-lg border border-border-main">
                  <div className="text-lg sm:text-xl font-black text-success-main">{latestCorrectCount}</div>
                  <div className="text-[10px] font-extrabold text-text-muted uppercase tracking-widest">Correct Qs</div>
                </div>
                <div className="bg-bg-main p-3 rounded-lg border border-border-main">
                  <div className="text-lg sm:text-xl font-black text-warning-main">{latestAccuracy}%</div>
                  <div className="text-[10px] font-extrabold text-text-muted uppercase tracking-widest">Accuracy</div>
                </div>
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-bg-panel border border-border-main rounded-xl p-5 sm:p-8 shadow-lg h-full flex flex-col min-h-[350px]"
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="bg-success-main/10 p-3 rounded-lg border border-success-main/20">
                <LineChartIcon className="w-5 h-5 text-success-main" />
              </div>
              <h2 className="text-xl font-extrabold text-text-main">Performance Trajectory</h2>
            </div>

            {chartData.length > 0 ? (
              <div className="flex-1 min-h-[250px] w-full">
                <Suspense
                  fallback={
                    <div className="h-full w-full flex items-center justify-center text-text-muted text-xs font-semibold uppercase tracking-wide">
                      Loading Chart...
                    </div>
                  }
                >
                  <HistoryChart data={chartData} />
                </Suspense>
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-text-muted text-sm text-center">
                <LineChartIcon className="w-10 h-10 mb-3 opacity-20" />
                <p>No history data recorded yet.<br/>Take a test to see your trajectory!</p>
              </div>
            )}
          </motion.div>
        </div>

      </div>
    </div>
  );
}
