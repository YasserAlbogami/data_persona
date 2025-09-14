import { useI18n } from '@/lib/i18n';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  current: number;
  total: number;
  className?: string;
}

export function ProgressBar({ current, total, className }: ProgressBarProps) {
  const { t } = useI18n();
  const percentage = (current / total) * 100;

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>{t('quiz.progress').replace('{{current}}', current.toString()).replace('{{total}}', total.toString())}</span>
        <span className="font-medium">{Math.round(percentage)}%</span>
      </div>
      
      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
        <div 
          className="h-full bg-gradient-hero progress-fill rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}