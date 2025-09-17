// Google Apps Script API endpoints and helper functions
// Change these URLs to match your Apps Script deployment URLs

const API_ENDPOINTS = {
  testimonials: 'https://script.google.com/macros/s/AKfycbzGaSE1N4OyaHum46Mtlc1EQDVylcVDwNssO_CLg58u1Ii_k-dSDnjwVpmWCF47zvA/exec',
  projects: 'https://script.google.com/macros/s/AKfycbxp2GqVzNfLNcsxszhyXyGrqPJO82ktQ3H15vZaiUaZa93TretgX_NtjpBX_VQLhOSl/exec',
  contacts: 'https://script.google.com/macros/s/AKfycbyap6rDv98vSFKgtBYlTvw78VMB6sCmmFNulUgqVvNyOm8YheoUJIMGM9NcVeKyS3Ue/exec',
  users: 'https://script.google.com/macros/s/AKfycbxhSTLsivA3P2BSU3l2IwK5foclsBmVaCdQ5conLTE9uRk0vSOU1CWvAU05EEbq_1Zu/exec'
};

export interface Testimonial {
  id?: string;
  name: string;
  profession: string;
  sector: string;
  testimonial: string;
  photo_url?: string;
  created_at: string;
}

export interface Project {
  id?: string;
  title: string;
  sector: string;
  description: string;
  image_url?: string;
  owner_uid?: string;
  owner_email?: string;
  created_at: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  company?: string;
  message: string;
  created_at: string;
}

export interface User {
  uid: string;
  email: string;
  name: string;
  role: 'petani' | 'aviasi' | 'tambang' | 'admin' | 'staff';
  location?: string;
  created_at: string;
}

// GET Testimonials
export async function fetchTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await fetch(API_ENDPOINTS.testimonials, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });
    
    if (!response.ok) throw new Error('Failed to fetch testimonials');
    
    const data = await response.json();
    return Array.isArray(data) ? data : data.data || [];
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return getPlaceholderTestimonials();
  }
}

// GET Projects
export async function fetchProjects(): Promise<Project[]> {
  try {
    const response = await fetch(API_ENDPOINTS.projects, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });
    
    if (!response.ok) throw new Error('Failed to fetch projects');
    
    const data = await response.json();
    return Array.isArray(data) ? data : data.data || [];
  } catch (error) {
    console.error('Error fetching projects:', error);
    return getPlaceholderProjects();
  }
}

// POST Contact Form
export async function submitContactForm(contactData: Omit<ContactMessage, 'created_at'>): Promise<{ success: boolean; message?: string }> {
  try {
    const payload: ContactMessage = {
      ...contactData,
      created_at: new Date().toISOString()
    };

    const response = await fetch(API_ENDPOINTS.contacts, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) throw new Error('Failed to submit contact form');
    
    const result = await response.json();
    return { success: true, message: result.message || 'Contact form submitted successfully' };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, message: 'Gagal mengirim pesan. Silakan coba lagi.' };
  }
}

// GET Users
export async function fetchUsers(): Promise<User[]> {
  try {
    const response = await fetch(API_ENDPOINTS.users, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });
    
    if (!response.ok) throw new Error('Failed to fetch users');
    
    const data = await response.json();
    return Array.isArray(data) ? data : data.data || [];
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
}

// POST User Profile (after Firebase signup)
export async function saveUserProfile(userData: Omit<User, 'created_at'>): Promise<{ success: boolean; message?: string }> {
  try {
    const payload: User = {
      ...userData,
      created_at: new Date().toISOString()
    };

    const response = await fetch(API_ENDPOINTS.users, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) throw new Error('Failed to save user profile');
    
    const result = await response.json();
    return { success: true, message: result.message || 'User profile saved successfully' };
  } catch (error) {
    console.error('Error saving user profile:', error);
    return { success: false, message: 'Gagal menyimpan profil pengguna.' };
  }
}

// Find user by UID
export async function findUserByUid(uid: string): Promise<User | null> {
  try {
    const users = await fetchUsers();
    return users.find(user => user.uid === uid) || null;
  } catch (error) {
    console.error('Error finding user by UID:', error);
    return null;
  }
}

// Placeholder data for when APIs are unavailable
function getPlaceholderTestimonials(): Testimonial[] {
  return [
    {
      id: "placeholder-1",
      name: "Pak Haji Sunaryo",
      profession: "Petani Beras",
      sector: "Agriculture",
      testimonial: "Sejak menggunakan layanan Bajak Langit, hasil panen saya meningkat 30%. Prediksi cuaca yang akurat membantu saya menentukan waktu tanam yang tepat.",
      photo_url: "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?w=150",
      created_at: "2025-01-01T08:00:00Z"
    },
    {
      id: "placeholder-2",
      name: "Ibu Sari Dewi",
      profession: "Pilot",
      sector: "Aviation",
      testimonial: "Data meteorologi dari Bajak Langit sangat membantu dalam perencanaan penerbangan. Informasi turbulensi dan visibilitas sangat detail dan akurat.",
      photo_url: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=150",
      created_at: "2025-01-02T09:00:00Z"
    },
    {
      id: "placeholder-3",
      name: "Bapak Joko Widodo",
      profession: "Site Manager",
      sector: "Mining",
      testimonial: "Prediksi curah hujan membantu kami mengoptimalkan jadwal operasional tambang. Produktivitas meningkat karena bisa menghindari cuaca ekstrem.",
      photo_url: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?w=150",
      created_at: "2025-01-03T10:00:00Z"
    }
  ];
}

function getPlaceholderProjects(): Project[] {
  return [
    {
      id: "placeholder-1",
      title: "Optimasi Jadwal Tanam Padi Desa Sukamaju",
      sector: "Agriculture",
      description: "Implementasi sistem prediksi cuaca untuk optimasi jadwal tanam padi di Desa Sukamaju, Jawa Barat. Menggunakan data BMKG dan analisis machine learning untuk meningkatkan hasil panen hingga 25%.",
      image_url: "https://images.pexels.com/photos/1459331/pexels-photo-1459331.jpeg?w=400",
      owner_uid: "demo-user-1",
      created_at: "2025-01-01T08:00:00Z"
    },
    {
      id: "placeholder-2",
      title: "Sistem Peringatan Dini Penerbangan",
      sector: "Aviation",
      description: "Pengembangan dashboard real-time untuk monitoring kondisi cuaca bandara. Integrasi data radar dan satelit untuk prediksi turbulensi dan visibilitas.",
      image_url: "https://images.pexels.com/photos/62623/wing-plane-flying-airplane-62623.jpeg?w=400",
      owner_uid: "demo-user-2",
      created_at: "2025-01-02T09:00:00Z"
    },
    {
      id: "placeholder-3",
      title: "Monitoring Cuaca Tambang Batubara",
      sector: "Mining",
      description: "Sistem monitoring cuaca khusus untuk operasional tambang batubara. Prediksi curah hujan dan angin kencang untuk keselamatan operasional.",
      image_url: "https://images.pexels.com/photos/1268551/pexels-photo-1268551.jpeg?w=400",
      owner_uid: "demo-user-3",
      created_at: "2025-01-03T10:00:00Z"
    }
  ];
}