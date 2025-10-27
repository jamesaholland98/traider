import "./globals.css";
import Navbar from "@/components/Navbar";
import React from "react";

export const metadata = {
  title: "Traider",
  description: "AI power trading assistant",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center px-4">
          { children }
        </main>
      </body>
    </html>
  );
}