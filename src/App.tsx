import React, { useState, useEffect, lazy, Suspense } from 'react';
import Layout from './components/Layout';
import { QuizState, Question } from './types';

const Landing = lazy(() => import('./components/Landing'));
const Quiz = lazy(() => import('./components/Quiz'));
const Result = lazy(() => import('./components/Result'));

export default function App() {
  const [customQuestions, setCustomQuestions] = useState<Question[]>([]);
  const [questionsReady, setQuestionsReady] = useState(false);

  const [mistakes, setMistakes] = useState<Question[]>(() => {
    const saved = localStorage.getItem('inicet_mistakes');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return [];
  });

  const [state, setState] = useState<QuizState>(() => {
    const saved = localStorage.getItem('inicet_quiz_state');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return {
          ...parsed,
          markedForReview: parsed.markedForReview || [],
          activeMode: parsed.activeMode || 'daily'
        };
      } catch (e) {
        console.error("Failed to parse saved state", e);
      }
    }
    return {
      currentQuestionIndex: 0,
      userAnswers: {},
      markedForReview: [],
      status: 'landing',
      activeMode: 'daily'
    };
  });

  useEffect(() => {
    const saved = localStorage.getItem('inicet_custom_questions');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setCustomQuestions(parsed);
          setQuestionsReady(true);
          return;
        }
      } catch (e) {
        console.error(e);
      }
    }

    // Load bundled default questions lazily to reduce the initial JS payload.
    import('./data')
      .then(({ questions }) => setCustomQuestions(questions))
      .catch((e) => console.error('Failed to load default questions', e))
      .finally(() => setQuestionsReady(true));
  }, []);

  useEffect(() => {
    if (!questionsReady) return;
    localStorage.setItem('inicet_custom_questions', JSON.stringify(customQuestions));
  }, [customQuestions, questionsReady]);

  useEffect(() => {
    localStorage.setItem('inicet_quiz_state', JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [state.currentQuestionIndex, state.status]);

  const activeQuestions = state.activeMode === 'mistakes' ? mistakes : customQuestions;
  const isQuestionDataLoading = state.activeMode !== 'mistakes' && !questionsReady;

  const handleStartDaily = () => {
    if (state.status === 'result' || state.activeMode !== 'daily') {
      setState({
        currentQuestionIndex: 0,
        userAnswers: {},
        markedForReview: [],
        status: 'quiz',
        activeMode: 'daily'
      });
    } else {
      setState(prev => ({ ...prev, status: 'quiz', activeMode: 'daily' }));
    }
  };

  const handleStartMistakes = () => {
    setState({
      currentQuestionIndex: 0,
      userAnswers: {},
      markedForReview: [],
      status: 'quiz',
      activeMode: 'mistakes'
    });
  };

  const handleUploadQuestions = (newQuestions: Question[]) => {
    setCustomQuestions(newQuestions);
    // Restart active daily state automatically
    setState({
      currentQuestionIndex: 0,
      userAnswers: {},
      markedForReview: [],
      status: 'landing',
      activeMode: 'daily'
    });
  };

  const handleAnswer = (questionId: string | number, answer: 'A' | 'B' | 'C' | 'D') => {
    setState(prev => ({
      ...prev,
      userAnswers: { ...prev.userAnswers, [questionId]: answer }
    }));
  };

  const handleToggleMark = (questionId: string | number) => {
    setState(prev => {
      const isMarked = prev.markedForReview.includes(questionId);
      if (isMarked) {
        return {
          ...prev,
          markedForReview: prev.markedForReview.filter(id => id !== questionId)
        };
      } else {
        return {
          ...prev,
          markedForReview: [...prev.markedForReview, questionId]
        };
      }
    });
  };

  const handleJumpToQuestion = (index: number) => {
    setState(prev => ({ ...prev, currentQuestionIndex: index }));
  };

  const handleNext = () => {
    if (state.currentQuestionIndex < activeQuestions.length - 1) {
      setState(prev => ({ ...prev, currentQuestionIndex: prev.currentQuestionIndex + 1 }));
    }
  };

  const handlePrev = () => {
    if (state.currentQuestionIndex > 0) {
      setState(prev => ({ ...prev, currentQuestionIndex: prev.currentQuestionIndex - 1 }));
    }
  };

  const handleFinish = () => {
    setState(prev => ({ ...prev, status: 'result' }));
  };

  const handleRestart = () => {
    localStorage.removeItem('inicet_quiz_state');
    setState({
      currentQuestionIndex: 0,
      userAnswers: {},
      markedForReview: [],
      status: 'landing',
      activeMode: 'daily'
    });
  };

  const handleClearMistakes = () => {
    setMistakes([]);
    localStorage.removeItem('inicet_mistakes');
  };

  return (
    <Layout onHome={state.status !== 'landing' ? handleRestart : undefined}>
      <Suspense
        fallback={
          <div className="flex-1 flex items-center justify-center bg-bg-main text-text-muted text-sm font-semibold tracking-wide uppercase">
            Loading...
          </div>
        }
      >
        {state.status === 'landing' && (
          <Landing 
            onStartDaily={handleStartDaily}
            onStartMistakes={handleStartMistakes}
            onUpload={handleUploadQuestions}
            onClearMistakes={handleClearMistakes}
            dailyCount={customQuestions.length} 
            mistakesCount={mistakes.length}
          />
        )}
        
        {state.status === 'quiz' && (
          isQuestionDataLoading ? (
            <div className="flex-1 flex items-center justify-center bg-bg-main text-text-muted text-sm font-semibold tracking-wide uppercase">
              Loading Questions...
            </div>
          ) : (
            <Quiz 
              questions={activeQuestions}
              currentIdx={state.currentQuestionIndex}
              userAnswers={state.userAnswers}
              markedForReview={state.markedForReview}
              onAnswer={handleAnswer}
              onToggleMark={handleToggleMark}
              onJump={handleJumpToQuestion}
              onNext={handleNext}
              onPrev={handlePrev}
              onFinish={handleFinish}
            />
          )
        )}

        {state.status === 'result' && (
          <Result 
            questions={activeQuestions}
            userAnswers={state.userAnswers}
            mode={state.activeMode || 'daily'}
            onRestart={handleRestart}
            setMistakes={setMistakes}
          />
        )}
      </Suspense>
    </Layout>
  );
}

