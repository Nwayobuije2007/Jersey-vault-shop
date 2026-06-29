import { useState } from 'react';
import { Link } from 'wouter';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Call newsletter subscription API
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-gray-100 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">JV</span>
              </div>
              <span className="font-bold text-lg">JerseyVault</span>
            </div>
            <p className="text-gray-400 text-sm">Premium football jerseys for collectors and fans worldwide.</p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/shop"><a className="hover:text-blue-400 transition-colors">All Jerseys</a></Link></li>
              <li><Link href="/shop?league=premier"><a className="hover:text-blue-400 transition-colors">Premier League</a></Link></li>
              <li><Link href="/shop?league=la-liga"><a className="hover:text-blue-400 transition-colors">La Liga</a></Link></li>
              <li><Link href="/shop?league=serie-a"><a className="hover:text-blue-400 transition-colors">Serie A</a></Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about"><a className="hover:text-blue-400 transition-colors">About Us</a></Link></li>
              <li><Link href="/blog"><a className="hover:text-blue-400 transition-colors">Blog</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-blue-400 transition-colors">Contact</a></Link></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">Subscribe for exclusive deals and new releases.</p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                required
              />
              <Button className="bg-blue-600 hover:bg-blue-700 w-full">Subscribe</Button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">&copy; 2026 JerseyVault. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
