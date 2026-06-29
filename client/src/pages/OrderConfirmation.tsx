import { Link } from 'wouter';
import { CheckCircle, Package, Truck, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function OrderConfirmation() {
  const orderNumber = `JV-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Success Message */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <CheckCircle className="w-20 h-20 text-green-500" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
          <p className="text-xl text-gray-600 mb-2">Thank you for your purchase</p>
          <p className="text-gray-600">Order Number: <span className="font-bold text-gray-900">{orderNumber}</span></p>
        </div>

        {/* Order Details */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Details</h2>

          <div className="space-y-4 mb-6 pb-6 border-b">
            <div className="flex justify-between">
              <div>
                <p className="font-semibold text-gray-900">Manchester United Home Jersey 2024/25</p>
                <p className="text-sm text-gray-600">Size: M × 1</p>
              </div>
              <p className="font-semibold text-gray-900">$89.99</p>
            </div>
          </div>

          <div className="space-y-3 mb-6 pb-6 border-b">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>$89.99</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Tax</span>
              <span>$7.20</span>
            </div>
          </div>

          <div className="flex justify-between text-2xl font-bold text-gray-900">
            <span>Total</span>
            <span>$97.19</span>
          </div>
        </div>

        {/* Next Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Mail className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Confirmation Email</h3>
            <p className="text-gray-600 text-sm">We've sent a confirmation email to your inbox</p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Package className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Processing</h3>
            <p className="text-gray-600 text-sm">Your order will be processed within 24 hours</p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Truck className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Shipping</h3>
            <p className="text-gray-600 text-sm">You'll receive tracking info via email</p>
          </div>
        </div>

        {/* Shipping Address */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Shipping Address</h2>
          <p className="text-gray-700">
            John Doe<br />
            123 Main Street<br />
            New York, NY 10001<br />
            United States
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/shop">
            <a>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Continue Shopping
              </Button>
            </a>
          </Link>
          <Link href="/">
            <a>
              <Button variant="outline" className="px-8 py-3">
                Back to Home
              </Button>
            </a>
          </Link>
        </div>

        {/* Support */}
        <div className="mt-12 pt-8 border-t text-center">
          <p className="text-gray-600 mb-2">Have questions about your order?</p>
          <Link href="/contact">
            <a className="text-blue-600 hover:text-blue-700 font-semibold">
              Contact Our Support Team
            </a>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
