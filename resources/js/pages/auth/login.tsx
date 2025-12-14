import { LoginForm } from "@/components/login-form"
import AuthLayout from "@/layouts/auth-layout"
import { Head, useForm } from "@inertiajs/react"

export default function Login() {
  const { data, setData, post, processing, errors } = useForm({
    email: "",
    password: "",
  })

  function submit(e: React.FormEvent) {
    e.preventDefault() 
    post("/login")
  }

  return (
    <>
      <Head title="Login" />
      <LoginForm
        data={data}
        errors={errors}
        processing={processing}
        onChange={(key, value) => setData(key, value)}
        onSubmit={submit}
      />
    </>
  )
}

Login.layout = (page: React.ReactNode) => <AuthLayout>{page}</AuthLayout>
