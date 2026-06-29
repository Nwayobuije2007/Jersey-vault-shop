import { useState } from 'react';
import { Link } from 'wouter';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/_core/hooks/useAuth';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAuthenticated } = useAuth();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">JV</span>
              </div>
              <span className="font-bold text-lg hidden sm:inline text-gray-900">JerseyVault</span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/shop">
              <a className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Shop</a>
            </Link>
            <Link href="/blog">
              <a className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Blog</a>
            </Link>
            <Link href="/about">
              <a className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
            </Link>
            <Link href="/contact">
              <a className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
            </Link>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors hidden sm:block">
              <Search className="w-5 h-5 text-gray-700" />
            </button>

            <Link href="/cart">
              <a className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
                <ShoppingCart className="w-5 h-5 text-gray-700" />
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
              </a>
            </Link>

            {isAuthenticated ? (
              <Link href="/account">
                <a className="text-sm font-medium text-gray-700 hover:text-blue-600">Account</a>
              </Link>
            ) : (
              <Button variant="outline" size="sm">Sign In</Button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-gray-700" />
              ) : (
                <Menu className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-200">
            <Link href="/shop">
              <a className="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium">Shop</a>
            </Link>
            <Link href="/blog">
              <a className="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium">Blog</a>
            </Link>
            <Link href="/about">
              <a className="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
            </Link>
            <Link href="/contact">
              <a className="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
