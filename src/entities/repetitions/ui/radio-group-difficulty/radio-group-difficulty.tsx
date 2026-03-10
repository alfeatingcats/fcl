import { CircleIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { RadioGroup as RadioGroupPrimitive } from 'radix-ui'
import type { FC } from 'react'
import type { ControllerRenderProps } from 'react-hook-form'

import { Label } from '@/components/ui/label'
import { RadioGroup } from '@/components/ui/radio-group'
import type { CompleteRepetitionInput } from '@/shared/api/schemas'
import { cn } from '@/shared/lib/utils'

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        'border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="relative flex items-center justify-center"
      >
        <CircleIcon className="fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

type RadioGroupDifficultyProps = ControllerRenderProps<
  CompleteRepetitionInput,
  'difficulty'
>

export const RadioGroupDifficulty: FC<RadioGroupDifficultyProps> = ({
  name,
  value,
  onBlur,
  onChange,
  disabled,
}) => {
  const t = useTranslations('Repetitions')
  return (
    <div>
      <div className="space-y-4">
        <RadioGroup
          className="flex gap-0 -space-x-px rounded-md shadow-xs"
          onValueChange={(val) => onChange(Number(val))}
          value={value?.toString() ?? ''}
          name={name}
          onBlur={onBlur}
          disabled={disabled}
        >
          {[1, 2, 3, 4, 5].map((number) => (
            <Label
              key={number}
              id={number.toString()}
              className={cn(
                'border-input has-focus-visible:border-ring has-focus-visible:ring-ring/50',
                'has-data-[state=checked]:border-primary/50 relative flex size-9',
                'flex-1 cursor-pointer flex-col items-center justify-center gap-3 border',
                'text-center text-sm transition-[color,box-shadow] outline-none first:rounded-s-md',
                'last:rounded-e-md has-focus-visible:ring-[3px] has-data-disabled:cursor-not-allowed',
                'has-data-disabled:opacity-50 has-data-[state=checked]:z-10',
              )}
            >
              <RadioGroupItem
                id={number.toString()}
                value={number.toString()}
                className="sr-only after:absolute after:inset-0"
              />
              {number}
            </Label>
          ))}
        </RadioGroup>
      </div>
      <div className="text-muted-foreground mt-2 flex justify-between text-xs">
        <p>{t('veryEasy')}</p>
        <p>{t('veryDifficult')}</p>
      </div>
    </div>
  )
}
