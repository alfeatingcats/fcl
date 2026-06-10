'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'

import { useRouter } from '@/i18n/routing'

import {
  type SignInInput,
  type SignUpInput,
  signInSchema,
  signUpSchema,
} from '../lib/schemas'
import { authClient } from '@/lib/auth-client'

export type AuthMode = 'signin' | 'signup'

export function useAuthForm() {
  const router = useRouter()
  const [mode, setMode] = useState<AuthMode>('signin')
  const [error, setError] = useState<string | null>(null)

  const schema = useMemo(
    () => (mode === 'signin' ? signInSchema : signUpSchema),
    [mode],
  )

  const form = useForm<SignInInput | SignUpInput>({
    resolver: zodResolver(schema),
    defaultValues: { email: '', password: '', name: '' },
    shouldUnregister: true,
  })

  const switchMode = useCallback(() => {
    setMode((prev) => (prev === 'signin' ? 'signup' : 'signin'))
    setError(null)
    form.reset({ email: '', password: '', name: '' })
  }, [form])

  const onSubmit = useCallback(
    async (data: SignInInput | SignUpInput) => {
      setError(null)
      try {
        if (mode === 'signin') {
          const { error: signInError } = await authClient.signIn.email(
            data as SignInInput,
          )
          if (signInError) {
            setError(signInError.message ?? null)
            return
          }
        } else {
          const { error: signUpError } = await authClient.signUp.email(
            data as SignUpInput,
          )
          if (signUpError) {
            setError(signUpError.message ?? null)
            return
          }
        }
        router.refresh()
      } catch (err) {
        setError(err instanceof Error ? err.message : null)
      }
    },
    [mode, router],
  )

  return { form, mode, error, switchMode, onSubmit }
}
