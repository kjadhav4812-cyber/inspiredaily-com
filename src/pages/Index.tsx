import Header from '@/components/Header';
import HeroQuote from '@/components/HeroQuote';
import QuoteCollection from '@/components/QuoteCollection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroQuote />
        <div id="quotes">
          <QuoteCollection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
