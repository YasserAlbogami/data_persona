import { Persona } from '@/data/personas';
import { useI18n } from '@/lib/i18n';
import { cn } from '@/lib/utils';

interface PersonaTileProps {
  persona: Persona;
  onClick?: () => void;
  className?: string;
}

export function PersonaTile({ persona, onClick, className }: PersonaTileProps) {
  const { language } = useI18n();
  
  const title = language === 'ar' ? persona.titleAR : persona.titleEN;
  const summary = language === 'ar' ? persona.summaryAR : persona.summaryEN;

  return (
    <div
      onClick={onClick}
      className={cn(
        "group relative overflow-hidden rounded-2xl p-6 text-white cursor-pointer",
        "transition-smooth hover-lift shadow-card",
        persona.colorClass,
        className
      )}
    >
      <div className="relative z-10 flex flex-col h-full min-h-[200px]">
        <div className="text-4xl mb-3 transition-smooth group-hover:scale-110">
          {persona.emoji}
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-white">
          {title}
        </h3>
        
        <p className="text-white/90 text-sm leading-relaxed flex-1">
          {summary}
        </p>
        
        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-smooth">
          <div className="text-xs text-white/80 font-medium">
            {language === 'ar' ? 'اضغط لمعرفة المزيد' : 'Click to learn more'}
          </div>
        </div>
      </div>
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/20 pointer-events-none" />
    </div>
  );
}