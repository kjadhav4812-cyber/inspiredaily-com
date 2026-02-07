import { useState } from 'react';
import { quotes, Category } from '@/data/quotes';
import QuoteCard from './QuoteCard';
import CategoryFilter from './CategoryFilter';

const QuoteCollection = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');

  const filteredQuotes = selectedCategory === 'all' 
    ? quotes 
    : quotes.filter(q => q.category === selectedCategory);

  return (
    <section className="px-6 py-20 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-foreground">
            Explore Our Collection
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse through our curated selection of inspiring quotes. Click any card to copy.
          </p>
        </div>
        
        <CategoryFilter selected={selectedCategory} onSelect={setSelectedCategory} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredQuotes.map((quote, index) => (
            <QuoteCard key={quote.id} quote={quote} index={index} />
          ))}
        </div>
        
        {filteredQuotes.length === 0 && (
          <p className="text-center text-muted-foreground py-12">
            No quotes found in this category.
          </p>
        )}
      </div>
    </section>
  );
};

export default QuoteCollection;
