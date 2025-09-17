import React from 'react';
import Link from 'next/link';
import { Sprout, Plane, Mountain, Cloud, BarChart3, Users, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const sectorData = [
  {
    icon: <Sprout className="h-8 w-8 text-green-500" />,
    title: 'Agriculture',
    description: 'Optimasi jadwal tanam dan panen dengan prediksi cuaca akurat',
    benefits: 'Tingkatkan hasil panen hingga 30%',
    link: '/services#agriculture'
  },
  {
    icon: <Plane className="h-8 w-8 text-blue-500" />,
    title: 'Aviation',
    description: 'Sistem peringatan dini untuk keselamatan penerbangan',
    benefits: 'Kurangi delay hingga 40%',
    link: '/services#aviation'
  },
  {
    icon: <Mountain className="h-8 w-8 text-orange-500" />,
    title: 'Mining',
    description: 'Monitoring cuaca untuk operasional tambang yang aman',
    benefits: 'Efisiensi operasional 25%',
    link: '/services#mining'
  }
];

const features = [
  {
    icon: <BarChart3 className="h-6 w-6 text-sky-500" />,
    title: 'AI-Based Analysis',
    description: 'Machine learning untuk prediksi cuaca yang presisi'
  },
  {
    icon: <Cloud className="h-6 w-6 text-sky-500" />,
    title: 'Multi-Source Data',
    description: 'Integrasi data BMKG, radar, dan satelit'
  },
  {
    icon: <Users className="h-6 w-6 text-sky-500" />,
    title: 'Stakeholder Collaboration',
    description: 'Platform terintegrasi untuk semua pemangku kepentingan'
  }
];

// This would be fetched from API in real implementation
const latestProject = {
  id: "1",
  title: "Optimasi Jadwal Tanam Desa Sukamaju",
  sector: "Agriculture",
  description: "Implementasi sistem prediksi cuaca untuk optimasi jadwal tanam padi",
  image_url: "https://images.pexels.com/photos/1459331/pexels-photo-1459331.jpeg?w=400"
};

const latestTestimonial = {
  name: "Pak Haji Sunaryo",
  profession: "Petani Beras",
  testimonial: "Sejak menggunakan layanan Bajak Langit, hasil panen saya meningkat 30%.",
  photo_url: "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?w=150"
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Membaca Langit,{' '}
              <span className="text-sky-600">Menyusun Keputusan</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Solusi analisis data cuaca terdepan untuk meningkatkan produktivitas 
              pertanian, keselamatan penerbangan, dan efisiensi operasional pertambangan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <Button size="lg" className="bg-sky-500 hover:bg-sky-600">
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button size="lg" variant="outline">
                  Get Started Free
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sector Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Solusi untuk Setiap Sektor
            </h2>
            <p className="text-lg text-gray-600">
              Dapatkan insight cuaca yang tepat sasaran untuk industri Anda
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sectorData.map((sector, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 group">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gray-50 rounded-full group-hover:bg-sky-50 transition-colors">
                      {sector.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {sector.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">{sector.description}</p>
                  <div className="bg-green-50 text-green-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                    {sector.benefits}
                  </div>
                  <Link href={sector.link}>
                    <Button variant="outline" size="sm" className="group-hover:bg-sky-500 group-hover:text-white transition-colors">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Mengapa Memilih Bajak Langit?
            </h2>
            <p className="text-lg text-gray-600">
              Teknologi terdepan yang didukung pengalaman dan riset mendalam
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-white rounded-full shadow-md">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Widgets */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Latest Project */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-sky-500" />
                  Latest Project
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-200 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src={latestProject.image_url} 
                    alt={latestProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {latestProject.title}
                </h3>
                <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-2">
                  {latestProject.sector}
                </span>
                <p className="text-gray-600 text-sm mb-4">
                  {latestProject.description}
                </p>
                <Link href="/proyek">
                  <Button variant="outline" size="sm">
                    View All Projects
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Latest Testimonial */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  Customer Voice
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start space-x-4">
                  <img
                    src={latestTestimonial.photo_url}
                    alt={latestTestimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-gray-600 italic mb-4">
                      "{latestTestimonial.testimonial}"
                    </p>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {latestTestimonial.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {latestTestimonial.profession}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Link href="/testimoni">
                    <Button variant="outline" size="sm">
                      Read All Testimonials
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sky-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Siap Untuk Mengoptimalkan Keputusan Anda?
          </h2>
          <p className="text-xl text-sky-100 mb-8">
            Bergabunglah dengan ratusan pengguna yang telah merasakan manfaat 
            analisis data cuaca kami.
          </p>
          <Link href="/auth/signup">
            <Button size="lg" variant="secondary" className="bg-white text-sky-600 hover:bg-gray-100">
              Sign Up for Dashboard
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}