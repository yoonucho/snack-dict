import { cva, type VariantProps } from "class-variance-authority"
import { ChevronDown } from "lucide-react"
import * as React from "react"

import { cn } from "@/shared/lib/utils"
import { Button } from "@/shared/ui/base/button"

import styles from "./button.module.css"

const snackButtonVariants = cva(
  styles.button,
  {
    variants: {
      variant: {
        primary: styles.primary,
        secondary: styles.secondary,
      },
      size: {
        sm: styles.sm,
        md: styles.md,
        lg: styles.lg,
        icon: styles.icon,
      },
      fullWidth: {
        true: styles.fullWidth,
        false: null,
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  }
)

type SnackButtonProps = Omit<
  React.ComponentProps<typeof Button>,
  "variant" | "size"
> &
  VariantProps<typeof snackButtonVariants>

type SnackMoreButtonProps = Omit<
  SnackButtonProps,
  "children" | "variant" | "size" | "fullWidth"
>

type SnackActionGroupProps = React.ComponentProps<"div"> & {
  mode: "single" | "dual"
  children: React.ReactNode
}

function SnackButton({
  className,
  variant = "primary",
  size = "md",
  fullWidth = false,
  ...props
}: SnackButtonProps) {
  return (
    <Button
      data-slot="snack-button"
      data-variant={variant}
      data-size={size}
      data-full-width={fullWidth ? "true" : undefined}
      variant="unstyled"
      size="unstyled"
      className={cn(snackButtonVariants({ variant, size, fullWidth }), className)}
      {...props}
    />
  )
}

function SnackActionGroup({
  className,
  mode,
  children,
  ...props
}: SnackActionGroupProps) {
  return (
    <div
      data-slot="snack-action-group"
      data-mode={mode}
      className={cn(styles.actionGroup, styles[mode], className)}
      {...props}
    >
      {children}
    </div>
  )
}

function SnackMoreButton({ className, ...props }: SnackMoreButtonProps) {
  return (
    <SnackButton
      data-slot="snack-more-button"
      variant="secondary"
      size="lg"
      className={cn(styles.moreButton, className)}
      {...props}
    >
      더보기
      <ChevronDown aria-hidden="true" />
    </SnackButton>
  )
}

export { SnackActionGroup, SnackButton, snackButtonVariants, SnackMoreButton }
