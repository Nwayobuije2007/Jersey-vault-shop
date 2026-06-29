import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">About JerseyVault</h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            We're passionate about football and dedicated to bringing authentic, premium jerseys to collectors and fans worldwide.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                JerseyVault was founded by a group of passionate football fans who believed that every collector deserves access to authentic, high-quality jerseys from their favorite teams and players.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                What started as a personal collection has grown into a thriving community of jersey enthusiasts. Today, we partner directly with official suppliers to bring you the most authentic and sought-after jerseys from around the world.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is simple: to make premium football jerseys accessible, affordable, and easy to find in one place.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-400 to-indigo-600 rounded-lg h-96 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-7xl mb-4">⚽</div>
                <p className="text-2xl font-semibold">Passion for Football</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 text-center">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Authenticity</h3>
              <p className="text-gray-600">Every jersey is 100% authentic and officially licensed from trusted suppliers.</p>
            </div>
            <div className="bg-white rounded-lg p-8 text-center">
              <div className="text-5xl mb-4">💎</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Quality</h3>
              <p className="text-gray-600">We curate only the finest jerseys, ensuring premium quality and attention to detail.</p>
            </div>
            <div className="bg-white rounded-lg p-8 text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Community</h3>
              <p className="text-gray-600">We're building a community of passionate collectors who share the love of football.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Start Your Collection?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Browse our curated selection of premium football jerseys and find the perfect addition to your collection.
          </p>
          <Link href="/shop">
            <a>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                Shop Now
              </Button>
            </a>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
