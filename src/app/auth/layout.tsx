import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50 p-6 md:p-10 items-center justify-center">
      {children}
    </div>
  );
}
