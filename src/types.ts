export interface Question {
  id: number | string;
  text: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  subject: string;
}

export interface QuizState {
  currentQuestionIndex: number;
  userAnswers: Record<string | number, 'A' | 'B' | 'C' | 'D'>;
  markedForReview: (number | string)[];
  status: 'landing' | 'quiz' | 'result';
  activeMode?: 'daily' | 'mistakes';
}

export interface TestResult {
  id: string;
  date: string;
  score: number;
  total: number;
  correctQuestionIds: (number | string)[];
  subjectScores: Record<string, { correct: number; total: number }>;
  mode: 'daily' | 'mistakes';
}
