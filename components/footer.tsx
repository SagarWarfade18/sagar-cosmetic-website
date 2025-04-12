import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold">About SagarCosmetic</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Premium beauty and skincare products for everyone. Discover your perfect beauty routine with our curated collection.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {['Shop', 'About Us', 'Contact', 'FAQs'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Customer Service</h3>
            <ul className="mt-4 space-y-2">
              {[
                'Shipping Information',
                'Returns & Exchanges',
                'Track Order',
                'Privacy Policy',
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Connect With Us</h3>
            <div className="mt-4 flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-semibold">Newsletter</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Subscribe to get special offers, free giveaways, and updates.
              </p>
              <form className="mt-4">
                <div className="flex max-w-md gap-x-4">
                  <input
                    type="email"
                    required
                    className="min-w-0 flex-auto rounded-md border px-3.5 py-2 text-sm shadow-sm ring-1 ring-inset ring-input focus:ring-2 focus:ring-primary"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    className="rounded-md bg-primary px-3.5 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} SagarCosmetic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;