'use client';

import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import LoadingSpinner from '@/components/LoadingSpinner';
import { fetchTestimonials, Testimonial } from '@/lib/api';

export default function TestimoniPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function loadTestimonials() {
      try {
        setLoading(true);
        const testimonialsData = await fetchTestimonials();
        setTestimonials(testimonialsData);
      } catch (err) {
        setError('Failed to load testimonials');
        console.error('Error loading testimonials:', err);
      } finally {
        setLoading(false);
      }
    }

    loadTestimonials();
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getSectorColor = (sector: string) => {
    switch (sector.toLowerCase()) {
      case 'agriculture':
        return 'text-green-600 bg-green-100';
      case 'aviation':
        return 'text-blue-600 bg-blue-100';
      case 'mining':
        return 'text-orange-600 bg-orange-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sky-50 to-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Customer <span className="text-sky-600">Testimonials</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dengar langsung dari klien kami tentang bagaimana Bajak Langit 
                telah membantu meningkatkan produktivitas dan efisiensi operasional.
              </p>
            </div>
          </div>
        </section>

        {/* Loading State */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center items-center py-16">
              <div className="text-center">
                <LoadingSpinner size="lg" />
                <p className="mt-4 text-gray-600">Loading testimonials...</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Customer <span className="text-sky-600">Testimonials</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dengar langsung dari klien kami tentang bagaimana Bajak Langit 
              telah membantu meningkatkan produktivitas dan efisiensi operasional.
            </p>
          </div>
        </div>
      </section>

      {/* Main Testimonial Carousel */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
              <p className="text-red-800">{error}</p>
            </div>
          )}

          {testimonials.length === 0 ? (
            <div className="text-center py-16">
              <div className="bg-gray-50 rounded-lg p-8 max-w-md mx-auto">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Testimonial Belum Tersedia
                </h3>
                <p className="text-gray-600 mb-4">
                  Kami sedang mengumpulkan testimonial dari klien. Silakan kembali lagi nanti 
                  atau hubungi tim kami untuk informasi lebih lanjut.
                </p>
                <Button asChild>
                  <a href="/contact">Contact Us</a>
                </Button>
              </div>
            </div>
          ) : (
            <>
              {/* Featured Testimonial */}
              <div className="text-center mb-12">
                <Card className="bg-gradient-to-br from-sky-50 to-white border-sky-200 max-w-4xl mx-auto">
                  <CardContent className="p-8 lg:p-12">
                    <Quote className="h-12 w-12 text-sky-400 mx-auto mb-6" />
                    
                    <blockquote className="text-xl lg:text-2xl text-gray-800 mb-8 leading-relaxed">
                      "{testimonials[currentIndex]?.testimonial}"
                    </blockquote>
                    
                    <div className="flex items-center justify-center space-x-4">
                      {testimonials[currentIndex]?.photo_url && (
                        <img
                          src={testimonials[currentIndex].photo_url}
                          alt={testimonials[currentIndex].name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                      )}
                      <div className="text-center">
                        <p className="font-semibold text-gray-900 text-lg">
                          {testimonials[currentIndex]?.name}
                        </p>
                        <p className="text-gray-600">
                          {testimonials[currentIndex]?.profession}
                        </p>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-2 ${getSectorColor(testimonials[currentIndex]?.sector || '')}`}>
                          {testimonials[currentIndex]?.sector}
                        </span>
                      </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-center space-x-4 mt-8">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={prevTestimonial}
                        disabled={testimonials.length <= 1}
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      
                      <div className="flex space-x-2">
                        {testimonials.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${
                              index === currentIndex ? 'bg-sky-500' : 'bg-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={nextTestimonial}
                        disabled={testimonials.length <= 1}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* All Testimonials Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
                {testimonials.map((testimonial, index) => (
                  <Card key={testimonial.id || index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current" />
                          ))}
                        </div>
                        <span className={`ml-auto px-2 py-1 rounded-full text-xs font-medium ${getSectorColor(testimonial.sector)}`}>
                          {testimonial.sector}
                        </span>
                      </div>
                      
                      <blockquote className="text-gray-700 mb-4 text-sm leading-relaxed">
                        "{testimonial.testimonial.substring(0, 120)}{testimonial.testimonial.length > 120 ? '...' : ''}"
                      </blockquote>
                      
                      <div className="flex items-center">
                        {testimonial.photo_url && (
                          <img
                            src={testimonial.photo_url}
                            alt={testimonial.name}
                            className="w-10 h-10 rounded-full object-cover mr-3"
                          />
                        )}
                        <div>
                          <p className="font-medium text-gray-900 text-sm">
                            {testimonial.name}
                          </p>
                          <p className="text-gray-600 text-xs">
                            {testimonial.profession}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Many</h2>
            <p className="text-lg text-gray-600">
              Kepercayaan klien adalah prioritas utama kami
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-sky-600 mb-2">500+</div>
              <p className="text-gray-600">Active Users</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">1000+</div>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <p className="text-gray-600">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sky-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ratusan klien yang telah merasakan manfaat 
            analisis data cuaca dari Bajak Langit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-sky-600 hover:bg-gray-100">
              <a href="/auth/signup">Get Started</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-sky-600">
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}