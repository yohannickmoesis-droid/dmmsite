"use client";

import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import DiagnosticQuiz, { type DiagnosticQuizHandle } from "./DiagnosticQuiz";

export default function MecanismesQuiz() {
  const quizRef = useRef<DiagnosticQuizHandle>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("quiz") === "1") {
      quizRef.current?.start();
    }
  }, [searchParams]);

  return (
    <div id="quiz-diagnostic" className="text-center scroll-mt-24">
      <DiagnosticQuiz ref={quizRef} />
    </div>
  );
}
