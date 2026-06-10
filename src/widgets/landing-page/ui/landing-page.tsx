'use client'

import { ColorPanels } from '@paper-design/shaders-react'
import { ArrowRight, Github, WaypointsIcon } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'

import { Link } from '@/i18n/routing'

import { Badge } from '@/components/reui/badge'
import { AuroraText } from '@/components/ui/aurora-text'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export const LandngPage = () => {
  const t = useTranslations('Landing')
  const locale = useLocale()

  return (
    <article className="flex h-screen w-screen overflow-hidden">
      <section className="flex flex-1 items-center relative z-50">
        <div className="mx-auto max-w-xl px-8 lg:px-16 z-50">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-muted-foreground">
            FOCU
          </p>

          <h1 className="text-5xl font-extrabold tracking-tight lg:text-7xl z-50 mb-6">
            {t('headline')} <AuroraText>{t('repetition')}</AuroraText>
          </h1>

          <div className="flex items-center gap-4">
            <Separator className=" flex-1 bg-transparent bg-linear-to-r from-transparent via-primary/50 to-transparent" />
            <Badge
              variant="focus"
              className="h-6 shrink-0 rounded-full px-4 text-xs font-medium"
            >
              <WaypointsIcon />
            </Badge>
            <Separator className="flex-1 bg-transparent bg-linear-to-r from-transparent via-primary/50 to-transparent" />
          </div>

          <p className="mt-6 text-lg text-muted-foreground lg:text-xl z-50">
            {t('subheadline')}
          </p>

          <div className="mt-10 flex gap-4 z-50">
            <Link locale={locale} href="/my-skills">
              <Button size="lg">
                {t('getStarted')} <ArrowRight />
              </Button>
            </Link>

            <Button variant="outline" size="lg">
              <Github /> GitHub
            </Button>
          </div>
        </div>
      </section>

      <div className="pt-[7%] z-50">
        <Separator
          orientation="vertical"
          className="h-[86%] bg-transparent bg-linear-to-b from-transparent via-primary/50 to-transparent"
        />
      </div>

      <section className="flex-1 z-50">
        <ColorPanels
          width="100%"
          height="100%"
          colors={[
            '#ff9d00',
            '#fd4f30',
            '#809bff',
            '#6d2eff',
            '#333aff',
            '#f15cff',
            '#ffd557',
          ]}
          colorBack={'hsla(0, 0%, 0%, 0)'}
          density={4.12}
          angle1={0.66}
          angle2={0.06}
          length={1.34}
          edges
          blur={0.34}
          fadeIn={1}
          fadeOut={0.34}
          gradient={0.6}
          speed={4}
          scale={0.48}
          rotation={360}
          offsetX={0}
          className="flex-1 z-50"
        />
      </section>
    </article>
  )
}
