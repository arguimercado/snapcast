"use client"
import { Field, FieldLabel } from "@/components/ui/field"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"
import { Control, Controller, FieldValues, Path } from "react-hook-form"

interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

interface FormSelectProps<T extends FieldValues> {
  control: Control<T>
  name: Path<T>
  label: string
  placeholder?: string
  options: SelectOption[]
  disabled?: boolean
  className?: string
}

const FormSelect = <T extends FieldValues>({ 
  control, 
  name, 
  label, 
  placeholder = "Select an option...", 
  options,
  disabled = false,
  className 
}: FormSelectProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => {
        return (
          <Field data-invalid={fieldState.invalid} className={className}>
            <FieldLabel htmlFor={name}>
              {label}
            </FieldLabel>
            <Select
              value={field.value}
              onValueChange={field.onChange}
              disabled={disabled}
              name={field.name}
            >
              <SelectTrigger 
                className="w-full"
                aria-invalid={fieldState.invalid}
              >
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem 
                    key={option.value} 
                    value={option.value}
                    disabled={option.disabled}
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {fieldState.error && (
              <p className="text-sm text-red-600 dark:text-red-400 mt-1">
                {fieldState.error.message}
              </p>
            )}
          </Field>
        )
      }}
    />
  )
}

export default FormSelect