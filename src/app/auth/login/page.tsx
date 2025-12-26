"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLogin } from "@/store/auth";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

type FormValues = {
  email: string;
  password: string;
};

const Login = () => {
  const router = useRouter();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const { login, data, error, isLoading } = useLogin();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    if (data) {
      await login(data);
    }
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
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Sign In</h2>
          <p className="text-gray-500 mb-8 text-center">Your Social Campaigns</p>

          <div className="flex flex-col md:flex-row gap-3 mb-8">
            <Button
              variant="outline"
              className="md:flex-1 flex items-center justify-center gap-2"
            >
              <img src="/icons/social/google-icon.svg" className="h-4 w-4" />
              Sign in with Google
            </Button>
            <Button
              variant="outline"
              className="md:flex-1 flex items-center justify-center gap-2"
            >
              <img src="/icons/social/apple-black.svg" className="h-4 w-4" />
              Sign in with Apple
            </Button>
          </div>

          <div className="flex items-center text-gray-300 mb-6">
            <span className="grow border-t"></span>
            <span className="mx-3 text-gray-400 text-sm">Or with email</span>
            <span className="grow border-t"></span>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email",
                },
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  type="email"
                  placeholder="Email"
                  required
                  error={errors.email?.message}
                />
              )}
            />

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
                  }}
                />
              )}
            />

            <div className="flex justify-end -mt-3">
              <p
                className="text-sm font-medium text-primary cursor-pointer"
                onClick={() => router.push("./forgot-password")}
              >
                Forgot password?
              </p>
            </div>

            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </form>

          <p className="text-sm text-gray-500 text-center mt-6">
            Not a Member yet?
            <span
              className="text-primary cursor-pointer font-medium ml-1"
              onClick={() => router.push("./sign-up")}
            >
              Sign up
            </span>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
