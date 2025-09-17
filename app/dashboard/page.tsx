'use client';

import React, { useState, useEffect } from 'react';
import { 
  Cloud, 
  Thermometer, 
  Droplet, 
  Wind, 
  Briefcase, 
  Bell, 
  TrendingUp,
  Calendar
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { fetchProjects, Project } from '@/lib/api';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function DashboardOverview() {
  const { user, userProfile } = useAuth();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUserProjects() {
      try {
        const allProjects = await fetchProjects();
        // Filter projects by current user
        const userProjects = allProjects.filter(
          project => project.owner_uid === user?.uid || project.owner_email === user?.email
        );
        setProjects(userProjects);
      } catch (error) {
        console.error('Error loading projects:', error);
      } finally {
        setLoading(false);
      }
    }

    if (user) {
      loadUserProjects();
    }
  }, [user]);

  const weatherData = {
    temperature: 32,
    humidity: 65,
    windSpeed: 12,
    rainfall: 2.5,
    condition: 'Partly Cloudy'
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Selamat Pagi';
    if (hour < 17) return 'Selamat Siang';
    return 'Selamat Sore';
  };

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch {
      return 'Invalid date';
    }
  };

  return (
    <div className="p-4 lg:p-8">
      {/* Welcome Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {getGreeting()}, {userProfile?.name || user?.displayName || 'User'}! 👋
        </h1>
        <p className="text-gray-600">
          Welcome back to your weather analytics dashboard
        </p>
        {userProfile?.role && (
          <div className="mt-2">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
              userProfile.role === 'petani' ? 'bg-green-100 text-green-800' :
              userProfile.role === 'aviasi' ? 'bg-blue-100 text-blue-800' :
              userProfile.role === 'tambang' ? 'bg-orange-100 text-orange-800' :
              'bg-gray-100 text-gray-800'
            }`}>
              {userProfile.role.charAt(0).toUpperCase() + userProfile.role.slice(1)} Specialist
            </span>
          </div>
        )}
      </div>

      {/* Snapshot Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Local Weather */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Weather</CardTitle>
            <Cloud className="h-4 w-4 text-sky-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{weatherData.temperature}°C</div>
            <p className="text-xs text-gray-500">
              {weatherData.condition}
            </p>
            {userProfile?.location && (
              <p className="text-xs text-gray-400 mt-1">
                {userProfile.location}
              </p>
            )}
          </CardContent>
        </Card>

        {/* Active Projects */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">My Projects</CardTitle>
            <Briefcase className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {loading ? <LoadingSpinner size="sm" /> : projects.length}
            </div>
            <p className="text-xs text-gray-500">
              Active projects
            </p>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Notifications</CardTitle>
            <Bell className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-gray-500">
              Unread alerts
            </p>
          </CardContent>
        </Card>

        {/* Latest Recommendation */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Latest Insight</CardTitle>
            <TrendingUp className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">Good</div>
            <p className="text-xs text-gray-500">
              Weather conditions
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Weather Details */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cloud className="h-5 w-5 text-sky-500" />
              Today's Weather Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Thermometer className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Temperature</p>
                <p className="text-lg font-semibold">{weatherData.temperature}°C</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Droplet className="h-6 w-6 text-green-500 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Humidity</p>
                <p className="text-lg font-semibold">{weatherData.humidity}%</p>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <Wind className="h-6 w-6 text-orange-500 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Wind Speed</p>
                <p className="text-lg font-semibold">{weatherData.windSpeed} km/h</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <Cloud className="h-6 w-6 text-purple-500 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Rainfall</p>
                <p className="text-lg font-semibold">{weatherData.rainfall} mm</p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-sky-50 rounded-lg">
              <h4 className="font-medium text-sky-900 mb-2">Weather Recommendation</h4>
              <p className="text-sm text-sky-700">
                {userProfile?.role === 'petani' ? 
                  'Kondisi cuaca baik untuk aktivitas pertanian. Kelembaban optimal untuk pertumbuhan tanaman.' :
                userProfile?.role === 'aviasi' ? 
                  'Visibilitas baik untuk penerbangan. Perhatikan kecepatan angin untuk keselamatan.' :
                userProfile?.role === 'tambang' ? 
                  'Kondisi operasional aman. Tidak ada peringatan cuaca ekstrem.' :
                  'Kondisi cuaca stabil. Tidak ada peringatan khusus.'
                }
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button asChild className="w-full justify-start">
              <Link href="/dashboard/weather">
                <Cloud className="h-4 w-4 mr-2" />
                View Weather Insights
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full justify-start">
              <Link href="/dashboard/projects">
                <Briefcase className="h-4 w-4 mr-2" />
                Manage Projects
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full justify-start">
              <Link href="/dashboard/chat">
                <Cloud className="h-4 w-4 mr-2" />
                Weather Chat
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full justify-start">
              <Link href="/dashboard/reports">
                <TrendingUp className="h-4 w-4 mr-2" />
                View Reports
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Projects */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-green-500" />
            Recent Projects
          </CardTitle>
          <Button asChild variant="outline" size="sm">
            <Link href="/dashboard/projects">View All</Link>
          </Button>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex justify-center py-8">
              <LoadingSpinner />
            </div>
          ) : projects.length === 0 ? (
            <div className="text-center py-8">
              <Briefcase className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No projects yet</h3>
              <p className="text-gray-500 mb-4">
                Start your first weather analysis project
              </p>
              <Button asChild>
                <Link href="/dashboard/projects">Create Project</Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {projects.slice(0, 3).map((project) => (
                <div key={project.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{project.title}</h4>
                    <p className="text-sm text-gray-600">{project.description.substring(0, 100)}...</p>
                    <div className="flex items-center gap-4 mt-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        project.sector === 'Agriculture' ? 'bg-green-100 text-green-800' :
                        project.sector === 'Aviation' ? 'bg-blue-100 text-blue-800' :
                        project.sector === 'Mining' ? 'bg-orange-100 text-orange-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {project.sector}
                      </span>
                      <span className="text-xs text-gray-500 flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {formatDate(project.created_at)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}