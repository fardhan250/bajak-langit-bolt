# Bajak Langit - Weather Data Analysis Platform

A production-ready, responsive portfolio website for Bajak Langit, a weather data analysis company. Built with Next.js, TypeScript, TailwindCSS, Firebase Authentication, and Google Apps Script integration.

## 🚀 Features

### Public Website
- **Multi-page responsive design** with sticky navigation
- **Home**: Hero section, sector cards, features, project/testimonial previews
- **About**: Company description, vision/mission, team, values
- **Services**: Detailed service descriptions for Agriculture, Aviation, Mining
- **Projects**: Dynamic project gallery with modal details
- **Methodology**: Data sources, analysis methods, sample visualizations
- **Testimonials**: Customer testimonials carousel with ratings
- **Contact**: Contact form with real-time submission to Google Sheets

### Authentication System
- **Firebase Authentication** with email/password
- **Sign Up/Sign In/Forgot Password** flows
- **User profile management** with role-based access
- **Protected dashboard routes**

### Dashboard (Protected)
- **Overview**: Weather snapshot, project count, notifications
- **Weather Insights**: Real-time weather data, forecasts, recommendations
- **My Projects**: User's project management
- **Recommendations**: AI-based weather recommendations
- **Weather Chat**: Chatbot interface (MVP)
- **Reports**: Analytics and downloadable reports
- **Notifications**: Weather alerts and system notifications
- **Profile & Settings**: User profile management
- **Admin Panel**: User/content management (role-based)

### API Integration
- **Google Apps Script endpoints** for dynamic content
- **Robust error handling** with graceful fallbacks
- **Real-time data synchronization**
- **CORS-aware fetching** with retry mechanisms

## 🛠 Tech Stack

- **Framework**: Next.js 13.5.1
- **Language**: TypeScript
- **Styling**: TailwindCSS + shadcn/ui
- **Authentication**: Firebase Auth
- **Data Storage**: Google Apps Script + Google Sheets
- **Charts**: Recharts
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation

## 📋 Prerequisites

- Node.js 18+ and npm
- Firebase project with Authentication enabled
- Google Apps Script deployment URLs
- Environment variables configured

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abcdefghijk

# Apps Script Security (optional)
APPSCRIPT_SECRET=your_secret_token_here

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 🚀 Getting Started

1. **Clone and install dependencies**:
```bash
npm install
```

2. **Configure environment variables**:
   - Copy `.env.example` to `.env.local`
   - Fill in your Firebase credentials
   - Set up Google Apps Script endpoints

3. **Start development server**:
```bash
npm run dev
```

4. **Build for production**:
```bash
npm run build
npm start
```

## 📡 API Endpoints

The application integrates with these Google Apps Script endpoints:

### Testimonials (GET)
```
https://script.google.com/macros/s/AKfycbzGaSE1N4OyaHum46Mtlc1EQDVylcVDwNssO_CLg58u1Ii_k-dSDnjwVpmWCF47zvA/exec
```

### Projects (GET)
```
https://script.google.com/macros/s/AKfycbxp2GqVzNfLNcsxszhyXyGrqPJO82ktQ3H15vZaiUaZa93TretgX_NtjpBX_VQLhOSl/exec
```

### Contacts (POST)
```
https://script.google.com/macros/s/AKfycbyap6rDv98vSFKgtBYlTvw78VMB6sCmmFNulUgqVvNyOm8YheoUJIMGM9NcVeKyS3Ue/exec
```

### Users (GET/POST)
```
https://script.google.com/macros/s/AKfycbxhSTLsivA3P2BSU3l2IwK5foclsBmVaCdQ5conLTE9uRk0vSOU1CWvAU05EEbq_1Zu/exec
```

### Data Schemas

**Testimonials Response**:
```json
[
  {
    "id": "1",
    "name": "John Doe",
    "profession": "Farmer",
    "sector": "Agriculture",
    "testimonial": "Great service...",
    "photo_url": "https://...",
    "created_at": "2025-01-01T08:00:00Z"
  }
]
```

