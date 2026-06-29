import { Link } from 'wouter';
import { Trash2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Cart() {
  // Mock cart items
  const cartItems = [
    { id: 1, team: 'Manchester United', size: 'L', quantity: 1, price: 89.99 },
    { id: 2, team: 'Real Madrid', size: 'M', quantity: 2, price: 94.99 },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 10;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {cartItems.length > 0 ? (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="bg-gray-50 rounded-lg p-6 flex items-center gap-6">
                    <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center text-3xl">
                      👕
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{item.team}</h3>
                      <p className="text-gray-600">Size: {item.size}</p>
                      <p className="text-gray-600">Quantity: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                      <button className="text-red-600 hover:text-red-700 mt-2 flex items-center gap-1">
                        <Trash2 className="w-4 h-4" />
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg mb-4">Your cart is empty</p>
                <Link href="/shop">
                  <a>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Continue Shopping
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                </Link>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between text-2xl font-bold text-gray-900 mb-6">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <Link href="/checkout">
                <a>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3 mb-3">
                    Proceed to Checkout
                  </Button>
                </a>
              </Link>
              <Link href="/shop">
                <a>
                  <Button variant="outline" className="w-full">
                    Continue Shopping
                  </Button>
                </a>
              </Link>

              {subtotal < 100 && (
                <div className="mt-4 p-3 bg-blue-50 rounded-lg text-sm text-blue-700">
                  Free shipping on orders over $100!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
