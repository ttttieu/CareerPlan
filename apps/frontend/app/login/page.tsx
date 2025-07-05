'use client'
import { useState } from 'react'
import { signIn } from '../../lib/auth'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = async () => {
    try {
      await signIn(email, password)
      router.push('/dashboard')
    } catch (err) {
      alert('Đăng nhập thất bại')
    }
  }

  return (
    <div className="p-4 max-w-sm mx-auto">
      <h2 className="text-xl mb-4">Đăng nhập</h2>
      <input className="input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input className="input mt-2" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mật khẩu" />
      <button className="btn btn-primary mt-4" onClick={handleLogin}>Đăng nhập</button>
    </div>
  )
}