**Projects Response**:
```json
[
  {
    "id": "1",
    "title": "Weather Analysis Project",
    "sector": "Agriculture",
    "description": "Project description...",
    "image_url": "https://...",
    "owner_uid": "firebase-uid",
    "created_at": "2025-01-01T08:00:00Z"
  }
]
```

**Contact Form Payload**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Company Name",
  "message": "Message content...",
  "created_at": "2025-01-01T08:00:00Z"
}
```

**User Profile Payload**:
```json
{
  "uid": "firebase-uid",
  "email": "user@example.com",
  "name": "User Name",
  "role": "petani",
  "location": "Jakarta",
  "created_at": "2025-01-01T08:00:00Z"
}
```

## 🔐 Authentication Flow

1. **Sign Up**: Creates Firebase user → Saves profile to Google Sheets
2. **Sign In**: Authenticates with Firebase → Fetches profile from Google Sheets
3. **Profile Management**: Updates both Firebase and Google Sheets
4. **Role-based Access**: Admin/Staff users see additional management features

## 🛡️ Security Considerations

- **Firebase credentials**: Stored in environment variables
- **User passwords**: Handled by Firebase (never stored in Google Sheets)
- **API Security**: Consider adding server-side proxy with secret tokens
- **Input Validation**: All forms validated client and server-side
- **Error Handling**: Graceful fallbacks for API failures

## 📱 Mobile Responsiveness

- **Mobile-first design** with breakpoints at 768px and 1024px
- **Collapsible navigation** for mobile devices
- **Touch-friendly interfaces** throughout
- **Responsive charts** and data visualizations

## 🎨 Design System

- **Primary Color**: Sky Blue (#0ea5e9)
- **Accent Color**: Green (#22c55e)
- **Typography**: Inter font family
- **Spacing**: 8px grid system
- **Components**: shadcn/ui component library

## 🚀 Deployment

The application is configured for static export and can be deployed to:
- Vercel (recommended)
- Netlify
- AWS S3 + CloudFront
- GitHub Pages

Build command:
```bash
npm run build
```

## 📊 Admin Features

Admin users (role: 'admin' or 'staff') have access to:
- **User Management**: View all users, change roles
- **Project Management**: View all projects
- **Contact Messages**: View form submissions
- **Content Management**: Moderate testimonials

## 🔮 Future Enhancements

- **Real-time weather API integration**
- **Advanced ML weather predictions**
- **WhatsApp bot integration**
- **Mobile app (React Native)**
- **Advanced admin dashboard**
- **Email notifications**
- **Payment integration (Stripe)**

## 📝 Notes for Developers

### Updating API Endpoints
Modify the URLs in `lib/api.ts`:
```typescript
const API_ENDPOINTS = {
  testimonials: 'your_new_testimonials_url',
  projects: 'your_new_projects_url',
  // ...
};
```

### Adding New User Roles
Update the `User` interface in `lib/api.ts` and add role handling throughout the application.

### Implementing Admin-only APIs
Create server-side endpoints in `pages/api/` for secure admin operations.

### Customizing Weather Data
Modify `app/dashboard/weather/page.tsx` to integrate with real weather APIs.

## 🐛 Troubleshooting

**Firebase connection issues**:
- Verify environment variables are correctly set
- Check Firebase project configuration
- Ensure Authentication is enabled in Firebase Console

**Google Apps Script CORS errors**:
- Ensure Apps Script is deployed as web app
- Set execution permissions to "Anyone"
- Consider implementing server-side proxy

**Build errors**:
- Clear Next.js cache: `rm -rf .next`
- Delete node_modules and reinstall: `rm -rf node_modules && npm install`

## 📄 License

This project is built for Bajak Langit weather analysis company. All rights reserved.

---

**Built with ❤️ using Next.js, TypeScript, and modern web technologies.**