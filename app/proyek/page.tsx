'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, User, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import LoadingSpinner from '@/components/LoadingSpinner';
import { fetchProjects, Project } from '@/lib/api';

export default function ProyekPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    async function loadProjects() {
      try {
        setLoading(true);
        const projectsData = await fetchProjects();
        setProjects(projectsData);
      } catch (err) {
        setError('Failed to load projects');
        console.error('Error loading projects:', err);
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  const getSectorColor = (sector: string) => {
    switch (sector.toLowerCase()) {
      case 'agriculture':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'aviation':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'mining':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return 'Date not available';
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
                Our <span className="text-sky-600">Projects</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Eksplorasi berbagai proyek analisis data cuaca yang telah kami kerjakan 
                untuk klien di berbagai sektor industri.
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
                <p className="mt-4 text-gray-600">Loading projects...</p>
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
              Our <span className="text-sky-600">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Eksplorasi berbagai proyek analisis data cuaca yang telah kami kerjakan 
              untuk klien di berbagai sektor industri.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
              <p className="text-red-800">{error}</p>
            </div>
          )}

          {projects.length === 0 ? (
            <div className="text-center py-16">
              <div className="bg-gray-50 rounded-lg p-8 max-w-md mx-auto">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Data Proyek Belum Tersedia
                </h3>
                <p className="text-gray-600 mb-4">
                  Kami sedang memperbarui data proyek. Silakan kembali lagi nanti 
                  atau hubungi tim kami untuk informasi lebih lanjut.
                </p>
                <Button asChild>
                  <a href="/contact">Contact Us</a>
                </Button>
              </div>
            </div>
          ) : (
            <>
              <div className="text-center mb-12">
                <p className="text-lg text-gray-600">
                  Menampilkan {projects.length} proyek yang telah diselesaikan
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                  <Card key={project.id} className="hover:shadow-lg transition-shadow duration-300 group overflow-hidden">
                    <div className="aspect-video bg-gray-200 overflow-hidden">
                      {project.image_url ? (
                        <img
                          src={project.image_url}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-sky-100 to-sky-200 flex items-center justify-center">
                          <span className="text-sky-600 font-medium">No Image</span>
                        </div>
                      )}
                    </div>
                    
                    <CardHeader>
                      <div className="flex items-start justify-between gap-2">
                        <CardTitle className="text-lg leading-tight">
                          {project.title}
                        </CardTitle>
                        <Badge className={getSectorColor(project.sector)}>
                          {project.sector}
                        </Badge>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {project.description}
                      </p>
                      
                      <div className="flex items-center text-xs text-gray-500 mb-4">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(project.created_at)}
                      </div>
                      
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="w-full group-hover:bg-sky-500 group-hover:text-white transition-colors"
                            onClick={() => setSelectedProject(project)}
                          >
                            View Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle className="text-xl">
                              {selectedProject?.title}
                            </DialogTitle>
                          </DialogHeader>
                          
                          {selectedProject && (
                            <div className="space-y-6">
                              {selectedProject.image_url && (
                                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                                  <img
                                    src={selectedProject.image_url}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              )}
                              
                              <div className="flex items-center gap-4">
                                <Badge className={getSectorColor(selectedProject.sector)}>
                                  {selectedProject.sector}
                                </Badge>
                                <div className="flex items-center text-sm text-gray-500">
                                  <Calendar className="h-4 w-4 mr-1" />
                                  {formatDate(selectedProject.created_at)}
                                </div>
                              </div>
                              
                              <div>
                                <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
                                <p className="text-gray-600 leading-relaxed">
                                  {selectedProject.description}
                                </p>
                              </div>
                              
                              {selectedProject.owner_uid && (
                                <div className="flex items-center text-sm text-gray-500">
                                  <User className="h-4 w-4 mr-1" />
                                  Project Owner: {selectedProject.owner_uid}
                                </div>
                              )}
                              
                              <div className="flex gap-2 pt-4">
                                <Button asChild className="flex-1">
                                  <a href="/contact">
                                    <ExternalLink className="h-4 w-4 mr-2" />
                                    Request Similar Project
                                  </a>
                                </Button>
                                <Button variant="outline" asChild className="flex-1">
                                  <a href="/auth/signup">
                                    Get Started
                                  </a>
                                </Button>
                              </div>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Punya Proyek Serupa?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Konsultasikan kebutuhan analisis data cuaca Anda dengan tim expert kami. 
            Kami siap membantu mewujudkan proyek impian Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href="/contact">Discuss Your Project</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="/services">View Our Services</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}