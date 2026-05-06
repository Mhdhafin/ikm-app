import { Head, useForm } from "@inertiajs/react";
import AuthLayout from "../../layouts/auth-layout";
import { RegisterForm } from "../../components/registerForm";

export default function Register() {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        password: "",
        role: "",
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();
        post("/register"); // arahkan ke route register
    }

    return (
        <>
            <Head title="Register" />
            <RegisterForm
                data={data}
                errors={errors}
                processing={processing}
                onChange={(key, value) => setData(key, value)}
                onSubmit={submit}
            />
        </>
    );
}

Register.layout = (page: React.ReactNode) => <AuthLayout>{page}</AuthLayout>;
