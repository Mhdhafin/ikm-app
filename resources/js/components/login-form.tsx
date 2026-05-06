import { Eye, EyeOff } from "lucide-react";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { Field, FieldGroup, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import { useState } from "react";

type LoginFormProps = {
    data: {
        email: string;
        password: string;
    };
    errors: Record<string, string>;
    processing: boolean;
    onChange: (key: "email" | "password", value: string) => void;
    onSubmit: (e: React.FormEvent) => void;
    className?: string;
};

export function LoginForm({
    data,
    errors,
    processing,
    onChange,
    onSubmit,
    className,
    ...props
}: LoginFormProps & React.ComponentProps<"div">) {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className={cn("flex flex-col gap-6 w-1/3", className)} {...props}>
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
                                    onChange={(e) =>
                                        onChange("email", e.target.value)
                                    }
                                    required
                                />
                                {errors.email && (
                                    <p className="text-sm text-red-500">
                                        {errors.email}
                                    </p>
                                )}
                            </Field>

                            <Field>
                                <FieldLabel htmlFor="password">
                                    Password
                                </FieldLabel>
                                <div className="relative">
                                    <Input
                                        id="password"
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        value={data.password}
                                        onChange={(e) =>
                                            onChange("password", e.target.value)
                                        }
                                        required
                                        className="pr-10" // beri padding kanan agar tidak tertutup ikon
                                    />
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                        className="absolute cursor-pointer right-2 top-2 text-gray-500 hover:text-gray-700"
                                    >
                                        {showPassword ? (
                                            <EyeOff size={20} />
                                        ) : (
                                            <Eye size={20} />
                                        )}
                                    </button>
                                </div>
                                {errors.password && (
                                    <p className="text-sm text-red-500">
                                        {errors.password}
                                    </p>
                                )}
                            </Field>

                            <Field>
                                <Button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full"
                                >
                                    {processing ? "Logging in..." : "Login"}
                                </Button>

                                {/* <FieldDescription className="text-center">
                  
                </FieldDescription> */}
                            </Field>
                            <Field>
                                <p className="text-center text-sm text-gray-600 mt-4">
                                    Belum punya akun?{" "}
                                    <a
                                        href="/register"
                                        className="text-blue-600 font-semibold hover:underline"
                                    >
                                        Daftar di sini
                                    </a>
                                </p>
                            </Field>
                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
