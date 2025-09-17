'use client';

import React from 'react';
import { Database, Cpu, Radar, Satellite, BarChart3, Smartphone, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

const dataSources = [
  {
    icon: <Database className="h-8 w-8 text-blue-500" />,
    title: 'BMKG Data',
    description: 'Data meteorologi resmi dari Badan Meteorologi, Klimatologi, dan Geofisika',
    coverage: 'Nasional',
    frequency: 'Real-time'
  },
  {
    icon: <Radar className="h-8 w-8 text-green-500" />,
    title: 'Weather Radar',
    description: 'Data radar cuaca untuk monitoring presipitasi dan pergerakan awan',
    coverage: 'Regional',
    frequency: '5-10 menit'
  },
  {
    icon: <Satellite className="h-8 w-8 text-purple-500" />,
    title: 'Satellite Imagery',
    description: 'Citra satelit untuk analisis awan dan kondisi atmosfer',
    coverage: 'Global',
    frequency: '15-30 menit'
  }
];

const methods = [
  {
    title: 'WRF (Weather Research and Forecasting)',
    description: 'Model numerik untuk prediksi cuaca dengan resolusi tinggi',
    features: [
      'Resolusi spasial hingga 1km',
      'Prediksi hingga 7 hari ke depan',
      'Parameter lengkap: suhu, kelembaban, angin, presipitasi',
      'Kalibrasi khusus untuk wilayah Indonesia'
    ]
  },
  {
    title: 'Neural Network & Machine Learning',
    description: 'Algoritma AI untuk pattern recognition dan prediksi non-linear',
    features: [
      'Deep learning untuk prediksi curah hujan',
      'Ensemble methods untuk akurasi tinggi',
      'Continuous learning dari data historis',
      'Bias correction untuk hasil optimal'
    ]
  },
  {
    title: 'Statistical Post-Processing',
    description: 'Teknik statistik untuk meningkatkan akurasi prediksi',
    features: [
      'Model Output Statistics (MOS)',
      'Kalman filtering untuk bias correction',
      'Quantile mapping untuk extreme events',
      'Ensemble averaging untuk uncertainty quantification'
    ]
  }
];

// Sample data for charts
const temperatureData = [
  { hour: '00', predicted: 25, observed: 24 },
  { hour: '03', predicted: 23, observed: 22 },
  { hour: '06', predicted: 22, observed: 21 },
  { hour: '09', predicted: 28, observed: 27 },
  { hour: '12', predicted: 32, observed: 31 },
  { hour: '15', predicted: 34, observed: 33 },
  { hour: '18', predicted: 30, observed: 29 },
  { hour: '21', predicted: 27, observed: 26 }
];

const accuracyData = [
  { sector: 'Agriculture', accuracy: 92 },
  { sector: 'Aviation', accuracy: 88 },
  { sector: 'Mining', accuracy: 90 },
  { sector: 'General', accuracy: 85 }
];

export default function MethodologyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-sky-600">Methodology</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kombinasi teknologi terdepan, metode ilmiah, dan pengalaman bertahun-tahun 
              untuk menghasilkan analisis data cuaca yang akurat dan actionable.
            </p>
          </div>
        </div>
      </section>

      {/* Data Sources */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Sources</h2>
            <p className="text-lg text-gray-600">
              Kami mengintegrasikan berbagai sumber data untuk menghasilkan analisis yang komprehensif
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dataSources.map((source, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-gray-50 rounded-full">
                      {source.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{source.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{source.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">Coverage:</span>
                      <span className="text-gray-600">{source.coverage}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">Update:</span>
                      <span className="text-gray-600">{source.frequency}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Methods */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Analysis Methods</h2>
            <p className="text-lg text-gray-600">
              Metode analisis yang kami gunakan untuk mengubah data mentah menjadi insight berharga
            </p>
          </div>
          
          <div className="space-y-8">
            {methods.map((method, index) => (
              <Card key={index} className="bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <CardHeader className="lg:col-span-1">
                    <CardTitle className="text-2xl text-gray-900 mb-4">
                      {method.title}
                    </CardTitle>
                    <p className="text-gray-600 text-lg">
                      {method.description}
                    </p>
                  </CardHeader>
                  <CardContent className="lg:col-span-1">
                    <h4 className="font-semibold text-gray-900 mb-4">Key Features:</h4>
                    <ul className="space-y-3">
                      {method.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Visualizations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sample Outputs</h2>
            <p className="text-lg text-gray-600">
              Contoh visualisasi data dan dashboard yang kami sediakan untuk klien
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Temperature Prediction Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-sky-500" />
                  Temperature Prediction vs Observation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={temperatureData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="hour" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="predicted" 
                        stroke="#0ea5e9" 
                        strokeWidth={2}
                        name="Predicted"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="observed" 
                        stroke="#22c55e" 
                        strokeWidth={2}
                        name="Observed"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Akurasi prediksi suhu mencapai 95% untuk prediksi 24 jam ke depan
                </p>
              </CardContent>
            </Card>

            {/* Accuracy by Sector Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-sky-500" />
                  Prediction Accuracy by Sector
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={accuracyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="sector" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="accuracy" fill="#0ea5e9" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Tingkat akurasi prediksi berdasarkan sektor industri klien
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dashboard & WhatsApp Bot */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Interactive Dashboard
              </h2>
              <p className="text-gray-600 mb-6">
                Dashboard web yang user-friendly dengan visualisasi interaktif untuk monitoring 
                kondisi cuaca real-time dan prediksi jangka pendek hingga menengah.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-sky-500 rounded-full mr-3"></div>
                  <span>Real-time weather monitoring</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-sky-500 rounded-full mr-3"></div>
                  <span>Interactive maps and charts</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-sky-500 rounded-full mr-3"></div>
                  <span>Customizable alerts and notifications</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-sky-500 rounded-full mr-3"></div>
                  <span>Historical data analysis</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg p-6 text-white mb-4">
                <h3 className="text-xl font-bold mb-2">Weather Dashboard</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="opacity-90">Temperature</p>
                    <p className="text-2xl font-bold">32°C</p>
                  </div>
                  <div>
                    <p className="opacity-90">Humidity</p>
                    <p className="text-2xl font-bold">65%</p>
                  </div>
                  <div>
                    <p className="opacity-90">Wind Speed</p>
                    <p className="text-2xl font-bold">12 km/h</p>
                  </div>
                  <div>
                    <p className="opacity-90">Rainfall</p>
                    <p className="text-2xl font-bold">2.5 mm</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 text-center">
                Preview dashboard interface
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
            <div className="lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                WhatsApp Bot MVP
              </h2>
              <p className="text-gray-600 mb-6">
                Bot WhatsApp untuk mendapatkan informasi cuaca cepat dan praktis. 
                Cocok untuk pengguna yang membutuhkan akses informasi cuaca secara mobile.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Smartphone className="h-5 w-5 text-green-500 mr-3" />
                  <span>Quick weather updates via WhatsApp</span>
                </li>
                <li className="flex items-center">
                  <Smartphone className="h-5 w-5 text-green-500 mr-3" />
                  <span>Location-based weather alerts</span>
                </li>
                <li className="flex items-center">
                  <Smartphone className="h-5 w-5 text-green-500 mr-3" />
                  <span>Simple command interface</span>
                </li>
                <li className="flex items-center">
                  <Smartphone className="h-5 w-5 text-green-500 mr-3" />
                  <span>Daily and weekly forecasts</span>
                </li>
              </ul>
            </div>
            <div className="lg:order-1 bg-white rounded-lg p-6 shadow-lg">
              <div className="bg-gray-100 rounded-lg p-4 space-y-3">
                <div className="bg-green-500 text-white p-3 rounded-lg text-sm max-w-xs">
                  Cuaca hari ini di Jakarta: Cerah berawan, suhu 28-33°C, kelembaban 70%
                </div>
                <div className="bg-gray-300 text-gray-800 p-3 rounded-lg text-sm max-w-xs ml-auto">
                  /prediksi 3hari
                </div>
                <div className="bg-green-500 text-white p-3 rounded-lg text-sm max-w-xs">
                  Prediksi 3 hari: Hari ini cerah, besok hujan ringan, lusa berawan. Detail lengkap: bit.ly/cuaca-jkt
                </div>
              </div>
              <p className="text-sm text-gray-600 text-center mt-4">
                WhatsApp bot conversation preview
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quality Assurance</h2>
            <p className="text-lg text-gray-600">
              Proses validasi dan quality control yang ketat untuk memastikan akurasi dan reliabilitas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-sky-600">95%</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Accuracy Rate</h3>
              <p className="text-sm text-gray-600">Average prediction accuracy across all sectors</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">24/7</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Monitoring</h3>
              <p className="text-sm text-gray-600">Continuous system monitoring and data validation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">ISO</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Standards</h3>
              <p className="text-sm text-gray-600">Adherence to international meteorological standards</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">R&D</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-sm text-gray-600">Continuous research and development efforts</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}