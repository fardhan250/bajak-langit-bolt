import React from 'react';
import { Target, Eye, Heart, Users, Award, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const values = [
  {
    icon: <Target className="h-8 w-8 text-sky-500" />,
    title: 'Accuracy',
    description: 'Komitmen pada akurasi data dan analisis yang presisi untuk keputusan terbaik.'
  },
  {
    icon: <Users className="h-8 w-8 text-green-500" />,
    title: 'Collaboration',
    description: 'Membangun kemitraan strategis dengan semua stakeholder untuk hasil optimal.'
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-orange-500" />,
    title: 'Innovation',
    description: 'Terus berinovasi dengan teknologi terdepan untuk solusi yang berkelanjutan.'
  },
  {
    icon: <Heart className="h-8 w-8 text-red-500" />,
    title: 'Empathy',
    description: 'Memahami kebutuhan pengguna dan memberikan solusi yang tepat sasaran.'
  }
];

const team = [
  {
    name: 'Dr. Ahmad Wijaya',
    role: 'Chief Executive Officer',
    expertise: 'Meteorology & Data Science',
    image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?w=300'
  },
  {
    name: 'Sari Kusuma, M.T.',
    role: 'Chief Technology Officer',
    expertise: 'AI & Machine Learning',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=300'
  },
  {
    name: 'Budi Santoso, S.Si.',
    role: 'Lead Data Analyst',
    expertise: 'Weather Modeling & Analysis',
    image: 'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?w=300'
  }
];

const stats = [
  { number: '500+', label: 'Active Users' },
  { number: '1000+', label: 'Projects Completed' },
  { number: '95%', label: 'Accuracy Rate' },
  { number: '24/7', label: 'Support Available' }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Tentang <span className="text-sky-600">Bajak Langit</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami adalah perusahaan teknologi yang berfokus pada analisis data cuaca 
              untuk mendukung pengambilan keputusan di berbagai sektor industri.
            </p>
          </div>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Memberdayakan Keputusan dengan Data Cuaca
              </h2>
              <p className="text-gray-600 mb-4">
                Bajak Langit didirikan dengan visi untuk mengubah cara industri memanfaatkan 
                data cuaca dalam pengambilan keputusan strategis. Kami menggabungkan keahlian 
                meteorologi dengan teknologi AI terdepan untuk memberikan insight yang actionable.
              </p>
              <p className="text-gray-600 mb-4">
                Dengan pengalaman bertahun-tahun dalam analisis data cuaca, kami telah membantu 
                ratusan klien di sektor pertanian, penerbangan, dan pertambangan untuk 
                meningkatkan efisiensi operasional dan mengurangi risiko.
              </p>
              <p className="text-gray-600">
                Tim kami terdiri dari ahli meteorologi, data scientist, dan engineer berpengalaman 
                yang berkomitmen untuk memberikan solusi terbaik bagi setiap tantangan yang dihadapi klien.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-sky-600 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Eye className="h-8 w-8 text-sky-500" />
                  Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg">
                  Menjadi platform analisis data cuaca terdepan di Indonesia yang memberdayakan 
                  setiap sektor untuk mengambil keputusan berbasis data yang akurat dan tepat waktu.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Target className="h-8 w-8 text-green-500" />
                  Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg">
                  Menyediakan solusi analisis data cuaca yang inovatif, akurat, dan mudah diakses 
                  untuk meningkatkan produktivitas, efisiensi, dan keselamatan di berbagai industri.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">
              Nilai-nilai yang memandu setiap langkah kami dalam memberikan layanan terbaik
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gray-50 rounded-full">
                      {value.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">
              Tim ahli yang berdedikasi untuk memberikan solusi terbaik
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-white text-center">
                <CardHeader>
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-sky-600 font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{member.expertise}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Award className="h-16 w-16 text-yellow-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Recognition & Partnerships
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kami bangga telah mendapatkan pengakuan dari berbagai institusi dan 
              menjalin kemitraan strategis dengan BMKG, universitas terkemuka, 
              dan organisasi penelitian cuaca internasional.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}