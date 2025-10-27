"use client";

export default function Navbar() {
    return (
        <nav className="w-full bg-white shadow-sm border-b border-gray-200">
            <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                <h1 className="text-xl font-semibold tracking-tight text-gray-900">
                    Traider
                </h1>
                <div className="space-x-4">
                    <a href="/" className="text-gray-700 hover:text-gray-900">Home</a>
                    <a href="/dashboard" className="text-gray-700 hover:text-gray-900">Dashboard</a>
                </div>
            </div>
        </nav>
    );
}