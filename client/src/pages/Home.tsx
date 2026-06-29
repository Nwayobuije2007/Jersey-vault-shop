import { Link } from 'wouter';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Authentic Football Jerseys for Every Fan
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Discover premium, officially licensed football jerseys from the world's top clubs and leagues. Elevate your collection with JerseyVault.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/shop">
                  <a>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg w-full sm:w-auto">
                      Shop Now
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </a>
                </Link>
                <Link href="/about">
                  <a>
                    <Button variant="outline" className="px-8 py-3 text-lg w-full sm:w-auto">
                      Learn More
                    </Button>
                  </a>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-gradient-to-br from-blue-400 to-indigo-600 rounded-lg h-96 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">⚽</div>
                  <p className="text-xl font-semibold">Premium Jerseys</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jerseys Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Collections</h2>
            <p className="text-xl text-gray-600">Handpicked jerseys from the world's most iconic teams</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Featured Item 1 */}
            <div className="group">
              <div className="bg-gray-100 rounded-lg h-80 mb-4 overflow-hidden flex items-center justify-center hover:shadow-lg transition-shadow">
                <div className="text-6xl">👕</div>
              </div>
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Manchester United</h3>
                  <p className="text-gray-600">2023/24 Home Kit</p>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium text-gray-700">4.9</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">Official Premier League jersey with authentic branding</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900">$89.99</span>
                <Button className="bg-blue-600 hover:bg-blue-700">Add to Cart</Button>
              </div>
            </div>

            {/* Featured Item 2 */}
            <div className="group">
              <div className="bg-gray-100 rounded-lg h-80 mb-4 overflow-hidden flex items-center justify-center hover:shadow-lg transition-shadow">
                <div className="text-6xl">👕</div>
              </div>
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Real Madrid</h3>
                  <p className="text-gray-600">2023/24 Home Kit</p>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium text-gray-700">5.0</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">Iconic white jersey from the Spanish giants</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900">$94.99</span>
                <Button className="bg-blue-600 hover:bg-blue-700">Add to Cart</Button>
              </div>
            </div>

            {/* Featured Item 3 */}
            <div className="group">
              <div className="bg-gray-100 rounded-lg h-80 mb-4 overflow-hidden flex items-center justify-center hover:shadow-lg transition-shadow">
                <div className="text-6xl">👕</div>
              </div>
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Paris Saint-Germain</h3>
                  <p className="text-gray-600">2023/24 Home Kit</p>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium text-gray-700">4.8</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">Striking blue jersey from the French champions</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900">$92.99</span>
                <Button className="bg-blue-600 hover:bg-blue-700">Add to Cart</Button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/shop">
              <a>
                <Button variant="outline" className="px-8 py-3 text-lg">
                  View All Jerseys
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Authentic Products</h3>
              <p className="text-gray-600">100% officially licensed jerseys from trusted suppliers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Shipping</h3>
              <p className="text-gray-600">Free shipping on orders over $100 worldwide</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure Checkout</h3>
              <p className="text-gray-600">Powered by Stripe for safe and secure payments</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
