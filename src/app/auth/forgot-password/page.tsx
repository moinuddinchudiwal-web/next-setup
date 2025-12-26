"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import React from "react";
import { Controller, useForm } from "react-hook-form";

type FormValues = {
  email: string;
};

const ForgotPassword = () => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Forgot Password Email:", data.email);
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
            Forgot Password ?
          </h2>
          <p className="text-gray-500 mb-8 text-center">
            Enter your email to reset your password.
          </p>

          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
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

            <div className="flex items-center justify-center gap-3">
              <Button type="submit">Submit</Button>
              <Button
                type="button"
                variant="secondary"
                onClick={() => router.push("./sign-in")}
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ForgotPassword;
