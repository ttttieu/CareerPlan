'use client'

import { useRouter } from 'next/navigation'
import { signOut } from '../lib/auth'

export default function LogoutButton() {
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await signOut()
      router.push('/login')
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  return (
    <button onClick={handleLogout} className="text-red-600 hover:underline">
      Đăng xuất
    </button>
  )
}
