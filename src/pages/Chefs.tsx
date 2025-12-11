import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const chefs = [
  {
    name: 'Chef Adewale Adebayo',
    title: 'Executive Chef',
    bio: 'With over 20 years of experience, Chef Adewale is a master of Nigerian cuisine, bringing traditional recipes to life with a modern twist.',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hlZnxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    name: 'Chef Ama Serwaa',
    title: 'Pastry Chef',
    bio: 'Chef Ama creates divine desserts that are a perfect end to any meal. Her passion for baking is evident in every bite.',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoZWZ8ZW58MHx8MHx8fDA%3D'
  },
];

const Chefs = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight">Meet Our Culinary Artists</h1>
          <p className="mt-2 text-lg text-gray-600">The heart and soul of our kitchen.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {chefs.map(chef => (
            <Card key={chef.name} className="flex flex-col md:flex-row items-center gap-6 p-6 overflow-hidden">
              <img src={chef.image} alt={chef.name} className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-full shadow-lg" />
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold text-orange-600">{chef.name}</h2>
                <p className="text-lg font-semibold text-gray-700">{chef.title}</p>
                <p className="mt-2 text-gray-600">{chef.bio}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chefs;