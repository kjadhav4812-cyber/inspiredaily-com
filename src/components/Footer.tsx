import { Heart, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="px-6 py-12 border-t border-border bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-primary/10">
              <Sparkles className="w-4 h-4 text-primary" />
            </div>
            <span className="font-serif font-semibold text-foreground">Inspire</span>
          </div>
          
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> for dreamers everywhere
          </p>
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Inspire. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
