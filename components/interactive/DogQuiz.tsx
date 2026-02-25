'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import { trackEvent } from '@/components/analytics/GoogleAnalytics';

interface Question {
  id: string;
  question: string;
  options: {
    value: string;
    label: string;
    score: number;
  }[];
}

const QUESTIONS: Question[] = [
  {
    id: 'last-grooming',
    question: '¿Cuándo fue la última vez que tu perro fue al peluquero?',
    options: [
      { value: 'less-1-month', label: 'Hace menos de 1 mes', score: 1 },
      { value: '1-3-months', label: 'Hace 1-3 meses', score: 2 },
      { value: '3-6-months', label: 'Hace 3-6 meses', score: 3 },
      { value: 'more-6-months', label: 'Hace más de 6 meses o nunca', score: 4 },
    ],
  },
  {
    id: 'coat-condition',
    question: '¿Cómo está el pelaje de tu perro?',
    options: [
      { value: 'clean-brushed', label: 'Limpio y bien cepillado', score: 1 },
      { value: 'needs-brushing', label: 'Necesita un buen cepillado', score: 2 },
      { value: 'tangled', label: 'Con nudos y enredos', score: 3 },
      { value: 'very-matted', label: 'Muy enredado o con rastas', score: 4 },
    ],
  },
  {
    id: 'coat-length',
    question: '¿Qué tipo de pelaje tiene tu perro?',
    options: [
      { value: 'short', label: 'Pelo corto', score: 1 },
      { value: 'medium', label: 'Pelo medio', score: 2 },
      { value: 'long', label: 'Pelo largo', score: 3 },
      { value: 'curly', label: 'Pelo rizado o lanoso', score: 3 },
    ],
  },
  {
    id: 'behavior',
    question: '¿Cómo se comporta tu perro durante el baño?',
    options: [
      { value: 'calm', label: 'Muy tranquilo y cooperativo', score: 1 },
      { value: 'nervous', label: 'Un poco nervioso pero manejable', score: 2 },
      { value: 'anxious', label: 'Ansioso o inquieto', score: 3 },
      { value: 'difficult', label: 'Muy difícil o agresivo', score: 4 },
    ],
  },
  {
    id: 'special-needs',
    question: '¿Tu perro tiene alguna necesidad especial?',
    options: [
      { value: 'none', label: 'Ninguna', score: 0 },
      { value: 'sensitive-skin', label: 'Piel sensible o alergias', score: 2 },
      { value: 'parasites', label: 'Problemas de parásitos', score: 3 },
      { value: 'elderly', label: 'Es mayor o tiene movilidad reducida', score: 2 },
    ],
  },
];

interface Recommendation {
  services: string[];
  explanation: string;
  priority: 'low' | 'medium' | 'high';
}

function getRecommendation(answers: Record<string, string>): Recommendation {
  let totalScore = 0;
  
  QUESTIONS.forEach((question) => {
    const answer = answers[question.id];
    const option = question.options.find((opt) => opt.value === answer);
    if (option) {
      totalScore += option.score;
    }
  });

  const services: string[] = [];
  let explanation = '';
  let priority: 'low' | 'medium' | 'high' = 'low';

  // Determine services based on score and specific answers
  if (totalScore <= 5) {
    services.push('Baño básico');
    explanation = 'Tu perro está en buen estado. Un baño básico será suficiente para mantenerlo limpio y saludable.';
    priority = 'low';
  } else if (totalScore <= 10) {
    services.push('Baño completo', 'Cepillado profundo');
    explanation = 'Tu perro necesita un poco más de atención. Recomendamos un baño completo con cepillado profundo para eliminar nudos y mantener su pelaje saludable.';
    priority = 'medium';
  } else {
    services.push('Baño completo', 'Peluquería', 'Desenredado');
    explanation = 'Tu perro necesita atención urgente. El pelaje requiere un trabajo intensivo de desenredado y peluquería profesional.';
    priority = 'high';
  }

  // Add specific services based on answers
  if (answers['special-needs'] === 'parasites') {
    services.push('Tratamiento antiparasitario');
  }
  if (answers['special-needs'] === 'sensitive-skin') {
    services.push('Productos hipoalergénicos');
  }
  if (answers['coat-length'] === 'long' || answers['coat-length'] === 'curly') {
    if (!services.includes('Peluquería')) {
      services.push('Corte de pelo');
    }
  }

  return { services, explanation, priority };
}

