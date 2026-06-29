import { Link } from 'wouter';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Blog() {
  const articles = [
    {
      id: 1,
      title: 'The History of Premier League Jerseys',
      excerpt: 'Explore how Premier League jerseys have evolved over the decades, from classic designs to modern innovations.',
      category: 'History',
      author: 'John Smith',
      date: 'June 20, 2026',
      image: '📸',
    },
    {
      id: 2,
      title: 'How to Care for Your Football Jersey',
      excerpt: 'Learn the best practices for washing, drying, and storing your premium football jerseys to keep them looking new.',
      category: 'Care Guide',
      author: 'Sarah Johnson',
      date: 'June 15, 2026',
      image: '🧺',
    },
    {
      id: 3,
      title: 'Top 10 Most Iconic Football Jerseys of All Time',
      excerpt: 'Discover the jerseys that changed football fashion and became timeless pieces in sports history.',
      category: 'Fashion',
      author: 'Mike Davis',
      date: 'June 10, 2026',
      image: '👑',
    },
    {
      id: 4,
      title: 'Behind the Design: Creating the Perfect Jersey',
      excerpt: 'An insider look at how top designers create football jerseys that balance style, comfort, and performance.',
      category: 'Design',
      author: 'Emma Wilson',
      date: 'June 5, 2026',
      image: '✏️',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">JerseyVault Blog</h1>
          <p className="text-xl text-gray-600">Stories, tips, and insights about football jerseys and collecting</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <Link key={article.id} href={`/blog/${article.id}`}>
              <a className="group">
                <div className="bg-gray-100 rounded-lg h-64 mb-4 overflow-hidden flex items-center justify-center hover:shadow-lg transition-shadow">
                  <div className="text-6xl">{article.image}</div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 pt-2">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                  <div className="pt-2">
                    <Button variant="outline" className="w-full">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
