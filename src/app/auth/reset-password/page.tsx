"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

type FormValues = {
  password: string;
  confirmPassword: string;
  terms: boolean;
};

const ResetPassword = () => {
  const router = useRouter();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  const watchPassword = watch("password");

  const getPasswordStrength = () => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  const onSubmit = (data: FormValues) => {
    console.log("Reset Password Data:", data);
  };

  return (
    <React.Fragment>
      {/* LEFT SIDE */}
      <div className="hidden md:flex md:w-1/2 flex-col items-center justify-center p-10">
        <div className="h-72 w-72 bg-[url('/images/auth/signup.png')] bg-cover bg-center mb-8" />

        <h1 className="text-3xl font-bold mb-4 text-center">
          Fast, Efficient & Productive
        </h1>

        <p className="text-muted-foreground text-center max-w-xl leading-relaxed">
          In this kind of post,
          <span className="text-primary font-medium ml-1">the blogger</span> introduces a
          person they’ve interviewed and provides some background information about
          <span className="text-primary font-medium ml-1">the interviewee</span> and their
          work following this is a transcript of the interview.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex w-full md:w-3/5 items-center justify-end">
        <div className="w-full max-w-xl bg-white rounded-xl shadow-xl px-12 py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
            Setup New Password
          </h2>
          <p className="text-gray-500 mb-8 text-center">
            Have you already reset the password?
            <span
              className="text-primary font-medium ml-1 cursor-pointer"
              onClick={() => router.push("./sign-in")}
            >
              Sign in
            </span>
          </p>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="password"
              control={control}
              rules={{
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Minimum 8 characters",
                },
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Password"
                  required
                  error={errors.password?.message}
                  iconRight={passwordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
                  onIconRightClick={() => setPasswordVisible(!passwordVisible)}
                  onChange={(e) => {
                    field.onChange(e);
                    setPassword(e.target.value);
                  }}
                />
              )}
            />

            <div className="flex gap-2 mb-2">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`h-1 flex-1 rounded-full ${
                    getPasswordStrength() > i ? "bg-green-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <p className="text-xs text-gray-500">
              Use 8 or more characters with a mix of letters, numbers & symbols.
            </p>

            <Controller
              name="confirmPassword"
              control={control}
              rules={{
                required: "Please repeat your password",
                validate: (value) => value === watchPassword || "Passwords do not match",
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  type="password"
                  placeholder="Repeat Password"
                  required
                  error={errors.confirmPassword?.message}
                />
              )}
            />

            <Controller
              name="terms"
              control={control}
              render={({ field }) => (
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                  <label htmlFor="terms" className="text-gray-700 text-sm">
                    I Agree &
                    <span className="text-primary font-medium ml-1">
                      Terms and conditions.
                    </span>
                  </label>
                </div>
              )}
            />

            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ResetPassword;
