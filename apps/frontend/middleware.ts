import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { decodeJwt } from 'jose'

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('idToken')?.value

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  try {
    const payload = decodeJwt(token)
    // Optionally validate exp, group, etc.
    return NextResponse.next()
  } catch {
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

export const config = {
  matcher: ['/dashboard/:path*', '/test/:path*']
}
