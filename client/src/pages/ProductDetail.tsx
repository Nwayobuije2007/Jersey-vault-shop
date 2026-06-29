import { useState } from 'react';
import { Link, useRoute } from 'wouter';
import { ChevronLeft, Heart, Share2, Truck, Shield, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ProductDetail() {
  const [, params] = useRoute('/product/:id');
  const productId = params?.id;

  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Mock product data - replace with real data from backend
  const product = {
    id: productId,
    name: 'Manchester United Home Jersey 2024/25',
    brand: 'Adidas',
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.8,
    reviews: 324,
    image: '👕',
    description: 'Experience the iconic Manchester United home jersey for the 2024/25 season. Crafted with premium Adidas technology, this authentic jersey features the classic red design with white trim.',
    features: [
      'Official Adidas product',
      'Authentic team branding',
      'Breathable fabric technology',
      'Embroidered club crest',
      'Premium quality stitching',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    colors: ['Red', 'Away (White)'],
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} ${product.name} (Size: ${selectedSize}) to cart`);
    // TODO: Wire to cart mutation
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Link href="/shop">
          <a className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8">
            <ChevronLeft className="w-4 h-4" />
            Back to Shop
          </a>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-gray-100 rounded-lg h-96 md:h-full flex items-center justify-center">
            <div className="text-9xl">{product.image}</div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-500 mb-2">{product.brand}</p>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400">★</span>
                  <span className="font-semibold">{product.rating}</span>
                  <span className="text-gray-500">({product.reviews} reviews)</span>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </span>
              </div>
              <p className="text-green-600 font-semibold">In Stock</p>
            </div>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed">{product.description}</p>

            {/* Size Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">Select Size</label>
              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 px-3 rounded-lg border-2 font-semibold transition-all ${
                      selectedSize === size
                        ? 'border-blue-600 bg-blue-50 text-blue-600'
                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">Quantity</label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  −
                </button>
                <span className="text-lg font-semibold w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="flex gap-3">
              <Button
                onClick={handleAddToCart}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
              >
                Add to Cart
              </Button>
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`px-4 py-3 rounded-lg border-2 transition-all ${
                  isWishlisted
                    ? 'border-red-300 bg-red-50'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <Heart
                  className={`w-6 h-6 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
                />
              </button>
              <button className="px-4 py-3 rounded-lg border-2 border-gray-300 hover:border-gray-400">
                <Share2 className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="space-y-3 pt-6 border-t">
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-blue-600" />
                <span className="text-sm text-gray-700">Free shipping on orders over $100</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="text-sm text-gray-700">100% Authentic guarantee</span>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw className="w-5 h-5 text-blue-600" />
                <span className="text-sm text-gray-700">30-day easy returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 pt-12 border-t">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Product Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-bold">✓</span>
                </div>
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16 pt-12 border-t">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <Link key={item} href={`/product/${item}`}>
                <a className="group">
                  <div className="bg-gray-100 rounded-lg h-64 mb-4 flex items-center justify-center group-hover:shadow-lg transition-shadow">
                    <div className="text-6xl">👕</div>
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">Jersey {item}</h3>
                  <p className="text-gray-600">$89.99</p>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
