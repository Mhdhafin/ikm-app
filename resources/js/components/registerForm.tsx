import { useState } from "react";
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
import { Eye, EyeOff } from "lucide-react";

type RegisterFormProps = {
    data: {
        name: string;
        email: string;
        password: string;
        password_confirmation: string; // tambahkan ini
        role: string;
    };
    errors: Record<string, string>;
    processing: boolean;
    onChange: (
        key: "name" | "email" | "password" | "password_confirmation" | "role",
        value: string,
    ) => void;
    onSubmit: (e: React.FormEvent) => void;
    className?: string;
};

export function RegisterForm({
    data,
    errors,
    processing,
    onChange,
    onSubmit,
    className,
    ...props
}: RegisterFormProps & React.ComponentProps<"div">) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className={cn("flex flex-col gap-6 w-1/3", className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle>Daftar Akun Baru</CardTitle>
                    <CardDescription>
                        Masukkan data Anda untuk registrasi!
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <form onSubmit={onSubmit} className="space-y-4">
                        <FieldGroup>
                            {/* Name */}
                            <Field>
                                <FieldLabel htmlFor="name">
                                    Nama Lengkap
                                </FieldLabel>
                                <Input
                                    id="name"
                                    type="text"
                                    value={data.name}
                                    onChange={(e) =>
                                        onChange("name", e.target.value)
                                    }
                                    required
                                />
                                {errors.name && (
                                    <p className="text-sm text-red-500">
                                        {errors.name}
                                    </p>
                                )}
                            </Field>

                            {/* Email */}
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

                            {/* Password */}
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
                                        className="pr-10"
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

                            {/* Password Confirmation */}
                            <Field>
                                <FieldLabel htmlFor="password_confirmation">
                                    Konfirmasi Password
                                </FieldLabel>
                                <div className="relative">
                                    <Input
                                        id="password_confirmation"
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        value={data.password_confirmation}
                                        onChange={(e) =>
                                            onChange(
                                                "password_confirmation",
                                                e.target.value,
                                            )
                                        }
                                        required
                                    />
                                    {/* <button
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
                                    </button> */}
                                    {errors.password_confirmation && (
                                        <p className="text-sm text-red-500">
                                            {errors.password_confirmation}
                                        </p>
                                    )}
                                </div>
                            </Field>

                            {/* Role Selection */}
                            <Field>
                                <FieldLabel htmlFor="role">
                                    Pilih Role
                                </FieldLabel>
                                <select
                                    id="role"
                                    value={data.role}
                                    onChange={(e) =>
                                        onChange("role", e.target.value)
                                    }
                                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                                    required
                                >
                                    <option value="">-- Pilih Role --</option>
                                    <option value="ikm">IKM</option>
                                    <option value="mahasiswa">Mahasiswa</option>
                                    <option value="dosen">Dosen</option>
                                </select>
                                {errors.role && (
                                    <p className="text-sm text-red-500">
                                        {errors.role}
                                    </p>
                                )}
                            </Field>

                            {/* Submit Button */}
                            <Field>
                                <Button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full"
                                >
                                    {processing
                                        ? "Mendaftarkan..."
                                        : "Register"}
                                </Button>
                            </Field>
                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