export function DogQuiz() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (value: string) => {
    const currentQ = QUESTIONS[currentQuestion];
    if (!currentQ) return;
    
    setAnswers((prev) => ({
      ...prev,
      [currentQ.id]: value,
    }));
  };

  const handleNext = () => {
    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      // Track quiz completion
      const recommendation = getRecommendation(answers);
      trackEvent('quiz_completed', {
        priority: recommendation.priority,
        services_count: recommendation.services.length,
      });
      
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  const handleBooking = () => {
    router.push('/reservar');
  };

  const question = QUESTIONS[currentQuestion];
  const currentAnswer = question ? answers[question.id] : undefined;
  const canProceed = !!currentAnswer;
  const recommendation = showResults ? getRecommendation(answers) : null;

  if (!question) {
    return null;
  }

  if (showResults && recommendation) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">
            {recommendation.priority === 'high' ? '🚨' : recommendation.priority === 'medium' ? '⚠️' : '✅'}
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            ¡Resultados del Quiz!
          </h2>
          <p className="text-gray-600">
            Basándonos en tus respuestas, aquí está nuestra recomendación
          </p>
        </div>

        {/* Priority Badge */}
        <div className="flex justify-center mb-6">
          <span
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              recommendation.priority === 'high'
                ? 'bg-red-100 text-red-800'
                : recommendation.priority === 'medium'
                ? 'bg-yellow-100 text-yellow-800'
                : 'bg-green-100 text-green-800'
            }`}
          >
            {recommendation.priority === 'high'
              ? 'Atención Urgente'
              : recommendation.priority === 'medium'
              ? 'Atención Recomendada'
              : 'Mantenimiento Regular'}
          </span>
        </div>

        {/* Explanation */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <p className="text-gray-800">{recommendation.explanation}</p>
        </div>

        {/* Recommended Services */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Servicios Recomendados:
          </h3>
          <ul className="space-y-2">
            {recommendation.services.map((service, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <span className="text-primary mr-2">✓</span>
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Why Section */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            ¿Por qué recomendamos esto?
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            {answers['last-grooming'] === 'more-6-months' && (
              <li>• Ha pasado mucho tiempo desde su última visita al peluquero</li>
            )}
            {(answers['coat-condition'] === 'tangled' || answers['coat-condition'] === 'very-matted') && (
              <li>• El pelaje presenta nudos que requieren atención profesional</li>
            )}
            {(answers['coat-length'] === 'long' || answers['coat-length'] === 'curly') && (
              <li>• El tipo de pelaje requiere mantenimiento regular</li>
            )}
            {answers['special-needs'] !== 'none' && (
              <li>• Necesidades especiales que requieren productos o técnicas específicas</li>
            )}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Button onClick={handleRestart} variant="outline" className="flex-1">
            Repetir Quiz
          </Button>
          <Button onClick={handleBooking} className="flex-1">
            Reservar Cita
          </Button>
        </div>
      </div>
    );
  }

  const progress = ((currentQuestion + 1) / QUESTIONS.length) * 100;

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Pregunta {currentQuestion + 1} de {QUESTIONS.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {question.question}
        </h2>

        <div className="space-y-3">
          {question.options.map((option) => (
            <label
              key={option.value}
              className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                currentAnswer === option.value
                  ? 'border-primary bg-primary/5'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <input
                type="radio"
                name={question.id}
                value={option.value}
                checked={currentAnswer === option.value}
                onChange={() => handleAnswer(option.value)}
                className="sr-only"
              />
              <div className="flex items-center">
                <div
                  className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                    currentAnswer === option.value
                      ? 'border-primary'
                      : 'border-gray-300'
                  }`}
                >
                  {currentAnswer === option.value && (
                    <div className="w-3 h-3 rounded-full bg-primary" />
                  )}
                </div>
                <span className="text-gray-900">{option.label}</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-4">
        <Button
          onClick={handlePrevious}
          variant="outline"
          disabled={currentQuestion === 0}
          className="flex-1"
        >
          Anterior
        </Button>
        <Button
          onClick={handleNext}
          disabled={!canProceed}
          className="flex-1"
        >
          {currentQuestion === QUESTIONS.length - 1 ? 'Ver Resultados' : 'Siguiente'}
        </Button>
      </div>
    </div>
  );
}
