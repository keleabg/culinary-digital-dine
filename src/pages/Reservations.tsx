import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { toast } from 'sonner';

const Reservations = () => {
  const [formData, setFormData] = useState({ name: '', date: '', time: '', guests: '1' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (name, value) => {
     setFormData(prev => ({ ...prev, [name]: value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`Reservation confirmed for ${formData.name} on ${formData.date} at ${formData.time} for ${formData.guests} guests.`);
    setFormData({ name: '', date: '', time: '', guests: '1' });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">Book Your Table</CardTitle>
            <p className="text-gray-500">We can't wait to host you.</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="font-medium">Full Name</label>
                <Input id="name" name="name" type="text" placeholder="Enter your full name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="date" className="font-medium">Date</label>
                  <Input id="date" name="date" type="date" value={formData.date} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="time" className="font-medium">Time</label>
                  <Input id="time" name="time" type="time" value={formData.time} onChange={handleChange} required />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="guests" className="font-medium">Number of Guests</label>
                 <Select name="guests" onValueChange={(value) => handleSelectChange('guests', value)} value={formData.guests}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select number of guests" />
                  </SelectTrigger>
                  <SelectContent>
                    {[...Array(8)].map((_, i) => (
                      <SelectItem key={i + 1} value={`${i + 1}`}>{i + 1} Guest{i > 0 && 's'}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600" size="lg">Confirm Reservation</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Reservations;