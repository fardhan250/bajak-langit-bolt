'use client';

import React from 'react';
import { 
  Cloud, 
  Thermometer, 
  Droplet, 
  Wind, 
  Sun, 
  CloudRain,
  MapPin,
  Calendar,
  TrendingUp,
  AlertTriangle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useAuth } from '@/contexts/AuthContext';

// Mock weather data - in real app, this would come from API
const currentWeather = {
  location: 'Jakarta, Indonesia',
  temperature: 32,
  condition: 'Partly Cloudy',
  humidity: 65,
  windSpeed: 12,
  windDirection: 'SW',
  pressure: 1013,
  visibility: 10,
  uvIndex: 7,
  rainfall: 2.5,
  feelsLike: 36
};

const hourlyForecast = [
  { time: '09:00', temp: 28, humidity: 70, rainfall: 0 },
  { time: '12:00', temp: 32, humidity: 65, rainfall: 0 },
  { time: '15:00', temp: 34, humidity: 60, rainfall: 1.2 },
  { time: '18:00', temp: 30, humidity: 68, rainfall: 2.5 },
  { time: '21:00', temp: 27, humidity: 75, rainfall: 0.8 },
  { time: '00:00', temp: 25, humidity: 80, rainfall: 0 },
  { time: '03:00', temp: 24, humidity: 85, rainfall: 0 },
  { time: '06:00', temp: 26, humidity: 78, rainfall: 0 }
];

const weeklyForecast = [
  { day: 'Hari Ini', condition: 'Partly Cloudy', high: 34, low: 24, icon: <Sun className="h-5 w-5 text-yellow-500" /> },
  { day: 'Besok', condition: 'Light Rain', high: 30, low: 22, icon: <CloudRain className="h-5 w-5 text-blue-500" /> },
  { day: 'Kamis', condition: 'Cloudy', high: 29, low: 21, icon: <Cloud className="h-5 w-5 text-gray-500" /> },
  { day: 'Jumat', condition: 'Sunny', high: 33, low: 23, icon: <Sun className="h-5 w-5 text-yellow-500" /> },
  { day: 'Sabtu', condition: 'Thunderstorm', high: 28, low: 20, icon: <CloudRain className="h-5 w-5 text-blue-700" /> },
  { day: 'Minggu', condition: 'Partly Cloudy', high: 31, low: 22, icon: <Sun className="h-5 w-5 text-yellow-500" /> },
  { day: 'Senin', condition: 'Sunny', high: 35, low: 24, icon: <Sun className="h-5 w-5 text-yellow-500" /> }
];

const alerts = [
  {
    type: 'warning',
    title: 'Curah Hujan Tinggi',
    message: 'Prediksi hujan lebat sore hari. Siapkan drainase yang baik.',
    time: '2 jam lalu'
  },
  {
    type: 'info',
    title: 'Kondisi Optimal',
    message: 'Suhu dan kelembaban ideal untuk aktivitas pertanian.',
    time: '5 jam lalu'
  }
];

