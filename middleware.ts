import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Middleware to protect dashboard routes
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect dashboard routes
  if (pathname.startsWith('/dashboard')) {
    // In a real application, you would check for a valid authentication token
    // For now, we'll just allow access to demonstrate the structure
    // You would typically check for a JWT token in cookies or headers here
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*']
};