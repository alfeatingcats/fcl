'use client'

import { useTranslations } from 'next-intl'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { useAuthForm } from '@/features/auth/model/use-auth-form'

import { authClient } from '@/lib/auth-client'

const SignInPage = () => {
  const t = useTranslations('Auth')
  const { form, mode, error, switchMode, onSubmit } = useAuthForm()

  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>{mode === 'signin' ? t('signIn') : t('signUp')}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {mode === 'signup' && (
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('nameLabel')}</FormLabel>
                      <FormControl>
                        <Input placeholder={t('namePlaceholder')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('emailLabel')}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t('emailPlaceholder')}
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('passwordLabel')}</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder={t('passwordPlaceholder')}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {error && <p className="text-sm text-destructive">{error}</p>}
              <Button type="submit" className="w-full">
                {mode === 'signin' ? t('signIn') : t('signUp')}
              </Button>
            </form>
          </Form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">
                {t('or')}
              </span>
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full"
            onClick={() =>
              authClient.signIn.social({
                provider: 'discord',
              })
            }
          >
            {t('signInWithDiscord')}
          </Button>

          <Button
            variant="outline"
            className="w-full"
            onClick={() =>
              authClient.signIn.social({
                provider: 'google',
              })
            }
          >
            {t('signInWithGoogle')}
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            {mode === 'signin' ? (
              <>
                {t('noAccount')}{' '}
                <button
                  type="button"
                  className="underline"
                  onClick={switchMode}
                >
                  {t('signUpLink')}
                </button>
              </>
            ) : (
              <>
                {t('hasAccount')}{' '}
                <button
                  type="button"
                  className="underline"
                  onClick={switchMode}
                >
                  {t('signInLink')}
                </button>
              </>
            )}
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default SignInPage
