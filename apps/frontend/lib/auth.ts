import { 
    signUp, 
    confirmSignUp,
    signIn as amplifySignIn,
    signOut as amplifySignOut,
    getCurrentUser as amplifyGetCurrentUser,
    fetchAuthSession as amplifyFetchAuthSession,
  } from 'aws-amplify/auth'

export const registerUser = async (email: string, password: string) => {
  return signUp({
    username: email,
    password,
  })
}

export const confirmUser = async (email: string, code: string) => {
  return confirmSignUp({ username: email, confirmationCode: code })
}

export const signIn = async (email: string, password: string): Promise<any> => {
  const user = await amplifySignIn({ username: email, password })
  const session = await amplifyFetchAuthSession()
  const idToken = session.tokens?.idToken?.toString()

  // Ghi vào cookie frontend nếu có token
  if (idToken) {
    document.cookie = `idToken=${idToken}; path=/; max-age=3600`
  }

  return user
}

export const signOut = async () => {
  await amplifySignOut()
  document.cookie = 'idToken=; path=/; max-age=0'
}

export const getCurrentUserInfo = async () => {
  try {
    const user = await amplifyGetCurrentUser()
    return user
  } catch {
    return null
  }
}