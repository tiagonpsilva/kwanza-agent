import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface FormFieldProps {
  label: string
  id: string
  error?: string
  children: ReactNode
  required?: boolean
  hint?: string
  className?: string
}

export function FormField({ 
  label, 
  id, 
  error, 
  children, 
  required, 
  hint, 
  className 
}: FormFieldProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <Label htmlFor={id} className="text-sm font-medium">
        {label}
        {required && <span className="text-destructive ml-1">*</span>}
      </Label>
      {children}
      {hint && !error && (
        <p className="text-xs text-muted-foreground">{hint}</p>
      )}
      {error && (
        <p className="text-xs text-destructive">{error}</p>
      )}
    </div>
  )
}

// Input Field específico
interface InputFieldProps {
  label: string
  id: string
  type?: string
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  onKeyDown?: (e: React.KeyboardEvent) => void
  error?: string
  required?: boolean
  hint?: string
  className?: string
}

export function InputField({
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  onKeyDown,
  error,
  required,
  hint,
  className
}: InputFieldProps) {
  return (
    <FormField
      label={label}
      id={id}
      error={error}
      required={required}
      hint={hint}
      className={className}
    >
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        onKeyDown={onKeyDown}
        className={error ? "border-destructive focus-visible:ring-destructive" : ""}
      />
    </FormField>
  )
}

// Textarea Field específico
interface TextareaFieldProps extends Omit<InputFieldProps, "type"> {
  rows?: number
}

export function TextareaField({
  label,
  id,
  placeholder,
  value,
  onChange,
  error,
  required,
  hint,
  rows = 3,
  className
}: TextareaFieldProps) {
  return (
    <FormField
      label={label}
      id={id}
      error={error}
      required={required}
      hint={hint}
      className={className}
    >
      <Textarea
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        rows={rows}
        className={error ? "border-destructive focus-visible:ring-destructive" : ""}
      />
    </FormField>
  )
}