export default function WeatherInsights() {
  const { userProfile } = useAuth();

  const getRecommendationForUser = () => {
    const role = userProfile?.role;
    switch (role) {
      case 'petani':
        return {
          title: 'Rekomendasi Pertanian',
          content: 'Kondisi baik untuk penyiraman pagi. Kelembaban tinggi mendukung pertumbuhan tanaman. Siapkan shelter untuk hujan sore.',
          priority: 'medium'
        };
      case 'aviasi':
        return {
          title: 'Rekomendasi Penerbangan',
          content: 'Visibilitas baik untuk penerbangan. Perhatikan turbulensi ringan sore hari akibat aktivitas konvektif.',
          priority: 'low'
        };
      case 'tambang':
        return {
          title: 'Rekomendasi Operasional',
          content: 'Kondisi aman untuk operasi. Hentikan aktivitas outdoor saat hujan lebat untuk keselamatan pekerja.',
          priority: 'medium'
        };
      default:
        return {
          title: 'Rekomendasi Umum',
          content: 'Cuaca stabil dengan kemungkinan hujan sore. Bawalah payung atau jas hujan saat keluar rumah.',
          priority: 'low'
        };
    }
  };

  const recommendation = getRecommendationForUser();

  return (
    <div className="p-4 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Weather Insights</h1>
        <p className="text-gray-600">
          Comprehensive weather analytics for {userProfile?.role || 'your needs'}
        </p>
      </div>

      {/* Current Weather */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cloud className="h-5 w-5 text-sky-500" />
              Current Weather
              <Badge variant="outline" className="ml-auto">
                Live
              </Badge>
            </CardTitle>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="h-4 w-4 mr-1" />
              {userProfile?.location || currentWeather.location}
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <Thermometer className="h-8 w-8 text-red-500 mx-auto mb-2" />
                <p className="text-2xl font-bold">{currentWeather.temperature}°C</p>
                <p className="text-sm text-gray-600">Temperature</p>
                <p className="text-xs text-gray-500">Feels like {currentWeather.feelsLike}°C</p>
              </div>
              <div className="text-center">
                <Droplet className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <p className="text-2xl font-bold">{currentWeather.humidity}%</p>
                <p className="text-sm text-gray-600">Humidity</p>
              </div>
              <div className="text-center">
                <Wind className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <p className="text-2xl font-bold">{currentWeather.windSpeed}</p>
                <p className="text-sm text-gray-600">km/h {currentWeather.windDirection}</p>
                <p className="text-xs text-gray-500">Wind Speed</p>
              </div>
              <div className="text-center">
                <CloudRain className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                <p className="text-2xl font-bold">{currentWeather.rainfall}</p>
                <p className="text-sm text-gray-600">mm</p>
                <p className="text-xs text-gray-500">Rainfall</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Weather Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-orange-500" />
              Weather Alerts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {alerts.map((alert, index) => (
              <div key={index} className={`p-3 rounded-lg ${
                alert.type === 'warning' ? 'bg-orange-50 border-l-4 border-orange-500' :
                'bg-blue-50 border-l-4 border-blue-500'
              }`}>
                <h4 className="font-medium text-sm">{alert.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{alert.message}</p>
                <p className="text-xs text-gray-500 mt-2">{alert.time}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Hourly Forecast Chart */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-sky-500" />
            24-Hour Forecast
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={hourlyForecast}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="temp" stroke="#0ea5e9" name="Temperature (°C)" strokeWidth={2} />
                <Line type="monotone" dataKey="humidity" stroke="#22c55e" name="Humidity (%)" strokeWidth={2} />
                <Line type="monotone" dataKey="rainfall" stroke="#8b5cf6" name="Rainfall (mm)" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* 7-Day Forecast & Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 7-Day Forecast */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-sky-500" />
              7-Day Forecast
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {weeklyForecast.map((day, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    {day.icon}
                    <div>
                      <p className="font-medium">{day.day}</p>
                      <p className="text-sm text-gray-600">{day.condition}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">
                      {day.high}°C / {day.low}°C
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recommendations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              {recommendation.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Badge className={`mb-4 ${
              recommendation.priority === 'high' ? 'bg-red-100 text-red-800' :
              recommendation.priority === 'medium' ? 'bg-orange-100 text-orange-800' :
              'bg-green-100 text-green-800'
            }`}>
              {recommendation.priority.toUpperCase()} PRIORITY
            </Badge>
            <p className="text-gray-700 leading-relaxed">
              {recommendation.content}
            </p>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">Additional Metrics</h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="text-blue-600 font-medium">UV Index:</span>
                  <span className="ml-1 text-blue-800">{currentWeather.uvIndex}</span>
                </div>
                <div>
                  <span className="text-blue-600 font-medium">Pressure:</span>
                  <span className="ml-1 text-blue-800">{currentWeather.pressure} hPa</span>
                </div>
                <div>
                  <span className="text-blue-600 font-medium">Visibility:</span>
                  <span className="ml-1 text-blue-800">{currentWeather.visibility} km</span>
                </div>
                <div>
                  <span className="text-blue-600 font-medium">Condition:</span>
                  <span className="ml-1 text-blue-800">{currentWeather.condition}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}