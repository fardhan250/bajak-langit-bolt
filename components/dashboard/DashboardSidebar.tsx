'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  BarChart3, 
  Home, 
  Cloud, 
  Briefcase, 
  TrendingUp, 
  MessageCircle, 
  FileText, 
  Settings, 
  Bell,
  Menu,
  X,
  Users,
  LogOut
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

const menuItems = [
  { 
    icon: <Home className="h-5 w-5" />, 
    label: 'Overview', 
    href: '/dashboard' 
  },
  { 
    icon: <Cloud className="h-5 w-5" />, 
    label: 'Weather Insights', 
    href: '/dashboard/weather' 
  },
  { 
    icon: <Briefcase className="h-5 w-5" />, 
    label: 'My Projects', 
    href: '/dashboard/projects' 
  },
  { 
    icon: <TrendingUp className="h-5 w-5" />, 
    label: 'Recommendations', 
    href: '/dashboard/recommendations' 
  },
  { 
    icon: <MessageCircle className="h-5 w-5" />, 
    label: 'Weather Chat', 
    href: '/dashboard/chat' 
  },
  { 
    icon: <FileText className="h-5 w-5" />, 
    label: 'Reports', 
    href: '/dashboard/reports' 
  },
  { 
    icon: <Bell className="h-5 w-5" />, 
    label: 'Notifications', 
    href: '/dashboard/notifications' 
  },
  { 
    icon: <Settings className="h-5 w-5" />, 
    label: 'Profile & Settings', 
    href: '/dashboard/settings' 
  }
];

const adminMenuItems = [
  { 
    icon: <Users className="h-5 w-5" />, 
    label: 'User Management', 
    href: '/dashboard/admin/users' 
  },
  { 
    icon: <Briefcase className="h-5 w-5" />, 
    label: 'All Projects', 
    href: '/dashboard/admin/projects' 
  },
  { 
    icon: <MessageCircle className="h-5 w-5" />, 
    label: 'Contact Messages', 
    href: '/dashboard/admin/contacts' 
  }
];

export default function DashboardSidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { user, userProfile, logout } = useAuth();

  const isAdmin = userProfile?.role === 'admin' || userProfile?.role === 'staff';

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const isActive = (href: string) => {
    if (href === '/dashboard') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  const SidebarContent = () => (
    <>
      {/* Logo */}
      <div className="flex items-center justify-between p-4">
        <Link href="/" className="flex items-center space-x-2">
          <BarChart3 className="h-8 w-8 text-sky-500" />
          <span className="text-xl font-bold text-gray-900">Bajak Langit</span>
        </Link>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsMobileMenuOpen(false)}
          className="lg:hidden"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      {/* User Info */}
      <div className="px-4 pb-4">
        <div className="bg-sky-50 rounded-lg p-3">
          <p className="font-medium text-gray-900">
            {userProfile?.name || user?.displayName || 'User'}
          </p>
          <p className="text-sm text-sky-600 capitalize">
            {userProfile?.role || 'Member'}
          </p>
          {userProfile?.location && (
            <p className="text-xs text-gray-600">
              {userProfile.location}
            </p>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
              isActive(item.href)
                ? 'bg-sky-100 text-sky-700'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            }`}
          >
            {item.icon}
            <span className="ml-3">{item.label}</span>
          </Link>
        ))}

        {/* Admin Section */}
        {isAdmin && (
          <>
            <div className="pt-4 pb-2">
              <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Admin
              </h3>
            </div>
            {adminMenuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive(item.href)
                    ? 'bg-orange-100 text-orange-700'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                {item.icon}
                <span className="ml-3">{item.label}</span>
              </Link>
            ))}
          </>
        )}
      </nav>

      {/* Logout */}
      <div className="p-4">
        <Button
          onClick={handleLogout}
          variant="ghost"
          className="w-full justify-start text-gray-600 hover:text-red-600"
        >
          <LogOut className="h-5 w-5 mr-3" />
          Sign Out
        </Button>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          onClick={() => setIsMobileMenuOpen(true)}
          size="sm"
          variant="outline"
          className="bg-white shadow-md"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 bg-white border-r border-gray-200">
        <SidebarContent />
      </div>

      {/* Mobile sidebar */}
      {isMobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" 
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 z-50 w-64 bg-white lg:hidden">
            <SidebarContent />
          </div>
        </>
      )}

      {/* Main content area offset for mobile */}
      <div className="lg:pl-64">
        {/* This ensures content doesn't overlap sidebar on desktop */}
      </div>
    </>
  );
}