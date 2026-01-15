import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Admin Panel - Daylight Solar",
  description: "Admin dashboard for Daylight Solar",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      {children}
    </div>
  );
}
