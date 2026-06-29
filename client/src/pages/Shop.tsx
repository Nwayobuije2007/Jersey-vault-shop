import { useState } from 'react';
import { Link } from 'wouter';
import { Star, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Shop() {
  const [selectedLeague, setSelectedLeague] = useState<string | null>(null);
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState([0, 200]);

  const leagues = ['Premier League', 'La Liga', 'Serie A', 'Bundesliga', 'Ligue 1'];
  const teams = ['Manchester United', 'Real Madrid', 'Paris Saint-Germain', 'Bayern Munich', 'Liverpool', 'Barcelona'];

  // Mock products - in real app, fetch from API
  const products = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Jersey ${i + 1}`,
    team: teams[i % teams.length],
    league: leagues[i % leagues.length],
    price: 79.99 + (i * 5),
    rating: 4.5 + (Math.random() * 0.5),
    reviews: Math.floor(Math.random() * 200) + 20,
  }));

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Shop Jerseys</h1>
          <p className="text-lg text-gray-600">Browse our complete collection of premium football jerseys</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-20">
              <div className="flex items-center gap-2 mb-6">
                <Filter className="w-5 h-5" />
                <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
              </div>

              {/* League Filter */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">League</h3>
                <div className="space-y-2">
                  {leagues.map((league) => (
                    <label key={league} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedLeague === league}
                        onChange={() => setSelectedLeague(selectedLeague === league ? null : league)}
                        className="rounded"
                      />
                      <span className="text-sm text-gray-700">{league}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Team Filter */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Team</h3>
                <div className="space-y-2">
                  {teams.map((team) => (
                    <label key={team} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedTeam === team}
                        onChange={() => setSelectedTeam(selectedTeam === team ? null : team)}
                        className="rounded"
                      />
                      <span className="text-sm text-gray-700">{team}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Price Range</h3>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Link key={product.id} href={`/product/${product.id}`}>
                  <a className="group">
                    <div className="bg-gray-100 rounded-lg h-64 mb-4 overflow-hidden flex items-center justify-center hover:shadow-lg transition-shadow">
                      <div className="text-5xl">👕</div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{product.team}</h3>
                      <p className="text-sm text-gray-600">{product.league}</p>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">({product.reviews})</span>
                      </div>
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                        <Button className="bg-blue-600 hover:bg-blue-700">Add</Button>
                      </div>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
