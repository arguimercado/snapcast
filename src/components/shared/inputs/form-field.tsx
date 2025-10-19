"use client"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Control, Controller, FieldValues, Path } from "react-hook-form"

interface FormFieldProps<T extends FieldValues> {
  control: Control<T>
  name: Path<T>
  type: "text" | "textarea" | "email" | "password"
  label: string
  placeholder?: string
}

const FormField = <T extends FieldValues>({ control, name, type, label, placeholder }: FormFieldProps<T>) => {
  return (
   <Controller
      control={control}
      name={name}
      render={({field, fieldState}) => {
         return (
            <Field data-invalid={fieldState.invalid}>
               <FieldLabel htmlFor={name}>
                  {label}
               </FieldLabel>
               {type === "textarea" ? (
                  <Textarea
                     placeholder={placeholder}
                     {...field}
                     aria-invalid={fieldState.invalid}
                  />
               ) : (
                  <Input
                     placeholder={placeholder}
                     {...field}
                     type={type}
                     aria-invalid={fieldState.invalid}
                  />
               )}
            </Field>
         )
      }}
   />
   
  )
}
export default FormField