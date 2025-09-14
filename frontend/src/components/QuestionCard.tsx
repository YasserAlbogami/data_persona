import { Question } from '@/data/personas';
import { useI18n } from '@/lib/i18n';
import { cn } from '@/lib/utils';

interface QuestionCardProps {
  question: Question;
  selectedOption: number | null;
  onOptionSelect: (optionIndex: number) => void;
}

export function QuestionCard({ question, selectedOption, onOptionSelect }: QuestionCardProps) {
  const { language, t } = useI18n();
  
  const questionText = language === 'ar' ? question.questionAR : question.questionEN;

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          {questionText}
        </h2>
        <p className="text-muted-foreground">
          {t('quiz.select')}
        </p>
      </div>

      <div className="grid gap-4">
        {question.options.map((option, index) => {
          const optionText = language === 'ar' ? option.textAR : option.textEN;
          const isSelected = selectedOption === index;

          return (
            <button
              key={index}
              onClick={() => onOptionSelect(index)}
              className={cn(
                "option-card p-4 rounded-xl text-left bg-card shadow-soft",
                "hover:shadow-card focus:outline-none focus:ring-2 focus:ring-primary",
                isSelected && "selected ring-2 ring-primary",
                "transition-smooth"
              )}
            >
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <div className={cn(
                  "w-5 h-5 rounded-full border-2 flex-shrink-0 mt-0.5",
                  "transition-smooth",
                  isSelected 
                    ? "border-primary bg-primary" 
                    : "border-muted-foreground/40"
                )}>
                  {isSelected && (
                    <div className="w-full h-full rounded-full bg-white scale-50" />
                  )}
                </div>
                <p className="text-foreground leading-relaxed">
                  {optionText}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}