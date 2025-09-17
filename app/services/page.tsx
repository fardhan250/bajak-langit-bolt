import React from 'react';
import { Sprout, Plane, Mountain, Database, Brain, LineChart, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    id: 'agriculture',
    icon: <Sprout className="h-12 w-12 text-green-500" />,
    title: 'Agriculture Solutions',
    description: 'Optimasi produktivitas pertanian dengan prediksi cuaca yang akurat',
    features: [
      'Prediksi curah hujan dan suhu untuk perencanaan tanam',
      'Analisis risiko cuaca untuk perlindungan tanaman',
      'Rekomendasi jadwal irigasi berbasis data meteorologi',
      'Dashboard monitoring kondisi lahan real-time',
      'WhatsApp bot untuk notifikasi cuaca harian'
    ],
    benefits: [
      'Peningkatan hasil panen hingga 30%',
      'Pengurangan risiko gagal panen akibat cuaca ekstrem',
      'Efisiensi penggunaan air dan pupuk',
      'Perencanaan musim tanam yang lebih baik'
    ]
  },
  {
    id: 'aviation',
    icon: <Plane className="h-12 w-12 text-blue-500" />,
    title: 'Aviation Weather Services',
    description: 'Sistem peringatan dini untuk keselamatan dan efisiensi penerbangan',
    features: [
      'Prediksi turbulensi dan wind shear',
      'Monitoring visibilitas dan ceiling',
      'Analisis kondisi runway dan taxiway',
      'Peringatan dini cuaca berbahaya',
      'Integrasi dengan sistem ATC'
    ],
    benefits: [
      'Pengurangan delay penerbangan hingga 40%',
      'Peningkatan keselamatan penerbangan',
      'Optimasi rute penerbangan',
      'Efisiensi konsumsi bahan bakar'
    ]
  },
  {
    id: 'mining',
    icon: <Mountain className="h-12 w-12 text-orange-500" />,
    title: 'Mining Weather Intelligence',
    description: 'Monitoring cuaca komprehensif untuk operasional pertambangan yang aman',
    features: [
      'Prediksi curah hujan untuk stabilitas lereng',
      'Monitoring kecepatan angin untuk operasi crane',
      'Analisis visibilitas untuk keselamatan kerja',
      'Peringatan dini kondisi cuaca ekstrem',
      'Laporan cuaca khusus operasional tambang'
    ],
    benefits: [
      'Peningkatan efisiensi operasional 25%',
      'Pengurangan risiko kecelakaan kerja',
      'Optimasi jadwal pengangkutan',
      'Perlindungan peralatan dari cuaca ekstrem'
    ]
  }
];

const workflow = [
  {
    step: '01',
    icon: <Database className="h-8 w-8 text-sky-500" />,
    title: 'Collect Data',
    description: 'Mengumpulkan data dari BMKG, radar meteorologi, dan satelit cuaca'
  },
  {
    step: '02',
    icon: <Brain className="h-8 w-8 text-sky-500" />,
    title: 'Analyze (WRF + ML)',
    description: 'Memproses data menggunakan model WRF dan algoritma machine learning'
  },
  {
    step: '03',
    icon: <LineChart className="h-8 w-8 text-sky-500" />,
    title: 'Recommend',
    description: 'Menghasilkan rekomendasi berbasis analisis untuk keputusan optimal'
  },
  {
    step: '04',
    icon: <Users className="h-8 w-8 text-sky-500" />,
    title: 'Dashboard & Reports',
    description: 'Menyajikan insight dalam dashboard interaktif dan laporan komprehensif'
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-sky-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solusi analisis data cuaca yang disesuaikan dengan kebutuhan spesifik 
              setiap industri untuk hasil yang optimal.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="scroll-mt-20">
                <Card className="overflow-hidden">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-gray-50 rounded-full">
                          {service.icon}
                        </div>
                        <CardTitle className="text-2xl lg:text-3xl font-bold text-gray-900">
                          {service.title}
                        </CardTitle>
                      </div>
                      
                      <p className="text-lg text-gray-600 mb-8">
                        {service.description}
                      </p>

                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                        <ul className="space-y-3">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.benefits.map((benefit, idx) => (
                            <div key={idx} className="bg-green-50 text-green-800 px-4 py-2 rounded-lg text-sm font-medium">
                              {benefit}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className={`bg-gray-50 p-8 lg:p-12 flex items-center justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <div className="text-center">
                        <div className="w-48 h-48 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg mb-6">
                          {React.cloneElement(service.icon, { className: "h-24 w-24" })}
                        </div>
                        <p className="text-gray-600 font-medium">
                          Specialized solutions for {service.title.split(' ')[0].toLowerCase()}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Work</h2>
            <p className="text-lg text-gray-600">
              Proses sistematis kami untuk mengubah data cuaca mentah menjadi insight yang actionable
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflow.map((step, index) => (
              <div key={index} className="relative">
                <Card className="bg-white text-center h-full">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <div className="relative">
                        <div className="w-16 h-16 bg-sky-50 rounded-full flex items-center justify-center">
                          {step.icon}
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {step.step}
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
                
                {/* Arrow connector (hidden on last item) */}
                {index < workflow.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-0.5 bg-sky-300"></div>
                    <div className="absolute right-0 top-0 transform -translate-y-1/2">
                      <div className="w-0 h-0 border-l-4 border-l-sky-300 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sky-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-sky-100 mb-8">
            Konsultasikan kebutuhan analisis data cuaca Anda dengan tim expert kami
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-sky-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Get Consultation
            </a>
            <a
              href="/auth/signup"
              className="bg-sky-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-sky-700 transition-colors border border-sky-400"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}