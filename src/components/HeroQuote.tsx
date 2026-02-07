import { useState, useEffect } from 'react';
import { Quote, getRandomQuote } from '@/data/quotes';
import { Copy, RefreshCw, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const HeroQuote = () => {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const [isAnimating, setIsAnimating] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleNewQuote = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setQuote(getRandomQuote());
      setIsAnimating(false);
    }, 300);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(`"${quote.text}" — ${quote.author}`);
    setCopied(true);
    toast.success('Quote copied to clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center px-6 py-20 quote-gradient">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="relative max-w-4xl mx-auto text-center">
        <span className="inline-block px-4 py-1.5 mb-8 text-sm font-medium tracking-wide uppercase bg-secondary text-secondary-foreground rounded-full animate-fade-in">
          Quote of the Moment
        </span>
        
        <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
          <blockquote className="mb-8">
            <p className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight text-balance text-foreground">
              "{quote.text}"
            </p>
          </blockquote>
          
          <footer className="mb-10">
            <cite className="text-lg md:text-xl text-muted-foreground not-italic">
              — {quote.author}
            </cite>
          </footer>
        </div>
        
        <div className="flex items-center justify-center gap-4">
          <Button
            variant="outline"
            size="lg"
            onClick={handleCopy}
            className="group"
          >
            {copied ? (
              <Check className="w-4 h-4 mr-2 text-primary" />
            ) : (
              <Copy className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
            )}
            {copied ? 'Copied!' : 'Copy'}
          </Button>
          
          <Button
            size="lg"
            onClick={handleNewQuote}
            className="group"
          >
            <RefreshCw className={`w-4 h-4 mr-2 transition-transform group-hover:rotate-180 duration-500 ${isAnimating ? 'animate-spin' : ''}`} />
            New Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroQuote;
