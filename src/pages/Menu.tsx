import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';

const menuItems = [
  { name: 'Jollof Rice', category: 'main', diet: 'none', price: 18.99, image: 'https://plus.unsplash.com/premium_photo-1695938439933-2313a532b17a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8am9sbG9mJTIwcmljZXxlbnwwfHwwfHx8MA%3D%3D' },
  { name: 'Egusi Soup', category: 'main', diet: 'none', price: 22.50, image: 'https://images.unsplash.com/photo-1604329298336-9260545d2954?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWd1c2klMjBzb3VwfGVufDB8HwwfHx8MA%3D%3D' },
  { name: 'Suya', category: 'appetizer', diet: 'none', price: 12.00, image: 'https://plus.unsplash.com/premium_photo-1664478241329-6d6c6f6225a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3V5YXxlbnwwfHwwfHx8MA%3D%3D' },
  { name: 'Puff Puff', category: 'dessert', diet: 'vegetarian', price: 8.50, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzc2VydHxlbnwwfHwwfHx8MA%3D%3D' },
  { name: 'Vegetable Stew', category: 'main', diet: 'vegan', price: 16.00, image: 'https://images.unsplash.com/photo-1476718406333-3ca9fb3a040d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHZlZ2V0YWJsZSUyMHN0ZXd8ZW58MHx8MHx8fDA%3D' },
  { name: 'Moin Moin', category: 'appetizer', diet: 'vegetarian', price: 9.00, image: 'https://images.unsplash.com/photo-1626601334002-a035a4a59f51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9pbiUyMG1vaW58ZW58MHx8MHx8fDA%3D' },
];

const Menu = () => {
  const [dietaryFilter, setDietaryFilter] = useState('all');

  const filteredMenu = menuItems.filter(item => {
    if (dietaryFilter === 'all') return true;
    return item.diet === dietaryFilter;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Our Menu</h1>
        <p className="mt-2 text-lg text-gray-600">Crafted with love, from our kitchen to your table.</p>
      </div>

      <div className="flex justify-center mb-8">
        <Select onValueChange={setDietaryFilter} defaultValue="all">
          <SelectTrigger className="w-[280px]">
            <SelectValue placeholder="Filter by dietary preference" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="vegetarian">Vegetarian</SelectItem>
            <SelectItem value="vegan">Vegan</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredMenu.map((item) => (
          <Card key={item.name} className="overflow-hidden">
            <CardHeader className="p-0">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-xl font-semibold">{item.name}</CardTitle>
              <p className="text-sm text-gray-500 capitalize mt-1">{item.category}</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center p-4 pt-0">
              <p className="text-lg font-bold text-orange-600">${item.price.toFixed(2)}</p>
              <Button>Add to Order</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Menu;