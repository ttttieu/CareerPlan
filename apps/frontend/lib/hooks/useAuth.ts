'use client'

import { useEffect, useState } from 'react'
import { getCurrentUser } from 'aws-amplify/auth'

type AuthUser = {
  username: string
  signInDetails?: any
  userId: string
}

export function useAuth() {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const checkUser = async () => {
      try {
        const currentUser = await getCurrentUser()
        setUser(currentUser)
      } catch (err) {
        setUser(null)
        setError(err as Error)
      } finally {
        setLoading(false)
      }
    }

    checkUser()
  }, [])

  return {
    user,
    loading,
    error,
    isAuthenticated: !!user,
  }
}
