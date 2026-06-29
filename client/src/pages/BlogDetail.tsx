import { Link, useRoute } from 'wouter';
import { ChevronLeft, Calendar, User, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function BlogDetail() {
  const [, params] = useRoute('/blog/:id');
  const articleId = params?.id;

  // Mock article data - replace with real data from backend
  const article = {
    id: articleId,
    title: 'The History of Premier League Jerseys',
    category: 'History',
    author: 'John Smith',
    date: 'June 20, 2026',
    readTime: '8 min read',
    image: '📸',
    excerpt: 'Explore how Premier League jerseys have evolved over the decades, from classic designs to modern innovations.',
    content: `
      The Premier League has a rich history spanning decades, and the evolution of its jerseys tells a fascinating story about fashion, technology, and club identity.

      ## The Early Years (1992-2000)

      When the Premier League was founded in 1992, jerseys were relatively simple affairs. Clubs used traditional designs with minimal sponsorship. Manchester United wore their iconic red with white trim, while Liverpool displayed their classic all-red ensemble. The technology was basic, with cotton-heavy fabrics that absorbed sweat and required careful maintenance.

      ## The Modern Era (2000-2010)

      As the 2000s progressed, jersey technology advanced dramatically. Synthetic materials replaced cotton, offering better moisture-wicking and durability. Clubs began experimenting with more complex designs, incorporating multiple colors and intricate patterns. Sponsorship deals became more prominent, with logos taking up more real estate on the chest and sleeves.

      ## The Contemporary Period (2010-Present)

      Today's Premier League jerseys are marvels of modern engineering. Advanced fabrics like Dri-FIT and Climacool keep players cool and dry during intense matches. Designs have become more sophisticated, with clubs working with top fashion designers to create jerseys that are both functional and aesthetically pleasing.

      The shift towards sustainability has also influenced jersey production, with many clubs now using recycled materials in their designs. This reflects both environmental consciousness and the changing expectations of modern fans.

      ## Collectibility and Value

      Vintage Premier League jerseys have become highly sought-after collectibles. A 1990s Manchester United jersey in good condition can fetch hundreds or even thousands of dollars. This has created a thriving market for authentic vintage jerseys, making them not just nostalgic pieces but valuable investments.

      The future of Premier League jerseys looks exciting, with innovations in smart fabrics and sustainable materials on the horizon. Whether you're a collector or a casual fan, these jerseys represent more than just athletic wear—they're pieces of football history.
    `,
    relatedArticles: [
      { id: 2, title: 'How to Care for Your Football Jersey', category: 'Care Guide' },
      { id: 3, title: 'Top 10 Most Iconic Football Jerseys of All Time', category: 'Fashion' },
      { id: 4, title: 'Behind the Design: Creating the Perfect Jersey', category: 'Design' },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <Link href="/blog">
          <a className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8">
            <ChevronLeft className="w-4 h-4" />
            Back to Blog
          </a>
        </Link>

        {/* Article Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              {article.category}
            </span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">{article.title}</h1>
          <div className="flex flex-wrap items-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{article.date}</span>
            </div>
            <span>{article.readTime}</span>
          </div>
        </div>

        {/* Article Image */}
        <div className="bg-gray-100 rounded-lg h-96 mb-12 flex items-center justify-center">
          <div className="text-9xl">{article.image}</div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">{article.excerpt}</p>
          <div className="text-gray-700 leading-relaxed space-y-6">
            {article.content.split('\n\n').map((paragraph, idx) => (
              <div key={idx}>
                {paragraph.startsWith('##') ? (
                  <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                ) : (
                  <p>{paragraph}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Share Section */}
        <div className="border-t pt-8 mb-12">
          <div className="flex items-center gap-4">
            <span className="font-semibold text-gray-900">Share this article:</span>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>
        </div>

        {/* Related Articles */}
        <div className="border-t pt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {article.relatedArticles.map((related) => (
              <Link key={related.id} href={`/blog/${related.id}`}>
                <a className="group">
                  <div className="bg-gray-100 rounded-lg h-48 mb-4 flex items-center justify-center group-hover:shadow-lg transition-shadow">
                    <div className="text-5xl">📄</div>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                      {related.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
                    {related.title}
                  </h3>
                </a>
              </Link>
            ))}
          </div>
        </div>

        {/* Author Bio */}
        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
              👤
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{article.author}</h3>
              <p className="text-gray-700">
                John is a passionate football enthusiast and jersey collector with over 15 years of experience. He writes about the intersection of football culture, fashion, and history.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
