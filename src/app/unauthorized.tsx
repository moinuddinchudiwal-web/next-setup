"use client";

import Link from "next/link";

export default function Unauthorized() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">401 - Unauthorized</h1>
      <p className="mb-6">You don’t have permission to access this page.</p>
      <Link href="/login" className="text-blue-600 underline">
        Go to Login
      </Link>
    </div>
  );
}
