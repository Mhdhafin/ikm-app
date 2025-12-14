import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Link } from "@inertiajs/react"

type LoginFormProps = {
  data: {
    email: string
    password: string
  }
  errors: Record<string, string>
  processing: boolean
  onChange: (key: "email" | "password", value: string) => void
  onSubmit: (e: React.FormEvent) => void
  className?: string
}

export function LoginForm({
  data,
  errors,
  processing,
  onChange,
  onSubmit,
  className,
  ...props
}: LoginFormProps & React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login ke akun anda</CardTitle>
          <CardDescription>
            Masukkan email dan password anda untuk login!
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={onSubmit} className="space-y-4">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  value={data.email}
                  onChange={(e) => onChange("email", e.target.value)}
                  required
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}
              </Field>

              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input
                  id="password"
                  type="password"
                  value={data.password}
                  onChange={(e) => onChange("password", e.target.value)}
                  required
                />
                {errors.password && (
                  <p className="text-sm text-red-500">{errors.password}</p>
                )}
              </Field>

              <Field>
                <Button type="submit" disabled={processing} className="w-full">
                  {processing ? "Logging in..." : "Login"}
                </Button>

                {/* <FieldDescription className="text-center">
                  
                </FieldDescription> */}
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
