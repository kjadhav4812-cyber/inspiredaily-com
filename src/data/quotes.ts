export interface Quote {
  id: number;
  text: string;
  author: string;
  category: Category;
}

export type Category = 'motivation' | 'success' | 'wisdom' | 'courage' | 'perseverance' | 'hindi';

export const categories: { value: Category; label: string }[] = [
  { value: 'motivation', label: 'Motivation' },
  { value: 'success', label: 'Success' },
  { value: 'wisdom', label: 'Wisdom' },
  { value: 'courage', label: 'Courage' },
  { value: 'perseverance', label: 'Perseverance' },
  { value: 'hindi', label: 'हिंदी' },
];

export const quotes: Quote[] = [
  {
    id: 1,
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "motivation"
  },
  {
    id: 2,
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    category: "perseverance"
  },
  {
    id: 3,
    text: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein",
    category: "wisdom"
  },
  {
    id: 4,
    text: "Courage is not the absence of fear, but rather the judgment that something else is more important than fear.",
    author: "Ambrose Redmoon",
    category: "courage"
  },
  {
    id: 5,
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    category: "motivation"
  },
  {
    id: 6,
    text: "It is not the strongest of the species that survives, nor the most intelligent, but the one most responsive to change.",
    author: "Charles Darwin",
    category: "wisdom"
  },
  {
    id: 7,
    text: "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
    category: "success"
  },
  {
    id: 8,
    text: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas Edison",
    category: "perseverance"
  },
  {
    id: 9,
    text: "Life is 10% what happens to you and 90% how you react to it.",
    author: "Charles R. Swindoll",
    category: "wisdom"
  },
  {
    id: 10,
    text: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky",
    category: "courage"
  },
  {
    id: 11,
    text: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins",
    category: "motivation"
  },
  {
    id: 12,
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
    category: "perseverance"
  },
  {
    id: 13,
    text: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs",
    category: "wisdom"
  },
  {
    id: 14,
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
    category: "success"
  },
  {
    id: 15,
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
    category: "courage"
  },
  {
    id: 16,
    text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson",
    category: "motivation"
  },
  {
    id: 17,
    text: "कर्म करो, फल की चिंता मत करो।",
    author: "भगवद्गीता",
    category: "hindi"
  },
  {
    id: 18,
    text: "जो व्यक्ति अपने क्रोध को जीत लेता है, वह सबसे बड़ा योद्धा है।",
    author: "महात्मा गांधी",
    category: "hindi"
  },
  {
    id: 19,
    text: "सपने वो नहीं जो आप सोते समय देखते हैं, सपने वो हैं जो आपको सोने नहीं देते।",
    author: "ए.पी.जे. अब्दुल कलाम",
    category: "hindi"
  },
  {
    id: 20,
    text: "खुद वो बदलाव बनिए जो आप दुनिया में देखना चाहते हैं।",
    author: "महात्मा गांधी",
    category: "hindi"
  },
  {
    id: 21,
    text: "असफलता तब होती है जब आप कोशिश करना बंद कर देते हैं।",
    author: "स्वामी विवेकानंद",
    category: "hindi"
  },
  {
    id: 22,
    text: "उठो, जागो और तब तक मत रुको जब तक लक्ष्य प्राप्त न हो जाए।",
    author: "स्वामी विवेकानंद",
    category: "hindi"
  },
  {
    id: 23,
    text: "जीवन में कठिनाइयाँ हमें बर्बाद करने नहीं आतीं, बल्कि हमारी छिपी हुई शक्ति को बाहर निकालने आती हैं।",
    author: "ए.पी.जे. अब्दुल कलाम",
    category: "hindi"
  },
  {
    id: 24,
    text: "मन के हारे हार है, मन के जीते जीत।",
    author: "लोकोक्ति",
    category: "hindi"
  },
];

export const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

export const getQuotesByCategory = (category: Category): Quote[] => {
  return quotes.filter(quote => quote.category === category);
};
