import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { toast } from 'sonner';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Your message has been sent! We will get back to you shortly.');
    e.target.reset();
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Get In Touch</h1>
        <p className="mt-2 text-lg text-gray-600">We'd love to hear from you. Visit us or send a message.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Map and Location */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Our Location</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
                 <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.376423594828!2d3.379205914771059!3d6.599722095227006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9228fa2a1e7f%3A0x8b388eac83c43ddb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1633112345678!5m2!1sen!2sus" 
                    width="100%" 
                    height="450" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy">
                </iframe>
              </div>
              <div className="mt-4 text-gray-700">
                <p><strong>Address:</strong> 123 Heritage Road, Lagos, Nigeria</p>
                <p><strong>Phone:</strong> +234 800 123 4567</p>
                <p><strong>Email:</strong> contact@jollofjoy.com</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input type="text" placeholder="Your Name" required />
                <Input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" rows={5} className="w-full p-2 border rounded-md" required></textarea>
                <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;