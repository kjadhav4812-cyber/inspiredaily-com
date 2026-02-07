import { useState } from 'react';
import { Quote } from '@/data/quotes';
import { Copy, Check } from 'lucide-react';
import { toast } from 'sonner';

interface QuoteCardProps {
  quote: Quote;
  index: number;
}

const categoryColors: Record<string, string> = {
  motivation: 'bg-amber-100 text-amber-800',
  success: 'bg-emerald-100 text-emerald-800',
  wisdom: 'bg-blue-100 text-blue-800',
  courage: 'bg-rose-100 text-rose-800',
  perseverance: 'bg-violet-100 text-violet-800',
  hindi: 'bg-orange-100 text-orange-800',
};

const QuoteCard = ({ quote, index }: QuoteCardProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(`"${quote.text}" — ${quote.author}`);
    setCopied(true);
    toast.success('Quote copied to clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <article 
      className="quote-card group cursor-pointer"
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={handleCopy}
    >
      <div className="flex items-start justify-between mb-4">
        <span className={`px-3 py-1 text-xs font-medium rounded-full capitalize ${categoryColors[quote.category]}`}>
          {quote.category}
        </span>
        <button 
          className="p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity bg-secondary hover:bg-secondary/80"
          onClick={(e) => {
            e.stopPropagation();
            handleCopy();
          }}
        >
          {copied ? (
            <Check className="w-4 h-4 text-primary" />
          ) : (
            <Copy className="w-4 h-4 text-muted-foreground" />
          )}
        </button>
      </div>
      
      <blockquote className="mb-4">
        <p className="text-lg md:text-xl font-serif leading-relaxed text-foreground">
          "{quote.text}"
        </p>
      </blockquote>
      
      <footer>
        <cite className="text-sm text-muted-foreground not-italic font-medium">
          — {quote.author}
        </cite>
      </footer>
    </article>
  );
};

export default QuoteCard;
