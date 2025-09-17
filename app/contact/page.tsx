'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Send, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import LoadingSpinner from '@/components/LoadingSpinner';
import { useToast } from '@/components/Toast';
import { submitContactForm } from '@/lib/api';

const contactInfo = [
  {
    icon: <Mail className="h-6 w-6 text-sky-500" />,
    title: 'Email',
    content: 'info@bajaklangit.com',
    description: 'Kirim pertanyaan atau konsultasi'
  },
  {
    icon: <Phone className="h-6 w-6 text-sky-500" />,
    title: 'Telepon',
    content: '+62 21 1234 5678',
    description: 'Hubungi tim support kami'
  },
  {
    icon: <MapPin className="h-6 w-6 text-sky-500" />,
    title: 'Alamat',
    content: 'Jakarta, Indonesia',
    description: 'Kantor pusat kami'
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-green-500" />,
    title: 'WhatsApp',
    content: '+62 812 3456 7890',
    description: 'Chat langsung dengan kami'
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { showToast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      showToast('Mohon lengkapi semua field yang wajib diisi', 'error');
      return;
    }

    setLoading(true);

    try {
      const result = await submitContactForm({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        message: formData.message
      });

      if (result.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', company: '', message: '' });
        showToast('Terima kasih! Pesan Anda telah terkirim.', 'success');
      } else {
        showToast(result.message || 'Gagal mengirim pesan. Silakan coba lagi.', 'error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      showToast('Terjadi kesalahan. Silakan coba lagi nanti.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Get in <span className="text-sky-600">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Punya pertanyaan tentang layanan kami? Tim expert kami siap membantu 
              Anda menemukan solusi analisis data cuaca yang tepat.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gray-50 rounded-full">
                      {info.icon}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-gray-900 mb-2">{info.content}</p>
                  <p className="text-sm text-gray-600">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <p className="text-gray-600">
                  Ceritakan kebutuhan Anda dan kami akan memberikan solusi terbaik.
                </p>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Pesan Terkirim!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Terima kasih atas pesan Anda. Tim kami akan segera menghubungi Anda.
                    </p>
                    <Button 
                      onClick={() => setSubmitted(false)}
                      variant="outline"
                    >
                      Kirim Pesan Lain
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Nama Lengkap *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Masukkan nama lengkap Anda"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="nama@email.com"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="company">Perusahaan/Jabatan</Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Nama perusahaan atau jabatan Anda"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Pesan *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Ceritakan kebutuhan atau pertanyaan Anda..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <LoadingSpinner size="sm" className="mr-2" />
                          Mengirim...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Kirim Pesan
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Additional Info */}
            <div className="space-y-8">
              {/* WhatsApp Quick Contact */}
              <Card className="bg-green-50 border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-green-600" />
                    WhatsApp Quick Contact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Butuh bantuan cepat? Chat langsung dengan tim support kami 
                    via WhatsApp untuk konsultasi dan informasi layanan.
                  </p>
                  <Button asChild className="bg-green-600 hover:bg-green-700">
                    <a 
                      href="https://wa.me/6281234567890?text=Halo%20Bajak%20Langit,%20saya%20ingin%20konsultasi%20tentang%20layanan%20analisis%20data%20cuaca"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Chat via WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Berapa lama waktu respon untuk konsultasi?
                    </h4>
                    <p className="text-sm text-gray-600">
                      Tim kami akan merespon dalam 1x24 jam untuk konsultasi awal 
                      dan diskusi kebutuhan proyek Anda.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Apakah tersedia demo atau trial?
                    </h4>
                    <p className="text-sm text-gray-600">
                      Ya, kami menyediakan demo dashboard dan trial 14 hari 
                      untuk semua layanan analisis data cuaca.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Bagaimana cara memulai proyek bersama Bajak Langit?
                    </h4>
                    <p className="text-sm text-gray-600">
                      Mulai dengan konsultasi gratis untuk memahami kebutuhan, 
                      dilanjutkan dengan proposal solusi yang sesuai.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card>
                <CardHeader>
                  <CardTitle>Office Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Senin - Jumat</span>
                      <span className="font-medium">08:00 - 17:00 WIB</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sabtu</span>
                      <span className="font-medium">09:00 - 14:00 WIB</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Minggu</span>
                      <span className="font-medium">Tutup</span>
                    </div>
                    <div className="pt-2 border-t border-gray-200">
                      <p className="text-xs text-gray-500">
                        Emergency support tersedia 24/7 untuk klien premium
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}