import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../components/ui/carousel';
import { Link } from 'react-router-dom';

const Home = () => {
  const reviews = [
    { name: 'Aisha Yusuf', review: 'The best jollof rice I have ever tasted! A must-visit.' },
    { name: 'David Chen', review: 'Incredible atmosphere and the friendliest staff. The food was divine.' },
    { name: 'Maria Garcia', review: 'A true taste of Africa. I felt like I was back home. Highly recommended!' },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] bg-cover bg-center text-white flex items-center justify-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Taste the Soul of Africa</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl">Experience authentic flavors, vibrant culture, and unforgettable moments.</p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              <Link to="/menu">View Menu</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              <Link to="/reservations">Book a Table</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Special Offers Carousel */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">This Week's Specials</h2>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            <CarouselItem>
              <div className="p-1">
                <Card className="bg-orange-100 border-orange-300">
                  <CardContent className="flex flex-col md:flex-row items-center justify-center p-6 gap-6">
                    <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2R8ZW58MHx8MHx8fDA%3D" alt="Jollof Rice Special" className="w-48 h-48 object-cover rounded-lg shadow-md"/>
                    <div className="text-center md:text-left">
                      <h3 className="text-2xl font-semibold text-orange-800">Jollof Rice Fiesta</h3>
                      <p className="text-gray-700 mt-2">Enjoy our award-winning Jollof Rice with a side of plantain for only $15.99.</p>
                      <Button className="mt-4 bg-orange-500 hover:bg-orange-600">Order Now</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="p-1">
                <Card className="bg-green-100 border-green-300">
                  <CardContent className="flex flex-col md:flex-row items-center justify-center p-6 gap-6">
                    <img src="https://plus.unsplash.com/premium_photo-1664478241329-6d6c6f6225a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3V5YXxlbnwwfHwwfHx8MA%3D%3D" alt="Suya Platter" className="w-48 h-48 object-cover rounded-lg shadow-md"/>
                    <div className="text-center md:text-left">
                      <h3 className="text-2xl font-semibold text-green-800">Spicy Suya Platter</h3>
                      <p className="text-gray-700 mt-2">A delicious mix of grilled beef and chicken suya. Perfect for sharing! $22.50.</p>
                      <Button className="mt-4 bg-green-600 hover:bg-green-700">Order Now</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Customer Reviews */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">"{review.review}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;