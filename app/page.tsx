import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Star, ArrowRight } from 'lucide-react';

export default function Home() {
  const featuredProducts = [
    {
      id: 1,
      name: 'Radiance Serum',
      description: 'Brightening vitamin C serum for glowing skin',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80',
    },
    {
      id: 2,
      name: 'Hydrating Cream',
      description: 'Deep moisturizing cream for all skin types',
      price: 39.99,
      image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=800&q=80',
    },
    {
      id: 3,
      name: 'Rose Clay Mask',
      description: 'Purifying mask for clear, refreshed skin',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=800&q=80',
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      text: 'The products have completely transformed my skincare routine. My skin has never looked better!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      text: 'High-quality products that actually deliver results. The customer service is exceptional too.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emma Davis',
      text: 'I love how these products are both effective and environmentally conscious. Will definitely buy again!',
      rating: 5,
    },
  ];

  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1612817288484-6f916006741a?w=1600&q=80"
          alt="Beauty products arrangement"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container px-4 text-center text-white">
            <h1 className="mb-6 text-5xl font-bold">Discover Your Natural Beauty</h1>
            <p className="mb-8 text-xl">Premium skincare products for your daily routine</p>
            <Button size="lg" asChild>
              <Link href="/shop">Shop Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container px-4">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <Button variant="ghost" asChild>
            <Link href="/shop" className="flex items-center gap-2">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardFooter className="flex items-center justify-between">
                <span className="text-lg font-semibold">${product.price}</span>
                <Button>Add to Cart</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container px-4">
        <h2 className="mb-8 text-3xl font-bold">Shop by Category</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {['Skincare', 'Makeup', 'Haircare', 'Fragrance'].map((category) => (
            <Link
              key={category}
              href={`/shop?category=${category.toLowerCase()}`}
              className="group relative h-64 overflow-hidden rounded-lg"
            >
              <Image
                src={`https://images.unsplash.com/photo-${
                  category === 'Skincare'
                    ? '1598440947619-2c35fc9aa908'
                    : category === 'Makeup'
                    ? '1522335789203-aabd1fc54bc9'
                    : category === 'Haircare'
                    ? '1527799820374-dcf8d9d4a388'
                    : '1523293182086-7651a899d37f'
                }?w=800&q=80`}
                alt={category}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">{category}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container px-4">
        <h2 className="mb-8 text-center text-3xl font-bold">What Our Customers Say</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id}>
              <CardHeader>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{testimonial.text}</p>
              </CardContent>
              <CardFooter>
                <p className="font-semibold">{testimonial.name}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-accent">
        <div className="container px-4 py-16">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold">Join Our Newsletter</h2>
            <p className="mb-8 text-muted-foreground">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
            <form className="mx-auto flex max-w-md gap-x-4">
              <input
                type="email"
                required
                className="min-w-0 flex-auto rounded-md border px-3.5 py-2 text-sm shadow-sm ring-1 ring-inset ring-input focus:ring-2 focus:ring-primary"
                placeholder="Enter your email"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}